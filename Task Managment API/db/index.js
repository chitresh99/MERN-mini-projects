const mongoose = require('mongoose');

mongoose.connect("")

const taskschema = new mongoose.Schema({
    task : String,
    description:String
})

const tasks = mongoose.model('task',taskschema);

module.exports={
    tasks
}