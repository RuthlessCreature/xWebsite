# CHANGELOG

## 2.0.0 — 2026-09-29

### Changed
- Rebuilt the homepage from technology-led messaging to customer-led sales messaging.
- Reorganized the information architecture around customer problems, deliverables, project cases and conversion.
- Reworked the visual system while retaining the SOE Steady Business design DNA.
- Added eight international project case cards with high-fidelity industrial photography.
- Added persistent and mobile project contact entry points for Nicole Fan.
- Added seven-language switching: Simplified Chinese, Traditional Chinese, English, Japanese, Spanish, Portuguese and Russian.
- Added browser-language detection and language preference persistence.
- Reworked overseas project messaging for manufacturing, mining, laboratories, logistics and process industries.

### Deployment
- Cloudflare Workers Static Assets configuration retained.
- Production GitHub workflow now runs only when permanent Cloudflare credentials are present.


## 2.1.0 — 2026-09-30

### Added
- Cloudflare Worker SSR layer for multilingual SEO routes.
- Seven localized homepage paths.
- Six solution detail pages per language.
- Eight project-case detail pages per language.
- 105 crawlable localized URLs in the dynamic sitemap.
- Canonical and hreflang metadata.
- Organization, Service and Article structured data.
- SEO-aware language switching that preserves the current page.
- Direct homepage links from solution and project cards to detail pages.

### Deployment
- Verified SSR Worker deployment independently before domain binding.
- Bound `xiaodu.tech/*` to `xiaodu-intelligent-website` using a Cloudflare Worker Route.
- Cloudflare Workers Build succeeded with Version ID `6f2e0027-884b-4f59-bfa3-2ac809e6eebe`.


## 2.2.0 — 2026-09-30

### Added
- Expanded all eight overseas project pages into full case studies.
- Added project overview, customer situation, system approach, engineering scope, acceptance criteria, deliverables, project process and related-solution sections.
- Added seven-language project FAQs.
- Added dedicated multilingual project-case and solution library index pages.
- Added stronger project-specific email and phone CTAs for Nicole Fan.

## 2.3.0 — 2026-09-30

### Added
- Five multilingual industry landing-page families:
  - Mining & Bulk Materials
  - Precision Manufacturing
  - Laboratory Automation
  - Logistics & Warehousing
  - Process & Heavy Industry
- Added multilingual industry library index.
- Added homepage industry navigation cards.
- Updated dynamic sitemap coverage to 161 localized pages.


## 2.4.0 — 2026-09-30

### Added
- FAQPage structured data for project case studies.
- BreadcrumbList structured data for solution, case and industry detail pages.
- Open Graph image metadata for share previews.
- Twitter Card metadata.
- Localized Open Graph locale metadata.

### Verification
- Worker JavaScript syntax independently validated.
- 148 homepage translation keys checked across all seven languages with zero missing values.
- Cloudflare Workers production deployment succeeded before release documentation update.
