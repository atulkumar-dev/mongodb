const express = require('express');
require('dotenv').config();
const connectdb = require('./dbConnection');
const userRoute = require('./routes/userRoute');

const app = express();

//middleware to parse body
app.use(express.json());

//using the user route
app.use('/',userRoute);


// Connect to the database
connectdb();

//start the server
app.listen(80, ()=>{
    console.log("Server is running on http://localhost:80");
})

