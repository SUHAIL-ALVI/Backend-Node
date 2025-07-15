# 🎬 More Then Youtube Like Plateform with Professional Industry Approach

A scalable and modular Youtube Plateform built using **Node.js**, **Express**, and **MongoDB** (Mongoose ORM), supporting JWT authentication, file uploads, subscriptions, playlists, comments, and more.

---

## 🔧 Tech Stack

- **Node.js** – Server-side runtime
- **Express.js** – Web framework for routing & middleware
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **JWT** – Authentication and authorization
- **Multer** – File uploads
- **Cloudinary** – Cloud media storage
- **Dotenv** – Manage environment variables
- **Other utilities** – Custom error handling, async wrappers, etc.

---

### 📁 Project Structure

<details>
<summary><strong>Click to expand the folder structure</strong></summary>

project-root/
├── public/
├── src/
│ ├── controllers/
│ │ ├── comment.controller.js
│ │ ├── dashboard.controller.js
│ │ ├── healthcheck.controller.js
│ │ ├── like.controller.js
│ │ ├── playlist.controller.js
│ │ ├── subscription.controller.js
│ │ ├── tweet.controller.js
│ │ ├── user.controller.js
│ │ └── video.controller.js
│ ├── db/
│ │ └── index.js
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ └── multer.middleware.js
│ ├── models/
│ │ ├── comment.model.js
│ │ ├── like.model.js
│ │ ├── playlist.model.js
│ │ ├── subscription.model.js
│ │ ├── tweet.model.js
│ │ ├── user.model.js
│ │ └── video.model.js
│ ├── routes/
│ │ ├── comment.routes.js
│ │ ├── dashboard.routes.js
│ │ ├── healthcheck.routes.js
│ │ ├── like.routes.js
│ │ ├── playlist.routes.js
│ │ ├── subscription.routes.js
│ │ ├── tweet.routes.js
│ │ ├── user.routes.js
│ │ └── video.routes.js
│ └── utils/
│ ├── ApiError.js
│ ├── ApiResponse.js
│ ├── asyncHandler.js
│ └── cloudinary.js
├── app.js
├── constants.js
├── index.js
├── .env.sample
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
├── package-lock.json
└── README.md


</details>

---

## 🧠 Application Flow

### 1. **Entry Point**
- `index.js` starts the application by connecting to MongoDB and running `app.js`.

### 2. **Application Setup**
- `app.js` configures Express middleware:
  - JSON parsing
  - CORS setup
  - Static file serving
  - Global error handling
  - Route mounting (`/api/v1/...`)

### 3. **Database Connection**
- `src/db/index.js` connects to MongoDB using `mongoose.connect()`.

### 4. **Routes**
- All API endpoints are organized in `src/routes/` and grouped by feature:
  - `/users` → Register, login, profile
  - `/videos` → Upload, fetch, like, comment
  - `/playlists`, `/subscriptions`, `/tweets` etc.

### 5. **Controllers**
- Each route has a corresponding controller in `src/controllers/`, where the core business logic resides.

### 6. **Models**
- Mongoose models are defined in `src/models/` for schema validation and database interactions.

### 7. **Middlewares**
- `auth.middleware.js` → Protects routes using JWT
- `multer.middleware.js` → Handles file uploads (like profile photos, videos)

### 8. **Utils**
- `ApiError.js` → Custom error class
- `ApiResponse.js` → Uniform success response
- `asyncHandler.js` → Wraps async routes to catch errors
- `cloudinary.js` → Configures Cloudinary for image/video uploads

---

## 🔐 Authentication Flow (JWT)

1. **Register/Login** → `/api/v1/users/register` or `/login`
2. Backend generates a **JWT token** and sends it in response.
3. Protected routes use `auth.middleware.js` to verify JWT:
   - If valid: proceed.
   - If invalid: return `401 Unauthorized`.

---

## ⚙️ Environment Variables

Copy `.env.sample` into `.env` and fill in your values:

PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret



---

## 🚀 Run the Project

### 1. Install dependencies
```bash
npm install

cp .env.sample .env
# Edit .env with your credentials

npm run dev     # using nodemon
# or
node index.js

✅ Features
🧩 Modular MVC structure

🛡️ JWT-based auth with protected routes

📁 File uploads via multer

☁️ Cloudinary integration

🧠 MongoDB schema modeling with Mongoose

💬 Full social flow: videos, likes, comments, subscriptions

🔁 Global error + async handler

---

📬 API Endpoints Overview

| Method | Route                    | Description       |
| ------ | ------------------------ | ----------------- |
| POST   | `/api/v1/users/register` | Register new user |
| POST   | `/api/v1/users/login`    | Login user        |
| POST   | `/api/v1/videos`         | Upload video      |
| GET    | `/api/v1/videos/:id`     | Get video by ID   |
| POST   | `/api/v1/comments`       | Add comment       |
| POST   | `/api/v1/likes`          | Like a video      |
| GET    | `/api/v1/playlists`      | User playlists    |
| GET    | `/healthcheck`           | App status check  |

🧹 Formatting & Standards
Code formatted using Prettier

Configurable via .prettierrc and .prettierignore

📄 License
MIT – feel free to use and modify.

👨‍💻 Author
Made with 💻 by Suhail Alvi
📧 Email: alvisuhail400@.com
