# 🚀 JobNexus – MERN Stack Job Portal  

🌐 **Live Demo:** [https://job-nexus-pearl.vercel.app/](https://job-nexus-pearl.vercel.app/)

[![MERN](https://img.shields.io/badge/Stack-MERN-green?style=flat-square&logo=mongodb)]()  
[![Frontend](https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react)]()  
[![Backend](https://img.shields.io/badge/Backend-Express-black?style=flat-square&logo=express)]()  
[![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square&logo=mongodb)]()  
[![Deployed](https://img.shields.io/badge/Deployed-Live-success?style=flat-square&logo=vercel)]()  

**JobNexus** is a modern job portal built with the MERN stack, designed for both **Students** and **Recruiters**.  
Easily find jobs, manage companies, post openings, and track applications — all within a sleek, intuitive UI.  

---

## ✨ Features  

- 🔒 **Authentication** — Secure login/signup with JWT, role-based (Student/Recruiter)  
- 👤 **Profile Management** — Bio, profile avatar, resume upload (Cloudinary)  
- 🏢 **Company & Job Posting** — Recruiters can add/manage companies & jobs  
- 📤 **Media Uploads** — Instant uploads to **Cloudinary** (logos, resumes, avatars)  
- 📑 **Application Tracking** — Recruiter & applicant dashboards  
- 🔍 **Search & Filter** — Smart search, instant filtering for jobs/companies  
- 🤩 **Modern UI** — Responsive design, TailwindCSS styling, Framer Motion animations  
- ⚡ **RESTful APIs** — Scalable Node.js & Express backend  
- 🌎 **Deployment Ready** — Vercel (frontend), Render/Heroku (backend), MongoDB Atlas  

---

## 🛠️ Tech Stack  

| Layer      | Tools & Libraries |  
|------------|-------------------|  
| **Frontend** | React, Redux Toolkit, TailwindCSS, Framer Motion, shadcn/ui |  
| **Backend** | Node.js, Express.js |  
| **Database** | MongoDB Atlas |  
| **Auth** | JWT (Cookies) |  
| **Media Upload** | Cloudinary, Multer |  
| **Utilities** | EmailJS |  

---

## ⚡ Getting Started  

## 🔗 Live Demo

Experience the live app here: [https://job-nexus-pearl.vercel.app/](https://job-nexus-pearl.vercel.app/)


### 🔑 Prerequisites  
- Node.js & npm  
- MongoDB Atlas account  
- Cloudinary account  

### 🚀 Installation  

\`\`\`bash
# Clone repo
git clone https://github.com/Akash-Raj9/jobnexus-job-portal.git
cd jobnexus-job-portal

# Install backend
cd backend && npm install

# Install frontend
cd ../frontend && npm install
\`\`\`

### ⚙️ Environment Setup  

**Backend → `/backend/.env`**  
\`\`\`env
PORT=8000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
\`\`\`

**Frontend → `/frontend/.env.local`**  
\`\`\`env
VITE_API_URL=http://localhost:8000
\`\`\`

### ▶️ Run the App  

\`\`\`bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
\`\`\`

Now visit 👉 [http://localhost:5173](http://localhost:5173)  

---

## 📁 Project Structure  

\`\`\`
jobnexus-job-portal/
├── backend/
│   ├── models/         # Database models
│   ├── controllers/    # Route controllers
│   ├── routes/         # API routes
│   ├── middleware/     # Middlewares
│   └── utils/          # Helpers & utilities
├── frontend/
│   ├── src/            # React source code
│   ├── .env.local      # Frontend env vars
│   └── vite.config.js  # Vite config
└── README.md
\`\`\`

---

## 🔗 API Endpoints  

| Endpoint | Description |  
|----------|-------------|  
| \`/api/auth/\` | Login / Register |  
| \`/api/companies/\` | Company CRUD + logo upload |  
| \`/api/jobs/\` | Job CRUD + attachment upload |  
| \`/api/applications/\` | Job applications |  

---

## 🌩️ Cloudinary Integration  

All media (avatars, resumes, company logos) are uploaded to **Cloudinary** and served via its **global CDN** for **speed, reliability, and quality**.  

---

## 👨‍💻 Author  

**Akash Raj**  
🔗 [GitHub](https://github.com/Akash-Raj9)  

💡 Contributions, issues, and feature requests are welcome!  

---

## 📄 License  

Licensed under the **MIT License**.  

---

## 🙏 Acknowledgements  

- [Cloudinary](https://cloudinary.com) — Media uploads & CDN  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — Database hosting  
- [Vercel](https://vercel.com) — Frontend hosting  
- [shadcn/ui](https://ui.shadcn.com) — Modern UI components  
- The **open-source community** ❤️  
