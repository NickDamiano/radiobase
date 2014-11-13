'use strict';

angular.module('radiobase10App', [
  'ngCookies',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  }).
  controller('mainCtrl', ['$scope', '$http', function($scope, $http){
    $scope.getSpotify = function(){
      $http.get('/api/spotify/login').
      success(function(data){
        console.log(data);
      }).
      error(function(data) {
        console.log('error data log', data);
      });
    };
  }]);
