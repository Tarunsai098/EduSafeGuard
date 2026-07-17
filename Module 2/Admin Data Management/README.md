# MODULE 2 — Admin Data Management
## Team Member: G. Divya (23BQ1A0575)

## Responsibility
This module handles all data ingestion and student management by the Admin.
- CSV bulk student upload with smart parsing
- Branch-aware risk auto-assignment on upload
- Counsellor management
- Student-counsellor assignment (single and bulk)

## My Files
### Backend
- `backend/controllers/studentController.js` — CSV upload, student CRUD
- `backend/controllers/assignmentController.js` — Assign students
- `backend/services/riskService.js` — Risk classification logic
- `backend/models/Student.js` — Student schema
- `backend/models/Assignment.js` — Assignment schema
- `backend/models/Branch.js` — Branch schema
- `backend/routes/students.js` — Student API routes
- `backend/routes/assignments.js` — Assignment API routes

### Frontend
- `frontend/src/pages/UploadStudents.jsx` — CSV upload page
- `frontend/src/pages/AssignStudents.jsx` — Assign students page
- `frontend/src/pages/ManageCounsellors.jsx` — Manage counsellors
- `sample_students.csv` — Sample data file

## API Endpoints I Built
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/students/upload | Bulk CSV upload |
| GET | /api/students | All students |
| GET | /api/students/unassigned | Unassigned students |
| POST | /api/assignments | Assign student |
| POST | /api/assignments/bulk | Bulk assign |
| GET | /api/assignments/all | All assignments |

## CSV Format
```
Serial Number, Student Name, CGPA, Attendance, Email, Contact Number, Branch
1, Ravi Kumar, 4.2, 55, ravi@college.edu, 9876543210, CSE
```

## How to Run
```
cd backend && npm install && node seed.js && npm start
cd frontend && npm install && npm start
```
