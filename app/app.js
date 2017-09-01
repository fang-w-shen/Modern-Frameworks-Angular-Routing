"use strict";

// var app = angular.module("SongApp", ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/songs/list', {
//       templateUrl: 'partials/song-list.html',
//       controller: 'SongListCtrl'
//     })
//     .when('/songs/new', {
//       templateUrl: 'partials/song-form.html',
//       controller: 'SongFormCtrl'
//     }).when('/songs/list1', {
//       templateUrl: 'partials/song-list.html',
//       controller: 'SongCtrl'
//     })
//     .when('/songs/new1', {
//       templateUrl: 'partials/song-form.html',
//       controller: 'SongCtrl'
//     })
//     .otherwise('/songs/list1');
// }]);



var app = angular.module("routeApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/blueridgeparkway', {
      templateUrl: 'partials/highway1.html',
      controller: 'highway1'
    })
    .when('/route66', {
      templateUrl: 'partials/highway2.html',
      controller: 'highway2'
    })
    .otherwise('/home', {
    	templateUrl: "<h1>Hi</h1>"
    });
}]);

