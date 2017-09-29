var RESTAPI = angular.module('RESTAPI');

RESTAPI.controller('MusicController',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
console.log('Music Controller Added...');
  $scope.getMusic = function(){
    $http.get('/api/music').then(function(response){
      $scope.music = response.data;
    });
  }

  $scope.getMusic1 = function(){
    var id =$routParams.id;
    $http.get('/api/music/'+ id).then(function(response){
      $scope.music1 = response.data;
    });
  }

  $scope.addMusic = function(){
    var id =$routParams.id;
    $http.post('/api/music/', $scope.music1).then(function(response){
      window.location.href='#/music';
    });
  }
  $scope.upateMusic = function(){
    var id =$routParams.id;
    $http.put('/api/music/'+ id, $scope.music).then(function(response){
      window.location.href='#/music';
    });
  }

  $scope.removeMusic = function(id){

    $http.delete('/api/music/'+ id).then(function(response){
      window.location.href='#/music';
    });
  }
}]);
