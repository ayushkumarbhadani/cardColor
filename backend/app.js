const express=require('express');
const app=express();
const connectDB=require("./connect");
const router=require('./Routes/routes');
require("dotenv").config();

app.use(express.json());
app.use("/api/",router);



const PORT= process.env.PORT || 8000;

const start=async()=>{
    connectDB(process.env.MONGO_URI).then(()=>{
        app.listen(PORT,()=>{
            console.log(`App is listning on port ${PORT}`);
        });
    }).catch((err)=>{
        console.log(err);
    });
}
start();