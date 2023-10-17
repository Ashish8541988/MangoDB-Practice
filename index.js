const express=require("express");
const app =express();
const mongoose=require("mongoose");
const port=8000;

app.use(express.urlencoded({extended:false}));

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
//Model creation
const User=mongoose.model("user",userSchema);
//connection to mongooes
mongoose.connect('mongodb://127.0.0.1:27017/ashish-first')
.then(()=>console.log("Mongooe Connected"))
.catch((err)=>console.log("Mongo error",err));



app.get("/",(req,res)=>{
    return res.send("Homepage")
})
app.post("/user",async(req,res)=>{
    const body=req.body;
    if (
        !body||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.job_title
        )
    {
        return res.status(400).json({meg:"All fields are req"});
    }
const result=   await User.create({
firstName:body.first_name,
lastName:body.last_name,
email:body.email,
job_title:body.job_title
    });
    console.log(result)
    return res.status(201).json({msg:"success"})

});

app.get("/user",async(req,res)=>{
   const alldbUser=await User.find({});
   const html= 
   `
   <ul>
   ${alldbUser.map((users)=>(`<li>${users.firstName}</li>`))}
   </ul>
   `
   res.send(html);
})



app.listen(port,(err)=>{
    console.log("server started")
})