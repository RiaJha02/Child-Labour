const route = require('express').Router()
route.get('/',function(req,res,next){
    res.send(
        `<html lang="en"><head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: gainsboro;
    }
    
    * {
      box-sizing: border-box;
    }
    
    /* Add padding to containers */
    .container {
      padding: 16px;
      background-color: white;
    }
    .Register{
      text-align: center;
      color: white;
      background-color: black ;
      background-position: right bottom, left top;
      background-repeat: no-repeat, repeat;
      padding: 15px;
    }
    h1{
      text-shadow: 2px 2px #FE2A33;
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
      width: 100%;
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
    /*For sign up button*/
    .icon-arrow-right{
      background-color: black;
      text-align: center;
      font-size: 20px;
      color: white;
    }
        
        
        
        
        
        
        
        
        .input-container {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      width: 100%;
      margin-bottom: 15px;
    }
    
    .icon {
      padding: 10px;
      background: dodgerblue;
      color: white;
      min-width: 50px;
      text-align: center;
    }
    
    .input-field {
      width: 100%;
      padding: 10px;
      outline: none;
    }
    
    .input-field:focus {
      border: 2px solid dodgerblue;
    }
        
        .button {
      border-radius: 8px;
      background-color: dodgerblue;
      border: 3px ridge;
      color: #FFFFFF;
      text-align: center;
      font-size: 20px;
      padding: 20px;
      width: 200px;
      transition: all 0.5s;
      cursor: pointer;
      margin-left: 700px;
    }
    
    .button span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }
    
    .button span:after {
      
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
    
    .button:hover span {
      padding-right: 25px;
    }
    
    .button:hover span:after {
      opacity: 1;
      right: 0;
    }
        
        
        
        
        
    </style>
    </head>
    <body style="padding:150px; style="margin-top:100px;"> 
    
    <form  method="post" action="/signup1">
      <span class="input"></span>
        <center><img src="https://tse3.mm.bing.net/th?id=OIP.5WuEGSSscpk16FjLWVNftwHaHa&pid=15.1&P=0&w=300&h=300" height="200px" width="200px;"></center>
        <div class="Register">
        <h1>Register</h1>
        <p style="font-size:100%;"><i>(Please fill in this form to create an account as user. )</i></p>
      </div>
      <div class="container">
        <hr>
     <label for="email"><b style="font-size: 20px;" style="text-align:justify;">Email</b></label>
    <div class="input-container">
        <i class="fa fa-envelope icon"></i>
        &nbsp; <input type="text" placeholder="Enter Email" name="email" required></div>
      <span class="input"></span>
      
      <label for="text"><b>Full Name</b></label>
      
      
      
      
       <div class="input-container">
        <i class="fa fa-user icon"></i>
      <input type="text" name="uname" placeholder="Full name" title="Format: Xx[space]Xx (e.g. Alex Cican)">
          </div>
      <span id="passwordMeter"></span>
        <label for="password"><b>Password</b></label>
        <div class="input-container">
        <i class="fa fa-key icon"></i>
         <input type="password" name="password" id="password" placeholder="Password" title="Password min 8 characters. At least one UPPERCASE and one lowercase letter" required="" onkeyup='check();' >
          </div>
       
        <label for="password"><b>Confirm Password</b>
          <span id ='message'></span>
        </label>
          <div class="input-container">
        <i class="fa fa-key icon" height="10px;" width="10px;"></i>
        <input type="password" name="Confirm password" id="password2" placeholder="Confirm Password" title="Confirm Password min 8 characters. At least one UPPERCASE and one lowercase letter" required="" onkeyup='check();'>
          </div>
          <script>
         var check = function() {
      if (document.getElementById('password').value ==
        document.getElementById('password2').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
      } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
      }
    }
       </script>
       
       
       
        <hr>
     
     
     
       <button  class="button" type="submit" value="Sign Up" title="Submit form" class="icon-arrow-right" style=
    "float=right;">Sign up</button>
     
     
     
     <br>
          <br>
          <br>
          <br>
       
      </div>
      </form>
      <div class="container signin">
        <p>Already have an account? <a href="http://localhost4555/">Log in</a>.</p>
      </div>
    
    </body>
    </html>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    <!--    <html lang="en"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SignupPage</title>
        
    </head>
    <body>
            <form  method="POST" action="/signup1">
                <h1>Sign up for USER</h1><br>
                <span class="input"></span>
                <input type="email" name="email" placeholder="Email address" required="">
                <span class="input"></span>
                <input type="text" name="uname" placeholder="Full name" title="Format: Xx[space]Xx (e.g. Alex Cican)">
                <span id="passwordMeter"></span>
                <input type="password" name="password" id="password" placeholder="Password" title="Password min 8 characters. At least one UPPERCASE and one lowercase letter" required="" >
                <input type="password" name="Confirm password" id="password2" placeholder="Confirm Password" title="Confirm Password min 8 characters. At least one UPPERCASE and one lowercase letter" required="" >          
                <button type="submit" value="Sign Up" title="Submit form" class="icon-arrow-right"><span>Sign up</span></button>
              </form>
        
    
    </body></html> -->`
    )
})
module.exports = route