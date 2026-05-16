# Password Reset App 🔐

A full-stack MERN authentication project with complete user authentication flow including Register, Login, Forgot Password, and Reset Password functionality.

---

## 🚀 Live Demo

### Frontend (Netlify)
https://your-netlify-url.netlify.app

### Backend (Render)
https://password-reset-app-sani.onrender.com

---

## 📌 Features

✅ User Registration  
✅ User Login  
✅ Forgot Password  
✅ Reset Password using Token  
✅ MongoDB Database Integration  
✅ REST API with Express.js  
✅ Responsive UI with React.js  
✅ Toast Notifications  
✅ Secure Environment Variables  
✅ Deployed on Netlify & Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router DOM
- React Toastify
- Tailwind CSS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemailer
- dotenv

---

## 📂 Folder Structure

```bash
password-reset-app/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── frontend/
│   └── frontend/
│       ├── src/
│       ├── pages/
│       └── App.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/password-reset-app.git
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend/frontend
npm install
```

---

## 🔐 Environment Variables

### Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

FRONTEND_URL=http://localhost:5173
```

---

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Run Project

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend/frontend
npm run dev
```

---

## 📮 API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Forgot Password

```http
POST /api/auth/forgot-password
```

### Reset Password

```http
POST /api/auth/reset-password/:token
```

---

## 🧪 Postman Testing

All APIs were tested using Postman.

---

## 🌟 Future Improvements

- JWT Authentication
- Protected Routes
- Email Verification
- Password Encryption using bcrypt
- User Dashboard

---

## 👨‍💻 Author --

## Chetan Sharma
