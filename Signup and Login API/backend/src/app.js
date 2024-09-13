import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

//instance for express
const app = express();

app.use(cors({
origin : process.env.CORS_ORIGIN,
credentials : true
}))

//Handling Data and encoding
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//importing routes


export {app}

