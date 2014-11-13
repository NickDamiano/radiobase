'use strict';

angular.module('radiobase10App')
  .controller('KoopCtrl', function ($scope, $http) {
    $http.get('/api/stations/koop/shows').
        success(function(data) {
          console.log(data);
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
  });
