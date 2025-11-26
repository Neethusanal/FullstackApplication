import express from 'express';

const app = express();
const adminRoutes =require('./routes/adminRoutes')

app.use(express.json());
export default app;


app.use('/amnin',adminRoutes)