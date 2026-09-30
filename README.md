# 珠海小度智能科技有限公司企业官网

> Zhuhai Xiaodu Intelligent Technology Co., Ltd.

面向全球工业客户的企业官网。网站聚焦工业自动化、机器人、机器视觉、自动取制样、实验室自动化、工业软件与系统集成。

## Website v2.0

本轮重构目标：从“技术说明型官网”改为“客户销售型官网”。

### 页面结构

1. 客户价值主张
2. 客户常见痛点
3. 六大解决方案
4. 海外项目案例
5. 项目合作优势
6. 五阶段交付流程
7. 全球项目支持
8. 公司介绍
9. Yusuf 项目联系入口

### 多语言

- 简体中文
- 繁體中文
- English
- 日本語
- Español
- Português
- Русский

语言文件位于 `public/i18n/`，前端会根据浏览器语言自动选择，并记住用户选择。

## Business Contact

**Yusuf**

- Tel: +86 132 4269 4270
- Email: abd.yusuf.ibrahim.mustafa@gmail.com

## UI

设计基线继续使用：

`UI-Templates/enterprise/soe-steady-business-a`

保留国企稳健商务的深蓝灰、低圆角、清晰信息层级，但针对企业官网改为更强的客户导向、案例展示与销售转化结构。

## 技术

- Static HTML / CSS / JavaScript
- JSON i18n
- Cloudflare Workers Static Assets
- GitHub Actions deployment guard
- Responsive: desktop / tablet / mobile

## 本地预览

```bash
npm install
npm run dev
```

## 正式 Cloudflare 自动部署

GitHub Actions 需要：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

当两个 Secrets 均存在时，main 分支更新会部署至正式 Cloudflare Worker。


## Production Deployment

Cloudflare Workers Builds is connected directly to the GitHub `main` branch.

- Production: https://xiaodu-intelligent-website.nostalgia-ho.workers.dev
- Preview pattern: https://*-xiaodu-intelligent-website.nostalgia-ho.workers.dev
- Worker: `xiaodu-intelligent-website`

Production deploys are handled by Cloudflare's native Git integration. GitHub Actions is retained only as a manual fallback and does not deploy automatically on push.


## v2.1 Routing & SEO

Production domain: https://xiaodu.tech

The site now uses a Cloudflare Worker script plus Static Assets:

- `/zh-cn/`
- `/zh-tw/`
- `/en/`
- `/ja/`
- `/es/`
- `/pt/`
- `/ru/`

Each language has server-rendered solution and project-case URLs, for example:

- `/en/solutions/robotic-automation/`
- `/en/cases/automated-coal-mineral-sampling/`

SEO endpoints:

- `/sitemap.xml`
- `/robots.txt`
- canonical URLs
- hreflang alternates
- Organization / Service / Article structured data

Cloudflare production routing:

- Worker: `xiaodu-intelligent-website`
- Route: `xiaodu.tech/*`
- Zone: `xiaodu.tech`
- Cloudflare Workers Builds deploy automatically from GitHub `main`.


## v2.3 Sales Architecture

The site now includes three multilingual content libraries:

- Solution Center
- International Project Case Library
- Industries We Serve

Industry landing pages:

- Mining & Bulk Materials
- Precision Manufacturing
- Laboratory Automation
- Logistics & Warehousing
- Process & Heavy Industry

Every project case is expanded into a full case-study sales page with:

- project overview
- customer situation
- system approach
- engineering scope
- acceptance focus
- deliverables
- delivery process
- related solutions
- multilingual FAQ
- direct Yusuf project CTA

Current localized SEO page count: **168 pages** across 7 languages.


## v2.5 Project Inquiry Funnel

Seven localized inquiry pages are available under `/<language>/inquiry/`.

The Worker endpoint `POST /api/inquiry`:

- validates inquiry data
- generates a unique inquiry ID
- accepts up to 5 project files
- supports optional Cloudflare Email Service delivery
- supports optional D1 archive storage
- returns a mail-client fallback when automatic email delivery is not yet configured

See `docs/INQUIRY_SYSTEM.md` for the production setup.
