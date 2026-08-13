export type PhaseStatus = "complete" | "next" | "later";

export type Phase = {
  id: string;
  title: string;
  status: PhaseStatus;
  summary: string;
};

export const phases: Phase[] = [
  {
    id: "0",
    title: "Rust 基础",
    status: "complete",
    summary: "稳定类型、Schema、解析器、HIR 与关系 IR。",
  },
  {
    id: "1",
    title: "存储基础",
    status: "complete",
    summary: "4 KiB 槽页、有界缓冲池、堆插入 / 扫描与重开。",
  },
  {
    id: "2A",
    title: "事务 + WAL 核心",
    status: "complete",
    summary: "事务生命周期、版本化 WAL、LSN / pageLSN 与提交持久化。",
  },
  {
    id: "2B",
    title: "崩溃恢复",
    status: "complete",
    summary: "启动分析、重做历史、逆序 undo 与崩溃尾处理。",
  },
  {
    id: "2B.1",
    title: "单写者 + 运行时回滚",
    status: "complete",
    summary: "惰性写者所有权、可重试 commit / rollback 与 before-image undo。",
  },
  {
    id: "2C",
    title: "检查点 + WAL 生命周期",
    status: "complete",
    summary: "静止检查点、单调逻辑 LSN 与有界 WAL 代际回收。",
  },
  {
    id: "3A",
    title: "类型化表达式 + NULL",
    status: "complete",
    summary: "上下文 NULL 类型、三值逻辑与显式 IS NULL。",
  },
  {
    id: "3B",
    title: "类型化 DML",
    status: "complete",
    summary: "INSERT / UPDATE / DELETE、稳定 RowId 与受影响行结果。",
  },
  {
    id: "3C",
    title: "INNER JOIN",
    status: "complete",
    summary: "限定列、别名、自连接与 nested-loop 执行。",
  },
  {
    id: "3C.5",
    title: "Schema 指纹",
    status: "complete",
    summary: "规范表编码、SHA-256 指纹，以及打开时的身份校验。",
  },
  {
    id: "integrity",
    title: "页与 WAL 完整性",
    status: "complete",
    summary: "Page v4/v5 CRC32C、WAL v3 校验和与解码 fuzz。",
  },
  {
    id: "3D",
    title: "聚合 + 排序",
    status: "complete",
    summary: "ORDER BY、全局聚合与内存 GROUP BY。",
  },
  {
    id: "4A",
    title: "版本化 RowId",
    status: "complete",
    summary: "Page v5 slot generation、墓碑复用与过期定位符检测。",
  },
  {
    id: "4B",
    title: "堆复用 + 安全搬迁",
    status: "complete",
    summary: "确定性 first-fit，以及返回当前 RowId 的 UPDATE 搬迁。",
  },
  {
    id: "4C1",
    title: "持久 B+Tree",
    status: "complete",
    summary: "事务性创建 / 插入 / 点查，以及混合页与分裂恢复。",
  },
  {
    id: "4C2",
    title: "B+Tree 删除 / 再平衡",
    status: "next",
    summary: "删除条目、合并与再平衡。",
  },
  {
    id: "4D",
    title: "堆 / 索引协同维护",
    status: "next",
    summary: "堆 DML 与索引的原子维护。",
  },
  {
    id: "4E",
    title: "IndexScan",
    status: "next",
    summary: "索引扫描物理算子。",
  },
  {
    id: "4F",
    title: "统计与代价",
    status: "next",
    summary: "目录统计与确定性的访问路径选择。",
  },
  {
    id: "5",
    title: "服务器与协议",
    status: "later",
    summary: "netbadbd、版本化语言中立协议、会话与 TLS。",
  },
  {
    id: "6",
    title: "SDK 与工具",
    status: "later",
    summary: "生成式 Go 客户端、CLI、LSP 与 MCP。",
  },
  {
    id: "7",
    title: "高级优化",
    status: "later",
    summary: "统计改进、改写规则、连接顺序与基准驱动的复杂度。",
  },
];

export const implemented = [
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
];

export const notImplemented = [
  "MVCC 与读隔离：读者可能看到活动写者的缓冲修改",
  "并发写者、跨进程写协调、模糊 / 后台检查点",
  "B+Tree 删除、唯一性、堆 DML 自动维护索引、SQL 索引 DDL、IndexScan",
  "完整 SQL：外连接、子查询、HAVING、DISTINCT、窗口函数、表达式投影",
  "服务器模式、网络协议、Go 可执行客户端",
  "实验格式之间的迁移：旧页 / WAL / 元数据版本会被拒绝",
];
