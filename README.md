# EduSafeGuard — Student Academic Risk Monitoring and Counselling System
> A full-stack web platform that helps colleges identify, track, and support at-risk students — before it's too late.
| **EduSafeguard URL** |https://end2endprojectmongo-2.onrender.com/ |
> ## 📌 Project Overview

EduSafeGuard is a web-based student risk monitoring platform designed for colleges and universities. Admins upload student data via CSV. The system automatically classifies each student into a risk tier based on their CGPA and attendance. Counsellors are then assigned to at-risk students and track their progress through structured follow-up notes and email alerts.

---

## 🧩 Module Division

### Module 1 — Authentication & Institution Setup
- Admin self-registration with institution creation
- JWT-based login for Admin and Counsellor roles
- Counsellor account activation via email link
- Role-based middleware protecting all API routes

### Module 2 — Admin Data Management
- Bulk student upload via CSV file
- Smart CSV parser — handles BOM, encoding, short/long branch names
- Counsellor management — add, list, track assigned counts
- Student-counsellor assignment (individual and bulk)

### Module 3 — Prediction & Risk Engine
- Automatic risk classification using CGPA and attendance thresholds
- Rule-based AI intervention suggestions per student
- Follow-up note management with scheduled dates
- Email alerts to students via Resend/Nodemailer

### Module 4 — Dashboards & UI
- Admin dashboard — total students, risk distribution, branch breakdown
- Counsellor dashboard — assigned students by risk tier
- Shared components — Sidebar, StudentTable, RiskBadge
- React Router with role-based route protection

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18, React Router, Axios, Recharts |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Authentication | JWT (JSON Web Tokens) |
| Email | Nodemailer / Resend |
| Deployment | Render (Web Service + Static Site) |

---
## ⚡ Risk Classification Logic
-Decision Tree
## 📁 CSV Upload Format

To upload students go to **Admin Dashboard → Upload Students** and upload a `.csv` file.

### Required Column Headers (first row):

```
Serial Number, Student Name, CGPA, Attendance, Email, Contact Number, Branch
```

### Sample CSV:

```csv
Serial Number,Student Name,CGPA,Attendance,Email,Contact Number,Branch
1,Ravi Kumar,8.5,85,ravi.kumar@college.edu,9876543210,CSE
2,Priya Sharma,4.2,55,priya.sharma@college.edu,9876543211,ECE
3,Arjun Reddy,6.1,70,arjun.reddy@college.edu,9876543212,MECH
4,Sneha Patel,9.1,92,sneha.patel@college.edu,9876543213,CIVIL
5,Mohammed Ali,3.8,48,mohammed.ali@college.edu,9876543214,CSE
6,Lakshmi Devi,7.3,78,lakshmi.devi@college.edu,9876543215,IT
7,Vikram Singh,5.5,63,vikram.singh@college.edu,9876543216,AIDS
8,Ananya Nair,2.9,40,ananya.nair@college.edu,9876543217,ECE
```
### Column Rules:

| Column | Required | Rules |
|--------|----------|-------|
| `Serial Number` | Optional | Any number or text |
| `Student Name` | ✅ Yes | Full name of student |
| `CGPA` | ✅ Yes | Number between **0.0 and 10.0** |
| `Attendance` | ✅ Yes | Number between **0 and 100** |
| `Email` | Optional | Valid email address |
| `Contact Number` | Optional | Phone number |
| `Branch` | ✅ Yes | Must match one of the values below |

### Valid Branch Values:

| Short Code | Full Name |
|------------|-----------|
| `CSE` | Computer Science & Engineering |
| `ECE` | Electronics & Communication |
| `MECH` | Mechanical Engineering |
| `CIVIL` | Civil Engineering |
| `IT` | Information Technology |
| `AIDS` | AI & Data Science |

> ✅ Both short codes (`CSE`) and full names (`Computer Science & Engineering`) are accepted.  
> ✅ Case-insensitive — `cse`, `CSE`, `Cse` all work.

---

## 🗄️ Database Schema (MongoDB Collections)

| Collection | Key Fields |
|------------|-----------|
| `institutions` | _id, name, createdAt |
| `branches` | _id, code, name |
| `risklevels` | _id, level_name, color_code |
| `users` | _id, name, email, password, role, branch_id, institution_id, is_active |
| `students` | _id, name, cgpa, attendance, email, contact_number, branch_id, institution_id, risk_level_id |
| `assignments` | _id, student_id, counsellor_id, status, assigned_at |
| `followups` | _id, student_id, counsellor_id, note, follow_date, createdAt |
| `aiguidancelogs` | _id, student_id, suggestion, createdAt |

---
## 🚀 Run Locally

### Prerequisites
- Node.js v18+
- MongoDB (local) or MongoDB Atlas account
- Git

### Step 1 — Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/edusafeguard.git
cd edusafeguard/edusafeguard_final
```

### Step 2 — Setup Backend
```bash
cd backend
npm install
```
## 🌍 Deployment on Render

| Service | Settings |
|---------|----------|
| **Backend** — Web Service | Root: `edusafeguard_final/backend` · Build: `npm install` · Start: `node server.js` |
| **Frontend** — Static Site | Root: `edusafeguard_final/frontend` · Build: `npm install && npm run build` · Publish: `build` |
