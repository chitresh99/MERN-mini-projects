import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    username: {
        type:String,
        required:true,
        lowercase:true
    },
    password :{
        type:String,
        required:true,
        minLength:5
    }
},{timestamps:true})

const User = mongoose.model("User",UserSchema);

modules.export = {
    User
}