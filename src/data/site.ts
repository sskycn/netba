export const site = {
  name: "NetbaDB",
  tagline: "强类型关系型数据库核心",
  description:
    "NetbaDB 是用 Rust 写成的强类型关系型数据库核心。它用语言无关的 Canonical Schema IR 隔开应用语言与引擎，并提供一条从解析器到页、WAL 与崩溃恢复的真实垂直切片。",
  github: "https://github.com/sskycn/netbadb",
  license: "AGPL-3.0-or-later",
  version: "0.1.0",
  phase: "4C1",
  rustToolchain: "1.97.1",
  msrv: "1.85.0",
  pageSize: "4 KiB",
  pageVersion: "v5",
  walVersion: "v3",
  recordVersion: "v2",
  heapMetaVersion: "v2",
  schemaVersion: "v1",
} as const;

export const nav = [
  { href: "/architecture", label: "架构" },
  { href: "/storage", label: "存储" },
  { href: "/query", label: "查询" },
  { href: "/roadmap", label: "路线图" },
  { href: "/start", label: "起步" },
] as const;
