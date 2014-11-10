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

  /* stuff to do
  right now the api call is hitting when I hit the koop site for the songs even though it's in the
  controller for stronger than dirt. 

  watch the videos on services/factories

  I need to set up the view for stronger than dirt so the title of the show is up there with a brief 
  blurb or not. 

  Then have the playlists in the database be put into an object where the year is the key and the array of 
  playlists is the date. 

  Maybe make it so first it gets all of the playlists, then it pulls them into an array for each year, then
  the array is added into the object by year.

  For each year, ng-repeat and make a button and loop through the playlist to list 
  out the dates with a link to the youtube and a link to the spotify. 

  Figure out how to hide the data structure for the play list or keep it in the factory/service

  When the youtube link is called, the playlist associated with that goes on to the next page

Find out how to query the youtube to get hte first result 

  On the youtube page, print the date and playlist at the top and ng-repeat boxes.
  In each box, have the title, artist, album, youtube query video embed, and biography where when you click on
  it it expands out to show you the bio. It would be cool to have a few pictures of the band with the bio in a 
  modal. 

  Find out how to get people to log in through spotify when they click the spotify button. 
  When they click the spotify button it does an api call to the spotify api and creates a playlist which each
  song. Then a message pops up after it's been created and it says, "Created Playlist!" with maybe the name?
*/
