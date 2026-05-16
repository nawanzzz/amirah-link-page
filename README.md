# Creator Link Page

A fast, mobile-first creator link-in-bio landing page built with Next.js and Tailwind CSS. Content, links, follower fallbacks, and colors live in one config file: `src/config/creator.ts`.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Profile Content

Update:

```text
src/config/creator.ts
```

You can change the creator name, username, bio, profile image, social usernames, manual follower counts, social links, CTA links, and theme colors from that file.

## Social Count API

The frontend reads follower totals from:

```text
/api/social-counts
```

The route tries official server-side APIs first:

- Instagram: Meta Instagram Graph API Business Discovery
- X: X API user lookup with `user.fields=public_metrics`

Tokens are never exposed to the browser. Results are cached for 6 hours, and the app falls back to `manualFollowerCounts` from the config if API access is unavailable.

Create `.env.local` from `.env.example`:

```bash
META_ACCESS_TOKEN=
META_IG_USER_ID=
X_BEARER_TOKEN=
```

## Deploy

For Vercel:

1. Push the project to a Git repository.
2. Import it in Vercel.
3. Add `META_ACCESS_TOKEN`, `META_IG_USER_ID`, and `X_BEARER_TOKEN` in Project Settings if you want live counts.
4. Deploy.

The page works without API credentials by using the manual fallback counts.
