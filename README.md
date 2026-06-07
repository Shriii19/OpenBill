# OpenBill

A self-hosted billing and hosting management platform. Manage customers, products, invoices, payments, domains, and support tickets — all in one place.

Built with Next.js 16, TailwindCSS 4, Express.js, TypeScript, and Supabase.

## Project Structure

```
Openbill/
├── frontend/          Next.js + Tailwind (client-facing website & portal)
│   ├── src/app/       Pages: /, /pricing, /domains, /login, /register, /contact, /client/*
│   ├── src/components/Shared UI components
│   └── src/lib/       API client & service layer
│
├── backend/           Express.js + TypeScript REST API
│   ├── src/auth/      Authentication (register, login, JWT)
│   ├── src/users/     User management
│   ├── src/clients/   Client management
│   ├── src/products/  Product/service catalog
│   ├── src/invoices/  Billing & invoicing
│   ├── src/payments/  Payment processing
│   ├── src/tickets/   Support ticket system
│   ├── src/settings/  Application settings
│   └── src/common/    Guards, decorators, filters, interceptors, utils
│
├── backend/supabase/migrations/  Database schema (SQL)
└── README.md          This file
```

## Quick Start

### Prerequisites

- Node.js 20+
- A Supabase project (free tier works) — [supabase.com](https://supabase.com)

### 1. Database Setup

1. Go to your Supabase dashboard → **SQL Editor**
2. Open and run `backend/supabase/migrations/001_initial_schema.sql`
3. From **Settings → API**, copy your Project URL, anon key, and service_role key

### 2. Backend

```bash
cd backend
npm install
npm run setup          # creates .env from template
```

Edit `backend/.env` with your Supabase credentials and a strong JWT secret:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
SUPABASE_ANON_KEY=your-anon-key
JWT_SECRET=generate-a-random-string-here
```

```bash
npm run dev            # starts on http://localhost:4000
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev            # starts on http://localhost:3000
```

The frontend reads `NEXT_PUBLIC_API_URL` from `.env.local` (defaults to `http://localhost:4000/api`).

## API Overview

| Module     | Base Path           | Auth Required |
|------------|---------------------|---------------|
| Auth       | `POST /api/auth/*`  | No            |
| Users      | `/api/users/*`      | JWT / Admin   |
| Clients    | `/api/clients/*`    | JWT           |
| Products   | `/api/products/*`   | Public read   |
| Invoices   | `/api/invoices/*`   | JWT           |
| Payments   | `/api/payments/*`   | JWT           |
| Tickets    | `/api/tickets/*`    | JWT           |
| Settings   | `/api/settings`     | Public read   |

## Tech Stack

| Layer     | Technology                           |
|-----------|--------------------------------------|
| Frontend  | Next.js 16, TailwindCSS 4, TypeScript |
| Backend   | Express.js 4, TypeScript 5           |
| Database  | Supabase (PostgreSQL)                |
| Auth      | JWT (jsonwebtoken) + bcryptjs        |
| Payments  | Extensible (Stripe, PayPal, crypto)  |

## License

MIT
