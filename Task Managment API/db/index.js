const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chitresh:CHIR2588%7C@learning.lnvqqbh.mongodb.net/taskmanagment?retryWrites=true&w=majority&appName=Learning")

const taskschema = new mongoose.Schema({
    task : String,
    description:String
})

const tasks = mongoose.model('task',taskschema);

module.exports={
    tasks
}