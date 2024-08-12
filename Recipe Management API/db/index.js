const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

console.log('MONGO_URI:', dbURI);

// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error:', err));


//Defining Schema

const user = new mongoose.Schema({
username,
password
})