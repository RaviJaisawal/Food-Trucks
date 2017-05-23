var express = require('express')
var bodyparser = require('body-parser')
var request = require('request')
var fs = require('fs')


var app =  express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req,res,next){  
  	res.render('index');
}) 

app.listen(3000, function(){
	console.log('server running')
})