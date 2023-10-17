const express=require("express");
const router=express.Router();
const URL=require("../models/url");
router.get("/",async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render("Home",{
        urls:allUrls})
    
});

router.get("/singup",(req,res)=>{
    return res.render("singup");
})
router.get("/login",(req,res)=>{
    return res.render("login");
})
module.exports=router;