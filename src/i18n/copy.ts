import { localeFromPath, type Locale } from "./locale";

const en = {
  meta: {
    title: "NetbaDB typed database and NetbaIoT MQTT gateway",
    tagline: "Typed database core and database-free IoT gateway",
    description:
      "NetbaDB is a strongly typed relational database core in Rust. NetbaIoT is a database-free IoT gateway for HTTP and MQTT 3.1.1.",
  },
  chrome: {
    skip: "Skip to content",
    menu: "Menu",
    navAria: "Primary",
    langAria: "Language",
    nav: {
      db: "NetbaDB",
      iot: "NetbaIoT",
      architecture: "Architecture",
      storage: "Storage",
      query: "Query",
      roadmap: "Roadmap",
      start: "Tutorial",
      iotOverview: "Overview",
      iotStart: "Tutorial",
      iotArchitecture: "Architecture",
    },
    footerBody:
      "NetbaDB is a typed relational database core. NetbaIoT is a database-free IoT gateway.",
    footerStatic: "Source",
    footerNavAria: "Site",
    footerNav: [
      { href: "/", label: "Home" },
      { href: "/start", label: "NetbaDB" },
      { href: "/query", label: "Query language" },
      { href: "/architecture", label: "DB architecture" },
      { href: "/storage", label: "Storage" },
      { href: "/iot", label: "NetbaIoT" },
      { href: "/iot/start", label: "IoT get started" },
      { href: "/iot/architecture", label: "IoT architecture" },
    ],
    faqTitle: "Questions",
  },
  home: {
    heroHtml: "A typed relational <em>database</em>.<br />A database-free IoT <em>gateway</em>.",
    lede:
      "NetbaDB stores typed tables in-process or over Protocol v2. NetbaIoT accepts HTTP, MQTT 3.1.1, TCP, and UDP device traffic and forwards events to your business system. They are independent programs.",
    ctaArchitecture: "Architecture",
    ctaStart: "Tutorial",
    ctaDb: "NetbaDB tutorial",
    ctaIot: "NetbaIoT tutorial",
    productsKicker: "Characteristics",
    productsTitle: "What each product does.",
    productsDeck:
      "Use NetbaDB when you need a local or remote SQL database. Use NetbaIoT when devices must publish events and receive live commands without the gateway owning business data.",
    dbCardTitle: "NetbaDB",
    dbCardBody:
      "A strongly typed relational database core. Embed it in a Rust process, or run netbadbd and connect with Protocol v2.",
    dbPoints: [
      "Typed SQL subset: SELECT, INNER JOIN, INSERT/UPDATE/DELETE, Heap CREATE/ALTER/DROP TABLE and INDEX",
      "Heap MVCC, LSM, WAL crash recovery, Read Committed and Repeatable Read",
      "Native Protocol v2 only; PostgreSQL wire is not available",
    ],
    iotCardTitle: "NetbaIoT",
    iotCardBody:
      "A memory-first IoT gateway. Devices publish over HTTP or MQTT; business systems consume events and send commands to live sessions.",
    iotPoints: [
      "HTTP, embedded MQTT 3.1.1, framed TCP, and authenticated UDP, with no database in the runtime",
      "HTTP 202 and MQTT QoS1 mean EventAccepted, not that a business database stored the event",
      "Commands go only to a connected local session; offline devices return DeviceOffline",
    ],
    howKicker: "Tutorials",
    howTitle: "How to run them.",
    dbHowTitle: "NetbaDB",
    dbHow: [
      "Add netbadb-sdk to a Rust crate.",
      "Call Database::create, insert rows, then query with SQL.",
      "To serve another process, write a manifest v11 file and start netbadbd.",
    ],
    iotHowTitle: "NetbaIoT",
    iotHow: [
      "Run netbaiot-server with configs/development.json.",
      "POST /v1/device/data; HTTP 202 means the event was accepted.",
      "Subscribe with netbaiot-client and ACK after your application handles the event.",
    ],
    statSlice: "Current release",
    statProtocol: "Remote protocol",
    statIndexes: "Registered indexes",
    statPages: "slotted pages",
    honestKicker: "Current status",
    honestTitle: "Experimental, with a defined implementation scope.",
    honestDeck:
      "The query language is a limited native subset. The project is a compilable and testable Rust workspace with crash recovery, not a design-only prototype.",
    done: "Implemented",
    notDone: "Out of scope",
    next: "Planned",
    pipelineKicker: "Architecture",
    pipelineTitle: "Stable layer boundaries.",
    pipelineDeck:
      "Application languages are not part of the database's persistent meaning. Rust provides embedded and remote APIs. Go uses an independent Protocol v2 client and generated typed bindings.",
    pathsKicker: "Get started",
    pathsTitle: "Three supported entry points.",
    pathsDeck:
      "Most applications should start with the embedded SDK. Use netbadbd when another process needs a Protocol v2 connection. Use the CLI to inspect catalogs and plans without executing SQL.",
    paths: [
      {
        title: "Embedded Rust",
        text: "Add netbadb-sdk, create a table file, insert rows, and run SQL in-process.",
      },
      {
        title: "Server and remote client",
        text: "Start netbadbd from a deployment manifest, then connect with Rust or Go.",
      },
      {
        title: "Offline inspection",
        text: "Open existing files with the netbadb CLI to print catalog metadata or a physical plan.",
      },
    ],
    pipeline: [
      { title: "Schema IR", text: "Language-independent tables, columns, physical / semantic types" },
      { title: "Parser / HIR", text: "Name resolution and nominal type checking" },
      { title: "Planner", text: "SeqScan, IndexScan, NestedLoopJoin, HashJoin, IndexJoin" },
      { title: "Executor", text: "Synchronous and bounded-batch execution" },
      { title: "Storage", text: "Heap MVCC, LSM, partitions, derived columnar, WAL, coordinator" },
      { title: "Protocol", text: "netbadbd, Protocol v2, Unix NBOP v7" },
    ],
    typesKicker: "Nominal types",
    typesTitleHtml: "Identical <code>u64</code> encodings remain distinct types.",
    typesDeck:
      "UserId and TeamId may share a physical representation, but their nominal semantic types remain distinct. Storage encodes physical values. Canonical Schema is the source of semantic meaning.",
    typesSplitTitle: "Physical and semantic types",
    typesSplitBody:
      "Internal identifiers are newtypes: TableId, RelationBindingId, ColumnId, PageId, RowId. Physical Types v2 covers Bool, exact-width integers through 128 bits, Float32/Float64, Text, and Bytes. In a self join, two aliases of the same table remain two bindings.",
    typesFpTitle: "Schema identity on open",
    typesFpBody:
      "Every validated table has a versioned canonical byte encoding and a SHA-256 fingerprint. Heap metadata persists it. open_catalog reconstructs committed schema without external TableDefs; optional caller schemas are exact subset expectations.",
    cratesKicker: "Workspace",
    cratesTitle: "Acyclic crate dependencies.",
    cratesDeck:
      "A → B means A depends on B. Storage does not depend on the planner or executor; the executor consumes a physical plan and a safe storage API.",
    leaf: "No dependencies",
    ctaKicker: "Documentation",
    ctaTitle: "Create a database in a few lines.",
    ctaBody:
      "The Get started page covers the embedded SDK, indexes, netbadbd, and remote clients. Source code:",
    ctaStartAgain: "Get started",
    ctaStorage: "Query language",
    faq: [
      {
        q: "Are NetbaDB and NetbaIoT the same program?",
        a: "No. NetbaDB is a relational database. NetbaIoT is an IoT event gateway. They do not share a runtime, wire protocol, or on-disk format.",
      },
      {
        q: "How do I use NetbaDB?",
        a: "Add netbadb-sdk, call Database::create, then insert and query in-process. To serve another process, start netbadbd with a deployment manifest v11 file and connect over Native Protocol v2.",
      },
      {
        q: "How do I use NetbaIoT?",
        a: "Run netbaiot-server, upload device events over HTTP or MQTT, and consume them with netbaiot-client. ACK each delivery after your application processes it. Commands require a live device session.",
      },
      {
        q: "What license do they use?",
        a: "Both are licensed AGPL-3.0-or-later. If you modify the program and let users interact with it over a network, you must provide the corresponding source.",
      },
    ],
  },
  architecture: {
    title: "NetbaDB architecture",
    description:
      "NetbaDB architecture: Canonical Schema IR, typed SQL compiler, planner, executor, WAL, and Heap/LSM storage in Rust.",
    kicker: "Architecture",
    heroHtml: "From Canonical Schema IR<br />to WAL-backed storage.",
    deck:
      "NetbaDB keeps application-language concerns at the frontend boundary. A Go, Rust, or future schema frontend produces the same Canonical Schema IR. The core does not inspect Go types or application Rust structs.",
    durableTitle: "Architectural boundary",
    durableBody: "The following pipeline is the stable architectural surface:",
    embeddedTitle: "Current embedded path",
    embeddedBody:
      "The current path is synchronous. The query language is a deliberately small native subset and does not claim full SQL compatibility. The core does not depend on Go, a network runtime, JSON execution IR, or application-specific Rust structs.",
    schemaTitle: "Canonical Schema IR",
    schemaP1:
      "netbadb-schema stores database meaning in explicit Rust structs, independent of any application language. A column has a stable ColumnId, a name, a TypeSpec (physical type plus optional semantic name), nullability, and primary-key metadata.",
    schemaP2:
      "Schema::new is the fallible construction path and delegates to Schema::validate. Validation rejects duplicate table/column IDs and names, empty names, and empty semantic-type names. Canonical names are frontend-independent UTF-8 identities; equality is exact and case-sensitive.",
    schemaP3:
      "Each validated TableDef has canonical encoding version 1: it starts with NBTS, then an explicit little-endian version, table identity, and columns in declaration order. SHA-256 over those bytes is the 32-byte SchemaFingerprint. Rust enum discriminants, struct layout, Debug output, and map iteration order do not participate.",
    stagesTitle: "Compiler stages",
    stagesLead: "The current query subset is compiled as follows:",
    stagesP1:
      "HIR owns source-level resolution and semantic type checking. Relational IR owns relational meaning and column provenance. The planner selects sequential or index scans, NestedLoopJoin, HashJoin, or Index Nested-Loop Join for analyzed Scan × Scan INNER JOIN. The executor evaluates typed expressions against rows from storage.",
    stagesP2:
      "Layers pass IDs and owned values. They do not spread long-lived references to pages, frames, or tuples into the planner, executor, or catalog.",
    depsTitle: "Dependency direction",
    depsBody:
      "In the graph, A → B means A depends on B. Lower layers must not depend on higher-level policy. In particular, storage must not depend on the planner or executor, and the executor must not depend on an SDK.",
    langTitle: "Cross-language strategy",
    langLead: "Go is an application language, not an implementation language. The support boundary is:",
    langRust: "Rust: native core, embedded SDK, and Protocol v2 remote client",
    langGo: "Go: independent Protocol v2 client and generated typed bindings",
    langBody:
      "sdk/go is an independent standard-library client. Generated bindings validate result order, names, physical and semantic types, and nullability. They do not generate SQL or query-builder APIs.",
    decisionTitle: "Design priorities",
    decisionBody:
      "Correctness, explicit invariants, and type safety take precedence over convenience. Features are introduced as complete, testable vertical slices. Unimplemented components are not represented as finished APIs.",
  },
  storage: {
    title: "NetbaDB storage engine",
    description:
      "NetbaDB storage: 4 KiB Page v5, WAL v4, Heap MVCC, LSM, crash recovery, and persistent B+Tree indexes.",
    kicker: "Storage",
    heroHtml: "4 KiB pages, WAL,<br />and crash recovery.",
    deck:
      "The storage path is synchronous. The current model is single-writer, STEAL, NO-FORCE, and WAL-protected. Explicit transactions support Read Committed and Repeatable Read. Heap and LSM remain authoritative; columnar projections are derived and stale until refresh.",
    pageTitle: "Page format v5",
    pageIntro:
      "Data pages are a fixed 4096 bytes. Page 0 is still legacy container / heap metadata and is not interpreted as Page v5. Heap metadata is a separate NBD1 version-5 layout and stores the canonical table fingerprint and StorageId. Versions 1 through 4 are rejected rather than guessed or migrated.",
    thOffset: "Offset",
    thField: "Field",
    thMeaning: "Meaning",
    pageMagic: "Page magic",
    pageVersion: "Format version 5",
    pageType: "2 Heap · 3 BTreeMeta · 4 Internal · 5 Leaf",
    slotCount: "Slot-directory entries",
    freeBounds: "Free-space lower / upper bounds",
    pageLsn: "0 means no WAL record yet",
    crc: "Whole-page checksum bound to the expected PageId",
    slots: "u16 offset + u16 length + u32 generation",
    pageP1:
      "Tuple bytes pack from the end of the page backward. Every allocated slot has a nonzero generation. The reserved pair (offset = 0, length = 65535) means Deleted and retains the generation. DELETE compacts tuple bytes without renumbering slots; a later insert may reuse the lowest eligible tombstone after a checked increment.",
    pageP2:
      "RowId is the versioned physical locator PageId + SlotId + generation. It is not a business key and is never exposed as a SQL column. Before reuse, an old locator reports RowDeleted; afterward it reports StaleRowId and cannot access the new occupant.",
    bufferTitle: "Buffer pool and write order",
    bufferBody:
      "The buffer pool owns a bounded set of raw page frames, uses simple round-robin eviction, pins pages while guards are alive, and refuses to evict pinned pages. Before writing a dirty data page it makes the WAL durable through that page's pageLSN. If the WAL flush fails, the data-page write is not attempted.",
    walTitle: "WAL",
    walIntro:
      "Each database uses two alternating slots: <database>-wal and <database>-wal.next. Logical LSNs and physical offsets are deliberately different:",
    walP1:
      "The WAL header is 48 bytes, format version 4, with a whole-header CRC32C. Record headers are 40 bytes, format version 5; versions 3 and 4 remain readable. Record types include Begin, PageUpdate, PageAllocationTransition, PageGenerationReservation, Prepare, Commit, Abort, and RollbackComplete. PageUpdate carries complete 4 KiB before/after images.",
    walP2:
      "A physically complete record whose checksum fails is corruption and is never truncated as a crash tail, even at EOF. Only an incomplete final record whose available header passes structural checks may be discarded at the recovery boundary.",
    txnTitle: "Transactions, isolation, and the single writer",
    txnP1:
      "Explicit transactions support Read Committed and Repeatable Read. Implicit statements use Read Committed. Writer ownership is acquired lazily on the first write; read-only transactions do not reserve it. Multi-storage commits use WAL Prepare plus a coordinator CommitDecision. Global mode publishes a gap-free DatabaseCommitSeq and a Heap/LSM visibility vector. vacuum reclaims Heap versions that no active snapshot can see.",
    txnP2:
      "Dropping an unfinished dirty writer does not silently release it: later writes require recovery, and close reports an error. flush remains legal during an active transaction because the engine uses STEAL and WAL-orders every page write; flush success is not commit.",
    recoveryTitle: "Startup recovery",
    recoveryBody:
      "Recovery completes synchronously before the buffer pool is exposed. pageLSN may skip redo only after the whole page validates. A checksum-invalid current page is a hard error. Recovery does not reconstruct the page from WAL that a checkpoint may already have recycled.",
    checkpointTitle: "Checkpoints",
    checkpointBody:
      "Checkpoints are explicit, synchronous, and quiescent. They return a typed error instead of waiting whenever a transaction handle remains, a writer is active/pending, or runtime health requires startup recovery. A successful checkpoint flushes the WAL, WAL-orders and syncs every dirty page, then creates and syncs the next WAL generation. Clean-shutdown markers are omitted on purpose: open already scans one bounded current generation.",
    btreeTitle: "Persistent B+Tree",
    btreeP1:
      "Heap and B+Tree pages share one database file, buffer pool, transaction chain, WAL, recovery pass, and checkpoint. Index pages are ordinary checksummed Page v5 pages with exactly one generation-1 payload slot.",
    btreeP2:
      "netbadb-index owns ordering, nodes, and versioned codecs, with no dependency on storage, SQL, or the executor. BTreeHandle is a stable metadata-page identity; a root split can replace the root without changing the handle. Registered indexes are backfilled by create_index or SQL CREATE INDEX, maintained by heap and SQL DML, and visible to the planner as IndexScan.",
    integrityTitle: "Integrity, not authentication",
    integrityBody:
      "Page CRC and WAL CRC detect persistent corruption. They neither repair it nor provide cryptographic authentication. Decoder fuzzing covers WAL recovery, Page v5, B+Tree, protocol, schema catalog, coordinator log, and LSM formats.",
  },
  query: {
    title: "NetbaDB query language",
    description:
      "NetbaDB typed SQL subset: INNER JOIN, INSERT/UPDATE/DELETE, Heap CREATE/ALTER/DROP TABLE, indexes, three-valued NULL, ORDER BY, and GROUP BY.",
    kicker: "Query language",
    heroHtml: "Typed SQL:<br />JOIN, DML, and Heap DDL.",
    deck:
      "The query language is a limited native subset. It includes a parser, nominal type checking, three-valued logic, WAL-protected DML, and a bounded Heap DDL set. It is not a complete SQL dialect.",
    thKind: "Area",
    thNow: "Supported now",
    thNot: "Not supported",
    rows: [
      {
        kind: "SELECT",
        now: "Qualified / unqualified columns, wildcard, LIMIT, typed expressions, AS aliases, postfix :: casts",
        not: "DISTINCT, window functions, subqueries in projection",
      },
      {
        kind: "FROM / JOIN",
        now: "AS and shorthand aliases, chained INNER JOIN … ON, NestedLoopJoin, HashJoin, IndexJoin",
        not: "Outer joins, USING, join reordering, merge join",
      },
      {
        kind: "Predicates",
        now: "AND / OR / NOT, comparisons, IS NULL, parentheses",
        not: "IN / BETWEEN / LIKE, subqueries",
      },
      {
        kind: "DML",
        now: "Single-row INSERT with an explicit column list or declaration order, UPDATE, DELETE, optional WHERE",
        not: "Defaults, RETURNING, UPSERT",
      },
      {
        kind: "ORDER BY",
        now: "Multi source-column keys, ASC / DESC, NULLS FIRST / LAST",
        not: "Aliases, ordinals, arbitrary sort expressions",
      },
      {
        kind: "Aggregates",
        now: "COUNT(*) / COUNT / SUM / MIN / MAX, source-column GROUP BY",
        not: "HAVING, DISTINCT aggregates, grouping expressions, ROLLUP",
      },
      {
        kind: "DDL",
        now: "Heap CREATE TABLE (Physical Types v2), DROP TABLE, ALTER TABLE (rename, nullable ADD, DROP, SET/DROP NOT NULL), CREATE/DROP INDEX",
        not: "PRIMARY KEY / UNIQUE / FK, IF EXISTS, qualified names, LSM/range composition, general ALTER COLUMN TYPE",
      },
    ],
    nominalTitle: "Nominal types",
    nominalBody:
      "Schema columns keep both a physical representation and an optional nominal semantic type. HIR requires nominal compatibility in comparisons, so contextual NULL typing cannot make UserId = TeamId legal. Self joins distinguish two occurrences of the same TableId with query-local RelationBindingId values.",
    nullTitle: "NULL is a database value",
    nullBody:
      "Database NULL is an explicit ScalarValue::Null. Rust Option remains reserved for absent clauses or metadata. Comparisons with NULL yield UNKNOWN; IS NULL / IS NOT NULL are the explicit tests. AND / OR / NOT use SQL three-valued logic. WHERE and JOIN ON keep only TRUE; FALSE and UNKNOWN are rejected.",
    joinTitle: "JOIN",
    joinBody:
      "An alias hides the underlying table name. Qualified columns resolve through the exposed relation name; unqualified columns are accepted only when exactly one visible relation provides the name. Each ON can see the complete left subtree and its current right relation, but not later joins. NestedLoopJoin is the default. After ANALYZE, a simple equi INNER JOIN of two scans may select HashJoin or Index Nested-Loop Join when that cost is strictly lower. Operators preserve duplicates in deterministic left-major, right-minor order.",
    dmlTitle: "DML",
    dmlBody:
      "Typed DML uses the same compiler, transaction, full-page WAL, rollback, and recovery path as heap writes. Database::execute returns query rows or an explicit AffectedRows(u64); query rejects mutating statements. Omitted nullable INSERT columns become NULL; omitted non-nullable columns are rejected. UPDATE evaluates every right-hand side against the original row, so SET a = b, b = a swaps.",
    ddlTitle: "DDL",
    ddlBody:
      "Heap CREATE TABLE, DROP TABLE, ALTER TABLE, and CREATE/DROP INDEX are transactional. ALTER supports rename table/column, nullable ADD, restricted DROP, and SET/DROP NOT NULL. Postfix :: casts are exact-width; there is no implicit numeric widening. LSM and partitioned tables are not part of this SQL DDL surface.",
    sortTitle: "Sort and aggregates",
    sortP1:
      "The ordinary plan is Scan/Join → Filter → Sort → Project → Limit. The aggregate plan is Scan/Join → Filter → Aggregate → Limit. Keys resolve against the complete FROM / JOIN scope before projection, so a query may sort by a column it does not return.",
    sortP2:
      "COUNT(*) counts rows; COUNT(column) ignores NULL. A lone global COUNT(column) over SeqScan can count presence without materializing rows. Numeric SUM uses checked arithmetic and strips nominal meaning. MIN / MAX preserve the input SemanticType. NULLs at a grouping key share one group, unlike expression NULL = NULL, which remains UNKNOWN. Grouped queries currently reject ORDER BY.",
    multiTitle: "Writes across storages",
    multiBody:
      "create_tables still composes one heap file per table. Range-partitioned tables and mixed Heap+LSM catalogs commit through the coordinator log. Derived columnar projections are never authoritative. Concurrent writers are not available. Serializable isolation is not available.",
    indexTitle: "Indexes and ANALYZE",
    indexBody:
      "create_index and SQL CREATE INDEX register a non-unique single-column Heap BTree after a transactional backfill. DROP INDEX retires that registration. Subsequent heap and SQL DML maintains registered indexes. Eligible equality and IS NULL predicates can select a point IndexScan; analyzed two-sided Int64/UInt64 bounds can select a range IndexScan. ANALYZE is explicit and is not maintained by DML.",
  },
  roadmap: {
    title: "NetbaDB roadmap",
    description:
      "NetbaDB implemented phases: Protocol v2, Heap DDL, LSM, columnar projections, manifest v11, NBOP v7, and current limits including no Serializable isolation.",
    kicker: "Roadmap",
    heroHtml: "What is implemented,<br />and what is not.",
    deck:
      "Development follows a vertical sequence. {n} items are complete. The numbered engine sequence ends at 73; later coordinator, columnar, and schema-evolution work is also complete. Serializable isolation, concurrent writers, and MCP remain planned or deferred.",
    complete: "Complete",
    next: "Next",
    later: "Later",
    notTitle: "Not included in the current release",
  },
  start: {
    title: "Get started with NetbaDB",
    description:
      "Install netbadb-sdk, create a local Heap or LSM database in Rust, run typed SQL, or start netbadbd over Native Protocol v2.",
    kicker: "Tutorial",
    heroHtml: "Create a local database<br />and run SQL.",
    deck:
      "Follow these steps with netbadb-sdk. The default feature is embedded in-process. Enable the remote feature only when you need a Protocol v2 client. Toolchain {toolchain}; MSRV {msrv}.",
    openGithub: "View on GitHub",
    readReadme: "SDK README",
    outlineTitle: "You will",
    outline: [
      "Add netbadb-sdk to a Rust crate",
      "Create a Heap file, insert a row, and query it",
      "Optionally inspect the catalog, then start netbadbd for a remote client",
    ],
    traitsTitle: "Engine characteristics",
    traits: [
      "Typed SQL subset with nominal semantic types",
      "Heap MVCC, optional LSM, WAL, and crash recovery",
      "One writer per open database; Read Committed or Repeatable Read",
    ],
    depTitle: "1. Add the dependency",
    depBody:
      "The crate is published from the workspace repository. Cargo resolves the netbadb-sdk package in that git workspace.",
    embedTitle: "2. Create, insert, and query",
    embedBody:
      "Database::create refuses to overwrite an existing database or WAL slot. insert and execute run as implicit transactions. create_index backfills current rows and registers a non-unique single-column index. analyze writes a fresh optimizer snapshot; DML does not refresh it automatically.",
    inspectTitle: "3. Inspect the catalog and plan",
    inspectBody:
      "Inspection compiles and plans a statement without executing it. It does not scan heaps, refresh ANALYZE, acquire the writer, or append WAL.",
    serverTitle: "4. Start netbadbd",
    serverBody:
      "The server opens existing heap files declared by deployment manifest v11. Versions 1 through 10 are rejected. Loopback plaintext requires exactly one local_plaintext principal. Non-loopback listening requires mutual TLS.",
    remoteTitle: "5. Connect a remote client",
    remoteBody:
      "Plaintext is accepted only when the resolved TCP peer is loopback. Remote deployments require verified mutual TLS. There is no connection pool, automatic retry, or multiplexing.",
    isolationTitle: "Isolation",
    isolationBody:
      "begin_transaction uses Read Committed. Repeatable Read is available through begin_transaction_with_isolation. IsolationLevel is exported by netbadb-core. Serializable isolation is not available.",
    extraStorageTitle: "LSM, partitions, catalog, and vacuum",
    extraStorageBody:
      "Database::create_storages can create Heap or LSM tables. create_with_placements attaches RANGE partitions. open_catalog reopens a published schema catalog without external TableDefs. vacuum reclaims dead Heap versions that no active snapshot can see. Columnar projections are derived, opt-in, and stale after committed DML until refresh.",
    ddlTitle: "SQL DDL",
    ddlBody:
      "Heap CREATE TABLE accepts Physical Types v2 names, including BOOLEAN, integer widths, TEXT/VARCHAR, REAL/DOUBLE, BYTEA, and native UINT*. DROP TABLE binds identity at prepare time. ALTER TABLE supports rename table/column, nullable ADD, restricted DROP, and SET/DROP NOT NULL. CREATE INDEX / DROP INDEX manage a single-column non-unique Heap BTree. Network DDL requires schema_admin. PostgreSQL wire compatibility is not available.",
    operatorTitle: "Local operator plane",
    operatorBody:
      "NBOP v7 is a Unix-domain operator protocol configured by manifest v11. It is not the database wire protocol. Native Protocol v2 remains the only network database frontend.",
    cliTitle: "6. Inspect files from the command line",
    cliBody:
      "Stop netbadbd and any embedded process using the same files first. The CLI opens tables with normal startup recovery and never executes the inspected SQL. JSON output uses Inspection JSON v7.",
    goTitle: "Go client",
    goBody:
      "The Go module is an independent Protocol v2 client. It uses no cgo or Rust FFI. Dial performs Hello automatically. Int128 and UInt128 result types are rejected by the Go client.",
    lspTitle: "Editor diagnostics",
    lspBody:
      "netbadb-lsp --schema schema.json is a diagnostics-only stdio language server. It loads SDK Schema Spec v1 or v2 once. It does not open database files or report physical plans.",
    sourceTitle: "Build from source",
    cargoEquiv: "Equivalent cargo commands:",
    contractTitle: "Operating constraints",
    contract: [
      "One writer per open database object. Read-only transactions do not reserve the writer.",
      "Explicit transactions support Read Committed and Repeatable Read. Implicit statements use Read Committed. Serializable isolation is not available.",
      "A successful commit means the Commit record is durable; heap pages may remain buffered until flush, vacuum, or close.",
      "SQL CREATE TABLE, DROP TABLE, ALTER TABLE, CREATE INDEX, and DROP INDEX are available for Heap tables. PRIMARY KEY, IF EXISTS, and general ALTER COLUMN TYPE are not.",
      "Multi-storage writes commit through the coordinator log. Concurrent writers and cross-process file locks are not available.",
      "Experimental on-disk formats reject older versions. There is no migration path.",
    ],
    licenseTitle: "License",
    licenseBody:
      "NetbaDB is licensed under {license}. If you modify the program and let users interact with it over a network, you must provide the corresponding source.",
    faq: [
      {
        q: "How do I embed NetbaDB in a Rust process?",
        a: "Add netbadb-sdk from the GitHub workspace, call Database::create, then insert and query in-process. The default feature is embedded.",
      },
      {
        q: "What protocol does netbadbd speak?",
        a: "Native Protocol v2 only. Manifest v11 is the current startup contract. PostgreSQL wire and netbadbd --postgres were removed.",
      },
      {
        q: "Which isolation levels exist?",
        a: "Explicit transactions support Read Committed and Repeatable Read. Implicit statements use Read Committed. Serializable isolation is not available.",
      },
    ],
  },
  iot: {
    title: "NetbaIoT MQTT and HTTP IoT gateway",
    description:
      "NetbaIoT is a database-free IoT gateway for HTTP, MQTT 3.1.1, TCP, and UDP. HTTP 202 means EventAccepted, not business persistence.",
    kicker: "NetbaIoT",
    heroHtml: "Device events in,<br />business sinks out.",
    deck:
      "NetbaIoT is an IoT gateway. Devices publish over HTTP, MQTT 3.1.1, TCP, or UDP. The gateway authenticates, decodes, and forwards DeviceEvent values to your webhook or TCP sink. It does not store business data.",
    traitsTitle: "Gateway characteristics",
    traits: [
      "No PostgreSQL or other database in the runtime",
      "HTTP 202 and MQTT QoS1 mean EventAccepted, not business persistence",
      "Commands require a live MQTT or TCP session",
      "Planned shutdown can spool required work; a crash can lose in-memory events",
    ],
    done: "Implemented",
    notDone: "Out of scope",
    ctaStart: "Tutorial",
    ctaArchitecture: "Architecture",
    pathsTitle: "Device, business, and operator paths.",
    pathsDeck:
      "Devices may use standard MQTT 3.1.1 or device HTTP. Business systems consume confirmed events through netbaiot-client. Operators use the management listener and the netbaiot CLI.",
    deliveryTitle: "EventAccepted is not business persistence.",
    deliveryBody:
      "HTTP 202 and MQTT QoS1 PUBACK mean the event crossed the bounded EventAccepted boundary: authentication, codec validation, routing, and atomic reservation of every confirmed-required sink. They do not mean a business database stored the event. Consumers must deduplicate by stable event_id.",
    commandTitle: "Commands are live-session only.",
    commandBody:
      "A command is admitted only into a currently connected local MQTT or TCP session queue. An offline device returns typed DeviceOffline. NetbaIoT does not store offline commands.",
    restartTitle: "Planned restart, not crash durability.",
    restartBody:
      "Planned shutdown drains required work into a bounded local restart spool with fsync and atomic rename. That is graceful-restart-safe at-least-once delivery. SIGKILL, process crash, or power failure can lose the in-memory accepted window.",
    faq: [
      {
        q: "Does NetbaIoT need a database?",
        a: "No. The runtime is database-free. Business systems own durable business data. NetbaIoT's only persistent mechanism is a bounded local restart spool used during planned graceful shutdown.",
      },
      {
        q: "What does HTTP 202 or MQTT QoS1 PUBACK mean?",
        a: "They mean EventAccepted: authentication, codec validation, routing, and atomic reservation of every confirmed-required sink. They do not mean a business database stored the event. Consumers must deduplicate by event_id.",
      },
      {
        q: "Are commands stored for offline devices?",
        a: "No. A command is admitted only into a currently connected local MQTT or TCP session. An offline device returns typed DeviceOffline.",
      },
    ],
  },
  iotStart: {
    title: "Get started with NetbaIoT",
    description:
      "Run netbaiot-server, upload a device HTTP or MQTT event, and consume it with netbaiot-client using explicit ACK.",
    kicker: "Tutorial",
    heroHtml: "Run the gateway<br />and accept an event.",
    deck:
      "This tutorial starts netbaiot-server, uploads one device event, then consumes it with netbaiot-client. Standard MQTT 3.1.1 clients work without the optional device SDK. MSRV {msrv}. Protocol {protocol}.",
    openGithub: "View on GitHub",
    readReadme: "README",
    outlineTitle: "You will",
    outline: [
      "Start the development listeners on loopback",
      "POST a heartbeat and read HTTP 202",
      "Subscribe in a business client and ACK the delivery",
    ],
    runTitle: "1. Run the development server",
    runBody:
      "Development listeners bind to loopback. HTTP 202 means EventAccepted. Set a 64-character NETBAIOT_ADMIN_SECRET before calling management APIs. Production configurations must specify a confirmed webhook or framed TCP/RPC business sink.",
    uploadTitle: "2. Upload a device event",
    uploadBody:
      "Device bearer format is credential_id:secret. The JSON schema is DeviceUplink. Retry and restart replay can duplicate delivery; the business sink must deduplicate by event_id.",
    clientTitle: "3. Consume events from a business client",
    clientBody:
      "AckMode defaults to Manual. ACK after application processing. One server-confirmed delivery is outstanding per subscription. Dropping an unacknowledged delivery closes the stream so the server may redeliver.",
    deviceTitle: "4. Optional device SDK",
    deviceBody:
      "netbaiot-device-sdk is convenience, not a requirement. Standard MQTT 3.1.1 clients remain first-class. Disconnected publish is rejected; the SDK does not accumulate an offline RAM queue.",
    cliTitle: "5. Operator CLI",
    cliBody:
      "netbaiot is implemented only through netbaiot-client. Tokens are never printed. Drain requires --yes. Exit code 5 is device offline.",
    contractTitle: "Operating constraints",
    contract: [
      "The runtime has no database, durable outbox, or persistent command state.",
      "EventAccepted is not business persistence. Consumers must be idempotent on event_id.",
      "Commands are not stored for offline devices.",
      "Planned restart can spool required work; abrupt crash can lose in-memory accepted events.",
      "MQTT 5, WebSockets, shared subscriptions, and $SYS are outside the current broker.",
    ],
    licenseTitle: "License",
    licenseBody:
      "NetbaIoT is licensed under {license}. If you modify the program and let users interact with it over a network, you must provide the corresponding source.",
  },
  iotArchitecture: {
    title: "NetbaIoT architecture",
    description:
      "NetbaIoT architecture: HTTP/MQTT/TCP/UDP ingress, EventAccepted, EventBus, live-session commands, and a bounded restart spool.",
    kicker: "Architecture",
    heroHtml: "Ingress, EventBus,<br />and live sessions.",
    deck:
      "Normal MQTT and TCP telemetry uses socket parser state, a bound AuthContext, shared codec/config snapshots, and bounded memory routing. It performs no database, filesystem, remote auth, or control-plane operation on the hot path.",
    pipelineTitle: "Runtime path",
    cratesTitle: "Workspace responsibilities",
    cratesDeck:
      "Public client crates depend only on netbaiot-protocol and network libraries. They never depend on runtime, transport, broker, session, or server implementation crates.",
    mqttTitle: "Embedded MQTT 3.1.1",
    mqttBody:
      "The broker implements CONNECT through DISCONNECT, including QoS0, QoS1, and explicit QoS2 state machines. ClientId is not trusted identity. Persistent sessions are keyed by authenticated DeviceKey plus ClientId. MQTT QoS and EventBus delivery are separate contracts.",
    decisionTitle: "Design priorities",
    decisionBody:
      "There is deliberately no storage crate, SQL migration, database pool, durable outbox, persistent command state, or runtime message history. Business systems own durable business data.",
  },
  notFound: {
    title: "Page not found",
    description: "The requested page does not exist.",
    kicker: "404",
    hero: "Page not found.",
    deck: "The requested URL does not correspond to a published page.",
    home: "Home",
    architecture: "Architecture",
  },
};

const zh: typeof en = {
  meta: {
    title: "NetbaDB 类型化数据库与 NetbaIoT MQTT 网关",
    tagline: "强类型数据库核心与无数据库 IoT 网关",
    description:
      "NetbaDB 是用 Rust 实现的强类型关系型数据库核心。NetbaIoT 是面向 HTTP 与 MQTT 3.1.1 的无数据库 IoT 网关。",
  },
  chrome: {
    skip: "跳到正文",
    menu: "菜单",
    navAria: "主导航",
    langAria: "语言",
    nav: {
      db: "NetbaDB",
      iot: "NetbaIoT",
      architecture: "架构",
      storage: "存储",
      query: "查询",
      roadmap: "路线图",
      start: "教程",
      iotOverview: "概览",
      iotStart: "教程",
      iotArchitecture: "架构",
    },
    footerBody:
      "NetbaDB 是类型化关系型数据库核心。NetbaIoT 是无数据库 IoT 网关。",
    footerStatic: "源码",
    footerNavAria: "站点",
    footerNav: [
      { href: "/", label: "首页" },
      { href: "/start", label: "NetbaDB" },
      { href: "/query", label: "查询语言" },
      { href: "/architecture", label: "数据库架构" },
      { href: "/storage", label: "存储" },
      { href: "/iot", label: "NetbaIoT" },
      { href: "/iot/start", label: "IoT 开始使用" },
      { href: "/iot/architecture", label: "IoT 架构" },
    ],
    faqTitle: "常见问题",
  },
  home: {
    heroHtml: "类型化关系型<em>数据库</em>。<br />无数据库 IoT <em>网关</em>。",
    lede:
      "NetbaDB 在进程内或通过 Protocol v2 存储类型化表。NetbaIoT 接收 HTTP、MQTT 3.1.1、TCP 与 UDP 设备流量，并把事件转发给你的业务系统。它们是彼此独立的程序。",
    ctaArchitecture: "架构",
    ctaStart: "教程",
    ctaDb: "NetbaDB 教程",
    ctaIot: "NetbaIoT 教程",
    productsKicker: "特点",
    productsTitle: "各自做什么。",
    productsDeck:
      "需要本地或远程 SQL 数据库时用 NetbaDB。需要设备上报事件并接收在线命令、且网关不持有业务数据时用 NetbaIoT。",
    dbCardTitle: "NetbaDB",
    dbCardBody:
      "强类型关系型数据库核心。可嵌入 Rust 进程，或运行 netbadbd 后通过 Protocol v2 连接。",
    dbPoints: [
      "类型化 SQL 子集：SELECT、INNER JOIN、INSERT/UPDATE/DELETE，以及 Heap CREATE/ALTER/DROP TABLE 与 INDEX",
      "堆 MVCC、LSM、WAL 崩溃恢复，读已提交与可重复读",
      "仅 Native Protocol v2；不提供 PostgreSQL 协议",
    ],
    iotCardTitle: "NetbaIoT",
    iotCardBody:
      "内存优先的 IoT 网关。设备通过 HTTP 或 MQTT 上报；业务系统消费事件，并向在线会话下发命令。",
    iotPoints: [
      "HTTP、内嵌 MQTT 3.1.1、分帧 TCP 与已认证 UDP；运行时没有数据库",
      "HTTP 202 与 MQTT QoS1 表示 EventAccepted，不表示业务库已落盘",
      "命令只发往已连接的本地会话；离线设备返回 DeviceOffline",
    ],
    howKicker: "教程",
    howTitle: "怎么跑起来。",
    dbHowTitle: "NetbaDB",
    dbHow: [
      "在 Rust crate 中加入 netbadb-sdk。",
      "调用 Database::create，插入行，再用 SQL 查询。",
      "若要给另一进程提供服务，编写清单 v11 并启动 netbadbd。",
    ],
    iotHowTitle: "NetbaIoT",
    iotHow: [
      "用 configs/development.json 运行 netbaiot-server。",
      "POST /v1/device/data；HTTP 202 表示事件已被接受。",
      "用 netbaiot-client 订阅，并在应用处理后再 ACK。",
    ],
    statSlice: "当前版本",
    statProtocol: "远程协议",
    statIndexes: "已注册索引",
    statPages: "槽页",
    honestKicker: "当前状态",
    honestTitle: "实验性软件，实现范围已明确界定。",
    honestDeck:
      "查询语言为有限的原生子集。项目是可编译、可测试并具备崩溃恢复的 Rust workspace，并非仅有设计说明的原型。",
    done: "已实现",
    notDone: "不在当前范围",
    next: "规划中",
    pipelineKicker: "架构",
    pipelineTitle: "稳定的分层边界。",
    pipelineDeck:
      "应用语言不属于数据库的持久语义。Rust 提供嵌入式与远程 API。Go 使用独立的 Protocol v2 客户端及生成的类型化绑定。",
    pathsKicker: "开始使用",
    pathsTitle: "三条受支持的接入路径。",
    pathsDeck:
      "大多数应用应从嵌入式 SDK 开始。当另一进程需要 Protocol v2 连接时使用 netbadbd。使用 CLI 可在不执行 SQL 的情况下检查目录与计划。",
    paths: [
      {
        title: "嵌入式 Rust",
        text: "添加 netbadb-sdk，创建表文件，插入行，并在进程内运行 SQL。",
      },
      {
        title: "服务器与远程客户端",
        text: "用部署清单启动 netbadbd，然后通过 Rust 或 Go 连接。",
      },
      {
        title: "离线检查",
        text: "用 netbadb CLI 打开已有文件，输出目录元数据或物理计划。",
      },
    ],
    pipeline: [
      { title: "Schema IR", text: "语言无关的表、列、物理 / 语义类型" },
      { title: "Parser / HIR", text: "名字解析与名义类型检查" },
      { title: "Planner", text: "SeqScan、IndexScan、NestedLoopJoin、HashJoin、IndexJoin" },
      { title: "Executor", text: "同步与有界批执行" },
      { title: "Storage", text: "堆 MVCC、LSM、分区、派生列存、WAL、协调器" },
      { title: "Protocol", text: "netbadbd、Protocol v2、Unix NBOP v7" },
    ],
    typesKicker: "名义类型",
    typesTitleHtml: "相同的 <code>u64</code> 编码仍是不同的类型。",
    typesDeck:
      "UserId 与 TeamId 可以共享物理表示，但其名义语义类型保持互斥。存储仅编码物理值。Canonical Schema 是语义含义的来源。",
    typesSplitTitle: "物理类型与语义类型",
    typesSplitBody:
      "内部标识均为 newtype：TableId、RelationBindingId、ColumnId、PageId、RowId。物理类型 v2 覆盖 Bool、最长 128 位的定宽整数、Float32/Float64、Text 与 Bytes。在自连接中，同一张表的两个别名仍对应两个绑定。",
    typesFpTitle: "打开时的模式身份校验",
    typesFpBody:
      "每张通过校验的表都有版本化规范字节编码与 SHA-256 指纹。堆元数据会持久化它。open_catalog 无需外部 TableDef 即可重建已提交 schema；可选的调用方 schema 是精确子集期望。",
    cratesKicker: "组件",
    cratesTitle: "无环的 crate 依赖。",
    cratesDeck:
      "A → B 表示 A 依赖 B。存储层不依赖规划器或执行器；执行器消费物理计划与安全存储 API。",
    leaf: "无上游依赖",
    ctaKicker: "文档",
    ctaTitle: "用少量代码创建数据库。",
    ctaBody: "「开始使用」页面覆盖嵌入式 SDK、索引、netbadbd 与远程客户端。源代码：",
    ctaStartAgain: "开始使用",
    ctaStorage: "查询语言",
    faq: [
      {
        q: "NetbaDB 和 NetbaIoT 是同一个程序吗？",
        a: "不是。NetbaDB 是关系型数据库。NetbaIoT 是 IoT 事件网关。它们不共享运行时、线协议或磁盘格式。",
      },
      {
        q: "怎么用 NetbaDB？",
        a: "添加 netbadb-sdk，调用 Database::create，然后在进程内插入与查询。若要给另一进程提供服务，用部署清单 v11 启动 netbadbd，再通过 Native Protocol v2 连接。",
      },
      {
        q: "怎么用 NetbaIoT？",
        a: "运行 netbaiot-server，通过 HTTP 或 MQTT 上传设备事件，再用 netbaiot-client 消费。应用处理完成后再 ACK。命令要求设备在线。",
      },
      {
        q: "使用什么许可证？",
        a: "两者均以 AGPL-3.0-or-later 授权。如果修改程序并让用户通过网络与之交互，必须提供对应源代码。",
      },
    ],
  },
  architecture: {
    title: "NetbaDB 架构",
    description: "NetbaDB 的语言边界、编译流水线、crate 依赖方向，以及同步嵌入式核心。",
    kicker: "架构",
    heroHtml: "从 Canonical Schema IR<br />到 WAL 保护的存储。",
    deck:
      "NetbaDB 将应用语言相关问题限制在前端边界。Go、Rust 或未来的 schema 前端均应生成同一份 Canonical Schema IR。核心不检查 Go 类型，也不读取应用侧 Rust 结构体。",
    durableTitle: "架构边界",
    durableBody: "以下流水线为稳定的架构界面：",
    embeddedTitle: "当前嵌入路径",
    embeddedBody:
      "当前路径为同步执行。查询语言是有限的原生子集，不提供完整 SQL 兼容。核心不依赖 Go、网络运行时、JSON 执行 IR，或应用特有的 Rust 结构体。",
    schemaTitle: "Canonical Schema IR",
    schemaP1:
      "netbadb-schema 用显式 Rust 结构保存数据库含义，独立于任何应用语言。一列包含稳定 ColumnId、名字、TypeSpec（物理类型 + 可选语义名）、可空性与主键元数据。",
    schemaP2:
      "Schema::new 是可失败的构造路径，并委托 Schema::validate。校验拒绝重复的表 / 列 ID 与名字、空名字，以及空的语义类型名。规范名是前端无关的 UTF-8 身份，相等性精确且区分大小写。",
    schemaP3:
      "每张通过校验的 TableDef 都有规范编码版本 1：以 NBTS 开头，然后是显式小端版本、表身份与按声明顺序的列。这些字节上的 SHA-256 就是 32 字节 SchemaFingerprint。Rust 枚举判别值、结构布局、Debug 输出或 map 迭代顺序都不参与。",
    stagesTitle: "编译阶段",
    stagesLead: "当前查询子集按以下阶段编译：",
    stagesP1:
      "HIR 拥有源级解析与语义类型检查。关系 IR 拥有关系含义与列出处。规划器选择顺序扫描或索引扫描，以及 NestedLoopJoin；经过分析的 Scan × Scan INNER JOIN 可选择 HashJoin 或 Index Nested-Loop Join。执行器对存储返回的行求值类型化表达式。",
    stagesP2: "层与层之间传递标识符与所有权值，不会将页、帧或元组的长生命周期引用传入规划器、执行器或目录。",
    depsTitle: "依赖方向",
    depsBody:
      "图中 A → B 表示 A 依赖 B。下层不得依赖上层策略。尤其是存储不得依赖规划器或执行器，执行器不得依赖 SDK。",
    langTitle: "跨语言策略",
    langLead: "Go 是应用语言，不是实现语言。支持边界如下：",
    langRust: "Rust: 原生核心、嵌入式 SDK 与 Protocol v2 远程客户端",
    langGo: "Go: 独立 Protocol v2 客户端与生成的类型化绑定",
    langBody:
      "sdk/go 是独立的标准库客户端。生成绑定会校验结果顺序、名称、物理 / 语义类型与可空性，但不生成 SQL 或查询构建 API。",
    decisionTitle: "设计优先级",
    decisionBody:
      "正确性、显式不变量与类型安全优先于便利性。功能以完整、可测试的垂直切片引入。未实现的组件不以完成 API 的形式呈现。",
  },
  storage: {
    title: "NetbaDB 存储引擎",
    description: "NetbaDB 存储：4 KiB Page v5、WAL v4、堆 MVCC、LSM、崩溃恢复与持久 B+Tree 索引。",
    kicker: "存储",
    heroHtml: "4 KiB 页、WAL<br />与崩溃恢复。",
    deck:
      "存储路径是同步的。当前模型是单写者、STEAL、NO-FORCE，并由 WAL 保护。显式事务支持读已提交与可重复读。Heap 与 LSM 仍为权威存储；列存投影是派生的，在刷新前会因已提交 DML 而过期。",
    pageTitle: "页格式 v5",
    pageIntro:
      "数据页固定为 4096 字节。Page 0 仍为遗留容器 / 堆元数据，不按 Page v5 解释。堆元数据采用独立的 NBD1 版本 5 布局，并保存规范表指纹与 StorageId。版本 1 至 4 将被拒绝，不提供自动迁移。",
    thOffset: "偏移",
    thField: "字段",
    thMeaning: "含义",
    pageMagic: "页魔数",
    pageVersion: "格式版本 5",
    pageType: "2 Heap · 3 BTreeMeta · 4 Internal · 5 Leaf",
    slotCount: "槽目录项数",
    freeBounds: "空闲区下界 / 上界",
    pageLsn: "0 表示尚无 WAL 记录",
    crc: "绑定期望 PageId 的整页校验",
    slots: "u16 offset + u16 length + u32 generation",
    pageP1:
      "元组字节从页尾向前堆积。每个已分配槽都有非零 generation。保留对 (offset = 0, length = 65535) 表示 Deleted，并保留 generation。DELETE 压缩元组但不重编号槽；之后的插入可以在受检自增后复用最低合格墓碑。",
    pageP2:
      "RowId 是版本化物理定位符 PageId + SlotId + generation，不是业务键，也不会作为 SQL 列暴露。复用前，旧定位符报告 RowDeleted；复用后报告 StaleRowId，不能碰到新占用者。",
    bufferTitle: "缓冲池与写顺序",
    bufferBody:
      "缓冲池拥有有界的原始页帧，使用简单轮转淘汰，在 guard 存活期间钉住页面，并拒绝淘汰被钉住的页。在写出脏数据页之前，它会先把 WAL 持久化到该页的 pageLSN。WAL flush 失败则不会尝试写数据页。",
    walTitle: "WAL",
    walIntro:
      "每个数据库使用两个交替槽：<database>-wal 与 <database>-wal.next。逻辑 LSN 与物理偏移刻意分开：",
    walP1:
      "WAL 头是 48 字节，格式版本 4，并带整头 CRC32C。记录头 40 字节，格式版本 5；版本 3 与 4 仍可读。记录类型包括 Begin、PageUpdate、PageAllocationTransition、PageGenerationReservation、Prepare、Commit、Abort 与 RollbackComplete。PageUpdate 携带完整 4 KiB before / after 镜像。",
    walP2:
      "结构完整但校验失败的记录是损坏，即使位于 EOF 也不会被当成崩溃尾截断。只有可用头通过结构校验的、物理不完整的最后一条记录，才可以在恢复边界丢弃。",
    txnTitle: "事务、隔离与单写者",
    txnP1:
      "显式事务支持读已提交与可重复读。隐式语句使用读已提交。写者所有权由第一次写入惰性获取，只读事务不预定它。多存储提交使用 WAL Prepare 与协调器 CommitDecision。全局模式发布无间隙 DatabaseCommitSeq 与 Heap/LSM 可见性向量。vacuum 回收活动快照不可见的堆版本。",
    txnP2:
      "丢弃未完成的脏写者不会隐式释放写所有权：后续写入将要求恢复，close 亦会返回错误。活动事务期间仍允许 flush，因为引擎采用 STEAL，并对每次页写进行 WAL 排序；flush 成功并不表示提交完成。",
    recoveryTitle: "启动恢复",
    recoveryBody:
      "恢复在缓冲池对外暴露之前同步完成。pageLSN 仅在整页校验通过后可用于跳过 redo。校验失败的当前页为硬错误。恢复不会根据检查点可能已回收的 WAL 重建该页。",
    checkpointTitle: "检查点",
    checkpointBody:
      "检查点是显式、同步、静止的。只要还有事务句柄、写者活动 / 挂起，或运行时健康要求启动恢复，就会返回类型化错误而不是等待。成功的检查点先刷 WAL，再按 WAL 顺序同步每个脏页，然后创建并同步下一代 WAL。有意省略干净关机标记：打开时扫描有界的当前代即可。",
    btreeTitle: "持久 B+Tree",
    btreeP1:
      "堆页与 B+Tree 页共享同一个数据库文件、缓冲池、事务链、WAL、恢复趟与检查点。索引页是普通的、带校验的 Page v5，恰好一个 generation-1 的 payload 槽。",
    btreeP2:
      "netbadb-index 拥有排序、节点与版本化编解码，不依赖存储、SQL 或执行器。BTreeHandle 是稳定的元数据页身份；根分裂可以替换根而不改变句柄。已注册索引由 create_index 或 SQL CREATE INDEX 回填，由堆与 SQL DML 维护，并作为 IndexScan 对规划器可见。",
    integrityTitle: "完整性，不是认证",
    integrityBody:
      "页 CRC 与 WAL CRC 检测持久损坏。它们既不修复损坏，也不提供密码学认证。解码 fuzz 覆盖 WAL 恢复、Page v5、B+Tree、协议、schema catalog、协调日志与 LSM 格式。",
  },
  query: {
    title: "NetbaDB 查询语言",
    description: "NetbaDB 类型化 SQL 子集：INNER JOIN、INSERT/UPDATE/DELETE、Heap CREATE/ALTER/DROP TABLE、索引、三值 NULL、ORDER BY 与 GROUP BY。",
    kicker: "查询语言",
    heroHtml: "类型化 SQL：<br />JOIN、DML 与 Heap DDL。",
    deck:
      "查询语言为有限的原生子集，包含解析器、名义类型检查、三值逻辑、受 WAL 保护的 DML，以及有界的 Heap DDL。它不是完整的 SQL 方言。",
    thKind: "类别",
    thNow: "当前支持",
    thNot: "当前不支持",
    rows: [
      {
        kind: "SELECT",
        now: "限定 / 非限定列、通配投影、LIMIT、类型化表达式、AS 别名、后缀 :: 转换",
        not: "DISTINCT、窗口函数、投影中的子查询",
      },
      {
        kind: "FROM / JOIN",
        now: "AS 与简写别名、链式 INNER JOIN … ON、NestedLoopJoin、HashJoin、IndexJoin",
        not: "外连接、USING、连接重排、merge join",
      },
      {
        kind: "谓词",
        now: "AND / OR / NOT、比较、IS NULL、括号",
        not: "IN / BETWEEN / LIKE、子查询",
      },
      {
        kind: "DML",
        now: "显式列清单或声明顺序的单行 INSERT、UPDATE、DELETE、可选 WHERE",
        not: "默认值、RETURNING、UPSERT",
      },
      {
        kind: "ORDER BY",
        now: "多源列键、ASC / DESC、NULLS FIRST / LAST",
        not: "别名、序号、任意排序表达式",
      },
      {
        kind: "聚合",
        now: "COUNT(*) / COUNT / SUM / MIN / MAX、源列 GROUP BY",
        not: "HAVING、DISTINCT 聚合、分组表达式、ROLLUP",
      },
      {
        kind: "DDL",
        now: "Heap CREATE TABLE（物理类型 v2）、DROP TABLE、ALTER TABLE（改名、可空 ADD、DROP、SET/DROP NOT NULL）、CREATE/DROP INDEX",
        not: "PRIMARY KEY / UNIQUE / FK、IF EXISTS、限定名、LSM/范围组合、通用 ALTER COLUMN TYPE",
      },
    ],
    nominalTitle: "名义类型",
    nominalBody:
      "Schema 列同时保留物理表示与可选的名义语义类型。HIR 在比较中要求名义兼容，因此上下文 NULL 类型也不能让 UserId = TeamId 合法。自连接通过查询局部的 RelationBindingId 区分同一 TableId 的两次出现。",
    nullTitle: "NULL 是数据库值",
    nullBody:
      "数据库 NULL 是显式的 ScalarValue::Null。Rust Option 留给缺席的子句或元数据。比较遇到 NULL 得到 UNKNOWN；IS NULL / IS NOT NULL 才是显式测试。AND / OR / NOT 使用 SQL 三值逻辑。WHERE 与 JOIN 的 ON 只保留 TRUE，FALSE 与 UNKNOWN 都被拒绝。",
    joinTitle: "JOIN",
    joinBody:
      "别名会隐藏底层表名。限定列经由暴露的关系名解析；非限定列仅在恰好一个可见关系提供该名时被接受。每个 ON 能看见完整左子树与当前右关系，但不能看见更后的连接。默认算子为 NestedLoopJoin。ANALYZE 之后，两个扫描上的简单等值 INNER JOIN 在代价严格更低时可选 HashJoin 或 Index Nested-Loop Join。算子均按确定性的左主、右次顺序保留重复。",
    dmlTitle: "DML",
    dmlBody:
      "类型化 DML 使用与堆写入相同的编译器、事务、整页 WAL、回滚与恢复路径。Database::execute 返回查询行或显式 AffectedRows(u64)；query 拒绝变更语句。省略的可空 INSERT 列赋值为 NULL；省略的非空列将被拒绝。UPDATE 基于原始行求值全部右侧，因此 SET a = b, b = a 会交换两列。",
    ddlTitle: "DDL",
    ddlBody:
      "Heap 上的 CREATE TABLE、DROP TABLE、ALTER TABLE 与 CREATE/DROP INDEX 是事务性的。ALTER 支持改表名 / 列名、可空 ADD、受限 DROP 与 SET/DROP NOT NULL。后缀 :: 转换为精确宽度，没有隐式数值拓宽。LSM 与分区表不在该 SQL DDL 范围内。",
    sortTitle: "排序与聚合",
    sortP1:
      "普通计划是 Scan/Join → Filter → Sort → Project → Limit。聚合计划是 Scan/Join → Filter → Aggregate → Limit。键在投影之前、对着完整 FROM / JOIN 作用域解析，所以查询可以按它不返回的列排序。",
    sortP2:
      "COUNT(*) 计行；COUNT(column) 忽略 NULL。单独的全局 COUNT(column) 在 SeqScan 上可统计存在性而不物化行。数值 SUM 使用受检算术，并剥去名义含义。MIN / MAX 保留输入 SemanticType。分组键上的 NULL 共享一组，这与表达式里 NULL = NULL 仍为 UNKNOWN 不同。带 GROUP BY 的查询当前拒绝 ORDER BY。",
    multiTitle: "跨存储写入",
    multiBody:
      "create_tables 仍按表组合一个堆文件。范围分区表以及混合 Heap+LSM 目录经协调日志提交。派生列存投影不是权威存储。不提供并发写者。不提供可串行化隔离。",
    indexTitle: "索引与 ANALYZE",
    indexBody:
      "create_index 与 SQL CREATE INDEX 在事务性回填后注册非唯一单列 Heap BTree。DROP INDEX 注销该注册。随后的堆与 SQL DML 会维护已注册索引。符合条件的等值与 IS NULL 谓词可选择点查 IndexScan；经过分析的双侧 Int64/UInt64 边界可选择范围 IndexScan。ANALYZE 为显式操作，DML 不会自动维护统计。",
  },
  roadmap: {
    title: "NetbaDB 路线图",
    description: "NetbaDB 已完成阶段：Protocol v2、Heap DDL、LSM、列存投影、清单 v11、NBOP v7，以及当前限制（不含可串行化隔离）。",
    kicker: "路线图",
    heroHtml: "已经实现的能力，<br />以及尚未实现的部分。",
    deck:
      "实现顺序为垂直推进。已完成 {n} 项。编号引擎序列止于 73；其后的协调器、列存与 schema 演进工作亦已完成。可串行化隔离、并发写者以及 MCP 仍属规划或暂缓内容。",
    complete: "已完成",
    next: "下一步",
    later: "后续",
    notTitle: "当前版本不包含以下能力",
  },
  start: {
    title: "开始使用 NetbaDB",
    description:
      "安装 netbadb-sdk，用 Rust 创建本地 Heap 或 LSM 数据库，运行类型化 SQL，或通过 Native Protocol v2 启动 netbadbd。",
    kicker: "教程",
    heroHtml: "创建本地数据库，<br />然后运行 SQL。",
    deck:
      "按下列步骤使用进程内 netbadb-sdk。默认特性为 embedded。只有需要 Protocol v2 客户端时才启用 remote。工具链 {toolchain}；MSRV {msrv}。",
    openGithub: "在 GitHub 上查看",
    readReadme: "SDK README",
    outlineTitle: "你将完成",
    outline: [
      "在 Rust crate 中加入 netbadb-sdk",
      "创建 Heap 文件、插入一行并用 SQL 查询",
      "可选：检查 catalog，再启动 netbadbd 供远程客户端连接",
    ],
    traitsTitle: "引擎特点",
    traits: [
      "带名义语义类型的类型化 SQL 子集",
      "堆 MVCC、可选 LSM、WAL 与崩溃恢复",
      "每个打开的数据库一个写者；读已提交或可重复读",
    ],
    depTitle: "1. 添加依赖",
    depBody:
      "该 crate 来自工作区仓库。Cargo 会在该 git workspace 中解析名为 netbadb-sdk 的包。",
    embedTitle: "2. 创建、插入与查询",
    embedBody:
      "Database::create 拒绝覆盖已有数据库或 WAL 槽。insert 与 execute 作为隐式事务运行。create_index 回填当前行并注册非唯一单列索引。analyze 写入新的优化器快照；DML 不会自动刷新该快照。",
    inspectTitle: "3. 检查目录与计划",
    inspectBody:
      "检查会编译并规划语句，但不会执行。它不会扫描堆、刷新 ANALYZE、获取写者或追加 WAL。",
    serverTitle: "4. 启动 netbadbd",
    serverBody:
      "服务器打开部署清单 v11 声明的已有堆文件。版本 1 至 10 均被拒绝。回环明文要求恰好一个 local_plaintext 主体。非回环监听要求双向 TLS。",
    remoteTitle: "5. 连接远程客户端",
    remoteBody:
      "仅当解析后的 TCP 对端为回环地址时才接受明文。远程部署要求经过校验的双向 TLS。不提供连接池、自动重试或多路复用。",
    isolationTitle: "隔离级别",
    isolationBody:
      "begin_transaction 使用读已提交。可重复读通过 begin_transaction_with_isolation 提供。IsolationLevel 由 netbadb-core 导出。不提供可串行化隔离。",
    extraStorageTitle: "LSM、分区、catalog 与 vacuum",
    extraStorageBody:
      "Database::create_storages 可创建 Heap 或 LSM 表。create_with_placements 挂载 RANGE 分区。open_catalog 无需外部 TableDef 即可打开已发布的 schema catalog。vacuum 回收活动快照不可见的死亡堆版本。列存投影是派生、可选的，已提交 DML 之后在刷新前会过期。",
    ddlTitle: "SQL DDL",
    ddlBody:
      "Heap CREATE TABLE 接受物理类型 v2 名称，包括 BOOLEAN、整数宽度、TEXT/VARCHAR、REAL/DOUBLE、BYTEA 以及原生 UINT*。DROP TABLE 在 prepare 时绑定身份。ALTER TABLE 支持改表名 / 列名、可空 ADD、受限 DROP 与 SET/DROP NOT NULL。CREATE INDEX / DROP INDEX 管理单列非唯一 Heap BTree。网络 DDL 需要 schema_admin。不提供 PostgreSQL 协议兼容。",
    operatorTitle: "本地运维平面",
    operatorBody:
      "NBOP v7 是由清单 v11 配置的 Unix 域运维协议，不是数据库线协议。Native Protocol v2 仍是唯一的网络数据库前端。",
    cliTitle: "6. 使用命令行检查文件",
    cliBody:
      "请先停止 netbadbd 以及任何使用同一文件的嵌入式进程。CLI 通过正常启动恢复打开表，并且不会执行被检查的 SQL。JSON 输出使用 Inspection JSON v7。",
    goTitle: "Go 客户端",
    goBody:
      "Go 模块是独立的 Protocol v2 客户端，不使用 cgo 或 Rust FFI。Dial 会自动完成 Hello。Go 客户端拒绝 Int128 与 UInt128 结果类型。",
    lspTitle: "编辑器诊断",
    lspBody:
      "netbadb-lsp --schema schema.json 是仅提供诊断的 stdio 语言服务器。它会一次性加载 SDK Schema Spec v1 或 v2。它不会打开数据库文件，也不报告物理计划。",
    sourceTitle: "从源码构建",
    cargoEquiv: "等价的 cargo 命令：",
    contractTitle: "运行约束",
    contract: [
      "每个打开的数据库对象允许一个写者。只读事务不预定写者。",
      "显式事务支持读已提交与可重复读。隐式语句使用读已提交。不提供可串行化隔离。",
      "成功的提交表示 Commit 记录已持久化；堆页可能仍留在缓冲中，直到 flush、vacuum 或 close。",
      "Heap 表支持 SQL CREATE TABLE、DROP TABLE、ALTER TABLE、CREATE INDEX 与 DROP INDEX。不支持 PRIMARY KEY、IF EXISTS 与通用 ALTER COLUMN TYPE。",
      "多存储写入经协调日志提交。不提供并发写者与跨进程文件锁。",
      "实验性磁盘格式会拒绝旧版本，不提供迁移路径。",
    ],
    licenseTitle: "许可",
    licenseBody:
      "NetbaDB 以 {license} 授权。如果修改程序并让用户通过网络与之交互，必须提供对应源代码。",
    faq: [
      {
        q: "如何在 Rust 进程内嵌入 NetbaDB？",
        a: "从 GitHub workspace 添加 netbadb-sdk，调用 Database::create，然后在进程内插入与查询。默认特性为 embedded。",
      },
      {
        q: "netbadbd 使用什么协议？",
        a: "仅 Native Protocol v2。当前启动契约是清单 v11。PostgreSQL 协议与 netbadbd --postgres 已被移除。",
      },
      {
        q: "有哪些隔离级别？",
        a: "显式事务支持读已提交与可重复读。隐式语句使用读已提交。不提供可串行化隔离。",
      },
    ],
  },
  iot: {
    title: "NetbaIoT MQTT 与 HTTP IoT 网关",
    description:
      "NetbaIoT 是面向 HTTP、MQTT 3.1.1、TCP 与 UDP 的无数据库 IoT 网关。HTTP 202 表示 EventAccepted，不是业务持久化。",
    kicker: "NetbaIoT",
    heroHtml: "设备事件进来，<br />业务 sink 出去。",
    deck:
      "NetbaIoT 是 IoT 网关。设备通过 HTTP、MQTT 3.1.1、TCP 或 UDP 上报。网关完成认证与解码后，把 DeviceEvent 转发到你的 webhook 或 TCP sink。它不存储业务数据。",
    traitsTitle: "网关特点",
    traits: [
      "运行时没有 PostgreSQL 或其他数据库",
      "HTTP 202 与 MQTT QoS1 表示 EventAccepted，不是业务持久化",
      "命令要求在线 MQTT 或 TCP 会话",
      "计划内关机可以 spool 必达工作；崩溃可能丢失内存中的事件",
    ],
    done: "已实现",
    notDone: "不在当前范围",
    ctaStart: "教程",
    ctaArchitecture: "架构",
    pathsTitle: "设备、业务与运维路径。",
    pathsDeck:
      "设备可使用标准 MQTT 3.1.1 或设备 HTTP。业务系统通过 netbaiot-client 消费确认事件。运维使用管理监听与 netbaiot CLI。",
    deliveryTitle: "EventAccepted 不是业务持久化。",
    deliveryBody:
      "HTTP 202 与 MQTT QoS1 PUBACK 表示事件越过了有界 EventAccepted 边界：认证、编解码校验、路由，以及对每个确认必达 sink 的原子预留。它们不表示业务数据库已存储该事件。消费者必须按稳定 event_id 去重。",
    commandTitle: "命令仅针对在线会话。",
    commandBody:
      "命令只会进入当前已连接的本地 MQTT 或 TCP 会话队列。离线设备返回类型化的 DeviceOffline。NetbaIoT 不存储离线命令。",
    restartTitle: "计划内重启，不是崩溃持久。",
    restartBody:
      "计划内关机将必达工作排入带 fsync 与原子重命名的有界本地重启 spool。这是优雅重启安全的至少一次投递。SIGKILL、进程崩溃或断电可能丢失仍在内存中的已接受窗口。",
    faq: [
      {
        q: "NetbaIoT 需要数据库吗？",
        a: "不需要。运行时无数据库。持久业务数据由业务系统持有。NetbaIoT 唯一的持久机制是计划内优雅关机时使用的有界本地重启 spool。",
      },
      {
        q: "HTTP 202 或 MQTT QoS1 PUBACK 表示什么？",
        a: "表示 EventAccepted：认证、编解码校验、路由，以及对每个确认必达 sink 的原子预留。它们不表示业务数据库已存储该事件。消费者必须按 event_id 去重。",
      },
      {
        q: "会为离线设备存储命令吗？",
        a: "不会。命令只会进入当前已连接的本地 MQTT 或 TCP 会话。离线设备返回类型化的 DeviceOffline。",
      },
    ],
  },
  iotStart: {
    title: "开始使用 NetbaIoT",
    description:
      "运行 netbaiot-server，通过设备 HTTP 或 MQTT 上传事件，并用 netbaiot-client 在显式 ACK 后消费。",
    kicker: "教程",
    heroHtml: "启动网关，<br />并接受一条事件。",
    deck:
      "本教程启动 netbaiot-server，上传一条设备事件，再用 netbaiot-client 消费。标准 MQTT 3.1.1 客户端不依赖可选设备 SDK。MSRV {msrv}。协议 {protocol}。",
    openGithub: "在 GitHub 上查看",
    readReadme: "README",
    outlineTitle: "你将完成",
    outline: [
      "在回环地址上启动开发监听",
      "POST 一条 heartbeat 并看到 HTTP 202",
      "在业务客户端中订阅并 ACK 该投递",
    ],
    runTitle: "1. 运行开发服务器",
    runBody:
      "开发监听绑定回环地址。HTTP 202 表示 EventAccepted。调用管理 API 前需设置 64 字符的 NETBAIOT_ADMIN_SECRET。生产配置必须指定确认型 webhook 或分帧 TCP/RPC 业务 sink。",
    uploadTitle: "2. 上传设备事件",
    uploadBody:
      "设备 bearer 格式为 credential_id:secret。JSON schema 为 DeviceUplink。重试与重启重放可能重复投递；业务 sink 必须按 event_id 去重。",
    clientTitle: "3. 用业务客户端消费事件",
    clientBody:
      "AckMode 默认为 Manual。在应用处理之后 ACK。每个订阅同时只有一条服务器确认投递。丢弃未确认投递会关闭流，以便服务器重投。",
    deviceTitle: "4. 可选设备 SDK",
    deviceBody:
      "netbaiot-device-sdk 是便利层，不是硬性要求。标准 MQTT 3.1.1 客户端仍为一等公民。断线发布会被拒绝；SDK 不会累积离线 RAM 队列。",
    cliTitle: "5. 运维 CLI",
    cliBody:
      "netbaiot 仅通过 netbaiot-client 实现。令牌不会被打印。drain 需要 --yes。退出码 5 表示设备离线。",
    contractTitle: "运行约束",
    contract: [
      "运行时没有数据库、持久 outbox 或持久命令状态。",
      "EventAccepted 不是业务持久化。消费者必须对 event_id 幂等。",
      "不会为离线设备存储命令。",
      "计划内重启可以 spool 必达工作；突然崩溃可能丢失内存中已接受的事件。",
      "当前 broker 不包含 MQTT 5、WebSockets、共享订阅与 $SYS。",
    ],
    licenseTitle: "许可",
    licenseBody:
      "NetbaIoT 以 {license} 授权。如果修改程序并让用户通过网络与之交互，必须提供对应源代码。",
  },
  iotArchitecture: {
    title: "NetbaIoT 架构",
    description:
      "NetbaIoT 架构：HTTP/MQTT/TCP/UDP 入口、EventAccepted、EventBus、在线会话命令与有界重启 spool。",
    kicker: "架构",
    heroHtml: "入口、EventBus<br />与在线会话。",
    deck:
      "常规 MQTT 与 TCP 遥测只使用套接字解析状态、已绑定的 AuthContext、共享编解码 / 配置快照，以及有界内存路由。热路径不做数据库、文件系统、远程认证或控制面操作。",
    pipelineTitle: "运行时路径",
    cratesTitle: "工作区职责",
    cratesDeck:
      "公开客户端 crate 只依赖 netbaiot-protocol 与网络库，从不依赖 runtime、transport、broker、session 或 server 实现 crate。",
    mqttTitle: "内嵌 MQTT 3.1.1",
    mqttBody:
      "broker 实现 CONNECT 至 DISCONNECT，包括 QoS0、QoS1 与显式 QoS2 状态机。ClientId 不是可信身份。持久会话以已认证 DeviceKey 加 ClientId 为键。MQTT QoS 与 EventBus 投递是分离的契约。",
    decisionTitle: "设计优先级",
    decisionBody:
      "有意不设 storage crate、SQL 迁移、数据库连接池、持久 outbox、持久命令状态或运行时消息历史。持久业务数据由业务系统持有。",
  },
  notFound: {
    title: "页面不存在",
    description: "请求的页面不存在。",
    kicker: "404",
    hero: "页面不存在。",
    deck: "请求的 URL 没有对应的已发布页面。",
    home: "首页",
    architecture: "架构",
  },
};

export const copy: Record<Locale, typeof en> = { en, zh };

export function useCopy(pathname: string) {
  const locale = localeFromPath(pathname);
  return { locale, t: copy[locale] };
}
