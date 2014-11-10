'use strict';

angular.module('radiobase10App')
  .controller('YoutubeCtrl', function ($scope, $location, $routeParams) {
    $scope.message = 'Hello';
    // var objId = $location.absUrl().split('');
    // $scope.url = $location.absUrl();
    // console.log($scope.url);
    console.log($routeParams.id);
    console.log('SCOPE SHIT RIGHT HERE', $scope.url);
  });
