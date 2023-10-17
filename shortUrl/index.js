const express=require("express");
const mongoose=require("mongoose");
const urlRoute=require('./routes/url');
const URL=require('./models/url');
const {connectToMongoDB}=require("./connect");
const app=express();


connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("mongooes started"))
.catch((err)=>console.log({msg: "error"}))
app.use(express.json());
app.use("/url",urlRoute);
app.get('/shortid',async(req,res)=>{
const shortId=req.shortid;
await URL.findOneAndUpdate({
    shortId
},{$push:{
    visitHistory:{
        timestamp:Date.now()
    }
}})
res.redirect(entry.redirectURL)
})
app.listen(8001,(err)=>{console.log("Server started at port 8001")})