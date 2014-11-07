'use strict';

angular.module('radiobase10App')
	.config(function ($stateProvider){
		$stateProvider
			.state('greetings',
			{
				url: '/greetings',
				controller: 'GreetingsCtrl',
				templateUrl: '/app/greetings/greetings.html'
			}
				);
	});