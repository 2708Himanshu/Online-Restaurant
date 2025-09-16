import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from "path";

console.log("DEBUG: process.env keys =>", Object.keys(process.env));
dotenv.config(); 

// app config
const app = express()
const port = process.env.PORT || 4000

const _dirname=path.resolve();
// middleware
app.use(express.json())
app.use(cors())

// db connection
console.log("Loaded MONGO_URL:", process.env.MONGO_URL);
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})
dotenv.config();  // ✅ load .env here

app.get("/",(req,res)=>{
    res.send("API Working")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));


// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT --> 

