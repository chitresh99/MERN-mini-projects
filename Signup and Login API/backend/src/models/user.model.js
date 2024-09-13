import mongoose from "mongoose";

const userSchema = new Schema ({
 username : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true,
    index : true //to make it searchable
 },
 email : {
    type : String,
    required : true,
    unique : true,
    lowercase: true
 },
 password:{
    type : String,
    required: [
        true, "password is required"
    ]
 },
 refreshToken : {
    type : String
 }

}, {
    timeStamp : true
})

export const User = mongoose.model("User",userSchema)