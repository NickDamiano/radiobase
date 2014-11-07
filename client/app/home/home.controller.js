'use strict';

angular.module('radiobase10App')
  .controller('HomeCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.cities = ['Austin, TX', 'Portland, OR'];
  });
