// routes_v1.js

var express = require('express');
var routes = express.Router();

var names = [];


routes.post('/post', function(req, res){
	var body = req.body;
	
	names.push(req.body.Name);
	
	res.status(200);
	res.json(names);
});

routes.delete('/delete', function(req, res, next){
	var body = req.body;
	var index = names.indexOf(req.body.Name);
	console.log("delete called");
	
	if(index > -1){
		names.splice(index, 1);
		res.status(200);
		res.json(names);
	}else{
		res.status(202);
		next("Something went wrong =(");
	}
});


routes.get('/get', function(req, res){
	res.status(200);
	res.json(names);
});

routes.get('*', function (req, res){
	res.status(404);
	res.json({"Error" : "Dead end"}).end();
});


module.exports = routes;