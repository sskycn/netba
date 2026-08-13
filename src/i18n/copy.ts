import { localeFromPath, type Locale } from "./locale";

const en = {
  meta: {
    tagline: "A strongly typed relational database core",
    description:
      "NetbaDB is a strongly typed relational database core written in Rust. Application languages remain behind a language-independent Canonical Schema IR. The current release implements a documented path from the parser to pages, WAL, and crash recovery.",
  },
  chrome: {
    skip: "Skip to content",
    menu: "Menu",
    navAria: "Primary",
    langAria: "Language",
    nav: {
      architecture: "Architecture",
      storage: "Storage",
      query: "Query",
      roadmap: "Roadmap",
      start: "Get started",
    },
    footerBody:
      "is an experimental relational database core. The current release implements a documented parser-to-storage subset.",
    footerStatic: "Official website",
  },
  home: {
    heroHtml: "A strongly typed<br />relational <em>database core</em>.",
    lede:
      "NetbaDB is a strongly typed relational database core written in Rust. Application languages remain at the frontend. The engine consumes Canonical Schema IR and executes a complete path from the parser through slotted pages, WAL, and crash recovery.",
    ctaArchitecture: "Architecture",
    ctaStart: "Get started",
    statSlice: "Current release scope",
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
      "Application languages are not part of the database's persistent meaning. Rust provides the native embedded API. Go and other languages are intended to use a generated SDK or a versioned protocol client.",
    pipeline: [
      { title: "Schema IR", text: "Language-independent tables, columns, physical / semantic types" },
      { title: "Parser / HIR", text: "Name resolution and nominal type checking" },
      { title: "Relational IR", text: "Logical plans without storage choices" },
      { title: "Planner", text: "Scans, nested-loop, sort, and aggregates" },
      { title: "Executor", text: "Synchronous execution + three-valued logic" },
      { title: "Storage", text: "Transactions, WAL, pages, heap, B+Tree" },
    ],
    typesKicker: "Nominal types",
    typesTitleHtml: "Identical <code>u64</code> encodings remain distinct types.",
    typesDeck:
      "UserId and TeamId may share a physical representation, but their nominal semantic types remain distinct. Storage encodes physical values. Canonical Schema is the source of semantic meaning.",
    typesSplitTitle: "Physical and semantic types",
    typesSplitBody:
      "Internal identifiers are newtypes: TableId, RelationBindingId, ColumnId, PageId, RowId. In a self join, two aliases of the same table remain two bindings.",
    typesFpTitle: "Schema identity on open",
    typesFpBody:
      "Every validated table has a versioned canonical byte encoding and a SHA-256 fingerprint. Heap metadata persists it; reopen requires the caller's full table identity, including semantic types and column order.",
    cratesKicker: "Workspace",
    cratesTitle: "Acyclic crate dependencies.",
    cratesDeck:
      "A → B means A depends on B. Storage does not depend on the planner or executor; the executor consumes a physical plan and a safe storage API.",
    leaf: "No dependencies",
    ctaKicker: "Documentation",
    ctaTitle: "Begin with the embedded API.",
    ctaBody:
      "This website documents implemented capabilities only. Roadmap items are identified separately. Source code:",
    ctaStartAgain: "Get started",
    ctaStorage: "Storage and recovery",
  },
  architecture: {
    title: "Architecture",
    description:
      "NetbaDB's language boundary, compiler pipeline, crate dependency direction, and synchronous embedded core.",
    kicker: "Architecture",
    heroHtml: "Application languages remain<br />outside the engine.",
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
      "HIR owns source-level resolution and semantic type checking. Relational IR owns relational meaning and column provenance. The planner selects sequential scans and a correctness-first nested-loop for logical INNER JOIN. The executor evaluates typed expressions against rows from storage.",
    stagesP2:
      "Layers pass IDs and owned values. They do not spread long-lived references to pages, frames, or tuples into the planner, executor, or catalog.",
    depsTitle: "Dependency direction",
    depsBody:
      "In the graph, A → B means A depends on B. Lower layers must not depend on higher-level policy. In particular, storage must not depend on the planner or executor, and the executor must not depend on an SDK.",
    langTitle: "Cross-language strategy",
    langLead: "Go is no longer treated as the database implementation language. The intended support boundary is:",
    langRust: "Rust: native core and embedded SDK",
    langGo: "Go: generated SDK and NetbaDB protocol client",
    langBody:
      "sdk/go currently documents the intended boundary. A Go runtime and protocol wire format are not included in this release. A future netbadbd server must define a versioned, language-neutral protocol before a Go client is generated.",
    decisionTitle: "Design priorities",
    decisionBody:
      "Correctness, explicit invariants, and type safety take precedence over convenience. Features are introduced as complete, testable vertical slices. Unimplemented components are not represented as finished APIs.",
  },
  storage: {
    title: "Storage",
    description:
      "NetbaDB Page v5 slotted pages, buffer pool, WAL, recovery, checkpoints, and persistent B+Tree.",
    kicker: "Storage",
    heroHtml: "4 KiB pages, WAL,<br />and crash recovery.",
    deck:
      "The storage path is synchronous. The current model is single-writer, STEAL, NO-FORCE, and WAL-protected. It supports synchronous physical runtime rollback and startup crash recovery. Reads have no snapshot and may observe an active writer.",
    pageTitle: "Page format v5",
    pageIntro:
      "Data pages are a fixed 4096 bytes. Page 0 is still legacy container / heap metadata and is not interpreted as Page v5. Heap metadata is a separate NBD1 version-2 layout and stores the canonical table fingerprint. Versions 1 through 4 are rejected rather than guessed or migrated.",
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
      "The WAL header is 48 bytes, format version 3, with a whole-header CRC32C. Record headers are 40 bytes, format version 2; the type determines the only valid total length. Record types are Begin, PageUpdate, Commit, Abort, and RollbackComplete. PageUpdate carries complete 4 KiB before/after images.",
    walP2:
      "A physically complete record whose checksum fails is corruption and is never truncated as a crash tail, even at EOF. Only an incomplete final record whose available header passes structural checks may be discarded at the recovery boundary.",
    txnTitle: "Transactions and the single writer",
    txnP1:
      "Writer ownership is acquired lazily on the first write; read-only transactions do not reserve it. Commit releases ownership only after the Commit record reaches durable storage. Rollback first makes Abort durable, follows the prevLSN chain backward, installs validated before-images, then durably records RollbackComplete.",
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
      "netbadb-index owns ordering, nodes, and versioned codecs, with no dependency on storage, SQL, or the executor. BTreeHandle is a stable metadata-page identity; a root split can replace the root without changing the handle. This API is storage-only: it does not automatically maintain indexes for heap DML, expose SQL index DDL, or add IndexScan.",
    integrityTitle: "Integrity, not authentication",
    integrityBody:
      "Page CRC and WAL CRC detect persistent corruption. They neither repair it nor provide cryptographic authentication. Decoder fuzzing covers WAL recovery, Page v5, and B+Tree nodes.",
  },
  query: {
    title: "Query",
    description:
      "NetbaDB's small typed SQL subset: JOIN, DML, NULL three-valued logic, ORDER BY, and GROUP BY.",
    kicker: "Query language",
    heroHtml: "A typed SQL subset<br />with explicit semantics.",
    deck:
      "The query language is a limited native subset. It includes a parser, nominal type checking, three-valued logic, and WAL-protected DML. It is not a complete SQL dialect.",
    thKind: "Area",
    thNow: "Supported now",
    thNot: "Not supported",
    rows: [
      {
        kind: "SELECT",
        now: "Qualified / unqualified columns, wildcard projection, LIMIT",
        not: "Arbitrary expression projection, output aliases, DISTINCT",
      },
      {
        kind: "FROM / JOIN",
        now: "AS and shorthand aliases, chained INNER JOIN … ON, self joins",
        not: "Outer joins, USING, join reordering, hash / merge join",
      },
      {
        kind: "Predicates",
        now: "AND / OR / NOT, comparisons, IS NULL, parentheses",
        not: "IN / BETWEEN / LIKE, subqueries",
      },
      {
        kind: "DML",
        now: "Single-row INSERT with an explicit column list, UPDATE, DELETE, optional WHERE",
        not: "Defaults, RETURNING, UPSERT, multi-table writes",
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
    ],
    nominalTitle: "Nominal types",
    nominalBody:
      "Schema columns keep both a physical representation and an optional nominal semantic type. HIR requires nominal compatibility in comparisons, so contextual NULL typing cannot make UserId = TeamId legal. Self joins distinguish two occurrences of the same TableId with query-local RelationBindingId values.",
    nullTitle: "NULL is a database value",
    nullBody:
      "Database NULL is an explicit ScalarValue::Null. Rust Option remains reserved for absent clauses or metadata. Comparisons with NULL yield UNKNOWN; IS NULL / IS NOT NULL are the explicit tests. AND / OR / NOT use SQL three-valued logic. WHERE and JOIN ON keep only TRUE; FALSE and UNKNOWN are rejected.",
    joinTitle: "JOIN",
    joinBody:
      "An alias hides the underlying table name. Qualified columns resolve through the exposed relation name; unqualified columns are accepted only when exactly one visible relation provides the name. Each ON can see the complete left subtree and its current right relation, but not later joins. Nested-loop execution preserves duplicates in deterministic left-major, right-minor order.",
    dmlTitle: "DML",
    dmlBody:
      "Typed DML uses the same compiler, transaction, full-page WAL, rollback, and recovery path as heap writes. Database::execute returns query rows or an explicit AffectedRows(u64); query rejects mutating statements. Omitted nullable INSERT columns become NULL; omitted non-nullable columns are rejected. UPDATE evaluates every right-hand side against the original row, so SET a = b, b = a swaps.",
    sortTitle: "Sort and aggregates",
    sortP1:
      "The ordinary plan is Scan/Join → Filter → Sort → Project → Limit. The aggregate plan is Scan/Join → Filter → Aggregate → Limit. Keys resolve against the complete FROM / JOIN scope before projection, so a query may sort by a column it does not return.",
    sortP2:
      "COUNT(*) counts rows; COUNT(column) ignores NULL. Numeric SUM uses checked arithmetic and strips nominal meaning. MIN / MAX preserve the input SemanticType. NULLs at a grouping key share one group, unlike expression NULL = NULL, which remains UNKNOWN. Grouped queries currently reject ORDER BY.",
    multiTitle: "Multi-table writes are still unsupported",
    multiBody:
      "The core composes unchanged one-table heap files with create_tables / open_tables. JOIN did not change the page, WAL, recovery, or transaction format. Cross-table write transactions remain on the roadmap.",
  },
  roadmap: {
    title: "Roadmap",
    description:
      "NetbaDB's vertical slice from the Rust foundation through a persistent B+Tree, and the next work on indexes, a server, and SDKs.",
    kicker: "Roadmap",
    heroHtml: "Implemented vertically,<br />then extended by phase.",
    deck:
      "Development follows a vertical sequence. {n} phases are complete through Phase 4C1. Isolation and MVCC, B+Tree deletion, server networking, and a Go wire protocol remain planned work and are not available in the current release.",
    complete: "Complete",
    next: "Next",
    later: "Later",
    notTitle: "Not included in the current release",
  },
  start: {
    title: "Start",
    description:
      "Build, test, and embed NetbaDB. Rust 1.97.1 development toolchain, MSRV 1.85.0, AGPL-3.0-or-later.",
    kicker: "Get started",
    heroHtml: "Synchronous embedded<br />database API.",
    deck:
      "The repository pins Rust {toolchain} with rustfmt and clippy. The workspace MSRV is {msrv}. Applications use netbadb-core::Database or the sdk/rust re-exports.",
    openGithub: "View on GitHub",
    readReadme: "Read the README",
    validateTitle: "Validation",
    cargoEquiv: "Equivalent cargo commands:",
    embedTitle: "Minimal embedded example",
    embedBody:
      "Creation uses create-new semantics and refuses to overwrite an existing database or WAL slot. Database::insert runs as an implicit transaction. When several inserts must share one WAL chain, call begin_transaction, insert_in, and Transaction::commit.",
    contractTitle: "Durability contract",
    contract: [
      "A successful commit means its Commit record has reached durable storage; heap pages may remain buffered until eviction, flush, or close.",
      "Each open database object allows one writer. Read-only transactions do not reserve it.",
      "Readers are not isolated and may observe an active writer's buffered changes.",
      "Experimental format changes reject older versions rather than guessing a migration.",
    ],
    fuzzTitle: "Fuzz",
    fuzzBody:
      "fuzz/ provides bounded targets for WAL recovery, Page v5 decoding, and B+Tree node decoding. Arbitrary bytes must return a node or a typed error — not a panic, unbounded allocation, or a traversal.",
    licenseTitle: "License",
    licenseBody:
      "NetbaDB is licensed under {license}. It is a copyleft license: if you modify the program and let users interact with it over a network, you must provide the corresponding source.",
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
    tagline: "强类型关系型数据库核心",
    description:
      "NetbaDB 是用 Rust 实现的强类型关系型数据库核心。应用语言通过语言无关的 Canonical Schema IR 与引擎隔离。当前版本实现了从解析器到页、WAL 与崩溃恢复的文档化路径。",
  },
  chrome: {
    skip: "跳到正文",
    menu: "菜单",
    navAria: "主导航",
    langAria: "语言",
    nav: {
      architecture: "架构",
      storage: "存储",
      query: "查询",
      roadmap: "路线图",
      start: "开始使用",
    },
    footerBody:
      "是实验性关系型数据库核心。当前版本实现了已文档化的解析器至存储路径。",
    footerStatic: "官方网站",
  },
  home: {
    heroHtml: "强类型<br />关系型<em>数据库核心</em>。",
    lede:
      "NetbaDB 是用 Rust 实现的强类型关系型数据库核心。应用语言停留在前端。引擎消费 Canonical Schema IR，并提供从解析器到槽页、WAL 与崩溃恢复的完整路径。",
    ctaArchitecture: "架构",
    ctaStart: "开始使用",
    statSlice: "当前版本范围",
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
      "应用语言不属于数据库的持久语义。Rust 提供原生嵌入式 API。Go 及其他语言计划通过生成 SDK 或版本化协议客户端接入。",
    pipeline: [
      { title: "Schema IR", text: "语言无关的表、列、物理 / 语义类型" },
      { title: "Parser / HIR", text: "名字解析与名义类型检查" },
      { title: "Relational IR", text: "逻辑计划，不含存储选择" },
      { title: "Planner", text: "扫描、nested-loop、排序与聚合" },
      { title: "Executor", text: "同步执行 + 三值逻辑" },
      { title: "Storage", text: "事务、WAL、页、堆、B+Tree" },
    ],
    typesKicker: "名义类型",
    typesTitleHtml: "相同的 <code>u64</code> 编码仍是不同的类型。",
    typesDeck:
      "UserId 与 TeamId 可以共享物理表示，但其名义语义类型保持互斥。存储仅编码物理值。Canonical Schema 是语义含义的来源。",
    typesSplitTitle: "物理类型与语义类型",
    typesSplitBody:
      "内部标识均为 newtype：TableId、RelationBindingId、ColumnId、PageId、RowId。在自连接中，同一张表的两个别名仍对应两个绑定。",
    typesFpTitle: "打开时的模式身份校验",
    typesFpBody:
      "每张通过校验的表都有版本化规范字节编码与 SHA-256 指纹。堆元数据会持久化它；重开要求调用方给出完整表身份，包括语义类型与列顺序。",
    cratesKicker: "组件",
    cratesTitle: "无环的 crate 依赖。",
    cratesDeck:
      "A → B 表示 A 依赖 B。存储层不依赖规划器或执行器；执行器消费物理计划与安全存储 API。",
    leaf: "无上游依赖",
    ctaKicker: "文档",
    ctaTitle: "从嵌入式 API 开始。",
    ctaBody: "本网站仅描述已实现能力。路线图项目单独标明。源代码：",
    ctaStartAgain: "开始使用",
    ctaStorage: "存储与恢复",
  },
  architecture: {
    title: "架构",
    description: "NetbaDB 的语言边界、编译流水线、crate 依赖方向，以及同步嵌入式核心。",
    kicker: "架构",
    heroHtml: "应用语言位于<br />引擎边界之外。",
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
      "HIR 拥有源级解析与语义类型检查。关系 IR 拥有关系含义与列出处。规划器选择顺序扫描，以及正确性优先的 nested-loop 来实现逻辑 INNER JOIN。执行器对存储返回的行求值类型化表达式。",
    stagesP2: "层与层之间传递标识符与所有权值，不会将页、帧或元组的长生命周期引用传入规划器、执行器或目录。",
    depsTitle: "依赖方向",
    depsBody:
      "图中 A → B 表示 A 依赖 B。下层不得依赖上层策略。尤其是存储不得依赖规划器或执行器，执行器不得依赖 SDK。",
    langTitle: "跨语言策略",
    langLead: "Go 不再被当作数据库实现语言。预定的支持边界是：",
    langRust: "Rust: 原生核心与嵌入式 SDK",
    langGo: "Go:   生成 SDK 与 NetbaDB 协议客户端",
    langBody:
      "sdk/go 目前记录预定边界。本版本不包含 Go 运行时与协议线格式。未来的 netbadbd 须先定义版本化、语言中立的协议，再据此生成 Go 客户端。",
    decisionTitle: "设计优先级",
    decisionBody:
      "正确性、显式不变量与类型安全优先于便利性。功能以完整、可测试的垂直切片引入。未实现的组件不以完成 API 的形式呈现。",
  },
  storage: {
    title: "存储",
    description: "NetbaDB 的 Page v5 槽页、缓冲池、WAL、恢复、检查点与持久 B+Tree。",
    kicker: "存储",
    heroHtml: "4 KiB 页、WAL<br />与崩溃恢复。",
    deck:
      "存储路径是同步的。当前模型是单写者、STEAL、NO-FORCE，并由 WAL 保护。它支持同步物理运行时回滚与启动崩溃恢复。读没有快照，也可能看见活动写者。",
    pageTitle: "页格式 v5",
    pageIntro:
      "数据页固定为 4096 字节。Page 0 仍为遗留容器 / 堆元数据，不按 Page v5 解释。堆元数据采用独立的 NBD1 版本 2 布局，并保存规范表指纹。版本 1 至 4 将被拒绝，不提供自动迁移。",
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
      "WAL 头是 48 字节，格式版本 3，并带整头 CRC32C。记录头 40 字节，格式版本 2；类型决定唯一合法总长。记录类型为 Begin、PageUpdate、Commit、Abort 与 RollbackComplete。PageUpdate 携带完整 4 KiB before / after 镜像。",
    walP2:
      "结构完整但校验失败的记录是损坏，即使位于 EOF 也不会被当成崩溃尾截断。只有可用头通过结构校验的、物理不完整的最后一条记录，才可以在恢复边界丢弃。",
    txnTitle: "事务与单写者",
    txnP1:
      "写者所有权由第一次写入惰性获取，只读事务不预定它。提交只在 Commit 记录到达持久存储后释放所有权。回滚先让 Abort 持久，再沿 prevLSN 链反向安装经验证的 before-image，然后持久记录 RollbackComplete。",
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
      "netbadb-index 拥有排序、节点与版本化编解码，不依赖存储、SQL 或执行器。BTreeHandle 是稳定的元数据页身份；根分裂可以替换根而不改变句柄。当前 API 只到存储层：不自动为堆 DML 维护索引，不暴露 SQL 索引 DDL，也不增加 IndexScan。",
    integrityTitle: "完整性，不是认证",
    integrityBody:
      "页 CRC 与 WAL CRC 检测持久损坏。它们既不修复损坏，也不提供密码学认证。解码 fuzz 覆盖 WAL 恢复、Page v5 与 B+Tree 节点。",
  },
  query: {
    title: "查询",
    description: "NetbaDB 的小型 typed SQL 子集：JOIN、DML、NULL 三值逻辑、ORDER BY 与 GROUP BY。",
    kicker: "查询语言",
    heroHtml: "具有明确语义的<br />类型化 SQL 子集。",
    deck:
      "查询语言为有限的原生子集，包含解析器、名义类型检查、三值逻辑以及受 WAL 保护的 DML。它不是完整的 SQL 方言。",
    thKind: "类别",
    thNow: "当前支持",
    thNot: "当前不支持",
    rows: [
      {
        kind: "SELECT",
        now: "限定 / 非限定列、通配投影、LIMIT",
        not: "任意表达式投影、别名输出、DISTINCT",
      },
      {
        kind: "FROM / JOIN",
        now: "AS 与简写别名、链式 INNER JOIN … ON、自连接",
        not: "外连接、USING、连接重排、hash / merge join",
      },
      {
        kind: "谓词",
        now: "AND / OR / NOT、比较、IS NULL、括号",
        not: "IN / BETWEEN / LIKE、子查询",
      },
      {
        kind: "DML",
        now: "显式列清单的单行 INSERT、UPDATE、DELETE、可选 WHERE",
        not: "默认值、RETURNING、UPSERT、多表写",
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
    ],
    nominalTitle: "名义类型",
    nominalBody:
      "Schema 列同时保留物理表示与可选的名义语义类型。HIR 在比较中要求名义兼容，因此上下文 NULL 类型也不能让 UserId = TeamId 合法。自连接通过查询局部的 RelationBindingId 区分同一 TableId 的两次出现。",
    nullTitle: "NULL 是数据库值",
    nullBody:
      "数据库 NULL 是显式的 ScalarValue::Null。Rust Option 留给缺席的子句或元数据。比较遇到 NULL 得到 UNKNOWN；IS NULL / IS NOT NULL 才是显式测试。AND / OR / NOT 使用 SQL 三值逻辑。WHERE 与 JOIN 的 ON 只保留 TRUE，FALSE 与 UNKNOWN 都被拒绝。",
    joinTitle: "JOIN",
    joinBody:
      "别名会隐藏底层表名。限定列经由暴露的关系名解析；非限定列仅在恰好一个可见关系提供该名时被接受。每个 ON 能看见完整左子树与当前右关系，但不能看见更后的连接。执行时 nested-loop 按确定性的左主、右次顺序保留重复。",
    dmlTitle: "DML",
    dmlBody:
      "类型化 DML 使用与堆写入相同的编译器、事务、整页 WAL、回滚与恢复路径。Database::execute 返回查询行或显式 AffectedRows(u64)；query 拒绝变更语句。省略的可空 INSERT 列赋值为 NULL；省略的非空列将被拒绝。UPDATE 基于原始行求值全部右侧，因此 SET a = b, b = a 会交换两列。",
    sortTitle: "排序与聚合",
    sortP1:
      "普通计划是 Scan/Join → Filter → Sort → Project → Limit。聚合计划是 Scan/Join → Filter → Aggregate → Limit。键在投影之前、对着完整 FROM / JOIN 作用域解析，所以查询可以按它不返回的列排序。",
    sortP2:
      "COUNT(*) 计行；COUNT(column) 忽略 NULL。数值 SUM 使用受检算术，并剥去名义含义。MIN / MAX 保留输入 SemanticType。分组键上的 NULL 共享一组，这与表达式里 NULL = NULL 仍为 UNKNOWN 不同。带 GROUP BY 的查询当前拒绝 ORDER BY。",
    multiTitle: "多表写入仍未支持",
    multiBody:
      "核心用 create_tables / open_tables 组合多张未改动的单表堆文件。JOIN 没有改页、WAL、恢复或事务格式。跨表写事务仍是路线图。",
  },
  roadmap: {
    title: "路线图",
    description: "NetbaDB 从 Rust 基础到持久 B+Tree 的垂直切片，以及索引、服务器与 SDK 的下一步。",
    kicker: "路线图",
    heroHtml: "按垂直切片实现，<br />再分阶段扩展。",
    deck:
      "实现顺序为垂直推进。截至 Phase 4C1，已完成 {n} 个阶段。隔离与 MVCC、B+Tree 删除、服务器网络以及 Go 线协议属于规划内容，当前版本不可用。",
    complete: "已完成",
    next: "下一步",
    later: "后续",
    notTitle: "当前版本不包含以下能力",
  },
  start: {
    title: "开始使用",
    description: "构建、测试并嵌入 NetbaDB。Rust 1.97.1 开发工具链，MSRV 1.85.0，AGPL-3.0-or-later。",
    kicker: "开始使用",
    heroHtml: "同步嵌入式<br />数据库 API。",
    deck:
      "仓库固定使用 Rust {toolchain}，并包含 rustfmt 与 clippy。workspace MSRV 为 {msrv}。应用程序通过 netbadb-core::Database 或 sdk/rust 再导出接入。",
    openGithub: "在 GitHub 上查看",
    readReadme: "阅读 README",
    validateTitle: "校验",
    cargoEquiv: "等价的 cargo 命令：",
    embedTitle: "最小嵌入式示例",
    embedBody:
      "创建使用 create-new 语义，并拒绝覆盖已有数据库或 WAL 槽。Database::insert 作为隐式事务运行。需要若干插入共享一条 WAL 链时，调用 begin_transaction、insert_in 与 Transaction::commit。",
    contractTitle: "持久化契约",
    contract: [
      "成功的提交表示其 Commit 记录已到达持久存储；堆页可能仍留在缓冲里，直到淘汰、flush 或 close。",
      "每个打开的数据库对象允许一个写者。只读事务不预定写者。",
      "读者不隔离，可能观察到活动写者的缓冲修改。",
      "实验格式变更时将拒绝旧版本，不提供自动迁移。",
    ],
    fuzzTitle: "Fuzz",
    fuzzBody:
      "fuzz/ 为 WAL 恢复、Page v5 解码与 B+Tree 节点解码提供有界目标。任意字节必须返回节点或类型化错误，而不能 panic、无限分配或开始遍历。",
    licenseTitle: "许可",
    licenseBody:
      "NetbaDB 以 {license} 授权。这是一份 copyleft 许可：如果你修改程序并让用户通过网络与之交互，必须提供对应源代码。",
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
