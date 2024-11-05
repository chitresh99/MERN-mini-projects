const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); //configuration

console.log('MONGO_URI:',process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then((result) => {
console.log('connected to mongodb');
}).catch((err)=> {
    console.error(err);
})

// mongoose.connect("mongodb+srv://chitresh:CHIR2588%7C@learning.lnvqqbh.mongodb.net/revision?retryWrites=true&w=majority&appName=Learning")

//defining a schema

const revisionschema = new mongoose.Schema({
    name : String,
    password : String
});

const User = mongoose.model('Revision',revisionschema);
const Password = mongoose.model('Password',revisionschema)

module.exports = {
User,
Password
}