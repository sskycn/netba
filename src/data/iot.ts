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
      en: "Optional MQTT device client",
      zh: "可选 MQTT 设备客户端",
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
      en: "Caches, admission, event routing, sessions, commands, and metrics",
      zh: "缓存、准入、事件路由、会话、命令与指标",
    },
  },
  {
    name: "netbaiot-transports",
    path: "crates/netbaiot-transports",
    role: {
      en: "Embedded MQTT, framed TCP, UDP, ACLs, and connection owners",
      zh: "内嵌 MQTT、分帧 TCP、UDP、ACL 与连接所有者",
    },
  },
  {
    name: "netbaiot-server",
    path: "apps/netbaiot-server",
    role: {
      en: "Validated composition, business sinks, listeners, and graceful shutdown",
      zh: "校验后的组合、业务 sink、监听器与优雅关闭",
    },
  },
  {
    name: "netbaiot-cli",
    path: "apps/netbaiot-cli",
    role: {
      en: "Demo, configuration, server, and operator CLI",
      zh: "演示、配置、服务器与运维 CLI",
    },
  },
];

export const iotImplemented: Localized<string[]> = {
  en: [
    "Memory-only gateway: MQTT 3.1.1 and bounded 5.0, framed TCP, and authenticated UDP",
    "EventAccepted after auth, codec validation, routing, and atomic required-sink admission",
    "Confirmed webhook and Business RPC V4 sinks; V5 event windows are opt-in",
    "Live-session commands only; offline devices return DeviceOffline and are not queued",
    "Official Rust business client with explicit event ACK after application processing",
    "Optional device SDK and support for standard MQTT clients",
    "Planned shutdown waits in memory for required sink ACKs",
    "Separate device and management listeners, TLS profiles, and CLI",
  ],
  zh: [
    "纯内存网关：MQTT 3.1.1 与有限 5.0、分帧 TCP 和已认证 UDP",
    "在认证、编解码校验、路由与原子必达 sink 准入之后进入 EventAccepted",
    "确认型 webhook 与 Business RPC V4 sink；V5 事件窗口需显式启用",
    "命令仅发往在线会话；离线设备返回 DeviceOffline，不会排队",
    "官方 Rust 业务客户端，在应用处理之后显式 ACK 事件",
    "可选设备 SDK，并支持标准 MQTT 客户端",
    "计划内关机在内存中等待必达 sink ACK",
    "设备与管理分监听、独立 TLS 配置及 CLI",
  ],
};

export const iotNotImplemented: Localized<string[]> = {
  en: [
    "Crash-durable or exactly-once delivery; SIGKILL can lose the in-memory accepted window",
    "Offline command storage, durable outbox, or runtime message history",
    "Device HTTP ingress, MQTT-SN, WebSockets, shared subscriptions, bridge mode, and $SYS",
    "A required PostgreSQL or other database; business systems own durable data",
    "Automatic client retry of commands; DeviceOffline is a typed terminal result",
    "Offline RAM publish queues in the device SDK; disconnected publish is rejected",
  ],
  zh: [
    "崩溃持久或恰好一次投递；SIGKILL 可能丢失仍在内存中的已接受窗口",
    "离线命令存储、持久 outbox 或运行时消息历史",
    "设备 HTTP 入口、MQTT-SN、WebSockets、共享订阅、桥接模式与 $SYS",
    "必需的 PostgreSQL 或其他数据库；持久业务数据由业务系统持有",
    "命令的客户端自动重试；DeviceOffline 是类型化的终止结果",
    "设备 SDK 中的离线 RAM 发布队列；断线发布会被拒绝",
  ],
};
