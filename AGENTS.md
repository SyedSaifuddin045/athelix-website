# Athelix Website — Landing Page

**URL:** https://athelix.fit
**Stack:** Next.js 16 App Router, Tailwind CSS v4
**Hosting:** Coolify (VPS)

## Env Vars

- `CLERK_SECRET_KEY` — Clerk Admin API key (for `/api/waitlist`)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` — JSON string of service account credentials
- `GOOGLE_PLAY_PACKAGE_NAME` — `com.athelix.app`

## API Routes

- `POST /api/waitlist` — Creates Clerk user + adds to Google Play testers (requires env vars)

## Build

```bash
npm run build    # production build
npm run dev      # dev server with Turbopack
```

## Design

**Colors:** #050505 bg, #0A0A0A screen, #FF5A36 accent, white text
**Fonts:** Barlow Condensed (headings), Titillium Web (hero), Outfit (body)
**Animations:** CSS transitions + Intersection Observer for scroll reveals
