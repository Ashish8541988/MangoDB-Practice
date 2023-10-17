const fs=require("fs");
function logReqrRes(filename){
    return (req,res,next)=>{
        fs.appendFile(
            filename,`\n ${Date.now()}:${req.path}\n`,(err,data)=>{
                next();
            }
        )
    }
    
} 

module.exports={
    logReqrRes
}