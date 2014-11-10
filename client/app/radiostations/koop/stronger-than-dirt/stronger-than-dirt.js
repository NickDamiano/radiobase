'use strict';

angular.module('radiobase10App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stronger-than-dirt', {
        url: '/radiostations/koop/shows/stronger-than-dirt',
        templateUrl: 'app/radiostations/koop/stronger-than-dirt/stronger-than-dirt.html',
        controller: 'StrongerThanDirtCtrl'
      });
  });