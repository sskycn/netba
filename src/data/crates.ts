export type Crate = {
  name: string;
  path: string;
  role: string;
  dependsOn: string[];
};

export const crates: Crate[] = [
  {
    name: "netbadb-types",
    path: "crates/netbadb-types",
    role: "共享 ID、物理类型与语义类型",
    dependsOn: [],
  },
  {
    name: "netbadb-schema",
    path: "crates/netbadb-schema",
    role: "语言无关的 Canonical Schema IR",
    dependsOn: ["types"],
  },
  {
    name: "netbadb-parser",
    path: "crates/netbadb-parser",
    role: "小型 typed-query AST 与解析器",
    dependsOn: [],
  },
  {
    name: "netbadb-hir",
    path: "crates/netbadb-hir",
    role: "名字解析与名义类型检查",
    dependsOn: ["parser", "schema", "types"],
  },
  {
    name: "netbadb-rel",
    path: "crates/netbadb-rel",
    role: "类型化逻辑关系 IR",
    dependsOn: ["types"],
  },
  {
    name: "netbadb-compiler",
    path: "crates/netbadb-compiler",
    role: "AST → HIR → 逻辑计划",
    dependsOn: ["hir", "parser", "rel", "schema", "types"],
  },
  {
    name: "netbadb-planner",
    path: "crates/netbadb-planner",
    role: "逻辑计划 → 物理计划",
    dependsOn: ["rel", "types"],
  },
  {
    name: "netbadb-index",
    path: "crates/netbadb-index",
    role: "类型化 B+Tree 排序、节点、编解码与分裂",
    dependsOn: ["types"],
  },
  {
    name: "netbadb-storage",
    path: "crates/netbadb-storage",
    role: "事务、WAL、页、缓冲池、堆与持久 B+Tree",
    dependsOn: ["index", "schema", "types"],
  },
  {
    name: "netbadb-executor",
    path: "crates/netbadb-executor",
    role: "同步物理计划执行",
    dependsOn: ["planner", "rel", "storage", "types"],
  },
  {
    name: "netbadb-core",
    path: "crates/netbadb-core",
    role: "原生嵌入式 Database API",
    dependsOn: ["compiler", "planner", "executor", "storage", "schema", "types"],
  },
  {
    name: "netbadb-sdk",
    path: "sdk/rust",
    role: "面向应用的稳定再导出表面",
    dependsOn: ["core", "executor", "schema", "types"],
  },
];

export const layers = [
  {
    title: "应用边界",
    items: ["Rust Schema API / SDK", "未来：Go SDK 与 NetbaDB 协议客户端"],
  },
  {
    title: "编译",
    items: ["Parser → AST", "HIR + 类型检查", "Typed Relational IR"],
  },
  {
    title: "计划与执行",
    items: ["Optimizer / Planner", "同步 Executor"],
  },
  {
    title: "事务与存储",
    items: ["事务边界", "WAL + 恢复", "缓冲池 + 槽页 + 堆 / B+Tree"],
  },
];
