// Mock data representing a subset of your database hierarchy
// This creates a manageable demo version while maintaining the structure

export const mockNodes = [
   {
      id: "root",
      type: "category",
      position: { x: 500, y: 0 },
      data: {
         type: "category",
         name: "Database Management Systems",
         description:
            "The complete ecosystem of data storage and retrieval systems that power modern applications.",
         timeframe: "1970s - Present",
      },
   },

   /* =========================
     MAIN CATEGORIES (Y=200)
     ========================= */
   {
      id: "sql-category",
      type: "category",
      position: { x: 150, y: 200 },
      data: {
         type: "category",
         name: "SQL/Relational Databases",
         description:
            "Structured, schema-based systems using SQL and ACID transactions.",
         timeframe: "1970s - Present",
      },
   },
   {
      id: "nosql-category",
      type: "category",
      position: { x: 500, y: 200 },
      data: {
         type: "category",
         name: "NoSQL Revolution",
         description:
            "Non-relational systems designed for scale, flexibility, and specialized models.",
         timeframe: "2000s - Present",
      },
   },
   {
      id: "specialized-category",
      type: "category",
      position: { x: 850, y: 200 },
      data: {
         type: "category",
         name: "Specialized Systems",
         description:
            "Purpose-built engines for analytics, time-series, vectors, search, streams, ledgers, etc.",
         timeframe: "2010s - Present",
      },
   },

   /* =========================
     SQL SUBCATEGORIES (Y=320)
     ========================= */
   {
      id: "rdbms-oltp",
      type: "category",
      position: { x: 60, y: 320 },
      data: {
         type: "category",
         name: "Traditional RDBMS (OLTP)",
         description: "General-purpose transactional relational databases.",
         timeframe: "1970s+",
         // parent: "sql-category",
      },
   },
   {
      id: "cloud-managed-relational",
      type: "category",
      position: { x: 150, y: 320 },
      data: {
         type: "category",
         name: "Cloud-Managed Relational",
         description: "Managed SQL services with automated ops and elasticity.",
         timeframe: "2010s+",
         // parent: "sql-category",
      },
   },
   {
      id: "distributed-sql",
      type: "category",
      position: { x: 240, y: 320 },
      data: {
         type: "category",
         name: "Distributed SQL (NewSQL)",
         description:
            "Horizontally scalable, strongly consistent SQL across nodes/regions.",
         timeframe: "2010s+",
         // parent: "sql-category",
      },
   },
   {
      id: "data-warehouses",
      type: "category",
      position: { x: 330, y: 320 },
      data: {
         type: "category",
         name: "Data Warehouses (OLAP)",
         description: "Analytical columnar warehouses for BI at scale.",
         timeframe: "1990s+",
         // parent: "sql-category",
      },
   },

   /* =========================
     NoSQL SUBCATEGORIES (Y=320)
     ========================= */
   {
      id: "kv-stores",
      type: "category",
      position: { x: 430, y: 320 },
      data: {
         type: "category",
         name: "Key-Value Stores",
         description:
            "Fast access via keys to opaque values; often in-memory or log-structured.",
         timeframe: "2000s+",
         // parent: "nosql-category",
      },
   },
   {
      id: "document-stores",
      type: "category",
      position: { x: 520, y: 320 },
      data: {
         type: "category",
         name: "Document Stores",
         description:
            "JSON/JSON-like flexible schemas and rich query/indexing.",
         timeframe: "2000s+",
         // parent: "nosql-category",
      },
   },
   {
      id: "wide-column-stores",
      type: "category",
      position: { x: 610, y: 320 },
      data: {
         type: "category",
         name: "Wide-Column Stores",
         description:
            "Column-family model for high write throughput and scale.",
         timeframe: "2000s+",
         // parent: "nosql-category",
      },
   },
   {
      id: "graph-databases",
      type: "category",
      position: { x: 700, y: 320 },
      data: {
         type: "category",
         name: "Graph Databases",
         description: "Nodes/edges properties to model highly connected data.",
         timeframe: "2000s+",
         // parent: "nosql-category",
      },
   },
   {
      id: "multi-model",
      type: "category",
      position: { x: 790, y: 320 },
      data: {
         type: "category",
         name: "Multi-Model",
         description:
            "Single engine supporting multiple models (e.g., doc+graph+KV).",
         timeframe: "2010s+",
         // parent: "nosql-category",
      },
   },

   /* =========================
     Specialized SUBCATEGORIES (Y=320)
     ========================= */
   {
      id: "time-series",
      type: "category",
      position: { x: 820, y: 320 },
      data: {
         type: "category",
         name: "Time-Series Databases",
         description:
            "Optimized for time-stamped metrics/events and downsampling.",
         timeframe: "2010s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "search-engines",
      type: "category",
      position: { x: 880, y: 320 },
      data: {
         type: "category",
         name: "Search Engines",
         description:
            "Full-text indexing, relevance scoring, and aggregations.",
         timeframe: "2000s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "vector-databases",
      type: "category",
      position: { x: 940, y: 320 },
      data: {
         type: "category",
         name: "Vector Databases (AI/Embeddings)",
         description:
            "Store/index high-dimensional embeddings for similarity search.",
         timeframe: "2020s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "realtime-olap",
      type: "category",
      position: { x: 1000, y: 320 },
      data: {
         type: "category",
         name: "Real-Time Analytics OLAP",
         description:
            "Sub-second analytics over fresh streaming + historical data.",
         timeframe: "2010s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "streams-eventstores",
      type: "category",
      position: { x: 1060, y: 320 },
      data: {
         type: "category",
         name: "Streams & Event Stores",
         description:
            "Append-only logs and streaming SQL/stateful materializations.",
         timeframe: "2010s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "ledger-databases",
      type: "category",
      position: { x: 1120, y: 320 },
      data: {
         type: "category",
         name: "Ledger Databases",
         description:
            "Cryptographically verifiable histories for audit and compliance.",
         timeframe: "2019+",
         // parent: "specialized-category",
      },
   },
   {
      id: "embedded-inprocess",
      type: "category",
      position: { x: 1180, y: 320 },
      data: {
         type: "category",
         name: "Embedded / In-Process",
         description:
            "Zero-ops engines embedded in apps; great for edge/desktop.",
         timeframe: "2000s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "rdf-triplestores",
      type: "category",
      position: { x: 1240, y: 320 },
      data: {
         type: "category",
         name: "RDF / Triple Stores",
         description: "Semantic web graph stores using RDF/SPARQL.",
         timeframe: "2000s+",
         // parent: "specialized-category",
      },
   },
   {
      id: "lakehouse-sql-on-objects",
      type: "category",
      position: { x: 1300, y: 320 },
      data: {
         type: "category",
         name: "Lakehouse & SQL-on-Object-Store",
         description:
            "Table formats + query engines over data lakes; warehouse-like ACID.",
         timeframe: "2020s+",
         // parent: "specialized-category",
      },
   },

   /* =========================
     RDBMS (OLTP) ENGINES (Y=460)
     ========================= */
   {
      id: "postgresql",
      type: "database",
      position: { x: 20, y: 460 },
      data: {
         type: "database",
         name: "PostgreSQL",
         year: 1986,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Advanced open-source RDBMS with rich SQL, extensibility, and strong ACID.",
         features: [
            "ACID transactions",
            "Extensible types/extensions",
            "JSONB & GIN indexes",
            "Logical replication",
         ],
         useCases: [
            "General OLTP",
            "Analytics (with extensions)",
            "GIS (PostGIS)",
         ],
         officialDocs: "https://www.postgresql.org/docs/",
      },
   },
   {
      id: "mysql",
      type: "database",
      position: { x: 70, y: 460 },
      data: {
         type: "database",
         name: "MySQL",
         year: 1995,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Popular open-source RDBMS; InnoDB engine with transactions and foreign keys.",
         features: [
            "ACID with InnoDB",
            "Replication",
            "Partitioning",
            "Stored procedures",
         ],
         useCases: ["Web apps", "E-commerce", "CMS platforms"],
         officialDocs: "https://dev.mysql.com/doc/",
      },
   },
   {
      id: "mariadb",
      type: "database",
      position: { x: 120, y: 460 },
      data: {
         type: "database",
         name: "MariaDB",
         year: 2009,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Community-driven MySQL fork with additional engines and features.",
         features: ["ACID (InnoDB/XtraDB)", "ColumnStore", "Galera clustering"],
         useCases: ["MySQL-compatible apps", "OLTP", "HTAP (with ColumnStore)"],
         officialDocs: "https://mariadb.com/kb/en/documentation/",
      },
   },
   {
      id: "sqlite",
      type: "database",
      position: { x: 170, y: 460 },
      data: {
         type: "database",
         name: "SQLite",
         year: 2000,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Serverless, embedded SQL database stored in a single file.",
         features: ["Zero config", "Transactional", "Small footprint"],
         useCases: ["Mobile/embedded", "Desktop apps", "Local prototyping"],
         officialDocs: "https://sqlite.org/docs.html",
      },
   },
   {
      id: "sql-server",
      type: "database",
      position: { x: 220, y: 460 },
      data: {
         type: "database",
         name: "Microsoft SQL Server",
         year: 1989,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Enterprise RDBMS with T-SQL, strong tooling, and BI ecosystem.",
         features: [
            "ACID",
            "Always On availability",
            "Columnstore indexes",
            "Integration with Azure",
         ],
         useCases: ["Enterprise OLTP", "Data marts", "Reporting/BI"],
         officialDocs: "https://learn.microsoft.com/sql/",
      },
   },
   {
      id: "oracle-db",
      type: "database",
      position: { x: 270, y: 460 },
      data: {
         type: "database",
         name: "Oracle Database",
         year: 1979,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Feature-rich enterprise RDBMS with strong performance and tooling.",
         features: [
            "ACID",
            "RAC clustering",
            "Partitioning",
            "Advanced security",
         ],
         useCases: ["Mission-critical OLTP", "ERP/CRM", "Data warehousing"],
         officialDocs: "https://docs.oracle.com/en/database/",
      },
   },
   {
      id: "ibm-db2",
      type: "database",
      position: { x: 320, y: 460 },
      data: {
         type: "database",
         name: "IBM Db2",
         year: 1983,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "Enterprise RDBMS for mainframes and distributed systems.",
         features: ["ACID", "BLU Acceleration (columnar)", "High availability"],
         useCases: ["Financial systems", "Mainframe apps", "Data warehousing"],
         officialDocs: "https://www.ibm.com/docs/en/db2",
      },
   },
   {
      id: "sap-hana",
      type: "database",
      position: { x: 370, y: 460 },
      data: {
         type: "database",
         name: "SAP HANA",
         year: 2010,
         category: "SQL/Relational",
         // subcategory: "Traditional RDBMS (OLTP)",
         description:
            "In-memory columnar RDBMS for real-time transactions and analytics.",
         features: ["In-memory column store", "HTAP", "Advanced analytics"],
         useCases: ["ERP (SAP)", "Real-time analytics", "HTAP"],
         officialDocs: "https://help.sap.com/docs/SAP_HANA_PLATFORM",
      },
   },

   /* =========================
     CLOUD-MANAGED RELATIONAL
     ========================= */
   {
      id: "amazon-aurora",
      type: "database",
      position: { x: 150, y: 460 },
      data: {
         type: "database",
         name: "Amazon Aurora (MySQL/PostgreSQL compatible)",
         year: 2014,
         category: "SQL/Relational",
         // subcategory: "Cloud-Managed Relational",
         description:
            "Managed relational service with decoupled, replicated storage.",
         features: [
            "Auto-scaling storage",
            "High availability",
            "Serverless options",
         ],
         useCases: ["Cloud-native OLTP", "SaaS backends"],
         officialDocs: "https://docs.aws.amazon.com/aurora/",
      },
   },
   {
      id: "cloud-sql",
      type: "database",
      position: { x: 150, y: 500 },
      data: {
         type: "database",
         name: "Google Cloud SQL",
         year: 2014,
         category: "SQL/Relational",
         // subcategory: "Cloud-Managed Relational",
         description: "Managed MySQL/PostgreSQL/SQL Server instances on GCP.",
         features: [
            "Automated backups",
            "High availability",
            "Maintenance windows",
         ],
         useCases: ["Managed OLTP on GCP", "Lift-and-shift"],
         officialDocs: "https://cloud.google.com/sql/docs",
      },
   },
   {
      id: "alloydb",
      type: "database",
      position: { x: 150, y: 540 },
      data: {
         type: "database",
         name: "Google AlloyDB (Postgres-compatible)",
         year: 2022,
         category: "SQL/Relational",
         // subcategory: "Cloud-Managed Relational",
         description:
            "Performance-focused Postgres-compatible managed service.",
         features: [
            "Vector indexing (pgvector integration)",
            "Separation of storage/compute",
         ],
         useCases: ["High-performance OLTP", "AI apps on Postgres"],
         officialDocs: "https://cloud.google.com/alloydb/docs",
      },
   },
   {
      id: "azure-sql-db",
      type: "database",
      position: { x: 150, y: 580 },
      data: {
         type: "database",
         name: "Azure SQL Database",
         year: 2010,
         category: "SQL/Relational",
         // subcategory: "Cloud-Managed Relational",
         description: "Managed SQL Server-compatible service on Azure.",
         features: ["Serverless", "Hyperscale", "Geo-replication"],
         useCases: ["Cloud OLTP", "SaaS on Azure"],
         officialDocs: "https://learn.microsoft.com/azure/azure-sql/",
      },
   },

   /* =========================
     DISTRIBUTED SQL (NewSQL)
     ========================= */
   {
      id: "cockroachdb",
      type: "database",
      position: { x: 240, y: 460 },
      data: {
         type: "database",
         name: "CockroachDB",
         year: 2015,
         category: "SQL/Relational",
         // subcategory: "Distributed SQL (NewSQL)",
         description:
            "Geo-distributed, strongly consistent SQL with automatic sharding/replication.",
         features: [
            "Postgres-compatible wire protocol",
            "Multi-region tables",
            "Online scale-out",
         ],
         useCases: ["Global OLTP", "Multi-region SaaS"],
         officialDocs: "https://www.cockroachlabs.com/docs/",
      },
   },
   {
      id: "yugabytedb",
      type: "database",
      position: { x: 240, y: 500 },
      data: {
         type: "database",
         name: "YugabyteDB",
         year: 2018,
         category: "SQL/Relational",
         // subcategory: "Distributed SQL (NewSQL)",
         description:
            "Open-source distributed SQL with Postgres-compatible YSQL.",
         features: [
            "Sharding & replication",
            "Linear scale-out",
            "Global tables",
         ],
         useCases: ["Low-latency global apps", "Transactional microservices"],
         officialDocs: "https://docs.yugabyte.com/",
      },
   },
   {
      id: "tidb",
      type: "database",
      position: { x: 240, y: 540 },
      data: {
         type: "database",
         name: "TiDB",
         year: 2016,
         category: "SQL/Relational",
         // subcategory: "Distributed SQL (NewSQL)",
         description:
            "MySQL-compatible distributed SQL with separation of storage/compute.",
         features: [
            "Automatic sharding",
            "HTAP with TiFlash",
            "MySQL protocol",
         ],
         useCases: ["Horizontal OLTP", "HTAP workloads"],
         officialDocs: "https://docs.pingcap.com/tidb/stable",
      },
   },
   {
      id: "cloud-spanner",
      type: "database",
      position: { x: 240, y: 580 },
      data: {
         type: "database",
         name: "Google Cloud Spanner",
         year: 2017,
         category: "SQL/Relational",
         // subcategory: "Distributed SQL (NewSQL)",
         description:
            "Globally distributed, strongly consistent relational service.",
         features: [
            "TrueTime-based transactions",
            "Horizontal scale",
            "High availability",
         ],
         useCases: [
            "Global financial/retail",
            "Multi-region transactional apps",
         ],
         officialDocs: "https://cloud.google.com/spanner/docs",
      },
   },

   /* =========================
     DATA WAREHOUSES (OLAP)
     ========================= */
   {
      id: "snowflake",
      type: "database",
      position: { x: 330, y: 460 },
      data: {
         type: "database",
         name: "Snowflake",
         year: 2014,
         category: "SQL/Relational",
         // subcategory: "Data Warehouses (OLAP)",
         description:
            "Cloud-native data warehouse with separated storage/compute.",
         features: [
            "Elastic compute clusters",
            "Secure data sharing",
            "Semi-structured data",
         ],
         useCases: ["Enterprise BI", "ELT pipelines", "Data sharing"],
         officialDocs: "https://docs.snowflake.com/",
      },
   },
   {
      id: "bigquery",
      type: "database",
      position: { x: 330, y: 500 },
      data: {
         type: "database",
         name: "Google BigQuery",
         year: 2011,
         category: "SQL/Relational",
         // subcategory: "Data Warehouses (OLAP)",
         description:
            "Serverless MPP warehouse with columnar storage and Dremel execution.",
         features: [
            "Separation of storage/compute",
            "BQML & GIS",
            "Federated queries",
         ],
         useCases: ["Ad/marketing analytics", "Log analytics", "BI at scale"],
         officialDocs: "https://cloud.google.com/bigquery/docs",
      },
   },
   {
      id: "redshift",
      type: "database",
      position: { x: 330, y: 540 },
      data: {
         type: "database",
         name: "Amazon Redshift",
         year: 2012,
         category: "SQL/Relational",
         // subcategory: "Data Warehouses (OLAP)",
         description:
            "Managed MPP warehouse; columnar storage with Spectrum over S3.",
         features: [
            "Columnar MPP",
            "RA3 managed storage",
            "Spectrum lake queries",
         ],
         useCases: ["Enterprise BI", "Batch analytics"],
         officialDocs: "https://docs.aws.amazon.com/redshift/",
      },
   },
   {
      id: "azure-synapse",
      type: "database",
      position: { x: 330, y: 580 },
      data: {
         type: "database",
         name: "Azure Synapse Analytics",
         year: 2019,
         category: "SQL/Relational",
         // subcategory: "Data Warehouses (OLAP)",
         description: "Unified analytics with SQL pools, Spark, and pipelines.",
         features: ["MPP SQL", "Serverless SQL", "Spark integration"],
         useCases: ["BI on Azure", "ELT + ML"],
         officialDocs: "https://learn.microsoft.com/azure/synapse-analytics/",
      },
   },
   {
      id: "clickhouse",
      type: "database",
      position: { x: 330, y: 620 },
      data: {
         type: "database",
         name: "ClickHouse",
         year: 2016,
         category: "SQL/Relational",
         // subcategory: "Data Warehouses (OLAP)",
         description:
            "Open-source columnar OLAP DB for very fast analytical queries.",
         features: [
            "Columnar storage",
            "Vectorized execution",
            "Materialized views",
         ],
         useCases: [
            "Observability analytics",
            "Ad analytics",
            "Real-time dashboards",
         ],
         officialDocs: "https://clickhouse.com/docs",
      },
   },

   /* =========================
     KEY-VALUE STORES
     ========================= */
   {
      id: "redis",
      type: "database",
      position: { x: 430, y: 460 },
      data: {
         type: "database",
         name: "Redis",
         year: 2009,
         category: "NoSQL",
         // subcategory: "Key-Value Stores",
         description:
            "In-memory data structure store for cache, queues, streams; now with vector/doc features.",
         features: [
            "Sub-ms latency",
            "Data structures (lists/sets/streams)",
            "Replication & persistence",
         ],
         useCases: [
            "Caching/sessions",
            "Pub/sub and queues",
            "Real-time leaderboards",
         ],
         officialDocs: "https://redis.io/docs/latest/",
      },
   },
   {
      id: "dynamodb",
      type: "database",
      position: { x: 480, y: 460 },
      data: {
         type: "database",
         name: "Amazon DynamoDB",
         year: 2012,
         category: "NoSQL",
         // subcategory: "Key-Value Stores",
         description:
            "Fully managed key-value & document store with global tables.",
         features: [
            "Auto-scaling throughput",
            "Global replication",
            "Streams/TTL",
         ],
         useCases: [
            "High-scale serverless apps",
            "Gaming sessions",
            "IoT backends",
         ],
         officialDocs:
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
      },
   },
   {
      id: "aerospike",
      type: "database",
      position: { x: 530, y: 460 },
      data: {
         type: "database",
         name: "Aerospike",
         year: 2010,
         category: "NoSQL",
         // subcategory: "Key-Value Stores",
         description: "Low-latency, flash-optimized key-value store.",
         features: [
            "Hybrid memory/index",
            "Strong consistency options",
            "Cross-dc replication",
         ],
         useCases: ["Ad tech", "Fraud detection", "User profiles"],
         officialDocs: "https://docs.aerospike.com/",
      },
   },
   {
      id: "foundationdb",
      type: "database",
      position: { x: 580, y: 460 },
      data: {
         type: "database",
         name: "FoundationDB",
         year: 2013,
         category: "NoSQL",
         // subcategory: "Key-Value Stores",
         description:
            "Transactional key-value store with layers for higher models.",
         features: [
            "ACID transactions",
            "Deterministic simulation",
            "Multi-model via layers",
         ],
         useCases: [
            "Metadata stores",
            "Multi-model backends",
            "Large-scale services",
         ],
         officialDocs: "https://apple.github.io/foundationdb/",
      },
   },

   /* =========================
     DOCUMENT STORES
     ========================= */
   {
      id: "mongodb",
      type: "database",
      position: { x: 520, y: 500 },
      data: {
         type: "database",
         name: "MongoDB",
         year: 2009,
         category: "NoSQL",
         // subcategory: "Document Stores",
         description:
            "JSON-like document database with flexible schema and rich indexing.",
         features: [
            "Aggregation framework",
            "Atlas managed service",
            "Horizontal sharding",
         ],
         useCases: ["Content & catalogs", "Event data", "General-purpose apps"],
         officialDocs: "https://www.mongodb.com/docs/",
      },
   },
   {
      id: "couchbase",
      type: "database",
      position: { x: 570, y: 500 },
      data: {
         type: "database",
         name: "Couchbase",
         year: 2011,
         category: "NoSQL",
         // subcategory: "Document Stores",
         description:
            "Distributed JSON store with N1QL SQL-like query and full-text search.",
         features: [
            "KV + query",
            "Mobile sync (Lite/Sync Gateway)",
            "FTS & Eventing",
         ],
         useCases: ["Offline-first mobile", "User profiles", "Catalogs"],
         officialDocs: "https://docs.couchbase.com/",
      },
   },
   {
      id: "couchdb",
      type: "database",
      position: { x: 620, y: 500 },
      data: {
         type: "database",
         name: "Apache CouchDB",
         year: 2005,
         category: "NoSQL",
         // subcategory: "Document Stores",
         description: "Document DB with multi-master replication via MVCC.",
         features: ["Master-master sync", "HTTP/JSON API", "MapReduce views"],
         useCases: ["Edge/occasionally-connected", "Sync-heavy apps"],
         officialDocs: "https://docs.couchdb.org/en/stable/",
      },
   },
   {
      id: "cosmosdb",
      type: "database",
      position: { x: 670, y: 500 },
      data: {
         type: "database",
         name: "Azure Cosmos DB (multi-model)",
         year: 2017,
         category: "NoSQL",
         // subcategory: "Document Stores",
         description:
            "Globally distributed multi-model DB (Core API, Mongo API, Cassandra API, Gremlin).",
         features: ["Global distribution", "5 consistency levels", "Autoscale"],
         useCases: ["Low-latency global apps", "IoT", "Gaming/social"],
         officialDocs: "https://learn.microsoft.com/azure/cosmos-db/",
      },
   },
   {
      id: "documentdb-aws",
      type: "database",
      position: { x: 720, y: 500 },
      data: {
         type: "database",
         name: "Amazon DocumentDB (MongoDB compatibility)",
         year: 2018,
         category: "NoSQL",
         // subcategory: "Document Stores",
         description: "Managed document store with MongoDB API compatibility.",
         features: ["Fault-tolerant storage", "Managed backups", "Replication"],
         useCases: ["Managed doc workloads on AWS"],
         officialDocs: "https://docs.aws.amazon.com/documentdb/",
      },
   },

   /* =========================
     WIDE-COLUMN STORES
     ========================= */
   {
      id: "cassandra",
      type: "database",
      position: { x: 610, y: 460 },
      data: {
         type: "database",
         name: "Apache Cassandra",
         year: 2008,
         category: "NoSQL",
         // subcategory: "Wide-Column Stores",
         description:
            "Dynamo-inspired, ring-architecture wide-column store for high write throughput.",
         features: [
            "Tunable consistency",
            "Linear scalability",
            "Multi-datacenter",
         ],
         useCases: ["Time-series at scale", "Messaging", "IoT telemetry"],
         officialDocs: "https://cassandra.apache.org/doc/",
      },
   },
   {
      id: "scylladb",
      type: "database",
      position: { x: 660, y: 460 },
      data: {
         type: "database",
         name: "ScyllaDB",
         year: 2015,
         category: "NoSQL",
         // subcategory: "Wide-Column Stores",
         description:
            "Cassandra-compatible, C++ reimplementation focused on low latency.",
         features: ["Shard-per-core", "I/O scheduler", "CQL compatible"],
         useCases: ["Real-time feeds", "Ad tech", "Telecom OSS"],
         officialDocs: "https://opensource.docs.scylladb.com/",
      },
   },
   {
      id: "hbase",
      type: "database",
      position: { x: 710, y: 460 },
      data: {
         type: "database",
         name: "Apache HBase",
         year: 2008,
         category: "NoSQL",
         // subcategory: "Wide-Column Stores",
         description:
            "Hadoop-native wide-column store built on HDFS for sparse tables.",
         features: [
            "Strong consistency (row)",
            "Region servers",
            "Integration with Hadoop ecosystem",
         ],
         useCases: ["Large sparse datasets", "IoT", "Logs"],
         officialDocs: "https://hbase.apache.org/book.html",
      },
   },
   {
      id: "bigtable",
      type: "database",
      position: { x: 760, y: 460 },
      data: {
         type: "database",
         name: "Google Cloud Bigtable",
         year: 2015,
         category: "NoSQL",
         // subcategory: "Wide-Column Stores",
         description:
            "Managed wide-column store based on Google's internal Bigtable.",
         features: ["Massive scale", "Low latency", "HBase API option"],
         useCases: ["Time-series", "Personalization", "Financial tick data"],
         officialDocs: "https://cloud.google.com/bigtable/docs",
      },
   },

   /* =========================
     GRAPH DATABASES
     ========================= */
   {
      id: "neo4j",
      type: "database",
      position: { x: 700, y: 500 },
      data: {
         type: "database",
         name: "Neo4j",
         year: 2007,
         category: "NoSQL",
         // subcategory: "Graph Databases",
         description:
            "Native property graph database with Cypher query language.",
         features: [
            "ACID",
            "Index-free adjacency",
            "Cypher",
            "Aura managed service",
         ],
         useCases: ["Recommendations", "Fraud detection", "Knowledge graphs"],
         officialDocs: "https://neo4j.com/docs/",
      },
   },
   {
      id: "janusgraph",
      type: "database",
      position: { x: 750, y: 500 },
      data: {
         type: "database",
         name: "JanusGraph",
         year: 2017,
         category: "NoSQL",
         // subcategory: "Graph Databases",
         description:
            "Distributed graph layer over backends like Cassandra/HBase/ScyllaDB.",
         features: [
            "Gremlin traversal (TinkerPop)",
            "Backend pluggability",
            "Scale-out",
         ],
         useCases: ["Identity graphs", "Network analysis"],
         officialDocs: "https://janusgraph.org/",
      },
   },
   {
      id: "tigergraph",
      type: "database",
      position: { x: 800, y: 500 },
      data: {
         type: "database",
         name: "TigerGraph",
         year: 2017,
         category: "NoSQL",
         // subcategory: "Graph Databases",
         description: "High-performance distributed graph DB with GSQL.",
         features: ["Parallel graph processing", "GSQL", "Distributed storage"],
         useCases: ["Fraud", "Supply chain", "Customer 360"],
         officialDocs: "https://docs.tigergraph.com/",
      },
   },
   {
      id: "amazon-neptune",
      type: "database",
      position: { x: 850, y: 500 },
      data: {
         type: "database",
         name: "Amazon Neptune",
         year: 2018,
         category: "NoSQL",
         // subcategory: "Graph Databases",
         description:
            "Managed graph database supporting Gremlin and RDF/SPARQL.",
         features: [
            "Property graph + RDF",
            "Fully managed",
            "High availability",
         ],
         useCases: ["Knowledge graphs", "Fraud graphs"],
         officialDocs: "https://docs.aws.amazon.com/neptune/",
      },
   },
   {
      id: "dgraph",
      type: "database",
      position: { x: 900, y: 500 },
      data: {
         type: "database",
         name: "Dgraph",
         year: 2015,
         category: "NoSQL",
         // subcategory: "Graph Databases",
         description: "Native graph database with GraphQL± query language.",
         features: ["Distributed", "Transactions", "GraphQL APIs"],
         useCases: ["Social graphs", "Real-time recommendations"],
         officialDocs: "https://dgraph.io/docs/",
      },
   },

   /* =========================
     MULTI-MODEL
     ========================= */
   {
      id: "arangodb",
      type: "database",
      position: { x: 790, y: 460 },
      data: {
         type: "database",
         name: "ArangoDB",
         year: 2011,
         category: "NoSQL",
         // subcategory: "Multi-Model",
         description:
            "Multi-model (document, graph, KV) with AQL query language.",
         features: ["Foxx services", "SmartGraphs", "Cluster sharding"],
         useCases: ["Content graphs", "Microservices", "Multi-model apps"],
         officialDocs: "https://www.arangodb.com/docs/",
      },
   },
   {
      id: "orientdb",
      type: "database",
      position: { x: 840, y: 460 },
      data: {
         type: "database",
         name: "OrientDB",
         year: 2009,
         category: "NoSQL",
         // subcategory: "Multi-Model",
         description: "Document-graph multi-model database.",
         features: ["SQL-like queries", "ACID", "Distributed clusters"],
         useCases: ["Knowledge graphs", "CMS"],
         officialDocs: "https://orientdb.org/docs/",
      },
   },
   {
      id: "marklogic",
      type: "database",
      position: { x: 890, y: 460 },
      data: {
         type: "database",
         name: "MarkLogic",
         year: 2001,
         category: "NoSQL",
         // subcategory: "Multi-Model",
         description:
            "Enterprise multi-model (document, search, semantic) database.",
         features: ["ACID", "Integrated search", "RDF triple store"],
         useCases: ["Publishing", "Government data hubs"],
         officialDocs: "https://docs.marklogic.com/",
      },
   },

   /* =========================
     TIME-SERIES
     ========================= */
   {
      id: "influxdb",
      type: "database",
      position: { x: 820, y: 460 },
      data: {
         type: "database",
         name: "InfluxDB",
         year: 2013,
         category: "Specialized",
         // subcategory: "Time-Series Databases",
         description:
            "Purpose-built TSDB for metrics/events with retention and downsampling.",
         features: ["Line protocol", "Retention policies", "Flux/SQL"],
         useCases: ["DevOps metrics", "IoT sensors"],
         officialDocs: "https://docs.influxdata.com/",
      },
   },
   {
      id: "timescaledb",
      type: "database",
      position: { x: 860, y: 460 },
      data: {
         type: "database",
         name: "TimescaleDB (Postgres extension)",
         year: 2017,
         category: "Specialized",
         // subcategory: "Time-Series Databases",
         description:
            "Time-series on PostgreSQL via hypertables and compression.",
         features: [
            "Hypertables",
            "Continuous aggregates",
            "Postgres ecosystem",
         ],
         useCases: ["Observability", "Financial ticks"],
         officialDocs: "https://docs.timescale.com/",
      },
   },
   {
      id: "questdb",
      type: "database",
      position: { x: 900, y: 460 },
      data: {
         type: "database",
         name: "QuestDB",
         year: 2019,
         category: "Specialized",
         // subcategory: "Time-Series Databases",
         description:
            "Columnar time-series SQL database optimized for ingestion speed.",
         features: [
            "Vectorized execution",
            "ILP ingestion",
            "SQL with time functions",
         ],
         useCases: ["Market data", "Telemetry"],
         officialDocs: "https://questdb.io/docs/",
      },
   },
   {
      id: "victoriametrics",
      type: "database",
      position: { x: 940, y: 460 },
      data: {
         type: "database",
         name: "VictoriaMetrics",
         year: 2018,
         category: "Specialized",
         // subcategory: "Time-Series Databases",
         description:
            "High-performance TSDB compatible with Prometheus scraping/queries.",
         features: [
            "PromQL support",
            "Clustered & single-node",
            "Efficient storage",
         ],
         useCases: ["Monitoring at scale"],
         officialDocs: "https://docs.victoriametrics.com/",
      },
   },

   /* =========================
     SEARCH ENGINES
     ========================= */
   {
      id: "elasticsearch",
      type: "database",
      position: { x: 880, y: 500 },
      data: {
         type: "database",
         name: "Elasticsearch",
         year: 2010,
         category: "Specialized",
         // subcategory: "Search Engines",
         description:
            "Distributed search and analytics engine based on Lucene.",
         features: ["Full-text search", "Aggregations", "Ingest pipelines"],
         useCases: ["Log analytics", "E-commerce search", "Observability"],
         officialDocs: "https://www.elastic.co/guide/index.html",
      },
   },
   {
      id: "opensearch",
      type: "database",
      position: { x: 920, y: 500 },
      data: {
         type: "database",
         name: "OpenSearch",
         year: 2021,
         category: "Specialized",
         // subcategory: "Search Engines",
         description:
            "Open-source fork of Elasticsearch with search & analytics.",
         features: ["Full-text", "Dashboards", "Vector search"],
         useCases: ["Search", "Observability"],
         officialDocs: "https://opensearch.org/docs/latest/",
      },
   },
   {
      id: "apache-solr",
      type: "database",
      position: { x: 960, y: 500 },
      data: {
         type: "database",
         name: "Apache Solr",
         year: 2006,
         category: "Specialized",
         // subcategory: "Search Engines",
         description:
            "Enterprise search platform on Lucene with rich features.",
         features: ["Faceting", "Highlighting", "Schemaless modes"],
         useCases: ["Enterprise search", "Catalog search"],
         officialDocs: "https://solr.apache.org/guide/",
      },
   },
   {
      id: "meilisearch",
      type: "database",
      position: { x: 1000, y: 500 },
      data: {
         type: "database",
         name: "Meilisearch",
         year: 2018,
         category: "Specialized",
         // subcategory: "Search Engines",
         description: "Lightweight, developer-friendly search engine.",
         features: ["Typo tolerance", "Ranking rules", "RESTful API"],
         useCases: ["App/site search", "Docs search"],
         officialDocs: "https://www.meilisearch.com/docs",
      },
   },
   {
      id: "typesense",
      type: "database",
      position: { x: 1040, y: 500 },
      data: {
         type: "database",
         name: "Typesense",
         year: 2017,
         category: "Specialized",
         // subcategory: "Search Engines",
         description:
            "Open-source search engine focused on simple, fast relevance.",
         features: ["Instant search", "Typo tolerance", "Geo search"],
         useCases: ["Docs & product search"],
         officialDocs: "https://typesense.org/docs/",
      },
   },
   /* =========================
     VECTOR DATABASES
     ========================= */
   {
      id: "milvus",
      type: "database",
      position: { x: 940, y: 460 },
      data: {
         type: "database",
         name: "Milvus",
         year: 2019,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "Open-source vector database for billion-scale similarity search.",
         features: ["ANN indexes", "Hybrid filters", "Horizontal scaling"],
         useCases: ["RAG search", "Visual search", "Recommendation"],
         officialDocs: "https://milvus.io/docs",
      },
   },
   {
      id: "weaviate",
      type: "database",
      position: { x: 980, y: 460 },
      data: {
         type: "database",
         name: "Weaviate",
         year: 2018,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "Vector-native DB with hybrid search, modules, and GraphQL/REST.",
         features: [
            "Hybrid BM25+vector",
            "Modules for models",
            "Filters/metadata",
         ],
         useCases: ["Semantic search", "Multimodal RAG"],
         officialDocs: "https://weaviate.io/developers/weaviate",
      },
   },
   {
      id: "qdrant",
      type: "database",
      position: { x: 1020, y: 460 },
      data: {
         type: "database",
         name: "Qdrant",
         year: 2020,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "Open-source vector DB with filterable ANN and gRPC/REST APIs.",
         features: ["HNSW/IVF", "Payload filtering", "Snapshots"],
         useCases: ["Search", "Recommendations"],
         officialDocs: "https://qdrant.tech/documentation/",
      },
   },
   {
      id: "pinecone",
      type: "database",
      position: { x: 1060, y: 460 },
      data: {
         type: "database",
         name: "Pinecone",
         year: 2019,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "Managed vector database service for production retrieval.",
         features: ["Serverless options", "Namespaces", "Hybrid search"],
         useCases: ["RAG in production", "Personalization"],
         officialDocs: "https://docs.pinecone.io/",
      },
   },
   {
      id: "vespa",
      type: "database",
      position: { x: 1100, y: 460 },
      data: {
         type: "database",
         name: "Vespa",
         year: 2017,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "Open-source engine for large-scale search, vectors, and recommendations.",
         features: [
            "Vector + text ranking",
            "Streaming writes",
            "Low-latency serving",
         ],
         useCases: ["Search at scale", "Recsys", "AI serving"],
         officialDocs: "https://docs.vespa.ai/",
      },
   },
   {
      id: "pgvector",
      type: "database",
      position: { x: 1140, y: 460 },
      data: {
         type: "database",
         name: "pgvector (PostgreSQL extension)",
         year: 2021,
         category: "Specialized",
         // subcategory: "Vector Databases (AI/Embeddings)",
         description:
            "PostgreSQL extension adding vector types and ANN indexes.",
         features: ["HNSW/IVFFlat", "Indexing vectors", "SQL joins + vectors"],
         useCases: ["RAG on Postgres", "Hybrid transactional+vector"],
         officialDocs: "https://github.com/pgvector/pgvector",
      },
   },

   /* =========================
     REAL-TIME ANALYTICS OLAP
     ========================= */
   {
      id: "apache-druid",
      type: "database",
      position: { x: 1000, y: 500 },
      data: {
         type: "database",
         name: "Apache Druid",
         year: 2012,
         category: "Specialized",
         // subcategory: "Real-Time Analytics OLAP",
         description:
            "Real-time analytics database with columnar segments and fast aggregations.",
         features: [
            "Streaming + batch ingestion",
            "Rollups",
            "Sub-second queries",
         ],
         useCases: ["Operational analytics", "Clickstream", "Monitoring"],
         officialDocs: "https://druid.apache.org/docs/latest/",
      },
   },
   {
      id: "apache-pinot",
      type: "database",
      position: { x: 1040, y: 500 },
      data: {
         type: "database",
         name: "Apache Pinot",
         year: 2015,
         category: "Specialized",
         // subcategory: "Real-Time Analytics OLAP",
         description:
            "Real-time OLAP for user-facing analytics; designed at LinkedIn.",
         features: [
            "Realtime + offline tables",
            "Columnar segments",
            "Star-tree indexes",
         ],
         useCases: ["Real-time dashboards", "Product analytics"],
         officialDocs: "https://docs.pinot.apache.org/",
      },
   },
   {
      id: "starrocks",
      type: "database",
      position: { x: 1080, y: 500 },
      data: {
         type: "database",
         name: "StarRocks",
         year: 2020,
         category: "Specialized",
         // subcategory: "Real-Time Analytics OLAP",
         description:
            "High-performance MPP OLAP DB (fork/evolution of Apache Doris).",
         features: [
            "Vectorized execution",
            "Lakehouse federation",
            "Materialized views",
         ],
         useCases: ["BI acceleration", "Ad hoc analytics"],
         officialDocs: "https://docs.starrocks.io/",
      },
   },
   {
      id: "apache-doris",
      type: "database",
      position: { x: 1120, y: 500 },
      data: {
         type: "database",
         name: "Apache Doris",
         year: 2017,
         category: "Specialized",
         // subcategory: "Real-Time Analytics OLAP",
         description:
            "MPP OLAP database with MySQL protocol and lakehouse integrations.",
         features: ["Columnar", "Vectorized", "High concurrency"],
         useCases: ["Reports", "Interactive BI"],
         officialDocs: "https://doris.apache.org/docs/",
      },
   },

   /* =========================
     STREAMS & EVENT STORES
     ========================= */
   {
      id: "apache-kafka",
      type: "database",
      position: { x: 1060, y: 540 },
      data: {
         type: "database",
         name: "Apache Kafka (log)",
         year: 2011,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description:
            "Distributed commit log; foundation for event streaming ecosystems.",
         features: [
            "Partitions/replication",
            "Exactly-once semantics (EOS)",
            "Connect/Streams",
         ],
         useCases: ["Event streaming", "Log transport", "Streaming ETL"],
         officialDocs: "https://kafka.apache.org/documentation/",
      },
   },
   {
      id: "redpanda",
      type: "database",
      position: { x: 1100, y: 540 },
      data: {
         type: "database",
         name: "Redpanda",
         year: 2019,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description:
            "Kafka-compatible streaming platform with low-latency C++ engine.",
         features: ["Kafka API", "Tiered storage", "WASM transforms"],
         useCases: ["Streaming pipelines", "Real-time apps"],
         officialDocs: "https://docs.redpanda.com/",
      },
   },
   {
      id: "apache-pulsar",
      type: "database",
      position: { x: 1140, y: 540 },
      data: {
         type: "database",
         name: "Apache Pulsar",
         year: 2016,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description:
            "Multi-tenant messaging and streaming with segment-based storage.",
         features: [
            "Geo-replication",
            "Pulsar Functions",
            "BookKeeper storage",
         ],
         useCases: ["Messaging + streaming", "IoT"],
         officialDocs: "https://pulsar.apache.org/docs/",
      },
   },
   {
      id: "eventstoredb",
      type: "database",
      position: { x: 1180, y: 540 },
      data: {
         type: "database",
         name: "EventStoreDB",
         year: 2012,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description: "Database for event sourcing with append-only streams.",
         features: ["Projections", "Subscriptions", "ACID per stream"],
         useCases: ["Event-sourced systems", "Auditable histories"],
         officialDocs: "https://developers.eventstore.com/",
      },
   },
   {
      id: "materialize",
      type: "database",
      position: { x: 1220, y: 540 },
      data: {
         type: "database",
         name: "Materialize",
         year: 2020,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description:
            "Streaming database that maintains incremental materialized views over streams.",
         features: ["Streaming SQL", "Incremental views", "Kafka integrations"],
         useCases: ["Real-time dashboards", "Operational analytics"],
         officialDocs: "https://materialize.com/docs/",
      },
   },
   {
      id: "risingwave",
      type: "database",
      position: { x: 1260, y: 540 },
      data: {
         type: "database",
         name: "RisingWave",
         year: 2022,
         category: "Specialized",
         // subcategory: "Streams & Event Stores",
         description: "Cloud-native streaming database with SQL on streams.",
         features: [
            "Streaming joins/windows",
            "S3-compatible storage",
            "Kafka connectors",
         ],
         useCases: ["Streaming ETL", "Low-latency metrics"],
         officialDocs: "https://docs.risingwave.com/",
      },
   },

   /* =========================
     LEDGER DATABASES
     ========================= */
   {
      id: "amazon-qldb",
      type: "database",
      position: { x: 1120, y: 580 },
      data: {
         type: "database",
         name: "Amazon QLDB",
         year: 2019,
         category: "Specialized",
         // subcategory: "Ledger Databases",
         description: "Cryptographically verifiable ledger with PartiQL SQL.",
         features: [
            "Immutable journal",
            "SHA-256 digests",
            "Auditable history",
         ],
         useCases: ["Audit/compliance", "Asset tracking"],
         officialDocs: "https://docs.aws.amazon.com/qldb/",
      },
   },
   {
      id: "azure-confidential-ledger",
      type: "database",
      position: { x: 1160, y: 580 },
      data: {
         type: "database",
         name: "Azure Confidential Ledger",
         year: 2021,
         category: "Specialized",
         // subcategory: "Ledger Databases",
         description:
            "Managed ledger built on TEEs for tamper-evident records.",
         features: ["Trusted execution", "Integrity proofs", "RBAC"],
         useCases: ["Supply chain logs", "Regulatory records"],
         officialDocs: "https://learn.microsoft.com/azure/confidential-ledger/",
      },
   },

   /* =========================
     EMBEDDED / IN-PROCESS
     ========================= */
   {
      id: "duckdb",
      type: "database",
      position: { x: 1180, y: 460 },
      data: {
         type: "database",
         name: "DuckDB",
         year: 2019,
         category: "Specialized",
         // subcategory: "Embedded / In-Process",
         description:
            "In-process OLAP DB; great for analytics inside apps/notebooks.",
         features: ["Columnar", "Vectorized", "Zero-ops"],
         useCases: ["Data science", "ETL pipelines", "Local analytics"],
         officialDocs: "https://duckdb.org/docs/",
      },
   },
   {
      id: "rocksdb",
      type: "database",
      position: { x: 1220, y: 460 },
      data: {
         type: "database",
         name: "RocksDB",
         year: 2012,
         category: "Specialized",
         // subcategory: "Embedded / In-Process",
         description: "Embedded high-performance key-value store (LSM tree).",
         features: ["LSM-based", "Pluggable compaction", "Embedded library"],
         useCases: ["Storage engines", "Metadata stores"],
         officialDocs: "https://github.com/facebook/rocksdb/wiki",
      },
   },
   {
      id: "leveldb",
      type: "database",
      position: { x: 1260, y: 460 },
      data: {
         type: "database",
         name: "LevelDB",
         year: 2011,
         category: "Specialized",
         // subcategory: "Embedded / In-Process",
         description: "Simple embedded key-value store by Google.",
         features: ["LSM-based", "Ordered keys", "Lightweight"],
         useCases: ["Local caches", "Mobile/desktop apps"],
         officialDocs: "https://github.com/google/leveldb",
      },
   },
   {
      id: "realm",
      type: "database",
      position: { x: 1300, y: 460 },
      data: {
         type: "database",
         name: "Realm",
         year: 2014,
         category: "Specialized",
         // subcategory: "Embedded / In-Process",
         description: "Mobile-first object database with sync.",
         features: ["Live objects", "Device sync", "Cross-platform SDKs"],
         useCases: ["iOS/Android apps", "Offline-first"],
         officialDocs: "https://www.mongodb.com/docs/realm/",
      },
   },

   /* =========================
     RDF / TRIPLE STORES
     ========================= */
   {
      id: "virtuoso",
      type: "database",
      position: { x: 1240, y: 500 },
      data: {
         type: "database",
         name: "Virtuoso",
         year: 1998,
         category: "Specialized",
         // subcategory: "RDF / Triple Stores",
         description: "RDF store and multi-model server supporting SPARQL.",
         features: ["SPARQL", "Reasoning", "Linked Data"],
         useCases: ["Semantic web", "Knowledge graphs"],
         officialDocs: "https://vos.openlinksw.com/owiki/wiki/VOS/",
      },
   },
   {
      id: "graphdb-ontotext",
      type: "database",
      position: { x: 1280, y: 500 },
      data: {
         type: "database",
         name: "GraphDB (Ontotext)",
         year: 2008,
         category: "Specialized",
         // subcategory: "RDF / Triple Stores",
         description: "Enterprise RDF store with reasoning and text search.",
         features: ["SPARQL", "OWL reasoning", "Connectors"],
         useCases: ["Knowledge graphs", "Publishing"],
         officialDocs: "https://graphdb.ontotext.com/documentation/",
      },
   },
   {
      id: "stardog",
      type: "database",
      position: { x: 1320, y: 500 },
      data: {
         type: "database",
         name: "Stardog",
         year: 2010,
         category: "Specialized",
         // subcategory: "RDF / Triple Stores",
         description:
            "Knowledge graph platform with RDF store and virtual graphs.",
         features: ["SPARQL", "Reasoning", "Virtualization"],
         useCases: ["Enterprise knowledge graphs"],
         officialDocs: "https://docs.stardog.com/",
      },
   },
   /* =========================
     LAKEHOUSE & SQL-on-OBJECT-STORE
     (Engines/table formats used alongside DBs)
     ========================= */
   {
      id: "delta-lake",
      type: "database",
      position: { x: 1300, y: 540 },
      data: {
         type: "database",
         name: "Delta Lake (table format)",
         year: 2019,
         category: "Specialized",
         // subcategory: "Lakehouse & SQL-on-Object-Store",
         description:
            "Transactional table format on data lakes enabling ACID and time travel.",
         features: [
            "ACID on object storage",
            "Time travel",
            "Schema evolution",
         ],
         useCases: ["Lakehouse analytics", "ML feature stores"],
         officialDocs: "https://docs.delta.io/",
      },
   },
   {
      id: "apache-iceberg",
      type: "database",
      position: { x: 1340, y: 540 },
      data: {
         type: "database",
         name: "Apache Iceberg (table format)",
         year: 2020,
         category: "Specialized",
         // subcategory: "Lakehouse & SQL-on-Object-Store",
         description:
            "Open table format for huge analytic tables with hidden partitioning.",
         features: [
            "ACID tables",
            "Versioned snapshots",
            "Multi-engine support",
         ],
         useCases: ["Open lakehouse", "Multi-engine analytics"],
         officialDocs: "https://iceberg.apache.org/",
      },
   },
   {
      id: "apache-hudi",
      type: "database",
      position: { x: 1380, y: 540 },
      data: {
         type: "database",
         name: "Apache Hudi (table format)",
         year: 2016,
         category: "Specialized",
         // subcategory: "Lakehouse & SQL-on-Object-Store",
         description: "Streaming upserts and incremental pulls on data lakes.",
         features: [
            "Record-level upserts",
            "Clustering",
            "Incremental queries",
         ],
         useCases: ["CDC on lakes", "Near-real-time analytics"],
         officialDocs: "https://hudi.apache.org/docs/",
      },
   },
   {
      id: "trino",
      type: "database",
      position: { x: 1420, y: 540 },
      data: {
         type: "database",
         name: "Trino (SQL engine)",
         year: 2020,
         category: "Specialized",
         // subcategory: "Lakehouse & SQL-on-Object-Store",
         description:
            "Distributed SQL query engine for federated queries across many sources.",
         features: [
            "Connectors (S3, Hive, Kafka, etc.)",
            "MPP execution",
            "ANSI SQL",
         ],
         useCases: ["Federated analytics", "Lakehouse querying"],
         officialDocs: "https://trino.io/docs/current/",
      },
   },
];
