const mongoose = require('mongoose');
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

module.exports = getUsers;