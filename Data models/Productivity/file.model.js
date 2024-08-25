import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename:{
       type:String,
       required:true
    },
    content:{
        type:String,
    },
    foldername:{
        type:mongoose.Schema.type.ObjectId,
        reference:"folder"
    }
},{timestamps:true})

const file = mongoose.Schema('file',fileSchema);

modules.export ={
    file
}

    