'use strict';

var GreetingsCtrl = function($scope){
	$scope.message = 'NI HAO DARREL';
};

GreetingsCtrl.$inject = ['$scope'];


angular.module('radiobase10App')
	.controller('GreetingsCtrl', GreetingsCtrl);