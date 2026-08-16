import type { Locale } from "../i18n/locale";

export type Localized<T> = Record<Locale, T>;

export type Crate = {
  name: string;
  path: string;
  role: Localized<string>;
  dependsOn: string[];
};

export const crates: Crate[] = [
  {
    name: "netbadb-types",
    path: "crates/netbadb-types",
    role: {
      en: "Shared IDs, physical types, and semantic types",
      zh: "共享 ID、物理类型与语义类型",
    },
    dependsOn: [],
  },
  {
    name: "netbadb-schema",
    path: "crates/netbadb-schema",
    role: {
      en: "Language-independent Canonical Schema IR",
      zh: "语言无关的 Canonical Schema IR",
    },
    dependsOn: ["types"],
  },
  {
    name: "netbadb-parser",
    path: "crates/netbadb-parser",
    role: {
      en: "Small typed-query AST and parser",
      zh: "小型 typed-query AST 与解析器",
    },
    dependsOn: [],
  },
  {
    name: "netbadb-hir",
    path: "crates/netbadb-hir",
    role: {
      en: "Name resolution and nominal type checking",
      zh: "名字解析与名义类型检查",
    },
    dependsOn: ["parser", "schema", "types"],
  },
  {
    name: "netbadb-rel",
    path: "crates/netbadb-rel",
    role: {
      en: "Typed logical relational IR",
      zh: "类型化逻辑关系 IR",
    },
    dependsOn: ["types"],
  },
  {
    name: "netbadb-compiler",
    path: "crates/netbadb-compiler",
    role: {
      en: "AST → HIR → logical plan",
      zh: "AST → HIR → 逻辑计划",
    },
    dependsOn: ["hir", "parser", "rel", "schema", "types"],
  },
  {
    name: "netbadb-planner",
    path: "crates/netbadb-planner",
    role: {
      en: "Logical plan → physical plan, including IndexScan",
      zh: "逻辑计划 → 物理计划，含 IndexScan",
    },
    dependsOn: ["index", "rel", "types"],
  },
  {
    name: "netbadb-schema-spec",
    path: "crates/netbadb-schema-spec",
    role: {
      en: "SDK Schema Spec v1 parsing and fingerprints",
      zh: "SDK Schema Spec v1 解析与指纹",
    },
    dependsOn: ["schema", "types"],
  },
  {
    name: "netbadb-tooling",
    path: "crates/netbadb-tooling",
    role: {
      en: "Stable schema-driven SQL diagnostics",
      zh: "稳定的、由 schema 驱动的 SQL 诊断",
    },
    dependsOn: ["compiler", "hir", "parser", "schema"],
  },
  {
    name: "netbadb-inspect",
    path: "crates/netbadb-inspect",
    role: {
      en: "Catalog and plan inspection DTOs",
      zh: "目录与计划检查 DTO",
    },
    dependsOn: ["schema", "types"],
  },
  {
    name: "netbadb-protocol",
    path: "crates/netbadb-protocol",
    role: {
      en: "Protocol v1 binary wire contract",
      zh: "Protocol v1 二进制线协议",
    },
    dependsOn: ["types"],
  },
  {
    name: "netbadb-client",
    path: "crates/netbadb-client",
    role: {
      en: "Synchronous Protocol v1 remote client",
      zh: "同步 Protocol v1 远程客户端",
    },
    dependsOn: ["protocol", "schema", "types"],
  },
  {
    name: "netbadb-server",
    path: "crates/netbadb-server",
    role: {
      en: "Sessions, authorization, and blocking TCP runtime",
      zh: "会话、授权与阻塞式 TCP 运行时",
    },
    dependsOn: ["core", "protocol", "schema", "types"],
  },
  {
    name: "netbadb-codegen",
    path: "crates/netbadb-codegen",
    role: {
      en: "Schema Spec validation and Go source generation",
      zh: "Schema Spec 校验与 Go 源码生成",
    },
    dependsOn: ["schema-spec", "schema", "types"],
  },
  {
    name: "netbadb-index",
    path: "crates/netbadb-index",
    role: {
      en: "Typed B+Tree ordering, nodes, codecs, and splits",
      zh: "类型化 B+Tree 排序、节点、编解码与分裂",
    },
    dependsOn: ["types"],
  },
  {
    name: "netbadb-storage",
    path: "crates/netbadb-storage",
    role: {
      en: "Transactions, WAL, pages, buffer pool, heap, and persistent B+Tree",
      zh: "事务、WAL、页、缓冲池、堆与持久 B+Tree",
    },
    dependsOn: ["index", "schema", "types"],
  },
  {
    name: "netbadb-executor",
    path: "crates/netbadb-executor",
    role: {
      en: "Synchronous physical-plan execution",
      zh: "同步物理计划执行",
    },
    dependsOn: ["planner", "rel", "storage", "types"],
  },
  {
    name: "netbadb-core",
    path: "crates/netbadb-core",
    role: {
      en: "Native embedded Database API",
      zh: "原生嵌入式 Database API",
    },
    dependsOn: ["compiler", "inspect", "planner", "executor", "storage", "schema", "types"],
  },
  {
    name: "netbadb-sdk",
    path: "sdk/rust",
    role: {
      en: "Embedded and remote application façade",
      zh: "嵌入式与远程应用门面",
    },
    dependsOn: ["core", "client", "inspect", "schema", "types"],
  },
  {
    name: "netbadbd",
    path: "cmd/netbadbd",
    role: {
      en: "Standalone manifest-driven TCP server",
      zh: "由清单驱动的独立 TCP 服务器",
    },
    dependsOn: ["server"],
  },
  {
    name: "netbadb",
    path: "cmd/netbadb",
    role: {
      en: "Offline local inspection CLI",
      zh: "离线本地检查 CLI",
    },
    dependsOn: ["sdk", "server"],
  },
];

export const layers: Localized<{ title: string; items: string[] }[]> = {
  en: [
    {
      title: "Application edge",
      items: ["Rust embedded SDK", "Rust remote client", "Go Protocol v1 client", "netbadbd"],
    },
    {
      title: "Compile",
      items: ["Parser → AST", "HIR + type checking", "Typed Relational IR"],
    },
    {
      title: "Plan and execute",
      items: ["Optimizer / Planner", "Synchronous executor"],
    },
    {
      title: "Transactions and storage",
      items: ["Transaction boundary", "WAL + recovery", "Buffer pool + slotted pages + heap / B+Tree"],
    },
  ],
  zh: [
    {
      title: "应用边界",
      items: ["Rust 嵌入式 SDK", "Rust 远程客户端", "Go Protocol v1 客户端", "netbadbd"],
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
  ],
};
