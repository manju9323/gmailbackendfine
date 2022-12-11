const Composeemail =require("../models/compose")


//del
const deletemail=async(req,res)=>{
    try{  
        let mails=await Composeemail.findById(req.params.id);
        if(mails) 
        {
        if(req.token.isAdmin || req.token._id === mails.comid){
     await Composeemail.findByIdAndDelete(req.params.id);   
 res.status(200).send(`sucessfully deleted mail ${req.params.id}`)
     }
    res.send("ur not admin")
    }
    else{
        res.status(200).send(`no mail in that id ${req.params.id}`)
    }}
     catch(err){
         res.status(500).send("u have no auth") 
 
     }   
 }

 //get
 const getmail=async(req,res)=>{
  
    try{  
        let  mail= await Composeemail.findById(req.params.id);   
    res.status(200).send(mail)
        }
        catch(err){
            res.status(500).send("err") 
    
        }   
    }

//getall
const getmails=async(req,res)=>{
    //console.log(req.token.isAdmin)
    //console.log(req.token._id)
     if(req.token.isAdmin)
     {
        try{
            let  mail= await Composeemail.find();   
            res.status(200).send(mail)
        }
        catch(err){
            res.status(500).send("err") 
        }
     }
     else{ 
    try{  
        let  mail= await Composeemail.find({comid:req.token._id});   
    res.status(200).send(mail)
        }
        catch(err){
            res.status(500).send("err") 
        }   
    }
    }
    

module.exports={deletemail,getmail,getmails}