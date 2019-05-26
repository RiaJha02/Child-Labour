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
    var aadhar=req.body.aadhar
    var name=req.body.name
    var caseregister=req.body.caseregister
    var ngoname=req.body.nname
    var iid=req.body.iid
    var rid=req.body.rid
    if(aadhar)
    {
        connection.query(`select mobile from ngo_info where nname=?;`,[ngoname],function(err,results,fields){
            var nid=results[0].mobile;
         connection.query('insert into victim values(?,?,?,?,?,?)',[aadhar,name,caseregister,nid,iid,rid],function(err,results){
             if(err)
             {
                 res.send(err)
             }
        else{
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
                  <p style="font-size:2.5vw">Victim details entered successfully!!</p>
                </div> 
                
                </body>
                </html>`)
        }
    })
    })
}
    })
    module.exports=route