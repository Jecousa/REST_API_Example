var RESTAPI = angular.module('RESTAPI',['ngRoute']);

RESTAPI.config(function($routerProvider){
  $routerProvider.when('/',{
    controller:'MusicController',
    templateUrl: 'views/music.html'
  })
  .when('/music',{
    controller:'MusicController',
    templateUrl: 'views/music.html'
  })
  .when('/music/detail/:id',{
    controller:'MusicController',
    templateUrl: 'views/music_detail.html'
  })
  .when('/music/add',{
    controller:'MusicController',
    templateUrl: 'views/add_music.html'
  })
  .when('/music/edit/:id',{
    controller:'MusicController',
    templateUrl: 'views/edit_music.html'
  })
  .otherwise({
    redirectTo:'/'
  })
})
