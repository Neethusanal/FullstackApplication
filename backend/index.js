
import mongoose from'mongoose'
import express from'express';
import dotenv from'dotenv'
import connectionDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js'

 const port=5000
 console.log(port)
;
const app=express();

app.use(express.json());
app.use('/', adminRoutes)



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




