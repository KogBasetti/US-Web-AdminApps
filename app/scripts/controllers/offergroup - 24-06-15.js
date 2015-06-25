'use strict';

/**
 * @ngdoc function
 * @name sandvikusaAdminAppsApp.controller:OfferPageCtrl
 * @description
 * # OfferPageCtrl
 * Controller of the sandvikusaAdminAppsApp
 */
var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('OfferGroupCtrl', function ($scope, $http) {
        
        $scope.allProjects = [];
        $scope.results = [];
        $scope.loading = true;
        $scope.oneAtATime = true;
        $scope.curPage = 0;
        $scope.pageSize = 5;
        $scope.MaxPage = 0;
		$scope.curPage_sub = 0;
        $scope.pageSize_sub = 5;
        $scope.MaxPage_sub = 0;
        $scope.Run = 1;
    
        //Get All Project
         $http.jsonp("http://beta.iservices.earlymoments.com/getprojectlist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
         .success(function(data) {
            $scope.allProjects = data.response;
         }); //end
    

        //Get All data 
        $http.jsonp("http://beta.iservices.earlymoments.com/getsamsoffergrouplist?token=741889E3-4565-40A1-982A-F15F7A923D72&ProjectCode=BRU&format=json&callback=JSON_CALLBACK")
        .success(function(data) {
            $scope.results = data.response ;  
            $scope.numberOfPages=function(){
                return Math.ceil($scope.results.length / $scope.pageSize);
            }
            $scope.MaxPage=$scope.numberOfPages();
            $scope.loading = false;                 
        }).error(function(){
            alert("Error");
        }); //end
       
        
    
         $scope.getDropdownVal = function(selid) {   
             $http.jsonp("http://beta.iservices.earlymoments.com/getsamsoffergrouplist?token=741889E3-4565-40A1-982A-F15F7A923D72&ProjectCode="+selid+"&format=json&callback=JSON_CALLBACK")
            .success(function(data) {
                $scope.results = data.response ;  
                $scope.numberOfPages=function(){
                    return Math.ceil($scope.results.length / $scope.pageSize);
                }
                $scope.MaxPage=$scope.numberOfPages();
                $scope.loading = false;                 
            });
         }
		 
		  // Onclick get Campaign data start
        $scope.getCampaignData = function(cid) { 
            $http.jsonp("http://beta.iservices.earlymoments.com/getcampaignlist?token=741889E3-4565-40A1-982A-F15F7A923D72&CampaignId="+ cid+"&format=json&callback=JSON_CALLBACK")
            .success(function(data) {
                $scope.allCampaigns = data.response;
				console.log($scope.allCampaigns);
                $scope.numberOfPages_sub=function(){
                    return Math.ceil($scope.allCampaigns.length / $scope.pageSize_sub);
                }
                $scope.MaxPage_sub=$scope.numberOfPages_sub();
            });
         }
        // Onclick get campaign data end
  });
