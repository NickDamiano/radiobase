'use strict';

angular.module('radiobase10App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('youtube', {
        url: '/videos',
        templateUrl: 'app/youtube/youtube.html',
        controller: 'YoutubeCtrl'
      });
  });