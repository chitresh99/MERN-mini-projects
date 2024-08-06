const express = require("express");
const app = express();
const taskroutes = require('./routes/tasks');

app.use(express.json());
app.use("/task",taskroutes);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
})