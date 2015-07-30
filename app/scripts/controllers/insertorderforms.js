'use strict';

/**
 * @ngdoc function
 * @name globsynApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the globsynApp
 */
var app = angular.module('sandvikusaAdminAppsApp');
  
app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
});

app.controller('insertOrderFormsCtrl', function ($scope,$location, $http) {
            $scope.$location = $location;       
            $scope.btnName = 'Add';
      
            $scope.addSubmit = function() {
                  
                    var token ='741889E3-4565-40A1-982A-F15F7A923D72';
                   if($scope.AdditionalInfo!=undefined && $scope.OfferInfo!=undefined){
                                 
                    var url = "http://beta.iservices.earlymoments.com/insertorderformdetails?token="+token+"&EntryId="+$scope.EntryId+"&AdditionalInfo="+encodeURIComponent($scope.AdditionalInfo)+"&OfferInfo="+encodeURIComponent($scope.OfferInfo)+"&BonusInfo="+encodeURIComponent($scope.BonusInfo)+"&BonusText="+$scope.BonusText+"&BonusRebuttalInfo="+encodeURIComponent($scope.BonusRebuttalInfo)+"&TacInfo="+encodeURIComponent($scope.TacInfo)+"&OfferRebuttal1="+encodeURIComponent($scope.OfferRebuttal1)+"&OfferRebuttal2="+encodeURIComponent($scope.OfferRebuttal2)+"&ShortNotes="+$scope.ShortNotes+"&callback=JSON_CALLBACK";
                      
                                    
                    $http.jsonp(encodeURI(url))
               
                    .success(function (data, status, headers, config) {
                        alert("Record has been added Successfully");
                        //$scope.spanErr.text="Record has been added Successfully";
                        $location.path("/orderforms");
                    })

                    .error(function(data, status, headers, config){                     
                        alert("error");
                    });
                   }else{
                    alert("Invalid Entry.");   
                   }
            }
            
});
       
app.directive('ckEditor', [function () {
        return {
            require: '?ngModel',
            link: function ($scope, elm, attr, ngModel) {

                var ck = CKEDITOR.replace(elm[0]);

                ck.on('pasteState', function () {
                    $scope.$apply(function () {
                        ngModel.$setViewValue(ck.getData());
                    });
                });

                ngModel.$render = function (value) {
                    ck.setData(ngModel.$modelValue);
                };
                
                
            }
        };
}]);

 