var shortenUrl = require('shorten-url');
const URL =require("../models/url")
async function  handleGenrateNewShortURL(req,res){
const body=req.body;
    if (!body.url) return res.status(400).json({error:"url is required"})    
const shortID=shortenUrl(body.url, 15)
await URL.create({
    shortId:shortID,
    redirectURL:body.url,
    visitHistory:[]
})
return res.json({id:shortID})
}

module.exports={handleGenrateNewShortURL};