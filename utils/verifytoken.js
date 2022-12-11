require('dotenv').config();
const jwt =require("jsonwebtoken");

exports.Adminvalidation=(req,res,next)=>{
 // var token =req.cookies
  //var token=req.header("mm")
  let token=req.header("mm")
  
  jwt.verify(token,process.env.secure,(err,data)=>{
    if(err){
        res.send("invalid authentication")
    }
    else{
      
      req.token=data;
      next();
      //return res.send(200,req.token._id)} 
  }})
   
    }; 
        