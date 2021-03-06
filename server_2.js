var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes_v1 = require('./api/routes_v1');
//var routes_v2 = require('./api/routes_v2');

var app = express();

app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(logger('dev'));


app.use('*', function (req, res, next){
	res.contentType('application/json');
	console.log('Contentype added');
	next();
});

app.use('/api/v1', routes_v1);
//app.use('/api/v2', routes_v2);

app.use('*', function(req, res){
	res.status(404);
	res.json({"Message" : "Not a single request matched"}).end();	
});

app.use('*', function(err, req, res, next){
	res.status(500);
	console.log('Error: ' + err);
	res.json({message: err}).end();	
});



app.listen(process.env.PORT || 3000, function(){
		console.log('Server listens on port 3000');
});

module.exports = app;