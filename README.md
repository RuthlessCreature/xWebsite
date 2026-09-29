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
- CI/CD：GitHub Actions + Wrangler

## 本地预览

```bash
npm install
npm run dev
```

## 部署

```bash
npm run deploy
```

GitHub Actions 自动部署需要在仓库 Actions Secrets 中配置：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 目录

- `public/`：网站静态文件
- `docs/BUSINESS_SCOPE.md`：业务边界与官网内容约束
- `docs/DESIGN_SYSTEM.md`：UI 设计规范
- `wrangler.jsonc`：Cloudflare Workers Static Assets 配置
