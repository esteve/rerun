use re_log_types::{EntityPathHash, TimePoint, TimeRange};
use re_types_core::SizeBytes;

use crate::{
    store::{IndexedBucketInner, PersistentIndexedTableInner},
    ClusterCellCache, IndexedBucket, IndexedTable, MetadataRegistry, PersistentIndexedTable,
    UnaryDataStore,
};

// ---

// NOTE: Not implemented as a StoreSubscriber because it also measures implementation details of the
// store (buckets etc), while StoreEvents work at a data-model level.

#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, PartialOrd)]
pub struct DataStoreRowStats {
    pub num_rows: u64,
    pub num_bytes: u64,
}

impl std::ops::Sub for DataStoreRowStats {
    type Output = Self;

    fn sub(self, rhs: Self) -> Self::Output {
        Self {
            num_rows: self.num_rows - rhs.num_rows,
            num_bytes: self.num_bytes - rhs.num_bytes,
        }
    }
}

impl std::ops::Add for DataStoreRowStats {
    type Output = Self;

    fn add(self, rhs: Self) -> Self::Output {
        Self {
            num_rows: self.num_rows + rhs.num_rows,
            num_bytes: self.num_bytes + rhs.num_bytes,
        }
    }
}

#[derive(Default, Debug, Clone, PartialEq, Eq, PartialOrd)]
pub struct DataStoreStats {
    pub type_registry: DataStoreRowStats,
    pub metadata_registry: DataStoreRowStats,
    pub autogenerated: DataStoreRowStats,
    pub timeless: DataStoreRowStats,
    pub temporal: DataStoreRowStats,
    pub temporal_buckets: u64,
    pub total: DataStoreRowStats,
}

impl std::ops::Sub for DataStoreStats {
    type Output = Self;

    fn sub(self, rhs: Self) -> Self::Output {
        Self {
            type_registry: self.type_registry - rhs.type_registry,
            metadata_registry: self.metadata_registry - rhs.metadata_registry,
            autogenerated: self.autogenerated - rhs.autogenerated,
            timeless: self.timeless - rhs.timeless,
            temporal: self.temporal - rhs.temporal,
            temporal_buckets: self.temporal_buckets - rhs.temporal_buckets,
            total: self.total - rhs.total,
        }
    }
}

impl std::ops::Add for DataStoreStats {
    type Output = Self;

    fn add(self, rhs: Self) -> Self::Output {
        Self {
            type_registry: self.type_registry + rhs.type_registry,
            metadata_registry: self.metadata_registry + rhs.metadata_registry,
            autogenerated: self.autogenerated + rhs.autogenerated,
            timeless: self.timeless + rhs.timeless,
            temporal: self.temporal + rhs.temporal,
            temporal_buckets: self.temporal_buckets + rhs.temporal_buckets,
            total: self.total + rhs.total,
        }
    }
}

impl DataStoreStats {
    pub fn from_store(store: &UnaryDataStore) -> Self {
        re_tracing::profile_function!();

        let type_registry = {
            re_tracing::profile_scope!("type_registry");
            DataStoreRowStats {
                num_rows: store.type_registry.len() as _,
                num_bytes: store.type_registry.total_size_bytes(),
            }
        };

        let metadata_registry = {
            re_tracing::profile_scope!("metadata_registry");
            DataStoreRowStats {
                num_rows: store.metadata_registry.len() as _,
                num_bytes: store.metadata_registry.total_size_bytes(),
            }
        };

        let autogenerated = {
            re_tracing::profile_scope!("autogenerated");
            DataStoreRowStats {
                num_rows: store.cluster_cell_cache.len() as _,
                num_bytes: store.cluster_cell_cache.total_size_bytes(),
            }
        };

        let timeless = {
            re_tracing::profile_scope!("timeless");
            DataStoreRowStats {
                num_rows: store.num_timeless_rows(),
                num_bytes: store.timeless_size_bytes(),
            }
        };

        let (temporal, temporal_buckets) = {
            re_tracing::profile_scope!("temporal");
            (
                DataStoreRowStats {
                    num_rows: store.num_temporal_rows(),
                    num_bytes: store.temporal_size_bytes(),
                },
                store.num_temporal_buckets(),
            )
        };

        let total = DataStoreRowStats {
            num_rows: timeless.num_rows + temporal.num_rows,
            num_bytes: type_registry.num_bytes
                + metadata_registry.num_bytes
                + autogenerated.num_bytes
                + timeless.num_bytes
                + temporal.num_bytes,
        };

        Self {
            type_registry,
            metadata_registry,
            autogenerated,
            timeless,
            temporal,
            temporal_buckets,
            total,
        }
    }

    pub fn total_rows_and_bytes_with_timeless(&self, include_timeless: bool) -> (u64, f64) {
        let mut num_rows = self.temporal.num_rows + self.metadata_registry.num_rows;
        let mut num_bytes = (self.temporal.num_bytes + self.metadata_registry.num_bytes) as f64;

        if include_timeless {
            num_rows += self.timeless.num_rows;
            num_bytes += self.timeless.num_bytes as f64;
        }

        (num_rows, num_bytes)
    }
}

// --- Data store ---

impl SizeBytes for MetadataRegistry<(TimePoint, EntityPathHash)> {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.heap_size_bytes
    }
}

impl SizeBytes for ClusterCellCache {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.0.heap_size_bytes()
    }
}

impl UnaryDataStore {
    #[inline]
    pub fn stats(&self) -> DataStoreStats {
        DataStoreStats::from_store(self)
    }

    /// Returns the number of timeless index rows stored across this entire store, i.e. the sum of
    /// the number of rows across all of its timeless indexed tables.
    #[inline]
    pub fn num_timeless_rows(&self) -> u64 {
        re_tracing::profile_function!();
        self.timeless_tables
            .values()
            .map(|table| table.inner.read().num_rows())
            .sum()
    }

    /// Returns the size of the timeless index data stored across this entire store, i.e. the sum
    /// of the size of the data stored across all of its timeless indexed tables, in bytes.
    #[inline]
    pub fn timeless_size_bytes(&self) -> u64 {
        re_tracing::profile_function!();
        self.timeless_tables
            .values()
            .map(|table| table.total_size_bytes())
            .sum()
    }

    /// Returns the number of temporal index rows stored across this entire store, i.e. the sum of
    /// the number of rows across all of its temporal indexed tables.
    #[inline]
    pub fn num_temporal_rows(&self) -> u64 {
        re_tracing::profile_function!();
        self.tables.values().map(|table| table.num_rows()).sum()
    }

    /// Returns the size of the temporal index data stored across this entire store, i.e. the sum
    /// of the size of the data stored across all of its temporal indexed tables, in bytes.
    #[inline]
    pub fn temporal_size_bytes(&self) -> u64 {
        re_tracing::profile_function!();
        self.tables
            .values()
            .map(|table| table.total_size_bytes())
            .sum()
    }

    /// Returns the number of temporal indexed buckets stored across this entire store.
    #[inline]
    pub fn num_temporal_buckets(&self) -> u64 {
        re_tracing::profile_function!();
        self.tables.values().map(|table| table.num_buckets()).sum()
    }

    /// Stats for a specific entity path on a specific timeline
    pub fn entity_stats(
        &self,
        timeline: re_log_types::Timeline,
        entity_path_hash: re_log_types::EntityPathHash,
    ) -> EntityStats {
        let mut entity_stats = self.tables.get(&(entity_path_hash, timeline)).map_or(
            EntityStats::default(),
            |table| EntityStats {
                num_rows: table.buckets_num_rows,
                size_bytes: table.buckets_size_bytes,
                time_range: table.time_range(),
                timeless_rows: 0,
                timeless_size_bytes: 0,
            },
        );

        if let Some(timeless) = self.timeless_tables.get(&entity_path_hash) {
            entity_stats.timeless_rows = timeless.inner.read().num_rows();
            entity_stats.timeless_size_bytes = timeless.total_size_bytes();
        }

        entity_stats
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct EntityStats {
    /// Number of rows in the table (excluding timeless).
    pub num_rows: u64,

    /// Approximate number of bytes used (excluding timeless).
    pub size_bytes: u64,

    /// The time covered by the entity (excluding timeless)
    pub time_range: re_log_types::TimeRange,

    /// Number of timeless rows
    pub timeless_rows: u64,

    /// Number of timeless bytes
    pub timeless_size_bytes: u64,
}

impl Default for EntityStats {
    fn default() -> Self {
        Self {
            num_rows: 0,
            size_bytes: 0,
            time_range: re_log_types::TimeRange::EMPTY,
            timeless_rows: 0,
            timeless_size_bytes: 0,
        }
    }
}

// --- Temporal ---

impl IndexedTable {
    /// Returns the number of rows stored across this entire table, i.e. the sum of the number
    /// of rows stored across all of its buckets.
    #[inline]
    pub fn num_rows(&self) -> u64 {
        self.buckets_num_rows
    }

    /// Returns the number of rows stored across this entire table, i.e. the sum of the number
    /// of rows stored across all of its buckets.
    ///
    /// Recomputed from scratch, for sanity checking.
    #[inline]
    pub(crate) fn num_rows_uncached(&self) -> u64 {
        re_tracing::profile_function!();
        self.buckets.values().map(|bucket| bucket.num_rows()).sum()
    }

    #[inline]
    pub(crate) fn size_bytes_uncached(&self) -> u64 {
        re_tracing::profile_function!();
        self.stack_size_bytes()
            + self
                .buckets
                .values()
                .map(|bucket| bucket.total_size_bytes())
                .sum::<u64>()
    }

    /// Returns the number of buckets stored across this entire table.
    #[inline]
    pub fn num_buckets(&self) -> u64 {
        self.buckets.len() as _
    }

    /// The time range covered by this table.
    pub fn time_range(&self) -> TimeRange {
        if let (Some((_, first)), Some((_, last))) = (
            self.buckets.first_key_value(),
            self.buckets.last_key_value(),
        ) {
            first
                .inner
                .read()
                .time_range
                .union(last.inner.read().time_range)
        } else {
            TimeRange::EMPTY
        }
    }
}

impl SizeBytes for IndexedTable {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.buckets_size_bytes
    }
}

impl IndexedBucket {
    /// Returns the number of rows stored across this bucket.
    #[inline]
    pub fn num_rows(&self) -> u64 {
        self.inner.read().col_time.len() as u64
    }
}

impl SizeBytes for IndexedBucket {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        self.inner.read().size_bytes
    }
}

impl IndexedBucketInner {
    /// Computes and caches the size of both the control & component data stored in this bucket,
    /// stack and heap included, in bytes.
    ///
    /// This is a best-effort approximation, adequate for most purposes (stats,
    /// triggering GCs, …).
    #[inline]
    pub fn compute_size_bytes(&mut self) -> u64 {
        re_tracing::profile_function!();

        let Self {
            is_sorted,
            time_range,
            col_time,
            col_insert_id,
            col_row_id,
            max_row_id,
            col_num_instances,
            columns,
            size_bytes,
        } = self;

        *size_bytes = is_sorted.total_size_bytes()
            + time_range.total_size_bytes()
            + col_time.total_size_bytes()
            + col_insert_id.total_size_bytes()
            + col_row_id.total_size_bytes()
            + max_row_id.total_size_bytes()
            + col_num_instances.total_size_bytes()
            + columns.total_size_bytes()
            + size_bytes.total_size_bytes();

        *size_bytes
    }
}

// --- Timeless ---

impl SizeBytes for PersistentIndexedTable {
    #[inline]
    fn heap_size_bytes(&self) -> u64 {
        re_tracing::profile_function!();

        let Self {
            ent_path,
            cluster_key,
            inner,
        } = self;
        let PersistentIndexedTableInner {
            col_insert_id,
            col_row_id,
            col_num_instances,
            columns,
            is_sorted,
        } = &*inner.read();

        ent_path.total_size_bytes()
            + cluster_key.total_size_bytes()
            + col_insert_id.total_size_bytes()
            + col_row_id.total_size_bytes()
            + col_num_instances.total_size_bytes()
            + columns.total_size_bytes()
            + is_sorted.total_size_bytes()
    }
}
