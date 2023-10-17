const express=require("express");
const app =express();
const {logReqrRes}=require("./middleware")
const {connectMongodb}=require("./connection")
const userRouter=require("./routes/user")
const port=8000;


//connection to mongooes
connectMongodb('mongodb://127.0.0.1:27017/ashish-first')
.then(()=>console.log("Mongooe Connected"))
.catch((err)=>console.log("Mongo error",err));
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(logReqrRes("log.txt"));
 //Routes
app.use("/user",userRouter);




app.listen(port,(err)=>{
    console.log("server started")
})