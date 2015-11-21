'use strict';

/**
 * @ngdoc function
 * @name callendarApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the callendarApp
 */
angular.module('callendarApp')
  .controller('LoginCtrl', function ($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res){

          console.log(res);

        },function(err){

          console.log(err);

        });
    };

  });
