const express=require("express");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
var cookieParser = require('cookie-parser');
require('dotenv').config();
//const mg=require('mailgun-js');
const cors=require('cors')
const {connect}=require('./dbconnect');
const composemail= require("./routes/compose")
const datum= require("./routes/datum")
const auth=require("./routes/auth")

const app=express(); 


 
//middleware
//app.use(cookieparser())
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({extended:true})); 


app.use('/api/compose',composemail)
app.use('/api/auth',auth)
app.use('/api/data',datum)
  

app.listen(8000,()=>{
    connect()  
    console.log("backend connected")
})  
 
  
/*   
const mailgun=()=>
mg({
apikey:process.env.MailGUN_API_KEY, 
domain:process.env.MailGUN_DOMAIN,
});

app.post('/api/email',(req,res)=>{
    const {email,subject,message} = req.body; 
    mailgun().messages().send({
        from:"manjugopi610@gmail.com",
        to:`${email}`, 
        subject:`${subject}`,
        html:`<p>${message}</p>`,
    },
    (error,body)=>{
        if(error){
            console.log(error);
            res.status(500).send({message:"error in sending mail"});
        }
        else{
            console.log(body);
            res.send({message:"email send sucessfully"})
        }
    });
   
});
*/
    