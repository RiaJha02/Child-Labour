const mysql=require('mysql2')
const connection=mysql.createConnection({
host:'localhost',
database:'sih_webdb',
user:'root',
password:'password'
})
const route = require('express').Router()
const path = require('path')
route.post('/',function(req,res,next){
    var r_id = req.body.pincode;
    if(r_id){
        connection.query(`select update_count from region where r_id=?`,[r_id],function(err,results,fields){
            if(results.length>0){
                connection.query(`update region set update_count=? where r_id=?`,[0,r_id],function(err,results){    
                    res.send(
                        `<!DOCTYPE html>
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
                          <p style="font-size:2.5vw">Reset Complete!!</p>
                        
                             
                        </div> 
                        
                        </body>
                        </html>`
                    )
                })
            }
        }
        )
    }
})
module.exports=route