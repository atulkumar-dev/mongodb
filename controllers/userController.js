
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




module.exports = {getUsers, addUsers};