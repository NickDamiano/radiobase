'use strict';

angular.module('radiobase10App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('koop', {
        url: '/radiostations/koop',
        templateUrl: 'app/radiostations/koop/koop.html',
        controller: 'KoopCtrl'
      });
  });