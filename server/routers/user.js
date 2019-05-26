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
                connection.query(`update region set update_count=? where r_id=?`,[results[0].update_count+1,r_id],function(err,results){    
                    res.send(
                        `<!DOCTYPE html>
                        <html> 
                        <head> 
                          <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
                          <title>Google Maps Multiple Markers</title> 
                          </head>
                        <style>
                              #map {
                                height: 100%;
                                margin-left:20px;
                                margin-right:20px;
                              }
                              html, body
                               {
                                height: 100%;
                                margin: 0;
                                padding: 0;
                                background-color: white;
                              }
                              p{
                                text-align: center;
                              }
                        </style>
                          
                        
                        <body>                                    
                        <button style="background-color: rgb(0,0,0); color: white; font-size: 18px; padding: 18px 15px;" onclick="location.href='http://localhost:4555/sms';">Notify Please</button>
                        <script src="http://maps.google.com/maps/api/js?sensor=false" 
                                  type="text/javascript"></script>
                          <div id="map"></div>
                        
                          <script type="text/javascript">
                            var locations = [
                              ['Bihar', 25.0961, 85.3131],
                              ['UP', 26.8467,80.9462],
                              ['Rajasthan', 27.0238, 74.2179],
                              ['MP', 22.9734, 78.6569],
                              ['Maharashtra', 19.7515, 75.7139],
                              ['Andhra Pradesh', 15.9129, 79.7400]
                            ];
                        
                            var map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 6,
                              center: new google.maps.LatLng(20.5937, 78.9629),
                              mapTypeId: google.maps.MapTypeId.ROADMAP
                            });
                        
                            var infowindow = new google.maps.InfoWindow();
                        
                            var marker, i;
                        
                            for (i = 0; i < locations.length; i++) {  
                              marker = new google.maps.Marker({
                                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                map: map
                              });
                        
                              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                return function() {
                                  infowindow.setContent(locations[i][0]);
                                  infowindow.open(map, marker);
                                }
                              })(marker, i));
                              marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
                            }
                          
                            var locations1 = [
                              ['Tamil Nadu', 11.059821, 78.387451],
                              ['Karnataka', 15.317277,75.713890],
                              ['Odisha', 20.940920, 84.803467],
                              ['West Bengal', 22.978624, 87.747803],
                              ['Gujarat', 22.309425, 72.136230],
                              ['Jharkhand', 23.6102, 85.2799]
                            ];
                        
                            var marker, i;
                        
                            for (i = 0; i < locations1.length; i++) {  
                              marker = new google.maps.Marker({
                                position: new google.maps.LatLng(locations1[i][1], locations1[i][2]),
                                map: map
                              });
                        
                              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                return function() {
                                  infowindow.setContent(locations1[i][0]);
                                  infowindow.open(map, marker);
                                }
                              })(marker, i));
                              marker.setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png')
                            }
                        
                            var locations2 = [
                              ['Assam',   26.244156 ,92.537842],
                              ['Chattisgarh', 21.295132, 81.828232],
                              ['Haryana', 29.238478, 76.431885],
                              ['Jammu & Kashmir', 34.083656, 74.797371],
                              ['Punjab', 31.1471, 75.3412],
                              ['Himachal Pradesh', 32.084206 , 77.571167]
                            ];
                        
                            var marker, i;
                        
                            for (i = 0; i < locations2.length; i++) {  
                              marker = new google.maps.Marker({
                                position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
                                map: map
                              });
                        
                              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                return function() {
                                  infowindow.setContent(locations2[i][0]);
                                  infowindow.open(map, marker);
                                }
                              })(marker, i));
                              marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
                            }
                        
                            var locations3 = [
                              ['Arunachal Pradesh', 28.2180 ,94.7278],
                              ['Delhi', 28.7041, 77.1025],
                              ['Goa', 15.2993, 74.1240],
                              ['Kerala', 10.850516 , 76.271080],
                              ['Sikkim', 27.5330, 88.5122],
                              ['Tripura', 23.745127, 91.746826],
                              ['Uttarakhand', 30.0668 , 79.0193]
                            ];
                        
                            var marker, i;
                        
                            for (i = 0; i < locations3.length; i++) {  
                              marker = new google.maps.Marker({
                                position: new google.maps.LatLng(locations3[i][1], locations3[i][2]),
                                map: map
                              });
                        
                              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                return function() {
                                  infowindow.setContent(locations3[i][0]);
                                  infowindow.open(map, marker);
                                }
                              })(marker, i));
                              marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
                            }
                          </script>
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