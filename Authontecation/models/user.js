const mongooes=require("mongoose");

const userShema=new mongooes.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true});

const User=mongooes.model("user",userShema);
module.exports=User;