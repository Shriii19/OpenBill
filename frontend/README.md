# OpenBill Frontend

Next.js 16 + TailwindCSS 4 client-facing website and client portal for OpenBill.

See the [root README](../README.md) for full project setup (database + backend + frontend).

## Development

```bash
npm install
npm run dev            # starts on http://localhost:3000
```

The frontend talks to the backend API via `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000/api`). To override it, create a `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## Structure

```
src/
├── app/           Pages: /, /store, /cart, /announcements, /status,
│                  /login, /register, /contact, /client/*
├── components/    Shared UI components (Header, Footer)
└── lib/           API client, auth helpers, product catalog data
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint
