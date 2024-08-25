import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//to do :- console.log connection instance

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error",error);
        process.exit(1)
    }
}

export default connectDB

//connectionInstance.connection.host -> to check which host we are connected on 
// There are multiple hosts 1) production etc etc