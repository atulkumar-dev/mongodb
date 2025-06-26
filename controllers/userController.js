
const User = require('../models/userModel');


//controller to get users
async function getUsers(req,res){
  try{
    const data = await User.find({});
    res.status(200).json(data);
  }
  catch(err){
    res.status(500).send("Error fetching data");
  }
}

//controller to add users

async function addUsers(req,res){
  
  const { name, email, age } = req.body;
  const newUser = new User({
    name,email,age
  });

  try {
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
    res.status(201).json({message: 'User Added Successfully'}); // Respond with the created user
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Failed to create user' }); // Respond with an error
  }
}

//controller to delete users
async function deleteUsers(req, res) {
  const name = req.body.name;
  try{
    await User.deleteOne({ name:name });
    return res.status(200).json({ message: 'User deleted successfully' });
  }
  catch(err){
    console.error('Error deleting user:', err);
    return res.status(500).json({ error: 'Failed to delete user' });
  } 
}


//controller to update user
async function updateUsers(req,res){
  const email = req.body.email;
  const {name, age} = req.body; // Destructure name and age from request body

  const updateFields = {};
  if(name) updateFields.name = name; // Add name to updateFields if provided
  if(age) updateFields.age = age; // Add age to updateFields if provided

  try{
    await User.findOneAndUpdate(
      {email},
      updateFields
    )
    res.status(200).json({message: 'User Updated Successfully'})
  }
  catch(err){
    res.status(500).json({ error: 'Failed to update user' }); // Respond with an error
  }
}


module.exports = {getUsers, addUsers, deleteUsers, updateUsers};