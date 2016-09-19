
var express = require('express');
var app = express(); //constructor function 


//index
app.get("/user", function(req, res){
	res.send("Ling");
});

//show
app.get("/user/:id", function(req, res){
	res.send("new");
});
