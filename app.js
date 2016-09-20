
var express = require('express');
var app = express(); //constructor function 
var body = require('bodyParser');

app.listen(3000 , function(){
  console.log('app running on port 3000');
});

app.use(function(req,res,next){


	var users = 
	[
		{
		"id": 0,
		"name" : "Jack",
		"age": 22

		},
		{
		"id": 1,
		"name" : "Laura",
		"age": 21
		},
		{
		"id": 2,
		"name" : "Callum",
		"age": 24
		}
	]

	req.users = users;
	next();
});


//index
app.get("/users", function(req, res){
	res.send(req.users);
});

//show
app.get("/users/:id", function(req, res){
	var id = req.params.id;
	res.send(req.users[id]);
});
3

//show
app.post("/users", function(req, res){

	console.log(req.name);

	var user = {
		"id": req.id,
		"name": req.name,
		"age": req.age
	};

	console.log(user);
	req.users.push(user);
	console.log(req.users);

});
