const express = require("express");
const app = express();

app.use(express.json())


//get -> Gets the tasks
//post -> post a new task
const alltasks = [{
    task: "to get maggie",
},
{
    task: "to write songs"
}]

app.get('/todo', function (req, res) {
    res.send(alltasks)
})

// app.post('/todo', function (req, res) {
//     const newtask = req.body.newtask;
//     alltasks.push({
//         task:newtask
//     })
//     res.json({
//         msg:"done"
//     })
// })

app.post('/todo', function (req, res) {
    const newtask = req.body.task;
    if (newtask && newtask.trim()) {
        alltasks.push({ task: newtask });
        res.json({ msg: "done" });
    } else {
        res.status(400).json({ msg: "Task cannot be empty" });
    }
});

app.delete('/todo',function(req,res){
    alltasks.length = 0;
    res.json({
        msg:"done"
    })
})


app.listen(3001)
