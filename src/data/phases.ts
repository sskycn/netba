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
    id: "7B",
    status: "complete",
    title: { en: "Range IndexScan", zh: "范围 IndexScan" },
    summary: {
      en: "Costed bounded Int64/UInt64 range scans.",
      zh: "带代价的有界 Int64/UInt64 范围扫描。",
    },
  },
  {
    id: "6E2",
    status: "next",
    title: { en: "MCP and extra adapters", zh: "MCP 与其他适配器" },
    summary: {
      en: "MCP and additional tooling adapters.",
      zh: "MCP 以及其他工具适配器。",
    },
  },
  {
    id: "7+",
    status: "later",
    title: { en: "Further optimization", zh: "后续优化" },
    summary: {
      en: "Index joins, one-sided/Text range costing, and benchmark-driven work.",
      zh: "索引连接、单侧 / Text 范围代价，以及由基准驱动的后续工作。",
    },
  },
];

export const implemented: Localized<string[]> = {
  en: [
    "Embedded Database API and netbadb-sdk re-exports",
    "SELECT, INNER JOIN, INSERT / UPDATE / DELETE, ORDER BY, GROUP BY, aggregates",
    "Registered indexes, DML maintenance, point IndexScan, ANALYZE, range IndexScan",
    "WAL, crash recovery, checkpoints, and generation-safe RowIds",
    "netbadbd TCP server with Protocol v1, mutual TLS, and per-table authorization",
    "Rust remote client, Go Protocol v1 client, inspect CLI, and diagnostics LSP",
  ],
  zh: [
    "嵌入式 Database API 与 netbadb-sdk 再导出",
    "SELECT、INNER JOIN、INSERT / UPDATE / DELETE、ORDER BY、GROUP BY、聚合",
    "已注册索引、DML 维护、点查 IndexScan、ANALYZE、范围 IndexScan",
    "WAL、崩溃恢复、检查点与 generation 安全的 RowId",
    "netbadbd TCP 服务器、Protocol v1、双向 TLS 与按表授权",
    "Rust 远程客户端、Go Protocol v1 客户端、检查 CLI 与诊断 LSP",
  ],
};

export const notImplemented: Localized<string[]> = {
  en: [
    "MVCC and read isolation: readers may observe an active writer's buffered changes",
    "Concurrent writers and cross-process file locking",
    "SQL index DDL, uniqueness enforcement, index-only scans, and index joins",
    "Full SQL: outer joins, subqueries, HAVING, DISTINCT, window functions",
    "Multi-table write transactions",
    "MCP adapters and migrations between experimental on-disk formats",
  ],
  zh: [
    "MVCC 与读隔离：读者可能观察到活动写者的缓冲修改",
    "并发写者与跨进程文件锁",
    "SQL 索引 DDL、唯一性约束、仅索引扫描与索引连接",
    "完整 SQL：外连接、子查询、HAVING、DISTINCT、窗口函数",
    "跨表写事务",
    "MCP 适配器，以及实验性磁盘格式之间的迁移",
  ],
};
