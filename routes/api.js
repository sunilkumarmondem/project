var express=require('express');
var router=express.Router();
var Student=require('../models/user');
router.post('/students',function(req,res){
	var student= new Student(req.body);
	student.save().then(function(data){
		res.send(data);
	})
});
router.put('/students/:id',function(req,res){
	Student.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Student.findOne({_id:req.params.id}).then(function(data){
			res.send(data);
		})
	})
});


router.get('/students',function(req,res){
	Student.find({}).then(function(data){
		res.send(data);
	})
});

router.get('/students/:id',function(req,res){
	Student.findById({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});


router.delete('/students/:id',function(req,res){
	Student.findByIdAndRemove({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});



module.exports=router;
