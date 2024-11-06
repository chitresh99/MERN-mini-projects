const express = require('express');
const app = express();
app.use(express.json());

app.get('/frontpage',function(req,res){
    res.send(
       "Hello welcome to our store"
    )
})

app.post('/signup',function(req,res){
    try {
        response = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            contactnumber : req.body.contactnumber,
     },
     
     res.json({
         message : "Signup Successfull",
     })
     console.log(JSON.stringify(response));
    }
    catch(err){
       console.log(err);
    }
})

//in-memory store 
let data = [{
    id : 1,
    username : "chitresh",
    email : "chitresh@gmail.com",
    password : 1234
},
{  
    id : 2,
    username : "krishna",
    email : "krishna@gmail.com",
    password : 12345
},{
    id : 3,
    username : "raftaar",
    email : "raftaar@gmail.com",
    password : 12345
}]

//since login creates a session it's a post request 
// app.post('/login',function(req,res){
//     try {
//     // const userid = parseInt(req.params.id);
//     const { username,email,password } = req.body;
     
//     // if (isNaN(userid)) {
//     //     return res.status(400).json({ message: "Invalid user ID" });
//     // }
    
//     const user = data.find(user =>user.email === email || user.username === username)

//     if(!user){
//        return res.status(404).json({
//         message:"User not find"
//        })
//     }

//     if(!user.password == !password){
//         return res.status(401).json({
//             message:"password not right"
//         })
//     }

//     console.log("User logged in:", JSON.stringify(user));
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// })

//updated
app.post('/login', function(req, res) {
    try {
        const { username, email, password } = req.body;
        
        
        const user = data.find(user => user.email === email || user.username === username);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // password match
        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        console.log("User logged in:", JSON.stringify(user));
        res.json({
            message: "Login successful"
           
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

//request
// {   
//     "username":"chitresh",
//     "email":"chitresh@gmail.com",
//     "password":1234
// }

app.listen(3000);