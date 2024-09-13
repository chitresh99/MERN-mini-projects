import dotenv from "dotenv";
import connectDb from "./db/index.js"
import {app} from './app.js'

dotenv.config({
    path:'./.env'
})

//calling the function
connectDb()

.then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed', err);
  });