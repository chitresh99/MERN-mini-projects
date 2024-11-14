const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());
const port = 3000;



const dbconnection = async () => {
    try{
        const connectioninst = await mongoose.connect('xyz');
        console.log(`\n Mongodb connected !! DB Host : ${connectioninst.connection.host}`);
    }
    catch(error){
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

dbconnection();


const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(port,()=>{
    console.log(`Server running on port ${port} `)
})