const {Schema,model}=require("mongoose");
const {createHmac,randomBytes}=require("crypto");
const userSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        salt:{
            type:String,
            required:true
        },
        type:String,
        required:true
    },
    profileImageURL:{
        default:"./images/userImg.png",
        type:String,
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],//we cant not assign a value other than enum array
        default:"USER"

    }
},{timestamps:true});


userSchema.pre("save",function (next){
    const user=this;
    if(!user.isModified("password")) return;
    const salt= randomBytes(16).toString();
    const hasheedPassword=createHmac('sha256',salt).update(user.password).digest("hex");
    this.salt=salt;
    this.password=hasheedPassword;
    next();
})


const User=model("User",userSchema);
module.exports=User;