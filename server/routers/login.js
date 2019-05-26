const mysql=require('mysql2')
const connection=mysql.createConnection({
host:'localhost',
database:'sih_webdb',
user:'root',
password:'password'
})


const express=require('express')
const route=express.Router()
const path=require('path')
route.post('/',function(req,res,next){
var email=req.body.email;
var type=req.body.type;
var password=req.body.password;
if(type=="user")
{
if(email&&password)
{
connection.query(`select * from user_info where email=? and password=?`,[email,password],function(error,results,fields){
if(results.length>0)
res.sendFile(path.join(__dirname + '/user.html'));
else
res.send(`<!DOCTYPE html>
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
                        
                        </style>
                        </head>
                        <body>
                        <div style="text-align:center">
                          <p style="font-size:2.5vw">Incorrect Username and Password!!</p>
                             
                        </div> 
                        
                        </body>
                        </html>`)
})
}
else
res.send('enter email and password')
}
else if(type=="invigilator")
{
if(email&&password)
{
connection.query(`select * from invigilator_info where email=? and password=?`,[email,password],function(error,results,fields){
if(results.length>0)
res.sendFile(path.join(__dirname + '/invigilator.html'));
else
res.send(`<!DOCTYPE html>
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
    
    </style>
    </head>
    <body>
    <div style="text-align:center">
      <p style="font-size:2.5vw">Incorrect Username and Password!!</p>
         
    </div> 
    
    </body>
    </html>`)
})
}
else
res.send('enter email and password')
}
else if(type=="ngo")
{
if(email&&password)
{
connection.query(`select * from ngo_info where email=? and password=?`,[email,password],function(error,results,fields){
if(results.length>0)
res.sendFile(path.join(__dirname + '/ngo.html'));
else
res.send(`<!DOCTYPE html>
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
    
    </style>
    </head>
    <body>
    <div style="text-align:center">
      <p style="font-size:2.5vw">Incorrect Username and Password!!</p>
         
    </div> 
    
    </body>
    </html>`)
})
}
else
res.send('enter email and password')
}

})
module.exports=route