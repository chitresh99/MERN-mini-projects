const express = require('express');
const bodyparser = require('body-parser'); 
const app = express();
const userroute = require("./routes/user");

app.use(bodyparser.json());
app.use("/user",userroute)

const PORT = 3000;

app.listen(PORT,() => {
console.log("server is running on port $(PORT)");
})