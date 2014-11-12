'use strict';

angular.module('radiobase10App')
  .controller('StrongerThanDirtCtrl', function ($scope, $http, $location) {
    $scope.message = 'Hello';
    $http.get('/api/playlists/Stronger-Than-Dirt').
    success(function(data) {
        console.log(data);
        //get all years show was active by looping through and
        //pushing into array
        var years = [];
        for(var i = 0; i < data.length; i++){
          data[i].programInformation.originalAirDate = new Date(data[i].programInformation.originalAirDate);
          var year = data[i].programInformation.airDateYear;
          if(years.indexOf(year)=== -1){
            years.push(year);
          }
        }

        $scope.showName = data[0].programInformation.programName;
        $scope.years = years.sort();
        $scope.playlists = data;

        $scope.yearFilter = $scope.years.reverse()[0];
        $scope.setYear = function(){
          $scope.yearFilter = this.year;
          console.log('year changed to', $scope.yearFilter);
        };
        $scope.filterYears = function(list){
          return (list.programInformation.airDateYear==$scope.yearFilter);
        };
        $scope.getVideos = function(_id){
          $location.path('/videos').search({id: _id});
        }
    }).
    error(function(data) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    

  });
