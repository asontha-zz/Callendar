'use strict';

/**
 * @ngdoc overview
 * @name callendarApp
 * @description
 * # callendarApp
 *
 * Main module of the application.
 */
angular
  .module('callendarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $authProvider.google({
      url: "/",
      clientId: '664828335395-6c45ij0utr8ts0e4dm6028ocfq7tl4tf'
    });

  });
