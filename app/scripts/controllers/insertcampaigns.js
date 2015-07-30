'use strict';

/**
 * @ngdoc function
 * @name globsynApp.controller:insertCampaignsCtrl
 * @description
 * # MainCtrl
 * Controller of the globsynApp
 */
var app = angular.module('sandvikusaAdminAppsApp');
  
app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = 'application/json';
    $httpProvider.defaults.headers.common["Content-Type"] = 'application/json';
});

app.controller('insertCampaignsCtrl', function ($scope,$location, $http) {
            $scope.$location = $location;       
            $scope.btnName = 'Add';
      
            $scope.addSubmit = function() {
                  
                   var token ='741889E3-4565-40A1-982A-F15F7A923D72';
                   if($scope.creditrule!==undefined && $scope.campaigndesc!==undefined)
				   {           
						var url = "http://beta.iservices.earlymoments.com/insertcampaigndetails?token="+token+"&creditrule="+$scope.creditrule+"&campaigndesc="+$scope.campaigndesc+"&ShortNotes="+$scope.ShortNotes+"&callback=JSON_CALLBACK";


						$http.jsonp(encodeURI(url))

						.success(function (data, status, headers, config) {
							alert("Record has been added Successfully");
							$location.path("/pages");
						})

						.error(function(data, status, headers, config){                     
							alert("error");
						});
					   
                   }else{
                    	alert("Invalid Entry.");   
                   }
            };
            
});
        