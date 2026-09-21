import type { Locale } from "../i18n/locale";

export type Localized<T> = Record<Locale, T>;

export type IotCrate = {
  name: string;
  path: string;
  role: Localized<string>;
};

export const iotCrates: IotCrate[] = [
  {
    name: "netbaiot-protocol",
    path: "crates/netbaiot-protocol",
    role: {
      en: "Public wire and domain types, stable errors, paths, and protocol version 1",
      zh: "公开线协议与领域类型、稳定错误、路径，以及协议版本 1",
    },
  },
  {
    name: "netbaiot-client",
    path: "crates/netbaiot-client",
    role: {
      en: "Business HTTP APIs and confirmed event-stream ownership",
      zh: "业务 HTTP API 与确认事件流所有权",
    },
  },
  {
    name: "netbaiot-device-sdk",
    path: "crates/netbaiot-device-sdk",
    role: {
      en: "Optional standard MQTT 3.1.1 and device HTTP convenience client",
      zh: "可选的标准 MQTT 3.1.1 与设备 HTTP 便利客户端",
    },
  },
  {
    name: "netbaiot-core",
    path: "crates/netbaiot-core",
    role: {
      en: "Domain types and the synchronous DeviceCodec trait",
      zh: "领域类型与同步 DeviceCodec 特质",
    },
  },
  {
    name: "netbaiot-codecs",
    path: "crates/netbaiot-codecs",
    role: {
      en: "Bounded vendor and device protocol codecs",
      zh: "有界的厂商 / 设备协议编解码",
    },
  },
  {
    name: "netbaiot-runtime",
    path: "crates/netbaiot-runtime",
    role: {
      en: "Caches, admission, EventBus, sessions, commands, metrics, and restart spool",
      zh: "缓存、准入、EventBus、会话、命令、指标与重启 spool",
    },
  },
  {
    name: "netbaiot-transports",
    path: "crates/netbaiot-transports",
    role: {
      en: "HTTP, embedded MQTT 3.1.1, framed TCP, UDP, ACLs, and connection owners",
      zh: "HTTP、内嵌 MQTT 3.1.1、分帧 TCP、UDP、ACL 与连接所有者",
    },
  },
  {
    name: "netbaiot-server",
    path: "apps/netbaiot-server",
    role: {
      en: "Validated composition, business sinks, listeners, recovery, and graceful shutdown",
      zh: "校验后的组合、业务 sink、监听器、恢复与优雅关闭",
    },
  },
  {
    name: "netbaiot-cli",
    path: "apps/netbaiot-cli",
    role: {
      en: "Operator interface implemented only through netbaiot-client",
      zh: "仅通过 netbaiot-client 实现的运维接口",
    },
  },
];

export const iotImplemented: Localized<string[]> = {
  en: [
    "Database-free gateway: HTTP, embedded MQTT 3.1.1, framed TCP, and authenticated UDP",
    "EventAccepted after auth, codec validation, routing, and atomic required-sink admission",
    "Confirmed webhook and framed TCP/RPC business sinks; best-effort sinks may drop",
    "Live-session commands only; offline devices return DeviceOffline and are not queued",
    "Official Rust business client with explicit event ACK after application processing",
    "Optional device SDK over standard MQTT/HTTP; standard MQTT clients remain first-class",
    "Planned shutdown drain into a bounded local restart spool; at-least-once replay",
    "Separate device and management HTTP listeners, revisioned control snapshots, and CLI",
  ],
  zh: [
    "无数据库网关：HTTP、内嵌 MQTT 3.1.1、分帧 TCP 与已认证 UDP",
    "在认证、编解码校验、路由与原子必达 sink 准入之后进入 EventAccepted",
    "确认型 webhook 与分帧 TCP/RPC 业务 sink；尽力而为 sink 可以丢弃",
    "命令仅发往在线会话；离线设备返回 DeviceOffline，不会排队",
    "官方 Rust 业务客户端，在应用处理之后显式 ACK 事件",
    "可选设备 SDK 使用标准 MQTT/HTTP；标准 MQTT 客户端仍为一等公民",
    "计划内关机将必达工作排入有界本地重启 spool，至少一次重放",
    "设备与管理 HTTP 分监听、带修订的控制快照，以及 CLI",
  ],
};

export const iotNotImplemented: Localized<string[]> = {
  en: [
    "Crash-durable or exactly-once delivery; SIGKILL can lose the in-memory accepted window",
    "Offline command storage, durable outbox, or runtime message history",
    "MQTT 5, MQTT-SN, WebSockets, shared subscriptions, bridge mode, and $SYS",
    "A required PostgreSQL or other database; business systems own durable data",
    "Automatic client retry of commands; DeviceOffline is a typed terminal result",
    "Offline RAM publish queues in the device SDK; disconnected publish is rejected",
  ],
  zh: [
    "崩溃持久或恰好一次投递；SIGKILL 可能丢失仍在内存中的已接受窗口",
    "离线命令存储、持久 outbox 或运行时消息历史",
    "MQTT 5、MQTT-SN、WebSockets、共享订阅、桥接模式与 $SYS",
    "必需的 PostgreSQL 或其他数据库；持久业务数据由业务系统持有",
    "命令的客户端自动重试；DeviceOffline 是类型化的终止结果",
    "设备 SDK 中的离线 RAM 发布队列；断线发布会被拒绝",
  ],
};
