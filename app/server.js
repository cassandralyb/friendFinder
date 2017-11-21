//Define the variables.
//set up dependencies (also listed in package.json)
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates express server and sets up a port
var app = express(); 
var port = //need to set up port connection here

//Body Parser listed here to ensure the server handles incoming requests with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static files to create new directory for the public folder
app.use(express.static('app/public'));

//Routing to 
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//Listening to the port that was set up
app.listen(port, () => console.log("Listening on port %s", port));