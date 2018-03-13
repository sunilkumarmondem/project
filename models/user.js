var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userschema=new Schema({
	firstname:{type:String},
	lastname:{type:String},
	email:{type:String}

});



var Student=mongoose.model('detail',userschema);

module.exports=Student;