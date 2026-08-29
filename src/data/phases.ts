import type { Locale } from "../i18n/locale";

export type Localized<T> = Record<Locale, T>;
export type PhaseStatus = "complete" | "next" | "later";

export type Phase = {
  id: string;
  status: PhaseStatus;
  title: Localized<string>;
  summary: Localized<string>;
};

export const phases: Phase[] = [
  {
    id: "0",
    status: "complete",
    title: { en: "Rust foundation", zh: "Rust 基础" },
    summary: {
      en: "Stable types, schema, parser, HIR, and relational IR.",
      zh: "稳定类型、Schema、解析器、HIR 与关系 IR。",
    },
  },
  {
    id: "1",
    status: "complete",
    title: { en: "Storage foundation", zh: "存储基础" },
    summary: {
      en: "4 KiB slotted pages, bounded buffer pool, heap insert/scan, and reopen.",
      zh: "4 KiB 槽页、有界缓冲池、堆插入 / 扫描与重开。",
    },
  },
  {
    id: "2A",
    status: "complete",
    title: { en: "Transactions + WAL core", zh: "事务 + WAL 核心" },
    summary: {
      en: "Transaction lifecycle, versioned WAL, LSN / pageLSN, and durable commit.",
      zh: "事务生命周期、版本化 WAL、LSN / pageLSN 与提交持久化。",
    },
  },
  {
    id: "2B",
    status: "complete",
    title: { en: "Crash recovery", zh: "崩溃恢复" },
    summary: {
      en: "Startup analysis, repeat-history redo, reverse undo, and crash-tail handling.",
      zh: "启动分析、重做历史、逆序 undo 与崩溃尾处理。",
    },
  },
  {
    id: "2B.1",
    status: "complete",
    title: { en: "Single writer + runtime rollback", zh: "单写者 + 运行时回滚" },
    summary: {
      en: "Lazy writer ownership, retryable commit/rollback, and before-image undo.",
      zh: "惰性写者所有权、可重试 commit / rollback 与 before-image undo。",
    },
  },
  {
    id: "2C",
    status: "complete",
    title: { en: "Checkpoint + WAL lifecycle", zh: "检查点 + WAL 生命周期" },
    summary: {
      en: "Quiescent checkpoints, monotonic logical LSNs, and bounded WAL generation recycling.",
      zh: "静止检查点、单调逻辑 LSN 与有界 WAL 代际回收。",
    },
  },
  {
    id: "3A",
    status: "complete",
    title: { en: "Typed expressions + NULL", zh: "类型化表达式 + NULL" },
    summary: {
      en: "Contextual NULL typing, three-valued logic, and explicit IS NULL.",
      zh: "上下文 NULL 类型、三值逻辑与显式 IS NULL。",
    },
  },
  {
    id: "3B",
    status: "complete",
    title: { en: "Typed DML", zh: "类型化 DML" },
    summary: {
      en: "INSERT / UPDATE / DELETE, stable RowIds, and affected-row results.",
      zh: "INSERT / UPDATE / DELETE、稳定 RowId 与受影响行结果。",
    },
  },
  {
    id: "3C",
    status: "complete",
    title: { en: "INNER JOIN", zh: "INNER JOIN" },
    summary: {
      en: "Qualified columns, aliases, self joins, and nested-loop execution.",
      zh: "限定列、别名、自连接与 nested-loop 执行。",
    },
  },
  {
    id: "3C.5",
    status: "complete",
    title: { en: "Schema fingerprints", zh: "Schema 指纹" },
    summary: {
      en: "Canonical table encoding, SHA-256 fingerprints, and identity checks on open.",
      zh: "规范表编码、SHA-256 指纹，以及打开时的身份校验。",
    },
  },
  {
    id: "integrity",
    status: "complete",
    title: { en: "Page and WAL integrity", zh: "页与 WAL 完整性" },
    summary: {
      en: "Page v4/v5 CRC32C, WAL v3 checksums, and decoder fuzzing.",
      zh: "Page v4/v5 CRC32C、WAL v3 校验和与解码 fuzz。",
    },
  },
  {
    id: "3D",
    status: "complete",
    title: { en: "Aggregates + sort", zh: "聚合 + 排序" },
    summary: {
      en: "ORDER BY, global aggregates, and in-memory GROUP BY.",
      zh: "ORDER BY、全局聚合与内存 GROUP BY。",
    },
  },
  {
    id: "4A",
    status: "complete",
    title: { en: "Versioned RowId", zh: "版本化 RowId" },
    summary: {
      en: "Page v5 slot generations, tombstone reuse, and stale-locator detection.",
      zh: "Page v5 slot generation、墓碑复用与过期定位符检测。",
    },
  },
  {
    id: "4B",
    status: "complete",
    title: { en: "Heap reuse + safe relocation", zh: "堆复用 + 安全搬迁" },
    summary: {
      en: "Deterministic first-fit and UPDATE relocation that returns the current RowId.",
      zh: "确定性 first-fit，以及返回当前 RowId 的 UPDATE 搬迁。",
    },
  },
  {
    id: "4C1",
    status: "complete",
    title: { en: "Persistent B+Tree", zh: "持久 B+Tree" },
    summary: {
      en: "Transactional create/insert/point lookup, mixed pages, and split recovery.",
      zh: "事务性创建 / 插入 / 点查，以及混合页与分裂恢复。",
    },
  },
  {
    id: "4C2",
    status: "complete",
    title: { en: "B+Tree delete / rebalance", zh: "B+Tree 删除 / 再平衡" },
    summary: {
      en: "Exact (key, RowId) delete, merge-only rebalance, and root collapse.",
      zh: "精确 (key, RowId) 删除、仅合并再平衡与根收缩。",
    },
  },
  {
    id: "4D1",
    status: "complete",
    title: { en: "Index catalog + backfill", zh: "索引目录与回填" },
    summary: {
      en: "Persistent IndexCatalog and transactional create_index backfill.",
      zh: "持久 IndexCatalog，以及事务性 create_index 回填。",
    },
  },
  {
    id: "4D2",
    status: "complete",
    title: { en: "Heap / index DML maintenance", zh: "堆 / 索引 DML 维护" },
    summary: {
      en: "Registered indexes stay consistent with heap and SQL DML.",
      zh: "已注册索引与堆及 SQL DML 保持一致。",
    },
  },
  {
    id: "4E",
    status: "complete",
    title: { en: "Point IndexScan", zh: "点查 IndexScan" },
    summary: {
      en: "Equality and IS NULL predicates can select a point IndexScan.",
      zh: "等值与 IS NULL 谓词可选择点查 IndexScan。",
    },
  },
  {
    id: "4F",
    status: "complete",
    title: { en: "ANALYZE and costing", zh: "ANALYZE 与代价" },
    summary: {
      en: "Explicit ANALYZE snapshots and deterministic point access-path costs.",
      zh: "显式 ANALYZE 快照，以及确定性的点访问路径代价。",
    },
  },
  {
    id: "5A",
    status: "complete",
    title: { en: "Protocol v1", zh: "Protocol v1" },
    summary: {
      en: "Language-neutral binary framing, schema handshake, and streamed rows.",
      zh: "语言中立的二进制分帧、模式握手与流式结果。",
    },
  },
  {
    id: "5B",
    status: "complete",
    title: { en: "netbadbd server", zh: "netbadbd 服务器" },
    summary: {
      en: "Manifest bootstrap, TCP sessions, and a dedicated database worker.",
      zh: "清单启动、TCP 会话与专用数据库工作线程。",
    },
  },
  {
    id: "5C",
    status: "complete",
    title: { en: "TLS and authorization", zh: "TLS 与授权" },
    summary: {
      en: "Mutual TLS, certificate principals, and per-table operation scopes.",
      zh: "双向 TLS、证书主体与按表操作范围。",
    },
  },
  {
    id: "6A",
    status: "complete",
    title: { en: "Go Protocol client", zh: "Go 协议客户端" },
    summary: {
      en: "Independent Go client and generated typed bindings.",
      zh: "独立 Go 客户端与生成的类型化绑定。",
    },
  },
  {
    id: "6C",
    status: "complete",
    title: { en: "Rust remote SDK", zh: "Rust 远程 SDK" },
    summary: {
      en: "Synchronous netbadb-sdk::remote client over Protocol v1.",
      zh: "基于 Protocol v1 的同步 netbadb-sdk::remote 客户端。",
    },
  },
  {
    id: "6D",
    status: "complete",
    title: { en: "Inspection CLI", zh: "检查 CLI" },
    summary: {
      en: "Offline catalog and statement inspection with netbadb.",
      zh: "使用 netbadb 进行离线目录与语句检查。",
    },
  },
  {
    id: "6E1",
    status: "complete",
    title: { en: "SQL diagnostics LSP", zh: "SQL 诊断 LSP" },
    summary: {
      en: "Diagnostics-only language server over shared compiler diagnostics.",
      zh: "基于共享编译器诊断的只读语言服务器。",
    },
  },
  {
    id: "7A",
    status: "complete",
    title: { en: "Performance baseline", zh: "性能基线" },
    summary: {
      en: "Reproducible warm-cache benchmarks without changing engine behavior.",
      zh: "可复现的热缓存基准，不改变引擎行为。",
    },
  },
  {
    id: "7B",
    status: "complete",
    title: { en: "Range IndexScan", zh: "范围 IndexScan" },
    summary: {
      en: "Costed bounded Int64/UInt64 range scans.",
      zh: "带代价的有界 Int64/UInt64 范围扫描。",
    },
  },
  {
    id: "7C",
    status: "complete",
    title: { en: "Predicate-first NestedLoopJoin", zh: "谓词优先 NestedLoopJoin" },
    summary: {
      en: "Rejected join pairs allocate no combined row.",
      zh: "被拒绝的连接候选不再分配合并行。",
    },
  },
  {
    id: "7D",
    status: "complete",
    title: { en: "Costed HashJoin", zh: "带代价的 HashJoin" },
    summary: {
      en: "Analyzed Scan × Scan INNER JOIN may select a simple equi HashJoin.",
      zh: "经过分析的 Scan × Scan INNER JOIN 可选择简单等值 HashJoin。",
    },
  },
  {
    id: "7E",
    status: "complete",
    title: { en: "Validate-once heap scan", zh: "一次校验的堆扫描" },
    summary: {
      en: "Each immutable heap page is fully validated once per sequential scan.",
      zh: "顺序扫描中每个不可变堆页只做一次完整校验。",
    },
  },
  {
    id: "7F",
    status: "complete",
    title: { en: "Join predicate prebinding", zh: "连接谓词预绑定" },
    summary: {
      en: "NLJ and HashJoin bind column positions once before candidate loops.",
      zh: "NLJ 与 HashJoin 在候选循环前一次性绑定列位置。",
    },
  },
  {
    id: "7G",
    status: "complete",
    title: { en: "Borrowed join evaluation", zh: "借用式连接求值" },
    summary: {
      en: "Join predicates borrow column and literal scalars; only computed results are owned.",
      zh: "连接谓词借用列与字面量标量，仅计算结果为自有值。",
    },
  },
  {
    id: "7H",
    status: "complete",
    title: { en: "Inequality bound rejection", zh: "不等式边界拒绝" },
    summary: {
      en: "NestedLoopJoin skips left probes that cannot match any right row.",
      zh: "NestedLoopJoin 跳过不可能匹配任何右行的左探测。",
    },
  },
  {
    id: "7I",
    status: "complete",
    title: { en: "Adaptive inequality sweep", zh: "自适应不等式扫描" },
    summary: {
      en: "Exact candidate counting can replace a full NestedLoopJoin inner loop.",
      zh: "精确候选计数可替代完整 NestedLoopJoin 内层循环。",
    },
  },
  {
    id: "7J",
    status: "complete",
    title: { en: "Required-column decode", zh: "按需列解码" },
    summary: {
      en: "Query plans decode only required heap columns; DML still uses full rows.",
      zh: "查询计划仅解码所需堆列；DML 仍使用完整行。",
    },
  },
  {
    id: "7K",
    status: "complete",
    title: { en: "Move-aware projection", zh: "移动感知投影" },
    summary: {
      en: "Identity and unique projections move owned values instead of cloning them.",
      zh: "恒等与唯一投影移动已有值，而不是克隆。",
    },
  },
  {
    id: "7L",
    status: "complete",
    title: { en: "Direct COUNT(column) scan", zh: "直接 COUNT(column) 扫描" },
    summary: {
      en: "A lone global COUNT(column) over SeqScan counts presence without materializing rows.",
      zh: "单独的全局 COUNT(column) 在 SeqScan 上统计存在性，不物化行。",
    },
  },
  {
    id: "7M",
    status: "complete",
    title: { en: "Direct multi-COUNT scan", zh: "直接多 COUNT 扫描" },
    summary: {
      en: "One exact heap pass shares live-row counts across multiple COUNT outputs.",
      zh: "一次精确堆扫描可在多个 COUNT 输出间共享存活行计数。",
    },
  },
  {
    id: "7N-7V",
    status: "complete",
    title: { en: "Filter and COUNT streaming", zh: "Filter 与 COUNT 流式执行" },
    summary: {
      en: "Borrowed Filter evaluation, streamed SeqScan/Filter/Project, and COUNT specializations.",
      zh: "借用式 Filter 求值、流式 SeqScan/Filter/Project，以及 COUNT 特化路径。",
    },
  },
  {
    id: "51",
    status: "complete",
    title: { en: "Multi-storage atomic commit", zh: "多存储原子提交" },
    summary: {
      en: "WAL Prepare plus an independent coordinator log for two or more local write storages.",
      zh: "WAL Prepare 与独立协调日志，用于两个及以上本地写存储。",
    },
  },
  {
    id: "52",
    status: "complete",
    title: { en: "Range partitions", zh: "范围分区" },
    summary: {
      en: "PartitionCatalog v1 RANGE partitioning with exact pruning and atomic row movement.",
      zh: "PartitionCatalog v1 范围分区，支持精确裁剪与原子行迁移。",
    },
  },
  {
    id: "53",
    status: "complete",
    title: { en: "LSM storage", zh: "LSM 存储" },
    summary: {
      en: "Synchronous LSM table storage with MVCC, SSTables, flush, and leveled compaction.",
      zh: "同步 LSM 表存储，含 MVCC、SSTable、flush 与分层 compaction。",
    },
  },
  {
    id: "55",
    status: "complete",
    title: { en: "Batch execution", zh: "批执行" },
    summary: {
      en: "Bounded 256-row batches for SeqScan, Filter, Project, Limit, Aggregate, and HashJoin probe.",
      zh: "至多 256 行的批处理，覆盖 SeqScan、Filter、Project、Limit、Aggregate 与 HashJoin 探测。",
    },
  },
  {
    id: "isolation",
    status: "complete",
    title: { en: "Read Committed and Repeatable Read", zh: "读已提交与可重复读" },
    summary: {
      en: "Explicit isolation handles; implicit statements use Read Committed. Serializable is not available.",
      zh: "显式隔离句柄；隐式语句使用读已提交。不提供可串行化。",
    },
  },
  {
    id: "72",
    status: "complete",
    title: { en: "Index nested-loop join", zh: "索引嵌套循环连接" },
    summary: {
      en: "Analyzed Scan × Scan INNER equality joins may point-probe an ordered right index.",
      zh: "经过分析的 Scan × Scan 等值 INNER JOIN 可对右侧有序索引做点探测。",
    },
  },
  {
    id: "pgwire",
    status: "complete",
    title: { en: "Experimental PostgreSQL v3 wire", zh: "实验性 PostgreSQL v3 协议" },
    summary: {
      en: "netbadbd --postgres accepts Simple and Extended Query on the manifest listen address.",
      zh: "netbadbd --postgres 在清单监听地址上接受 Simple 与 Extended Query。",
    },
  },
  {
    id: "73",
    status: "complete",
    title: { en: "IndexJoin cost calibration", zh: "IndexJoin 代价校准" },
    summary: {
      en: "Heap point-probe costs stay aligned with managed_page_count SeqScan comparison.",
      zh: "堆点探测代价与 managed_page_count 顺序扫描比较保持一致。",
    },
  },
  {
    id: "next",
    status: "next",
    title: { en: "Serializable isolation", zh: "可串行化隔离" },
    summary: {
      en: "Serializable isolation, concurrent writers, and broader join enumeration remain later work.",
      zh: "可串行化隔离、并发写者与更广的连接枚举仍属后续工作。",
    },
  },
  {
    id: "6E2",
    status: "later",
    title: { en: "MCP adapter", zh: "MCP 适配器" },
    summary: {
      en: "Deferred: official MCP SDKs currently exceed the Rust 1.85 MSRV.",
      zh: "暂缓：官方 MCP SDK 目前超过 Rust 1.85 MSRV。",
    },
  },
  {
    id: "7+",
    status: "later",
    title: { en: "Further optimization", zh: "后续优化" },
    summary: {
      en: "Index joins, one-sided/Text range costing, and broader HashJoin eligibility.",
      zh: "索引连接、单侧 / Text 范围代价，以及更广的 HashJoin 适用范围。",
    },
  },
];

export const implemented: Localized<string[]> = {
  en: [
    "Embedded Database API and netbadb-sdk re-exports",
    "SELECT, INNER JOIN, INSERT / UPDATE / DELETE, ORDER BY, GROUP BY, aggregates",
    "Registered indexes, DML maintenance, point and range IndexScan, ANALYZE",
    "HashJoin, NestedLoopJoin, and costed Index Nested-Loop Join after ANALYZE",
    "Read Committed and Repeatable Read; heap MVCC, vacuum, and multi-storage atomic commit",
    "RANGE partitions and synchronous LSM table storage",
    "WAL, crash recovery, checkpoints, and generation-safe locators",
    "netbadbd, Protocol v1, experimental PostgreSQL v3, inspect CLI (JSON v5), and diagnostics LSP",
  ],
  zh: [
    "嵌入式 Database API 与 netbadb-sdk 再导出",
    "SELECT、INNER JOIN、INSERT / UPDATE / DELETE、ORDER BY、GROUP BY、聚合",
    "已注册索引、DML 维护、点查与范围 IndexScan、ANALYZE",
    "ANALYZE 之后可选用 HashJoin、NestedLoopJoin 或带代价的 Index Nested-Loop Join",
    "读已提交与可重复读；堆 MVCC、vacuum 与多存储原子提交",
    "RANGE 分区与同步 LSM 表存储",
    "WAL、崩溃恢复、检查点与 generation 安全的定位符",
    "netbadbd、Protocol v1、实验性 PostgreSQL v3、检查 CLI（JSON v5）与诊断 LSP",
  ],
};

export const notImplemented: Localized<string[]> = {
  en: [
    "Serializable isolation, concurrent writers, and cross-process file locking",
    "SQL index DDL, uniqueness enforcement, and index-only scans",
    "Full SQL: outer joins, subqueries, HAVING, DISTINCT, window functions",
    "External sort spill, simultaneous native and PostgreSQL listeners",
    "PostgreSQL DDL, complete pg_catalog, and password/TLS authentication for pgwire",
    "MCP adapter (deferred past MSRV), SQL EXPLAIN, and on-disk format migrations",
  ],
  zh: [
    "可串行化隔离、并发写者与跨进程文件锁",
    "SQL 索引 DDL、唯一性约束与仅索引扫描",
    "完整 SQL：外连接、子查询、HAVING、DISTINCT、窗口函数",
    "外部排序落盘，以及同时开启原生与 PostgreSQL 监听",
    "PostgreSQL DDL、完整 pg_catalog，以及 pgwire 的口令 / TLS 认证",
    "MCP 适配器（受 MSRV 限制暂缓）、SQL EXPLAIN，以及磁盘格式迁移",
  ],
};
