# OpenBill Backend

Express.js + TypeScript + Supabase billing platform backend.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Create .env from template
npm run setup

# 3. Edit .env with your Supabase credentials
#    Get these from: https://supabase.com -> Project -> Settings -> API

# 4. Run database migrations
#    Copy supabase/migrations/001_initial_schema.sql into Supabase SQL Editor

# 5. Start development server
npm run dev
```

## API Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /api/auth/register | - | Register new user |
| POST | /api/auth/login | - | Login |
| GET | /api/users/me | JWT | Get current user |
| GET | /api/users | Admin | List all users |
| GET/PUT/DELETE | /api/users/:id | Admin | User CRUD |
| GET/POST | /api/clients | JWT | List/Create clients |
| GET/PUT/DELETE | /api/clients/:id | JWT | Client CRUD |
| GET | /api/products | - | List products |
| POST/PUT/DELETE | /api/products/:id | Admin | Product CRUD |
| GET/POST | /api/invoices | JWT | List/Create invoices |
| POST | /api/invoices/:id/pay | JWT | Mark invoice paid |
| POST | /api/invoices/:id/cancel | JWT | Cancel invoice |
| GET | /api/payments | JWT | List payments |
| POST | /api/payments/process | JWT | Process payment |
| GET/POST | /api/tickets | JWT | List/Create tickets |
| POST | /api/tickets/:id/close | JWT | Close ticket |
| GET/PUT | /api/settings | Admin | App settings |

## Project Structure

```
src/
├── config/          env vars, supabase client
├── common/
│   ├── guards/      auth.guard, roles.guard
│   ├── decorators/  route decorator
│   ├── filters/     error handling
│   └── interceptors/ response formatting
├── auth/            authentication module
├── users/           user management
├── clients/         client management
├── products/        product/service catalog
├── invoices/        billing and invoicing
├── payments/        payment processing
├── tickets/         support ticket system
├── settings/        application settings
├── app.ts           express app setup
└── main.ts          server entry point
```

## Tech Stack

- Express.js 4
- TypeScript 5
- Supabase (PostgreSQL)
- JWT (jsonwebtoken)
- bcryptjs
