const express=require('express')
const route=express.Router()
const db=require('../db')
route.post('/',function(req,res,next){
db.addNgo(req.body.email,req.body.nname,req.body.mobile,req.body.school,req.body.hospital,req.body.password).then(()=>res.send(`<!DOCTYPE html>
<html>
    <head>
    <style>
    div {
      padding-top: 200px;
      padding-right: 50px;
      padding-bottom: 25px;
      padding-left: 25px;
    }
    p{
        text-shadow: 2px 2px grey;
    }
    .button{
        background-color:rgb(0, 0, 0);
        text-align: center;
        font-size: 20px;
        color: white;
    }
    </style>
    </head>
    <body>
    <div style="text-align:center">
      <p style="font-size:2.5vw">NGO signed up successfully!!!</p>
            <button type="button" class="button" onclick="location.href='http://localhost:4555/';">Login</button> 
    </div> 
    
    </body>
    </html>`))
.catch((err)=>res.send(err))
})

module.exports = route