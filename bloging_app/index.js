const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const userRoute=require('./routes/user');
const PORT=8000
const app=express();
app.use("/user",userRoute);
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

mongoose.connect('mongodb://localhost:27017/blogapp').then(e=>console.log("MongoDB Connected"));












app.get("/",(req,res)=>{
    return res.render("Home");
})




app.listen(PORT,()=>{
    console.log("server started at port ", PORT)
})