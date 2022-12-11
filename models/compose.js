const mongoose=require("mongoose");

const composeschema=new mongoose.Schema({
     email:{
        type:String,
        required:true,
     },
    subject:{
        type:String,
        required:false,
    },
    html:{
        type:String,
    },
    comid:{
        type:String,
        required:true,
    },
   
},
{timestamps:true});   



module.exports=mongoose.model("Composeemail",composeschema) 