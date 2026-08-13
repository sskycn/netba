# NetbaDB 站点

纯静态 Astro 站点，用来展示 [NetbaDB](https://github.com/sskycn/netbadb)：一个用 Rust 写成的强类型关系型数据库核心。

构建产物是普通 HTML / CSS，不需要 Node 服务器。

## 本地开发

需要 Node.js 22.12+ 与 pnpm。

```sh
pnpm install
pnpm dev
```

开发服务器默认在 `http://localhost:4321`。

## 构建

```sh
pnpm build
pnpm preview
```

静态文件输出到 `dist/`。可以放到任意静态托管：GitHub Pages、Cloudflare Pages、Netlify，或自己的对象存储。

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 定位、垂直切片现状、crate 图 |
| `/architecture` | 语言边界、编译流水线、依赖方向 |
| `/storage` | Page v5、WAL、恢复、检查点、B+Tree |
| `/query` | 小型 SQL 子集、类型、NULL、DML |
| `/roadmap` | 已完成阶段与下一步 |
| `/start` | 构建命令与嵌入式 API |

文案与仓库文档对齐，并明确区分已实现与路线图。
