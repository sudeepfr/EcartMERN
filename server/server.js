import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import productRoutes from "./routes/productRouter.js"
const app=express();

app.use(cors());
app.use(express.json());
connectDB();

app.get('/',(req,res)=>{
     res.send("Server is live!");
})
app.use('/api/products',productRoutes);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
     console.log("Server is runing on port "+PORT)
})