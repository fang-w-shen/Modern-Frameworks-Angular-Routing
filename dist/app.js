(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
"use strict";
app.controller("SongCtrl", ["$scope",
  function($scope) {
    $scope.newSong = { artist: "", album: "", name: ""};
    $scope.songs =[{ artist: "Britney", album: "In The Zone", name: "Toxic"}];

    $scope.addSong = function() {
      $scope.songs.push({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: $scope.newSong.album,
      });
      console.log("@scope.songs", $scope.songs);
        
    };
  }
]);
},{}],3:[function(require,module,exports){
"use strict";
app.controller("SongDetailCtrl",
  [
    "$scope",
    "SongFactory",
    function($scope, SongFactory) {
      $scope.song = SongFactory.getSong(1); // Returns the song with id:1
    }
  ]
);
},{}],4:[function(require,module,exports){
"use strict";
app.controller("SongFormCtrl",
  [
    "$scope",
    "SongFactory",
    function($scope, SongFactory) {
      $scope.newSong = { artist: "", album: "", name: ""};

      $scope.addSong = function() {
        SongFactory.addSong({
          artist: $scope.newSong.artist,
          name: $scope.newSong.name,
          album: $scope.newSong.album
        });
      };
       
    }
  ]
);
},{}],5:[function(require,module,exports){
"use strict";
app.controller("SongListCtrl",[ "$scope", "SongFactory", function($scope, SongFactory) {
  $scope.songs = [];
  var fullSongList=[];

  var allSongsPromise = SongFactory.getSongs().then(function (firstArrayOfSongs) {
      fullSongList = fullSongList.concat( firstArrayOfSongs );
      return SongFactory.getMoreSongs();
    }, function (error) {
      console.log("Failed");
    }).then(function(secondArrayOfSongs){
      fullSongList = fullSongList.concat( secondArrayOfSongs );

       console.log("h2");
    });

    allSongsPromise.then(function () {
      $scope.songs = fullSongList;
      console.log("hi");
    });
  }]);
},{}],6:[function(require,module,exports){
"use strict";
app.controller("highway1",

    function($scope) {
        $scope.highwayName = "Blue Ridge Parkway";
        $scope.highwayDescription = "BLUE Descriptions";
       
    }
  
);
},{}],7:[function(require,module,exports){
"use strict";
app.controller("highway2",

    function($scope) {
        $scope.highwayName = "Route 66";
        $scope.highwayDescription = "RED Descriptions";
       
    }
  
);
},{}],8:[function(require,module,exports){
"use strict";
app.factory("SongFactory", function($q,$http) {
  var songList = [
    { id: 1, name: "99 Problems", album: "Black", artist: "JayZ" },
    { id: 2, name: "Helter Skelter", album: "White", artist: "Beatles"  },
    { id: 3, name: "99 Problems", album: "Grey", artist: "DJ Danger Mouse"  }
  ];

  return {
getSongs: function() {
  return $q(function(resolve, reject){
    $http.get('./data/songs.json')
      .then(function(objectFromJSONFile) {
        resolve(objectFromJSONFile.data.songs);
      }, function(error) {
        reject(error);
      });
  });
},
    getSong: function(id) {
      return songList.filter(function(song){
        return song.id === id;
      })[0];
    },
    addSong: function(song) {
      songList.push(song);
      console.log("@scope.songs", songList);
      return songList;
    },
    getMoreSongs: function() {
  return $q(function(resolve, reject){
    $http.get('./data/songs2.json')
      .then(function(objectFromJSONFile) {
        resolve(objectFromJSONFile.data.songs);
      }, function(error) {
        reject(error);
      });
  });
}
  };
});
},{}]},{},[1,2,3,4,5,6,7,8]);
