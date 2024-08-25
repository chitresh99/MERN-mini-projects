import mongoose from "mongoose";

const folderSchema = mongoose.Schema({
    foldername:{
        type:String,
        required : true
    },
    description:{
        type:String
    }
},{timeStamp:true})

const folder = mongoose.Schema('folder',folderSchema);

modules.export ={
    folder
}