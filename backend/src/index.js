import express from "express"
import notesroute from "./routes/notesroute.js"
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";  
import cors from "cors";
import path from "path";
dotenv.config();


await connectdb();
const app=express();
const __dirname=path.resolve();



app.use(express.json());

app.use(ratelimiter);   



const PORT=process.env.PORT || 5001;
app.use("/api/notes",notesroute);


app.use(express.static(path.join(__dirname,"../frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
});


app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`);
}); 
