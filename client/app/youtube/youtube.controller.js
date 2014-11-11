'use strict';

angular.module('radiobase10App')
  .controller('YoutubeCtrl', function ($scope, $location, $stateParams, $http) {
    $scope.message = 'Hello';
    var objId = $location.absUrl().split('=');
    objId = objId[1];
    $scope.url = $location.absUrl();
    console.log(objId);
    $http.get('/api/playlist/stronger-than-dirt/list/'+objId).
        success(function(data) {
        console.log(data[0].shows);
        $scope.shows = data[0].shows;
      }).
      error(function(data) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
    $scope.convertUrl = function(spacedUrl){
      var convertedUrl = spacedUrl.replace(/\s/g, '-').toLowerCase();
      return convertedUrl;
    };
    // console.log('SCOPE SHIT RIGHT HERE', $scope.url);
  });
