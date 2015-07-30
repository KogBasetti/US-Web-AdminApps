'use strict';

/**
 * @ngdoc function
 * @name sandvikusaAdminAppsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sandvikusaAdminAppsApp
 */
var app=angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('CheckPageCtrl', function ($scope,$http) {
        $scope.checkPageResult=false;
        
    
        $scope.checkurl = function(cid) { 
            //$scope.checkPageResult=true;
            
            //$http.jsonp($scope.inputUrl) 
            $http({
                    method: 'GET',
                    url: $scope.inputUrl,
                    respondType: 'json',
                    headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                         'Access-Control-Allow-Credentials': true
                    }
                })
                .success(function(data, status, headers, config){                   
                    console.log(data+status);
                }).error(function(data, status, headers, config){
                     console.log("failure message: " + data.status);
                });
            
        }
        
  });
