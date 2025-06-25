const mongoose = require('mongoose');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  }
});

// Create a model from the schema user
let User;
try {
  User = mongoose.model('User', userSchema);
  console.log("User model created successfully");
} catch (err) {
  console.error("Error creating User model:", err);
}

module.exports = User;