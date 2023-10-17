const express=require("express");
const {handleGetAllUsers,GetUsersFirstName,CreateUser}=require("../controllers/user")
const router=express.Router();

router.get("/",handleGetAllUsers);
router.get("/firstName",GetUsersFirstName);
router.post("/",CreateUser);



module.exports=router;