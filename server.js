 var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var app=express();
mongoose.Promise=global.Promise;
var routes=require('./routes/api');
mongoose.connect('mongodb://sunil:kumar@ds249718.mlab.com:49718/sample');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(routes);


app.listen(8080,function(){
	console.log("server started");
})





