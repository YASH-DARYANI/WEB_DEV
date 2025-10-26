# Travel Journal Backend

RESTful backend for Travel Journal app — The CodeBreakers Club (2nd-year Backend Task).

## Quick start

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies: `npm install`
3. Run dev: `npm run dev` (requires nodemon) or `npm start`

## Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/journals  (protected)
- POST /api/journals (protected)
- PUT /api/journals/:id (protected)
- DELETE /api/journals/:id (protected)
