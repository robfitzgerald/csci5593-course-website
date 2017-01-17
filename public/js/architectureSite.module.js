'use strict';
{
	angular
		.module('ArchitectureSite', ['ngMaterial'])
		.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});
}