import express from "express"
import notesroute from "./routes/notesroute.js"
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";  
import cors from "cors";
dotenv.config();


await connectdb();
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(express.json());

app.use(ratelimiter);   



const PORT=process.env.PORT || 5001;
app.use("/api/notes",notesroute);

app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`);
}); 
