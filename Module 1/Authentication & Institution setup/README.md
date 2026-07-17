# MODULE 1 — Authentication & Institution Setup
## Team Member: K. Sri Lakshmi (23BQ1A05A8)

## Responsibility
This module handles all user identity, security, and institution onboarding.
- Admin self-registration with institution creation
- JWT login for Admin and Counsellor
- Counsellor account activation via email
- Role-based middleware protecting all API routes
- Branch listing for dropdowns

## My Files
### Backend
- `backend/controllers/authController.js` — All auth logic
- `backend/middleware/auth.js` — JWT verification
- `backend/services/emailService.js` — Email service
- `backend/models/User.js` — User schema
- `backend/models/Institution.js` — Institution schema
- `backend/routes/auth.js` — Auth API routes

### Frontend
- `frontend/src/pages/Landing.jsx` — Public landing page
- `frontend/src/pages/Login.jsx` — Login form
- `frontend/src/pages/Register.jsx` — Admin registration
- `frontend/src/pages/ActivateAccount.jsx` — Counsellor activation
- `frontend/src/services/api.js` — Axios instance

## API Endpoints I Built
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Admin self-registration |
| POST | /api/auth/login | Login — returns JWT |
| POST | /api/auth/activate | Counsellor sets password |
| POST | /api/auth/counsellors | Add counsellor |
| GET | /api/auth/counsellors | List counsellors |
| GET | /api/auth/branches | Get all branches |

## How to Run
```
cd backend && npm install && node seed.js && npm start
cd frontend && npm install && npm start
```
