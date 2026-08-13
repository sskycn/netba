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
    status: "next",
    title: { en: "B+Tree delete / rebalance", zh: "B+Tree 删除 / 再平衡" },
    summary: {
      en: "Delete entries, merge, and rebalance.",
      zh: "删除条目、合并与再平衡。",
    },
  },
  {
    id: "4D",
    status: "next",
    title: { en: "Heap / index maintenance", zh: "堆 / 索引协同维护" },
    summary: {
      en: "Atomic heap DML and index maintenance.",
      zh: "堆 DML 与索引的原子维护。",
    },
  },
  {
    id: "4E",
    status: "next",
    title: { en: "IndexScan", zh: "IndexScan" },
    summary: {
      en: "Index-scan physical operator.",
      zh: "索引扫描物理算子。",
    },
  },
  {
    id: "4F",
    status: "next",
    title: { en: "Statistics and costing", zh: "统计与代价" },
    summary: {
      en: "Catalog statistics and deterministic access-path selection.",
      zh: "目录统计与确定性的访问路径选择。",
    },
  },
  {
    id: "5",
    status: "later",
    title: { en: "Server and protocol", zh: "服务器与协议" },
    summary: {
      en: "netbadbd, a versioned language-neutral protocol, sessions, and TLS.",
      zh: "netbadbd、版本化语言中立协议、会话与 TLS。",
    },
  },
  {
    id: "6",
    status: "later",
    title: { en: "SDKs and tooling", zh: "SDK 与工具" },
    summary: {
      en: "Generated Go client, CLI, LSP, and MCP.",
      zh: "生成式 Go 客户端、CLI、LSP 与 MCP。",
    },
  },
  {
    id: "7",
    status: "later",
    title: { en: "Advanced optimization", zh: "高级优化" },
    summary: {
      en: "Better statistics, rewrite rules, join order, and benchmark-driven complexity.",
      zh: "统计改进、改写规则、连接顺序与基准驱动的复杂度。",
    },
  },
];

export const implemented: Localized<string[]> = {
  en: [
    "Canonical Schema: nullability, primary-key metadata, physical/semantic types, stable fingerprints",
    "SELECT, qualified columns, aliases, chained INNER JOIN, INSERT / UPDATE / DELETE",
    "GROUP BY, multi-key ORDER BY, COUNT / SUM / MIN / MAX, LIMIT",
    "Name resolution and type checking with nominal semantic types and explicit nullability",
    "Sequential scan plus left-major / right-minor nested-loop join physical plans",
    "4 KiB Page v5 slotted pages, pageLSN, PageId-bound CRC32C, generation tombstones",
    "Synchronous buffer pool: pin, dirty tracking, flush, bounded eviction",
    "Versioned WAL: Begin / PageUpdate / Commit / Abort / RollbackComplete",
    "Explicit transaction handles plus implicit statement transactions; WAL-before-data commit durability",
    "Startup recovery: analysis, repeat-history redo, reverse undo; quiescent checkpoints and two-generation WAL retention",
    "Persistent B+Tree: create, arbitrary-height insert, duplicate-preserving point lookup (storage-only)",
    "Embedded netbadb-core::Database API",
  ],
  zh: [
    "Canonical Schema：可空、主键元数据、物理 / 语义类型、稳定指纹",
    "SELECT、限定列、别名、链式 INNER JOIN、INSERT / UPDATE / DELETE",
    "GROUP BY、多键 ORDER BY、COUNT / SUM / MIN / MAX、LIMIT",
    "名义语义类型与显式可空性的名字解析、类型检查",
    "顺序扫描 + 左主 / 右次 nested-loop join 物理计划",
    "4 KiB Page v5 槽页、pageLSN、PageId 绑定 CRC32C、generation 墓碑",
    "同步缓冲池：pin、脏页跟踪、刷盘、有界淘汰",
    "版本化 WAL：Begin / PageUpdate / Commit / Abort / RollbackComplete",
    "显式事务句柄 + 隐式语句事务；WAL-before-data 的提交持久化",
    "启动恢复：分析、重做历史、逆序 undo；静止检查点与两代 WAL 保留",
    "持久 B+Tree：创建、任意高度插入、保留重复的点查（仅存储层）",
    "嵌入式 netbadb-core::Database API",
  ],
};

export const notImplemented: Localized<string[]> = {
  en: [
    "MVCC and read isolation: readers may see an active writer's buffered changes",
    "Concurrent writers, cross-process writer coordination, fuzzy / background checkpoints",
    "B+Tree delete, uniqueness, automatic heap-DML index maintenance, SQL index DDL, IndexScan",
    "Full SQL: outer joins, subqueries, HAVING, DISTINCT, window functions, expression projection",
    "Server mode, network protocol, executable Go client",
    "Migrations between experimental formats: older page / WAL / metadata versions are rejected",
  ],
  zh: [
    "MVCC 与读隔离：读者可能看到活动写者的缓冲修改",
    "并发写者、跨进程写协调、模糊 / 后台检查点",
    "B+Tree 删除、唯一性、堆 DML 自动维护索引、SQL 索引 DDL、IndexScan",
    "完整 SQL：外连接、子查询、HAVING、DISTINCT、窗口函数、表达式投影",
    "服务器模式、网络协议、Go 可执行客户端",
    "实验格式之间的迁移：旧页 / WAL / 元数据版本会被拒绝",
  ],
};
