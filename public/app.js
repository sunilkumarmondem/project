var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller:"first"
    })
    .when("/students", {
        templateUrl : "templates/main.html",
         controller:"first"
    })
    .when("/students/add", {
        templateUrl : "templates/add.html",
         controller:"first"
    })
    .when("/students/:id/edit", {
        templateUrl : "templates/edit.html",
         controller:"first"
    })
    .when("/students/:id/show", {
        templateUrl : "templates/show.html",
         controller:"first"
    });
});

app.controller("first",function($scope,$route,$routeParams,$http,$location){
	$scope.getstudents=function(){
		$http.get('/students').then(function(response){
			$scope.students=response.data;

		})
	};

	$scope.showstudent=function(){
		var id=$routeParams.id;
		$http.get('/students/'+id).then(function(response){
			$scope.student=response.data;
		})

	};

	$scope.addstudent=function(){
		$http.post('/students',$scope.student).then(function(response){
			$scope.student=response.data;
			$location.path('/');
		})

	};

	$scope.updatestudent=function(){
		var id=$routeParams.id;
		$http.put('/students/'+ id,$scope.student).then(function(response){
			$scope.student=response.data;
			$location.path('/');

		})


	};

	$scope.deletestudent=function(id){
		var id=id;
		$http.delete('/students/'+id).then(function(response){
			$route.reload();
		})

	}

});


