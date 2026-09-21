export const site = {
  name: "Netba",
  url: "https://netba.net",
  license: "AGPL-3.0-or-later",
  db: {
    name: "NetbaDB",
    github: "https://github.com/sskycn/netbadb",
    version: "0.1.0",
    phase: "73+",
    rustToolchain: "1.97.1",
    msrv: "1.85.0",
    pageSize: "4 KiB",
    pageVersion: "v5",
    walVersion: "v4",
    recordVersion: "v5",
    heapMetaVersion: "v5",
    schemaVersion: "v1",
    schemaSpecVersion: "v2",
    protocolVersion: "v2",
    inspectionVersion: "v7",
    manifestVersion: "v11",
    operatorProtocol: "v7",
  },
  iot: {
    name: "NetbaIoT",
    github: "https://github.com/sskycn/netbaiot",
    version: "0.1.0",
    msrv: "1.88.0",
    protocolVersion: "v1",
    mqtt: "3.1.1",
  },
} as const;

export const productNav = [
  { href: "/start", key: "db", product: "db" },
  { href: "/iot", key: "iot", product: "iot" },
] as const;

export const dbNav = [
  { href: "/start", key: "start" },
  { href: "/query", key: "query" },
  { href: "/architecture", key: "architecture" },
  { href: "/storage", key: "storage" },
  { href: "/roadmap", key: "roadmap" },
] as const;

export const iotNav = [
  { href: "/iot", key: "iotOverview" },
  { href: "/iot/start", key: "iotStart" },
  { href: "/iot/architecture", key: "iotArchitecture" },
] as const;

export function productFromPath(pathname: string): "home" | "db" | "iot" {
  if (pathname === "/iot" || pathname.startsWith("/iot/")) return "iot";
  if (pathname === "/") return "home";
  return "db";
}
