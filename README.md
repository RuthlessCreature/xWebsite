# 珠海小度智能科技有限公司企业官网

> Zhuhai Xiaodu Intelligent Technology Co., Ltd.

本仓库为珠海小度智能科技有限公司企业官网。网站定位聚焦工业智能化、人工智能、机器人自动化、机器视觉与数字化平台，不承载与公司主业无关的个人业务。

## 核心业务

1. 工业智能化系统集成
2. 机器人自动化
3. 机器视觉与三维感知
4. 智能制样与自动化验
5. 工业 AI Agent 与知识应用
6. 数字孪生与工业数据平台

## 技术与部署

- 纯静态 HTML / CSS / JavaScript
- UI：复用 `UI-Templates/enterprise/soe-steady-business-a` 的“国企稳健商务”设计语言
- 托管：Cloudflare Workers Static Assets
- 推荐 CI/CD：Cloudflare Workers Builds 直接连接 GitHub
- 备用部署：仓库内 GitHub Actions 手动工作流

## 本地预览

```bash
npm install
npm run dev
```

## Cloudflare 推荐部署

在 Cloudflare Dashboard：

1. Workers & Pages → Create application
2. Import a repository
3. 连接 GitHub 并选择 `RuthlessCreature/xWebsite`
4. Worker 名称使用 `xiaodu-intelligent-website`
5. Root directory 留空
6. Build command 留空
7. Deploy command 使用 `npx wrangler deploy`
8. Production branch 使用 `main`
9. Save and Deploy

Workers Builds 会自动安装依赖，并在 main 分支后续更新时自动部署。

## 备用手动部署

GitHub Actions 的 `Manual Cloudflare Deploy` 需要仓库 Actions Secrets：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 目录

- `public/`：网站静态文件
- `docs/BUSINESS_SCOPE.md`：业务边界与官网内容约束
- `docs/DESIGN_SYSTEM.md`：UI 设计规范
- `wrangler.jsonc`：Cloudflare Workers Static Assets 配置
