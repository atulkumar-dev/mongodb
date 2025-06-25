const mongoose = require('mongoose');
require('dotenv').config();


async function connectdb() {
    try{
        const connection = await mongoose.connect(`mongodb+srv://atul:${process.env.db_password}@cluster0.divdlu9.mongodb.net/`)
        console.log("Connected to MongoDB");
    }
    catch(err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectdb;