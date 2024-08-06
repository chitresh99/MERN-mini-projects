const {Router,response} = require("express");
const {tasks} = require('../db');
const router = Router();

router.post('/tasks',async function(req,res){
    const task = req.body.task;
    const description = req.body.description;

    await tasks.create({
        task,
        description
    })
    res.json({
        message:"task created successfully"
    })
});

router.get('/alltasks',async function(req,res){
    const alltasks = await tasks.find({});
    res.json({
        tasks:alltasks
    })
})

// router.get('/alltasks/:taskid',async function (req,res){
// const taskid = req.params.taskid;
// try{
//     await tasks.updateOne({
//        task:task
//     })
// }catch(e){
//     console.log(e)
// }
// })



module.exports = router;