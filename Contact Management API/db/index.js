const mongoose = require("mongoose");

//connection
mongoose.connect("")

//defining userschema 

const userschema = new mongoose.Schema({
  username : String,
  password : String,
  contacts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Contact"
  }]
})

const contactschema = new mongoose.Schema({
  name:String,
  contactnumber:String,
  contactemail:String,
  User:[{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
  }]
})

//model
const User = mongoose.model('user',userschema);
const Contact = mongoose.model('contact',contactschema);

//export
module.exports = {
    User,
    Contact
}