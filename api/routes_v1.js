// routes_v1.js

var express = require('express');
var routes = express.Router();

var names = [];


routes.post('/post', function(req, res){
	var body = req.body;
	
	names.push(req.body.Name);
	
	res.contentType('application/json');
	res.status(200);
	res.json(names);
});

routes.delete('/delete', function(req, res){
	var body = req.body;
	var index = names.indexOf(req.body.Name);
	
	if(index > -1){
		names.splice(index, 1);
		res.contentType('application/json');
		res.status(200);
		res.json(names);
	}else{
		res.contentType('application/json');
		res.status(202);
		res.json({"Ërror" : "Name was not found"});
	}
});



routes.get('/get', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(names);
});

module.exports = routes;