# A3 Technology Group — Website

The official marketing website for **A3 Technology Group**
_Connecting Technology, Human Skill, and Opportunity._

Custom-coded with **Next.js (App Router) + TypeScript + Tailwind CSS**, fully
responsive, SEO-friendly, and ready to deploy on **Vercel** and connect to
**a3technologygroup.com**.

---

## 1. Tech stack

| Area        | Choice                                   |
| ----------- | ---------------------------------------- |
| Framework   | Next.js 14 (App Router)                  |
| Language    | TypeScript                               |
| Styling     | Tailwind CSS                             |
| Fonts       | Inter (sans) + Playfair Display (serif)  |
| Email       | Resend (transactional email)             |
| Hosting     | Vercel                                   |

---

## 2. Project structure

```
a3-technology-group/
├── .env.example                 # Copy to .env.local and fill in real values
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts           # Brand colors, fonts, animations
├── tsconfig.json
├── README.md
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout: header, footer, fonts, SEO, JSON-LD
    │   ├── globals.css          # Tailwind layers + base typography
    │   ├── page.tsx             # Home
    │   ├── about/page.tsx       # About
    │   ├── what-we-do/page.tsx  # What We Do (services)
    │   ├── our-philosophy/page.tsx
    │   ├── contact/page.tsx     # Contact (form + details)
    │   ├── not-found.tsx        # Custom 404
    │   ├── sitemap.ts           # /sitemap.xml
    │   ├── robots.ts            # /robots.txt
    │   ├── manifest.ts          # PWA manifest
    │   ├── icon.svg             # Favicon
    │   └── api/
    │       └── contact/route.ts # Contact form API (validation + email)
    ├── components/
    │   ├── Header.tsx           # Sticky nav + mobile menu + CTA
    │   ├── Footer.tsx           # Footer on every page
    │   ├── ContactForm.tsx      # Client form with validation + states
    │   ├── PageHero.tsx         # Dark hero band for interior pages
    │   ├── CTASection.tsx       # Reusable closing call-to-action
    │   ├── SectionHeading.tsx   # Eyebrow + title + accent rule
    │   ├── Container.tsx        # Max-width wrapper
    │   ├── Button.tsx           # Link/button with variants
    │   └── Icons.tsx            # Inline SVG icon set (no icon dependency)
    └── lib/
        ├── site.ts             # Brand strings, nav, contact reasons
        ├── content.ts          # Services data (shared across pages)
        └── cn.ts               # className helper
```

---

## 3. Local development

> Requires **Node.js 18.17+** (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local
#   (Windows PowerShell: Copy-Item .env.example .env.local)

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

Other scripts:

```bash
npm run build   # Production build
npm start       # Run the production build locally
npm run lint    # Lint
```

> The contact form works **without** an email key during development — if
> `RESEND_API_KEY` is not set, submissions are logged to the server console and
> the success message is still shown. Configure Resend (below) to send real
> emails.

---

## 4. Environment variables

Copy `.env.example` → `.env.local` for local dev, and add the same keys in
Vercel for production. See `.env.example` for inline documentation.

| Variable                       | Purpose                                                |
| ------------------------------ | ------------------------------------------------------ |
| `RESEND_API_KEY`               | Resend API key (email sending). **Never commit this.** |
| `CONTACT_TO_EMAIL`             | Inbox that receives contact submissions.               |
| `CONTACT_FROM_EMAIL`           | "From" address for the internal notification.          |
| `CONTACT_THANK_YOU_FROM_EMAIL` | "From" address for the visitor thank-you email.        |
| `NEXT_PUBLIC_SITE_URL`         | Public site URL (canonical/sitemap/SEO).               |

---

## 5. Where to add the email API key

The contact API route (`src/app/api/contact/route.ts`) reads the key from the
environment — it is **never hard-coded**:

```ts
const apiKey = process.env.RESEND_API_KEY;
```

To enable email:

1. Create a free account at **https://resend.com**.
2. **Verify the sending domain** `a3technologygroup.com` in the Resend
   dashboard (Domains → Add Domain). Resend gives you DNS records to add —
   these are **email *sending* records** (a DKIM `CNAME` and an SPF `TXT`,
   usually on a `send.` subdomain).
   ⚠️ **Add them alongside — do not replace — your existing Google Workspace
   records.** (See §8.)
3. Create an API key (**API Keys → Create API Key**).
4. Add it to:
   - **Local:** `.env.local` → `RESEND_API_KEY=re_...`
   - **Vercel:** Project → Settings → Environment Variables → add `RESEND_API_KEY`
     (and the `*_EMAIL` variables), then redeploy.

> Prefer a different provider (SendGrid, Postmark, AWS SES, Nodemailer/SMTP)?
> Swap the two `resend.emails.send(...)` calls in the API route for your
> provider's SDK. The validation and templates above them stay the same.

---

## 6. Deploying to Vercel

### Option A — Git (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to **https://vercel.com/new** and **Import** the repository.
3. Vercel auto-detects Next.js — no build settings to change
   (Build: `next build`, Output: `.next`).
4. Under **Environment Variables**, add the keys from §4
   (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`,
   `CONTACT_THANK_YOU_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
5. Click **Deploy**. You'll get a `*.vercel.app` URL to preview.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run links/creates the project
vercel --prod   # deploy to production
```

Add environment variables with `vercel env add RESEND_API_KEY` (repeat per key).

---

## 7. Connecting the domain a3technologygroup.com

The domain is managed through **Google (Google Workspace / Google Domains
management)**. You only need to point the **website** records at Vercel.

1. In Vercel: **Project → Settings → Domains → Add** `a3technologygroup.com`
   (add `www.a3technologygroup.com` too).
2. Vercel shows the exact DNS records to create. Add them in your Google DNS
   management console:

   | Type    | Name / Host         | Value                        |
   | ------- | ------------------- | ---------------------------- |
   | `A`     | `@` (root)          | `76.76.21.21`                |
   | `CNAME` | `www`               | `cname.vercel-dns.com`       |

   > Always use the **exact values Vercel displays for your project** — the `A`
   > record IP above is Vercel's standard value but confirm it in your dashboard.
3. Wait for DNS to propagate (minutes to a few hours). Vercel auto-issues an
   HTTPS certificate once records resolve.
4. Set the primary domain and redirect (e.g. `www` → root or vice versa) in
   Vercel's Domains settings.

---

## 8. ⚠️ IMPORTANT — Keep Google Workspace email records untouched

`a3technologygroup.com` already uses **Google Workspace for email**. When you
add the website records above, **only touch the website records** (`A` and
`CNAME` for `www`). **Do NOT delete, edit, or replace** any of these existing
email records:

- **MX** records (route mail to Google — e.g. `smtp.google.com` /
  `aspmx.l.google.com`). Removing these **breaks all email** for the domain.
- **SPF** (`TXT` record containing `v=spf1 include:_spf.google.com ~all`).
- **DKIM** (`TXT`/`CNAME` record, often named `google._domainkey`).
- **DMARC** (`TXT` record at `_dmarc`).

Checklist before saving DNS changes:

- [ ] MX records still point to Google — **unchanged**.
- [ ] SPF / DKIM / DMARC `TXT` records — **unchanged**.
- [ ] Only **added** the Vercel `A` (root) and `CNAME` (`www`) records.
- [ ] If you verified a domain in Resend, you **added** its DKIM/SPF records
      **without modifying** Google's MX or existing SPF.

> SPF note: a domain should have **one** SPF `TXT` record. If Resend asks you to
> authorize its mail, **merge** its `include:` into the existing Google SPF
> record (e.g. `v=spf1 include:_spf.google.com include:amazonses.com ~all`)
> rather than adding a second SPF record. Resend's onboarding typically uses a
> dedicated `send.` subdomain, which avoids touching the root SPF entirely.

---

## 9. Pages & SEO

| Page          | Route             | Title                                                |
| ------------- | ----------------- | ---------------------------------------------------- |
| Home          | `/`               | A3 Technology Group \| Technology, Human Skill...    |
| About         | `/about`          | About A3 Technology Group                            |
| What We Do    | `/what-we-do`     | Services \| A3 Technology Group                      |
| Our Philosophy| `/our-philosophy` | Our Philosophy \| A3 Technology Group                |
| Contact       | `/contact`        | Contact A3 Technology Group                          |

Each page sets its own `title` + `description` via the Next.js Metadata API,
uses semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`,
headings), and the site ships `sitemap.xml`, `robots.txt`, a web manifest, and
Organization JSON-LD structured data.

---

## 10. Brand & design notes

- **Colors:** Navy `#0B2545` (primary), white, dark gray `#1F2933` (ink), with
  a restrained **gold** `#C8A04D` accent (a muted **sage green** is also defined
  in `tailwind.config.ts` if you prefer a green accent — swap `gold` for `sage`).
- **Typography:** Playfair Display for headings (authority), Inter for body
  (clarity).
- **Layout:** Spacious, max-width 1200px, generous vertical rhythm.
- **Responsive:** Mobile-first; tested across mobile, tablet, and desktop
  breakpoints with an accessible mobile menu and skip-to-content link.

---

_Together, we create new value._
