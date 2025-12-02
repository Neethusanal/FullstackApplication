import express from 'express';
import {addProducts} from '../controller/adminController.js';
const router = express.Router()




router.post('/addProducts',addProducts)
export default router