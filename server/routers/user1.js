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
    var address = req.body.address;
    if(address)
    {
        connection.query(`insert into address_info values(?)`,[address],function(err,results){
            if(err)
            res.send(err)
            else
            res.send(`<html>
            <button type="submit" action="http://localhost:4555/sms1">click</button></html>`)
        })
    }    
    })
    module.exports=route