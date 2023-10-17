const {User}=require("../models/user");
async function handleGetAllUsers(req,res){
    const alldbUser=await User.find({});
    return res.json(alldbUser);
}

async function GetUsersFirstName(req,res){
    const alldbUser=await User.find({});
    const html= 
    `
    <ul>
    ${alldbUser.map((users)=>(`<li>${users.firstName}</li>`))}
    </ul>
    `
    res.send(html);
}

async function CreateUser(req,res){
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

}

module.exports={
    handleGetAllUsers,GetUsersFirstName,CreateUser
}