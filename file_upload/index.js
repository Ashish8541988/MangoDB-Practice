const express =require("express");
const path=require("path");
const multer=require("multer");
const PORT=8000;
const app=express();

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./uploads') //.uploads is a path where we want to store the file
        //cb is a call back function 
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)//here in cb we give fileName from which name we want to store the file
    }
})

const upload=multer({storage});
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    return res.render("home");
})

app.post("/upload",upload.single('resume'),(req,res)=>{
console.log(req.body);
console.log(req.file);
return res.redirect("/");
})//for a single file

// app.post("/upload",upload.fields({name:"name"},{resum:"resume"}))// for multiple file







app.listen(PORT,()=>{
    console.log("server started at port 8000")
})










