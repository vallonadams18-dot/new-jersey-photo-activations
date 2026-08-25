# Domain setup — done

**Live at [https://www.newjerseyphotoactivations.com](https://www.newjerseyphotoactivations.com)** since 25 August 2026.

This file is now a record of what was changed and how to undo it, rather than
instructions.

---

## What the site runs on

| | |
| --- | --- |
| **Canonical host** | `www.newjerseyphotoactivations.com` |
| **Apex** | `newjerseyphotoactivations.com` → 301 to `www` |
| **Hosting** | GitHub Pages, `vallonadams18-dot/new-jersey-photo-activations` |
| **Deploy** | GitHub Actions (`.github/workflows/deploy.yml`) on push to `main` |
| **Registrar / DNS** | Squarespace |
| **HTTPS** | GitHub-issued certificate, Enforce HTTPS on |

## DNS as it now stands

Squarespace → Domains → newjerseyphotoactivations.com → DNS Settings.

**Custom records** (these are the ones that matter):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `vallonadams18-dot.github.io` |

**Presets left in place:**

- *Squarespace Domain Connect* — `CNAME _domainconnect`. Harmless.
- *Email Security* — `TXT _dmarc`, `TXT _domainkey`, `TXT @`.

**Removed:** the *Squarespace Defaults* preset — four A records pointing at
Squarespace hosting (`198.49.23.144/145`, `198.185.159.144/145`), a
`CNAME www → ext-sq.squarespace.com`, and an `HTTPS` record hinting at the same
Squarespace IPs. This is what was serving the old "Coming Soon" placeholder.

## Repo-side configuration

- `public/CNAME` → `www.newjerseyphotoactivations.com`
- Pages → Custom domain → `www.newjerseyphotoactivations.com`, Enforce HTTPS on
- Actions variable `NEXT_PUBLIC_SITE_URL` = `https://www.newjerseyphotoactivations.com`

The Actions variable is what drives every canonical, Open Graph tag, sitemap
entry and schema `@id`. Changing the domain means changing that variable — not
editing code.

> **Note:** an Actions-based Pages deploy does **not** pick up `public/CNAME`
> automatically the way a branch-based deploy does. The custom domain had to be
> set in Pages settings explicitly. Keep both in sync.

---

## Two things worth knowing

**The Squarespace placeholder is gone.** That was the intention. If a Squarespace
*website* subscription is attached to this domain, cancel it separately — DNS
changes do not cancel billing.

**Email is currently blocked by policy.** The `TXT @` record is `v=spf1 -all`,
which declares that this domain sends no email at all. Fine while it is only a
website. But if you ever want `hello@newjerseyphotoactivations.com` to send mail,
that record must change first or everything you send will be rejected or
spam-filed. Same applies to the `_dmarc` record, which is set to `p=reject`.

## Rolling it back

Delete the five custom records and re-add the Squarespace Defaults preset from
**ADD PRESET**. Propagation is minutes. Then remove the custom domain in Pages
settings.

## Still to do

Add `https://www.newjerseyphotoactivations.com` to Google Search Console as a
URL-prefix property and submit `/sitemap.xml` (52 URLs). See
`docs/OPEN-QUESTIONS.md`.
