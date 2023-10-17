const express=require("express");
const mongoose=require("mongoose");
//Schema creation
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    job_title:{
        type:String,
        require:true,
    }
 },
 {timestamps:true}
 )
 const User=mongoose.model("user",userSchema);
 module.exports=User;