# 🚀 API Explorer Hub

## Overview

**API Explorer Hub** is a React application that allows users to explore and interact with multiple public APIs from a single interface.

It focuses on building reusable UI patterns such as searchable lists, detail pages, pagination, and robust UI states (loading, empty, and error).

🔗 Live demo: https://api-explorer-hub.vercel.app/

---

## ✨ Features

- 🔍 Searchable GitHub organization members list
- 👤 GitHub member detail view
- 🧪 Rick & Morty characters list with search & pagination
- 🧬 Character detail page
- 🔁 Reusable list & detail UI patterns
- ⚡ Debounced search for better performance
- 📄 Client-side pagination
- ⏳ Loading, empty, and error states
- 🧭 Clean routing with dynamic URL parameters

---

## 🧭 Routes

- `/list/:filter` → GitHub members list (filter via URL)
- `/detail/:id/:filter` → GitHub member detail
- `/rick-y-morty` → Characters list
- `/rick-y-morty/:id` → Character detail

---

## 🛠 Tech Stack

- React 19 + TypeScript
- React Router
- Vite
- use-debounce

---

## 🚀 Getting Started

1. Install dependencies:

```
npm install
```

2. Run in development:

```
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

```

```
