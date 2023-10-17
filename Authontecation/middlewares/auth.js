const {getUser}=require('../service/auth');

async function restricToLoggedinUserOnly(req,res){
    
        const userUid=req.Cookies?.uid;
        console.log(JSON.stringify(req));
        
        if (!userUid) return res.redirect("/login");
        const user=getUser(userUid);


        if (!user) return res.redirect("/login");

        req.user=user;
        next();
}

module.exports={restricToLoggedinUserOnly};