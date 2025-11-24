
import mongoose from'mongoose'
import dotenv from'dotenv'
import app from './app.js'
import connectionDB from './config/db.js';

 const port=5000
 console.log(port)
;

dotenv.config();
connectionDB()

// console.log("MONGO_URI:", process.env.MONGO_URI);
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("mongodb connection established")
// })
// .catch(error=>console.log(error))

app.listen(port,()=>{
    console.log(`server connected successfully to port ${port}`)
})




