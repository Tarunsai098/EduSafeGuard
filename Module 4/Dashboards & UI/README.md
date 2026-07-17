# MODULE 4 — Dashboards & UI
## Team Member: L. Sarachandara (23BQ1A05C2)

## Responsibility
This module delivers all visual interfaces and dashboard analytics.
- Admin dashboard with stats and charts
- Counsellor dashboard with assigned students
- Shared UI components used across the app
- React Router setup with role-based protection

## My Files
### Backend
- `backend/controllers/dashboardController.js` — Dashboard stats queries
- `backend/routes/dashboard.js` — Dashboard API routes

### Frontend
- `frontend/src/pages/AdminDashboard.jsx` — Admin home page
- `frontend/src/pages/CounsellorDashboard.jsx` — Counsellor home page
- `frontend/src/components/Sidebar.jsx` — Navigation sidebar
- `frontend/src/components/StudentTable.jsx` — Student list table
- `frontend/src/components/RiskBadge.jsx` — Risk level badge
- `frontend/src/components/FollowupForm.jsx` — Follow-up form
- `frontend/src/App.js` — All React routes
- `frontend/src/index.css` — Global styles

## API Endpoints I Built
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/dashboard/admin | Admin stats |
| GET | /api/dashboard/counsellor | Counsellor stats |

## Admin Dashboard Shows
- Total students count
- High Risk / Moderate / Safe breakdown
- Branch-wise risk distribution
- Counsellor workload
- Recently uploaded students

## How to Run
```
cd backend && npm install && node seed.js && npm start
cd frontend && npm install && npm start
```
