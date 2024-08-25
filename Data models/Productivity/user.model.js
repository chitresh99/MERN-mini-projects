import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        lowercase:true
    }
},{timestamps:true})

const User = mongoose.Schema('User',userSchema);

modules.export ={
    User
}