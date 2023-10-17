const express=require("express");
const {restricToLoggedinUserOnly}=require('./middlewares/auth');
const cookieParser=require("cookie-parser");
const path=require("path");
const staticRoute=require("./routes/staticRouter")
const mongoose=require("mongoose");
const urlRoute=require('./routes/url');
const userRoute=require('./routes/user');
const URL=require('./models/url');
const {connectToMongoDB}=require("./connect");
const app=express();


connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("mongooes started"))
.catch((err)=>console.log({msg: "error"}))
//connetion to the ejs and view folder
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url",restricToLoggedinUserOnly,urlRoute);
app.use("/",staticRoute);
app.use("/user",userRoute);
app.use(cookieParser());


//routes
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

app.get("/test",async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render("Home",{
        urls:allUrls
    })
})





app.listen(8001,(err)=>{console.log("Server started at port 8001")})