# The Sports Hub

A responsive sports fixtures dashboard. Shows upcoming and recent matches grouped by league, with match detail pages including head-to-head stats and event timelines. Data comes from TheSportsDB and refreshes every 15 seconds.

**Live:** https://sports-hub-dun.vercel.app/

## Run locally

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:5173`.

## Tech

React 19 · TypeScript · Vite · Tailwind CSS v4 · TanStack Query · React Router v7

## API & Data Limitations

Data is sourced from [TheSportsDB](https://www.thesportsdb.com/) free tier.

**Why there are no live matches:**
The free API does not provide a reliable live match feed. The `lookuptimeline.php` endpoint (minute by minute events) is restricted to Patreon supporters, and there is no free endpoint that returns currently in-progress matches with live scores.

Because of this:

- **Finished (FT)** matches are fetched from `eventspastleague.php` and shown with full scores.
- **Upcoming** matches are fetched from `eventsnext.php` and shown with scheduled kick-off times.
- **Live** matches are not available on the free tier — the Live filter tab is present in the UI but will show 0 matches.

The match timeline on the detail page uses static mock data to demonstrate the UI, since `lookuptimeline.php` requires a paid subscription.

**Mock live matches:**
To demonstrate the live match UI (gradient background, minute indicator, HT label), two hardcoded mock events are injected into the fixtures list — Wycombe Wanderers vs Wrexham (63') and Burton Albion vs Bristol Rovers (HT). These are not real live matches and clicking through to their detail pages will show an error, since there is no real event data behind them in the API.
