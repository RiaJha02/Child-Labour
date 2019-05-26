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
    var aadhar = req.body.aadhar
    var pincode = req.body.pincode
    if(aadhar)
    {
    connection.query('select aadhar from victim where rid=?',[pincode],function(err,results,fields){
        if(results.length>0)
        {
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
              <p style="font-size:2.5vw">Victim already exists!!</p>
                 
            </div> 
            
            </body>
            </html>`)
        }
        else{
            res.send(`<!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              background-color: black;
            }
            
            * {
              box-sizing: border-box;
            }
            
            /* Add padding to containers */
            .container {
              padding: 16px;
              background-color: white;
            }
            
            /* Full-width input fields */
            input[type=text], input[type=password] {
              width: 100%;
              padding: 15px;
              margin: 5px 0 22px 0;
              display: inline-block;
              border: none;
              background: #f1f1f1;
            }
            
            input[type=text]:focus, input[type=password]:focus {
              background-color: #ddd;
              outline: none;
            }
            
            /* Overwrite default styles of hr */
            hr {
              border: 1px solid #f1f1f1;
              margin-bottom: 25px;
            }
            
            /* Set a style for the submit button */
            .registerbtn {
              background-color: #4CAF50;
              color: white;
              padding: 16px 20px;
              margin: 8px 0;
              border: none;
              cursor: pointer;
              width: 400px;
              opacity: 0.9;
            }
            
            .registerbtn:hover {
              opacity: 1;
            }
            
            /* Add a blue text color to links */
            a {
              color: dodgerblue;
            }
            
            /* Set a grey background color and center the text of the "sign in" section */
            .signin {
              background-color: #f1f1f1;
              text-align: center;
            }
            </style>
            </head>
            <body>
            
            
              <div class="container">
            <center>  <img src="https://tse2.mm.bing.net/th?id=OIP.0ebiLMof44YJy63Txki7HwHaIJ&pid=15.1&P=0&w=300&h=300" height="200px" width="200px"></center>
               <center> <h1>Register New Victim</h1>
                   <p>Please fill in this form to create an account for new victim.</p></center>
                <hr>
                <form method="post" action="/ngo2">
                <label for="text"><b>Aadhar Card</b></label>
                 <input type="text" name="aadhar" placeholder="aadhar" required>
                
                <label for="text"><b>Name</b></label>
                <input type="text" name="name" placeholder="name" required>
                
            
                <label for="text"><b>Register Case</b></label>
                <input type="text" name="caseregister" placeholder="caseregister" required>
               <label for="text"><b>  NGO Name     </b></label>
               <input type="text" placeholder="Enter Ngo name" name="nname" required>
                <label for="text"><b>   Invigilator Phone number </b></label>
                <input type="text" name="iid" placeholder="iid">
                <label for="text"><b>Pincode</b></label>
                <input type="text" name="rid"placeholder="pincode">
               
               <button type="submit" name="submit" class="registerbtn">Register New Victim</button>
                <hr>
                
              </div>
              
             
            </form>
            
            </body>
            </html>`)
        }
    })
    }
    })
    module.exports=route