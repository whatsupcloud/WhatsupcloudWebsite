# WhatsUpCloud Full Stack Website

Production-ready React + Tailwind frontend and Node.js + Express backend for WhatsUpCloud, powered by Inovalytics Technology.

## Features

- No public prices or WhatsApp number
- Enquiry form lead system
- MongoDB Atlas lead storage
- Gmail SMTP notifications to admin and user
- Floating AI chatbot with instant preset responses
- Responsive pages: Home, About, Courses, Internship, Workshop, E-Book, Contact
- Vercel-ready frontend and Render-ready backend

## Local Setup

1. Install dependencies:

```bash
npm run install:all
```

2. Create `backend/.env` from `backend/.env.example`:

```bash
MONGODB_URI=your_mongodb_atlas_connection_string
GMAIL_USER=yourgmail@gmail.com
GMAIL_APP_PASSWORD=your_app_password
ADMIN_EMAIL=admin@example.com
CLIENT_URL=https://your-frontend-domain.com
PORT=5000
```

3. Create `frontend/.env` from `frontend/.env.example`:

```bash
VITE_API_URL=http://localhost:5000
```

4. Run locally:

```bash
npm run dev
```

Frontend: your Vite dev server URL shown in the terminal
Backend health: your backend URL with `/health`

## Deployment

## Git Workflow

Use three branches so changes do not go directly to production:

- `local`: daily development and testing on your PC.
- `staging`: preview/testing branch before final release.
- `prod`: production-ready branch only after staging is checked.

Recommended flow:

```bash
git switch local
git add .
git commit -m "Describe the change"
git switch staging
git merge local
git switch prod
git merge staging
```

### Frontend on Vercel

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_URL=https://your-render-backend.onrender.com`

### Backend on Render

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables from `backend/.env.example`

For Gmail SMTP, use a Gmail App Password, not your regular Gmail password.
