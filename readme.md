🚀 JobNexus – MERN Stack Job Portal
Welcome to JobNexus, a modern job portal app created with the MERN stack and powered by secure media uploads with Cloudinary.
Find your dream job, manage companies, and experience an intuitive interface!

🏆 Features
🔒 Authentication — JWT-secured, separate roles for Students & Recruiters

👤 Profile Management — Bio, profile avatar, resume upload (Cloudinary)

🏢 Company & Job Posting — Recruiters post/manage companies and jobs

📤 Media Uploads via Cloudinary — Logos, avatars, resumes, and more!

📑 Application Tracking — Dashboards for recruiters & job applicants

🔍 Search & Filter — Instant job and company search, robust filtering

🤩 Engaging UI — Responsive layouts, elegant TailwindCSS, smooth Framer Motion animations

⚡ RESTful APIs — Reliable, scalable Node.js & Express backend

🌎 Live Deployment — Frontend on Vercel, backend on Render/Heroku, database on MongoDB Atlas

💻 Tech Stack
Layer	Tools & Libraries
Frontend	React, Redux Toolkit, TailwindCSS, Framer Motion, shadcn/ui
Backend	Node.js, Express.js
Database	MongoDB Atlas
Auth	JWT (Cookies)
Media Upload	Cloudinary, Multer
Utilities	EmailJS
🛠️ Getting Started
Prerequisites
Node.js / npm

MongoDB Atlas & Cloudinary account

Installation
1. Clone the repo

bash
git clone https://github.com/Akash-Raj9/jobnexus-job-portal.git
cd jobnexus-job-portal
2. Install dependencies

bash
cd backend && npm install
cd ../frontend && npm install
3. Configure environment variables

In /backend/.env:

text
PORT=8000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
In /frontend/.env.local:

text
VITE_API_URL=http://localhost:8000
4. Start the app

bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
Visit http://localhost:5173 to use the app!

🌩️ Cloudinary Integration
All images, logos, and files are uploaded instantly and securely to Cloudinary and served via fast CDN links. This ensures quality, speed, and reliability for all media across the app.

📁 Project Structure
text
jobnexus-job-portal/
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── frontend/
│   ├── src/
│   ├── .env.local
│   └── vite.config.js
└── README.md
🔗 Main API Endpoints
/api/auth/ — login/register

/api/companies/ — company CRUD, logo upload

/api/jobs/ — job CRUD, attachment upload

/api/applications/ — job applications

🤝 Author & Community
Built by Akash Raj
GitHub

Contributions, issues and feedback are always welcome!

📄 License
Licensed under the MIT License.

🙏 Acknowledgements
Special thanks to Cloudinary, MongoDB Atlas, Vercel, shadcn/ui, and the open-source community.

For questions/support, email support@jobnexus.com or open an issue!