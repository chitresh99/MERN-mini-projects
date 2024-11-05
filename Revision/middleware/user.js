const {User, Password} = require("../db/index");
const {z} = require('zod');

const userschema = z
      .object({
    username : z.string().min(1,"username is required"),
    password:z.string().min(4,"password is required"),
    confirm:z.string().min(4,"required field")
       })
      .refine((data)=> data.password === data.confirm,{
        message:"passwords don't match",
        path: ["confirm"],
      })


async function usermiddleware(req,res,next) {
    userschema.parse(req.headers)
    //const { username, password } = req.headers; //extract username from the headers
    try {
        const user = await User.findOne({userschema});
        if(User && Password){
            req.user = user;
            next();
        }
        else
        {
            res.status(403).json({
                msg : "user doesn't exist or password doesn't match"
            })
        }
    }
    catch(err){
        res.status(500).json({msg:"Error in authentication",error:err.message});
    }
}

module.exports = {
    usermiddleware
}