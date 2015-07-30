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
});

app.controller('OrderFormsCtrl', function ($scope,$location, $http,$route) {
    $scope.$location = $location;
    $scope.listAll = true;
    $scope.editAll = false;
    $scope.loading = true;
    $scope.curPage = 0;
    $scope.pageSize = 5;
    $scope.MaxPage = 0;
    
    //Get All data
    $http.jsonp("http://beta.iservices.earlymoments.com/getorderformdetails?token=741889E3-4565-40A1-982A-F15F7A923D72&EntryId=&format=json&callback=JSON_CALLBACK")
        .success(function(data) {
            $scope.results = data.response;
            $scope.loading = false;
            //pagination...
            $scope.numberOfPages=function(){
                return Math.ceil($scope.results.length / $scope.pageSize);
            }
            $scope.MaxPage=$scope.numberOfPages();
            //pagination...
           
        }).error(function(){
            alert("Error");
        });
    
    //Edit Data
    $scope.editdata = function(index) {  
    
            var token='741889E3-4565-40A1-982A-F15F7A923D72';
            $http.jsonp('http://beta.iservices.earlymoments.com/getorderformdetails?token='+token+'&EntryId='+index+'&format=json&callback=JSON_CALLBACK')   
            
            .success(function (data, status, headers, config) {           
                $scope.listAll = false;
                $scope.editAll = true;   
                
                $scope.EntryId          =   data.response[0].EntryId;
                $scope.token            =   token;
                $scope.AdditionalInfo   =   data.response[0].AdditionalInfo;
                $scope.OfferInfo        =   data.response[0].OfferInfo;
                $scope.BonusInfo        =   data.response[0].BonusInfo;
                $scope.BonusText        =   data.response[0].BonusText;
                $scope.BonusRebuttalInfo=   data.response[0].BonusRebuttalInfo;
                $scope.TacInfo          =   data.response[0].TacInfo;
                $scope.OfferRebuttal1   =   data.response[0].OfferRebuttal_1;
                $scope.OfferRebuttal2   =   data.response[0].OfferRebuttal_2;
                $scope.ShortNotes       =   data.response[0].ShortNotes;             
            })

            .error(function(data, status, headers, config){
               alert("Error");
            });
    }
    
  
    //update Data
    $scope.editSubmit = function() {
                
               if($scope.AdditionalInfo!=undefined && $scope.AdditionalInfo!='undefined' && $scope.AdditionalInfo!=''
                  && $scope.OfferInfo!=undefined && $scope.OfferInfo!='undefined' && $scope.OfferInfo!=''){
                var url = "http://beta.iservices.earlymoments.com/updateorderformdetails?EntryId="+$scope.EntryId+"&token="+$scope.token+"&AdditionalInfo="+encodeURIComponent($scope.AdditionalInfo)+"&OfferInfo="+encodeURIComponent($scope.OfferInfo)+"&BonusInfo="+encodeURIComponent($scope.BonusInfo)+"&BonusText="+$scope.BonusText+"&BonusRebuttalInfo="+encodeURIComponent($scope.BonusRebuttalInfo)+"&TacInfo="+encodeURIComponent($scope.TacInfo)+"&OfferRebuttal1="+encodeURIComponent($scope.OfferRebuttal1)+"&OfferRebuttal2="+encodeURIComponent($scope.OfferRebuttal2)+"&ShortNotes="+$scope.ShortNotes+"&format=json&callback=JSON_CALLBACK";
               
                   $http.jsonp(encodeURI(url))
                .success(function (data, status, headers, config) {
                     alert("Record has been updated Successfully");
                     $route.reload();
                     $scope.listAll = true;
                     $scope.editAll = false;
                })

                .error(function(data, status, headers, config){                     
                    alert("error");
                });
               }else{
                    alert("Invalid Entry.");   
               }
        }
        
    //Refresh Page
    $scope.refreshdata = function(){
        $route.reload();
    }

}); 
