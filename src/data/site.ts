export const site = {
  name: "NetbaDB",
  url: "https://netba.net",
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
  { href: "/architecture", key: "architecture" },
  { href: "/storage", key: "storage" },
  { href: "/query", key: "query" },
  { href: "/roadmap", key: "roadmap" },
  { href: "/start", key: "start" },
] as const;
