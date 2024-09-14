import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app = express();


//configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true //to allow credentials
}))

//preparation for handling data in the backend backend
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))

//these are public assets for images
app.use(express.static("public"))




//to access the user's browser cookies and set the cookies
app.use(cookieParser())

//routes import

// import userRouter from './routes/user.routes.js'


//routes declaration
//route and controller
//standard practice

// app.use("/api/v1/users",userRouter)

// for postman ->  https://localhost:8000/users/register
// /users is the prefix
// user -> resigter

export {app}