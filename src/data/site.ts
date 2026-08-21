export const site = {
  name: "NetbaDB",
  url: "https://netba.net",
  github: "https://github.com/sskycn/netbadb",
  license: "AGPL-3.0-or-later",
  version: "0.1.0",
  phase: "7L",
  rustToolchain: "1.97.1",
  msrv: "1.85.0",
  pageSize: "4 KiB",
  pageVersion: "v5",
  walVersion: "v3",
  recordVersion: "v2",
  heapMetaVersion: "v3",
  schemaVersion: "v1",
  protocolVersion: "v1",
} as const;

export const nav = [
  { href: "/start", key: "start" },
  { href: "/query", key: "query" },
  { href: "/architecture", key: "architecture" },
  { href: "/storage", key: "storage" },
  { href: "/roadmap", key: "roadmap" },
] as const;
