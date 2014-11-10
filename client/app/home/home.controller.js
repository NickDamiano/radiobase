'use strict';

angular.module('radiobase10App')
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.cities = ['Austin, TX', 'Portland, OR'];
    $scope.getPlaylist = function(){
    	$http.get('localhost:9000/api/playlists').
    		success(function(data){
    			$scope.playlist = data;
    			console.log(data);
    		})

    };
  }]);
