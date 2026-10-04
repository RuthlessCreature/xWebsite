# SEO & Routing Architecture — v2.1

## Production origin

- Primary domain: `https://xiaodu.tech`
- Worker: `xiaodu-intelligent-website`
- Cloudflare route: `xiaodu.tech/*`

## Language prefixes

| Language | Prefix |
| --- | --- |
| 简体中文 | /zh-cn/ |
| 繁體中文 | /zh-tw/ |
| English | /en/ |
| 日本語 | /ja/ |
| Español | /es/ |
| Português | /pt/ |
| Русский | /ru/ |

## Page families

Each language exposes:

- 1 localized homepage
- 6 solution pages
- 8 project-case pages

Total indexable localized pages: **168**, plus an English and Simplified Chinese project-planning resource.

## Solution slugs

- robotic-automation
- machine-vision
- automated-sampling-lab
- custom-equipment-integration
- industrial-software-data
- intelligent-workflow-automation

## Case slugs

- automated-coal-mineral-sampling
- robot-machine-tending-inspection
- laboratory-robotic-automation
- flexible-robotic-workstation
- conveyor-robot-retrofit
- production-equipment-data-platform
- warehouse-vision-handling
- remote-monitoring-service

## SEO controls

- Server-rendered localized HTML
- Unique title and meta description by language/page
- Canonical URL on every localized page
- hreflang links across all 7 languages
- x-default pointing to English
- Dynamic sitemap.xml
- Dynamic robots.txt
- Organization JSON-LD
- Service JSON-LD for solutions
- Article JSON-LD for project cases

## Sales conversion

Every detail page includes direct contact paths to:

Yusuf<br>
+86 132 4269 4270<br>
abd.yusuf.ibrahim.mustafa@gmail.com


## Industry slugs

- mining-bulk-materials
- precision-manufacturing
- laboratory-automation
- logistics-warehousing
- process-heavy-industry

## Current page count

Per language:

- 1 homepage
- 1 project inquiry page
- 3 library index pages
- 6 solution detail pages
- 8 project case-study pages
- 5 industry landing pages

## Project-planning resource

- `/{lang}/resources/industrial-automation-project-checklist/` is published in English and Simplified Chinese only.
- The two language versions link to each other with matching canonical and hreflang declarations; the page is included in the XML sitemap and `llms.txt`.
- The resource covers process requirements, interface boundaries, exception handling, acceptance evidence, and handover. It cites ISA and CSIA references without claiming certification or standards compliance.

Total: **24 pages per language × 7 languages + 2 resource pages = 170 indexable URLs**.
