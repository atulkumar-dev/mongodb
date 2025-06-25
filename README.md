# MongoDB User Management API

A Node.js REST API for managing users with MongoDB database integration using Express.js and Mongoose.

## 🔧 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas Account](https://www.mongodb.com/atlas) or local MongoDB installation

## 🚀 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection details (see [Environment Variables](#environment-variables))

3. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start running on `http://localhost:80`

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
db_password=your_mongodb_atlas_password
```

**Note**: Make sure to replace `your_mongodb_atlas_password` with your actual MongoDB Atlas password.

## 📖 Usage

Once the server is running, you can interact with the API using tools like:
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- Any HTTP client


## 📁 Project Structure

```
mongodb-main/
├── controllers/
│   └── userController.js    # User-related business logic
├── models/
│   └── userModel.js         # User schema and model definition
├── routes/
│   └── userRoute.js         # API routes definition
├── .env                     # Environment variables (not tracked)
├── .gitignore              # Git ignore file
├── dbConnection.js         # Database connection configuration
├── index.js                # Main application entry point
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

### File Descriptions

- **`index.js`**: Main application file that sets up the Express server and connects to the database
- **`dbConnection.js`**: Handles MongoDB connection using Mongoose
- **`models/userModel.js`**: Defines the User schema with name, email, and age fields
- **`controllers/userController.js`**: Contains all user-related business logic (CRUD operations)
- **`routes/userRoute.js`**: Defines API endpoints and connects them to controller functions


## 🏗 Development

### Available Scripts

- `npm run dev`: Start the development server with nodemon (auto-restart on file changes)

### User Schema

The User model includes the following fields:

```javascript
{
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
}
```


## 👨‍💻 Author

**Atul Kumar**

---

