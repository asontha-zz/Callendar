'use strict';

/**
 * @ngdoc function
 * @name callendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the callendarApp
 */
angular.module('callendarApp')
  .controller('MainCtrl', function ($scope, $auth) {

    $scope.checkAuth = function(){

      return $auth.isAuthenticated();

    };


  });
