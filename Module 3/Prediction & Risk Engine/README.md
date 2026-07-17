# MODULE 3 — Prediction & Risk Engine
## Team Member: I. Tarun Sai (23BQ1A0590)

## Responsibility
This module is the intelligence core of EduSafeGuard.
- Rule-based risk classification (CGPA & attendance)
- AI intervention suggestion generation
- Follow-up note management
- Email alerts to students

## My Files
### Backend
- `backend/services/riskService.js` — Risk classification + AI suggestions
- `backend/controllers/studentController.js` — getAISuggestion
- `backend/controllers/followupController.js` — Follow-up CRUD + email
- `backend/services/emailService.js` — Nodemailer/Resend email
- `backend/models/Followup.js` — Followup schema
- `backend/models/AIGuidanceLog.js` — AI log schema
- `backend/routes/followups.js` — Followup API routes

### Frontend
- `frontend/src/pages/StudentDetails.jsx` — Student profile + AI suggestions
- `frontend/src/components/RiskBadge.jsx` — Risk level badge
- `frontend/src/components/FollowupForm.jsx` — Follow-up note form

## Risk Classification Rules
| CGPA | Attendance | Risk Level |
|------|-----------|------------|
| < 5.0 | < 60% | 🔴 High Risk |
| 5–7 OR | 60–75% | 🟡 Moderate Risk |
| > 7.0 | > 75% | 🟢 Safe |

## API Endpoints I Built
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/students/:id/ai-suggestion | AI suggestions |
| POST | /api/followups | Save note + email |
| GET | /api/followups/mine | My follow-ups |
| GET | /api/followups/student/:id | Student follow-ups |

## How to Run
```
cd backend && npm install && node seed.js && npm start
cd frontend && npm install && npm start
```
