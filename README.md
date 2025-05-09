## 🎬 Video Streaming Platform API

This project is a **back-end REST API** for a basic video streaming platform. The API handles user authentication, video uploads, and an admin panel for managing videos. The platform uses **JWT-based authentication**, **Cloudinary** for video and thumbnail storage, and **JSON files** as a mock database.

### 🛠️ Technologies Used:

* **Node.js** with **Express.js** for building the REST API
* **JWT (JSON Web Tokens)** for authentication
* **Cloudinary** for video and thumbnail uploads
* **Multer** for handling file uploads
* **Bcrypt.js** for password hashing
* **Mock data storage** using JSON files (`users.json` and `videos.json`)

### 📝 Installation & Setup:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/video-streaming-api.git
   cd video-streaming-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:

   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

---

### 🔐 API Endpoints:

#### 1. **User Registration & Login**

* **Register**: `POST /api/auth/register`

  * **Body**: `{ "username": "john", "password": "password123", "role": "Artist" }`
* **Login**: `POST /api/auth/login`

  * **Body**: `{ "username": "john", "password": "password123" }`

#### 2. **Video Upload (Artist Only)**

* **Upload Video**: `POST /api/video/upload`

  * **Body**: `{ "title": "Sample Video", "description": "Test", "category": "Drama", "genre": "Action", "version": "Trailer" }`
  * **Files**: Video and Thumbnail (via FormData)

#### 3. **Admin Panel (Admin Only)**

* **Get Pending Videos**: `GET /api/admin/pending`
* **Approve Video**: `POST /api/admin/approve/:id`
* **Reject Video**: `DELETE /api/admin/reject/:id`

---

### 🗂️ Sample Data for `users.json`:

```json
[
  {
    "id": 1,
    "username": "adminUser",
    "password": "$2a$10$3mr5x0NQeW4TQUZV.G/JhuyDU8mD5MN2sdZT/jznYkG6pjbJ7NkIe",
    "role": "Admin"
  },
  {
    "id": 2,
    "username": "artistUser",
    "password": "$2a$10$EoUyFCcmKr3lH4oqiSO4J.6b7AOm9tb0wHVnENRJS2cEdcqlktw7a",
    "role": "Artist"
  },
  {
    "id": 3,
    "username": "viewerUser",
    "password": "$2a$10$hXc8DAkq83rkzMZc/PsZfeysz2K5z6vA3w4pQufdDGcZcKAPAx7le",
    "role": "Viewer"
  }
]
```

---

### 💻 SQL Queries:

These queries simulate how the same functionality would be achieved with SQL.

1. **Register a New User**:

   ```sql
   INSERT INTO users (username, password, role)
   VALUES ('john', 'hashed_password', 'Artist');
   ```

2. **Artist Uploads a Video**:

   ```sql
   INSERT INTO videos (title, description, category, genre, video_url, thumbnail_url, artist_id, status)
   VALUES ('Sample Video', 'Test', 'Drama', 'Action', 'video.mp4', 'thumb.jpg', 2, 'pending');
   ```

3. **Admin Approves a Video**:

   ```sql
   UPDATE videos SET status = 'approved' WHERE id = 'abc123';
   ```

4. **Admin Rejects a Video**:

   ```sql
   DELETE FROM videos WHERE id = 'abc123';
   ```

---

### 💡 Notes:

* **Cloudinary**: Sign up on [Cloudinary](https://cloudinary.com/) and get your API credentials (Cloud Name, API Key, API Secret) to use for video and thumbnail uploads.
* **JWT Secret**: Keep your `JWT_SECRET` value secure and private.

---

### 🚀 Run the Tests:

To ensure everything is working correctly:

1. Register a new user via `/api/auth/register`.
2. Login to get the JWT token.
3. Use the JWT token to access the video upload and admin routes.

---

### 🎉 Conclusion:

This project demonstrates a fully functional video upload and admin approval system using Node.js, JWT authentication, and Cloudinary for video storage. It’s designed to simulate a real-world API and can be extended with additional features such as comments, ratings, etc.

