# Api Explorer Hub

## Overview
Api Explorer Hub is a small React app to explore multiple public APIs from a single interface. It includes search, detail views, and pagination.

## Features
- GitHub organization members list with search and pagination.
- GitHub member detail page.
- Rick & Morty characters list with search and pagination.
- Rick & Morty character detail page.
- Shared styles for lists and details.
- Loading, empty and error states.

## Routes
- `/list/:filter` GitHub members list (filter in URL).
- `/detail/:id/:filter` GitHub member detail.
- `/rick-y-morty` Rick & Morty list.
- `/rick-y-morty/:id` Rick & Morty detail.

## Tech Stack
- React 19 + TypeScript
- React Router
- Vite
- use-debounce

## Getting Started
1. Install dependencies:
```bash
npm install
```

2. Run in development:
```bash
npm start
```

## Scripts
- `npm start` Start Vite dev server.
- `npm run build` Build for production.
- `npm run preview` Preview production build.

## Notes
- This project consumes public APIs, so results may vary.

## What I built
A small React app that aggregates two public APIs in one UI, with routing, search, detail views, pagination, and clear loading/empty/error states.

## Key takeaways
- Built reusable list/detail UI patterns and shared styles.
- Managed async data fetching with debouncing and basic caching.
- Implemented client-side routing and parameterized URLs.
- Improved UX with loading, empty and error states.
