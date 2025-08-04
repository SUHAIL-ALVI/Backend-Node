# VideoTube Backend API ▶YouTube

A RESTful API for a video-sharing platform, providing user authentication, video management, and other core functionalities. This project aims to provide a robust backend for applications like YouTube, Vimeo, or Dailymotion. It handles user accounts, manages video uploads, and provides endpoints for interacting with video content.

## 🚀 Key Features

- **User Authentication:** Secure user registration, login, and logout using JWT tokens.
- **Profile Management:** Users can update their profile details, avatar, and cover image.
- **Video Management:** (Future Implementation) API endpoints for uploading, updating, and deleting videos.
- **Watch History:** Track users' watch history.
- **Token Refresh:** Implements refresh token rotation for enhanced security.
- **Password Management:** Allows users to change their passwords securely.
- **Channel Profiles:** Retrieve user channel profiles.
- **Secure API:** Protected routes using JWT verification.
- **Standardized Responses:** Consistent API responses using the `ApiResponse` utility.
- **Error Handling:** Centralized error handling using the `ApiError` and `asyncHandler` utilities.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens), Cookie-parser
- **Password Hashing:** bcrypt
- **Cloud Storage:** Cloudinary
- **Middleware:** cors
- **Environment Variables:** dotenv
- **Build Tools:** N/A
- **Other:** N/A

## 📦 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher) or yarn
- MongoDB installed and running
- Cloudinary account for image storage

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4.  Create a `.env` file in the root directory and configure the following environment variables:

    ```
    MONGODB_URI=<your_mongodb_connection_string>
    PORT=8000
    CORS_ORIGIN=<your_frontend_url>
    ACCESS_TOKEN_SECRET=<your_access_token_secret>
    REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    ```

### Running Locally

1.  Start the server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  The server will start on the port specified in the `.env` file (or port 8000 if not specified).

## 📂 Project Structure

```
├── .env                  # Environment variables configuration
├── .gitignore            # Specifies intentionally untracked files that Git should ignore
├── README.md             # Project documentation
├── package-lock.json     # Records the exact versions of dependencies
├── package.json          # Project metadata and dependencies
├── src
│   ├── app.js              # Express application configuration
│   ├── constants.js        # Constant values
│   ├── controllers         # Contains route handler logic
│   │   └── user.controller.js
│   ├── db                  # Database connection setup
│   │   └── index.js
│   ├── index.js            # Main entry point of the application
│   ├── middlewares         # Custom middleware functions
│   │   └── auth.middleware.js
│   │   └── multer.middleware.js
│   ├── models              # Database models
│   │   └── user.model.js
│   ├── routes              # API route definitions
│   │   └── user.routes.js
│   ├── utils               # Utility functions
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cloudinary.js
```

## 📸 Screenshots

(Add screenshots of your application here to showcase its features)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License Free

## 📬 Contact

[Suhail-Alvi](alvisuhail400.@gmail.com)

## 💖 Thanks

Thanks for checking out this project! We hope it's helpful.

Made by Suhail by ❤️
