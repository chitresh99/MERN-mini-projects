import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    duration :{
        hours: Number,
        minutes : Number,
        seconds : Number
    }
},{timestamps:true})

const movies = mongoose.Schema ("movieSchema",movieSchema);

module.exports = {
    movies
}