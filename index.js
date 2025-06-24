const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB using Mongoose
const connectdb =  mongoose.connect(`mongodb+srv://atul:${process.env.db_password}@cluster0.divdlu9.mongodb.net/`)
.then(() => {
    console.log("Connected to MongoDB");
}
).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}
);







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



//Inserting a new user into the database collection
async function createUser() {
  const newUser = new User({
    name: 'Jon Snow',
    email: 'jonsnow@example.com',
    age: 28,
  });

  try {
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (err) {
    console.error('Error saving user:', err);
  }
}

// Call the function to create a user
createUser();


// Function to retrieve all users from the database collection
async function getUsers() {
  try {
    const users = await User.find(); // Fetch all users
    console.log('All users:', users);
  } catch (err) {
    console.error('Error retrieving users:', err);
  }
}

// Call the function to get users
getUsers();


// Function to update a user's age by email in the database collection
async function updateUserAge(email, newAge) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },  // Find user by email
      { age: newAge },  // Update user's age
      { new: true } // Return the updated document
    );
    console.log('Updated user:', updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
  }
}

// Call the function to update a user's age
updateUserAge('johndoe@example.com', 34);


// Function to delete a user by email from the database collection
async function deleteUser(email) {
  try {
    const deletedUser = await User.deleteOne({ email });
    console.log('Deleted user:', deletedUser);
  } catch (err) {
    console.error('Error deleting user:', err);
  }
}

// Call the function to delete a user
deleteUser('johndoe@example.com');
