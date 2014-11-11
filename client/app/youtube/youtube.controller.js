'use strict';

angular.module('radiobase10App')
  .controller('YoutubeCtrl', function ($scope, $location, $stateParams, $http) {
    var objId = $location.absUrl().split('=');
    var songs;
    objId = objId[1];
    $scope.url = $location.absUrl();
    console.log(objId);
    $http.get('/api/playlists/koop/list/'+ objId).
        success(function(data) {
        $scope.songs = data[0].songs;
        songs = $scope.songs;
        $scope.date = data[0].programInformation.originalAirDate;
        $scope.showTitle = data[0].programInformation.programName;
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
    $scope.getYoutube = function(title,artist){
        var title = title.replace(/\s/g, '+');
        var artist = artist.replace(/\s/g, '+');
        var youtubeIds = []
        $http.get('http://gdata.youtube.com/feeds/api/videos?alt=json&q='+ title + '+' + artist).
            success(function(data) {
            var youtubeId = data.entry.id;
            youtubeIds.push
            console.log(youtubeId);
            $scope.youtubeId = youtubeId;
          }).
          error(function(data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
});
