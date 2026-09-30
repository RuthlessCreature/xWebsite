# Project Inquiry System

## Production URLs

- Simplified Chinese: `https://xiaodu.tech/zh-cn/inquiry/`
- English: `https://xiaodu.tech/en/inquiry/`
- Traditional Chinese: `https://xiaodu.tech/zh-tw/inquiry/`
- Japanese: `https://xiaodu.tech/ja/inquiry/`
- Spanish: `https://xiaodu.tech/es/inquiry/`
- Portuguese: `https://xiaodu.tech/pt/inquiry/`
- Russian: `https://xiaodu.tech/ru/inquiry/`

## Current production behavior

The inquiry form is fully deployed and posts to:

`POST /api/inquiry`

The Worker:

1. Validates required customer and project fields.
2. Rejects obvious bot submissions through a honeypot field.
3. Accepts up to 5 files.
4. Limits automatic-email attachments to 4 MiB total.
5. Generates a unique ID in the format `XD-YYYYMMDD-XXXXXXXX`.
6. Builds a normalized project summary.
7. If an `EMAIL` binding exists, emails the inquiry and attachments to Nicole Fan.
8. If a `DB` D1 binding exists, archives the normalized inquiry record.
9. If Email Service is not configured, returns a prefilled `mailto:` fallback so the customer can still complete the inquiry.

## Contact destination

Nicole Fan  
+86 139 2338 7986  
13923387986@163.com

## Enable automatic email delivery

Cloudflare Email Service must be onboarded for `xiaodu.tech`.

Recommended sender:

`inquiry@xiaodu.tech`

Worker binding name:

`EMAIL`

Destination:

`13923387986@163.com`

After Cloudflare Email Service has a verified sender domain and verified destination address, add a Workers Email binding named `EMAIL`. No front-end code changes are required.

## Enable D1 inquiry archive

Create a D1 database, for example:

`xiaodu-inquiries`

Bind it to the Worker using variable name:

`DB`

Apply `db/schema.sql` or allow the Worker to create the inquiries table on first successful submission.

The Worker automatically checks for `env.DB`; if the binding is absent, the public inquiry form continues to work without database persistence.

## File handling

The current design intentionally does not require R2.

When Email Service is enabled, small files are attached directly to the notification email. Large CAD packages should be sent separately after the inquiry ID is created.

If project volume later justifies permanent file storage, add an R2 bucket and store files under:

`inquiries/<inquiry-id>/...`

## Security controls already implemented

- server-side required-field validation
- email format validation
- description minimum length
- honeypot spam field
- attachment count limit
- attachment total-size limit
- input length caps
- no-store API responses
- generated inquiry ID
- optional database persistence rather than browser-local storage

## Recommended next hardening

- Cloudflare Turnstile
- per-IP rate limiting
- R2 for large engineering files
- D1 admin dashboard
- automatic acknowledgement email to customer
