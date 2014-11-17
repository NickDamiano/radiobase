'use strict';

angular.module('radiobase10App')
  .controller('YoutubeCtrl', function ($scope, $location, $stateParams, $http, $sce) {
    var objId = $location.absUrl().split('=');
    objId = objId[1];
    $scope.url = $location.absUrl();
    $http.get('/api/playlists/koop/list/'+ objId).
        success(function(data) {
            $scope.songs = data[0].songs;
            $scope.date = data[0].programInformation.originalAirDate;
            $scope.showTitle = data[0].programInformation.programName;
            $scope.youtubeId = $scope.songs[0].youtubeId;
            $scope.bio = $scope.songs[0].biography;
            console.log($scope.showTitle, 'SHOW TITLE');
            console.log(data);
            console.log($scope.songs, 'scope songs');

      }).
      error(function(data) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.convertUrl = function(spacedUrl){
      var convertedUrl = spacedUrl.replace(/\s/g, '-').toLowerCase();
      return convertedUrl;
    };

    $scope.filterYoutube = function(song){
          return (song.youtubeId != undefined);
        };

    $scope.setUrl = function(yUrl){
        var url = 'http://www.youtube.com/embed/' + yUrl;
        console.log('url',url);
        return  $sce.trustAsResourceUrl(url);
    };
    $scope.setYoutubeId = function(song){
      $scope.youtubeId = song.youtubeId;
      $scope.bio = song.biography;
      console.log("song from youtube id", song);
    }

});
