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

静态文件输出到 `dist/`。生产站点由 GitHub Actions 发布到 GitHub Pages，域名是 [netba.net](https://netba.net)。

推送到 `main` 会自动构建并部署。发布源是 **GitHub Actions**，不要改成 branch deploy。

### 自定义域名

`public/CNAME` 写的是 `netba.net`。域名当前由 Cloudflare 托管，apex 需要指到 GitHub Pages。记录用 **DNS only**（灰云），不要开代理，否则 GitHub 签不了 HTTPS 证书。

| 类型 | 名称 | 内容 |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `sskycn.github.io` |

也可以在 Cloudflare 用 apex CNAME 扁平化到 `sskycn.github.io`，效果相同。DNS 生效后，在仓库 Settings → Pages 打开 **Enforce HTTPS**。

## 语言

站点默认英文。中文在 `/zh`。首次访问会读浏览器语言（`zh*` 进中文，其它进英文）；顶栏可切换，选择存在 `localStorage` 的 `netba-lang`。

## 页面

| 路径 | 中文 | 内容 |
| --- | --- | --- |
| `/` | `/zh` | 定位、垂直切片现状、crate 图 |
| `/architecture` | `/zh/architecture` | 语言边界、编译流水线、依赖方向 |
| `/storage` | `/zh/storage` | Page v5、WAL、恢复、检查点、B+Tree |
| `/query` | `/zh/query` | 小型 SQL 子集、类型、NULL、DML |
| `/roadmap` | `/zh/roadmap` | 已完成阶段与下一步 |
| `/start` | `/zh/start` | 嵌入式 SDK、索引、netbadbd、远程客户端与 CLI |

文案与仓库文档对齐，并明确区分已实现与路线图。
