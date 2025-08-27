# 💬 Chatty - Full-Stack Real-Time Chat Application

Welcome to **Chatty**, a sleek and modern real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project features secure user authentication, real-time messaging with Socket.IO, profile customization with image uploads to Cloudinary, and a wide variety of themes to personalize your experience.

---

## ✨ Key Features

-   🔐 **Secure Authentication**: Robust user registration and login system using JSON Web Tokens (JWT) stored in http-only cookies.
-   💬 **Real-Time Messaging**: Instantaneous, bidirectional communication between users powered by Socket.IO.
-   🎨 **Theme Customization**: Choose from over 30 pre-built themes to personalize the look and feel of your chat interface.
-   👤 **Profile Management**: Users can update their full name and upload a custom profile picture.
-   ☁️ **Cloudinary Integration**: Seamlessly handles image uploads and storage for user avatars.
-   📱 **Responsive UI**: A modern and fully responsive user interface built with React and Tailwind CSS, ensuring a great experience on any device.
-   🌐 **Online Status**: See which users are currently online for easy communication.
-   🛡️ **Protected Routes**: Secure application routes that are only accessible to authenticated users.

---

## 🚀 Sneak Peek

Here's a glimpse of Chatty in action.

| Login & Register | Main Chat Interface |
| :----------------: | :-------------------: |
| ![Chatty Login Page](http://googleusercontent.com/file_content/1) | ![Chatty Main Interface](http://googleusercontent.com/file_content/2) |
| **In-Conversation View** | **User Profile Page** |
| ![Chatty Conversation View](http://googleusercontent.com/file_content/4) | ![Chatty User Profile](http://googleusercontent.com/file_content/0) |
| **Theme Selection** | |
| ![Chatty Theme Selection](http://googleusercontent.com/file_content/3) | |

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js, Vite, Tailwind CSS, Zustand |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Real-time Communication**| Socket.IO |
| **Authentication** | JWT, BcryptJS, Cookie-Parser |
| **Image Hosting** | Cloudinary |

---

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

-   Node.js (v18 or later)
-   MongoDB (local instance or a cloud service like MongoDB Atlas)
-   A Cloudinary account for image uploads

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables. Replace the placeholder values with your actual credentials.
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    NODE_ENV=development
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

5.  **Run the application:**

    -   To start the backend server, run the following command from the `backend` directory:
        ```sh
        npm run dev
        ```
    -   To start the frontend development server, run the following command from the `frontend` directory:
        ```sh
        npm run dev
        ```

    Open your browser and navigate to `http://localhost:3000` to see the application live!

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
