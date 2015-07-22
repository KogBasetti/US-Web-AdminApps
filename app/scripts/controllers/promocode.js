'use strict';

/**
 * @ngdoc function
 * @name sandvikusaAdminAppsApp.controller:promocodeCtrl
 * @description
 * Controller of the sandvikusaAdminAppsApp
 */

var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


app.controller('promocodeCtrl', function ($scope,$http,$location,$modal) {
            
            $scope.pageids = "";
            $scope.msg="";          
            $scope.insertloading = true;
        
            //All Campaign Ids...
            $http.jsonp("http://beta.iservices.earlymoments.com/getcampaignlist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
            .success(function(data) {
                $scope.allcampaignids = data.response;
                $scope.insertloading = false;
            });
    
            //Page Id WRT Campaign Id...
            $scope.getPageId=function(item){
                $http.jsonp("http://beta.iservices.earlymoments.com/getpagelist?token=741889E3-4565-40A1-982A-F15F7A923D72&CampaignId="+item+"&format=json&callback=JSON_CALLBACK")
                .success(function(data) {
                    $scope.pageids = data.response;
                });
            } 
            
            //All reference Ids
            $http.jsonp("http://beta.iservices.earlymoments.com/getorderformdetails?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
            .success(function(data) {
                $scope.allrefids = data.response;
            });
    
            //Add records  
            $scope.submitted = false;
            $scope.addPromoCode = function() {
                  if ($scope.promocodeForm.$valid)
                  {                   
                        var token='741889E3-4565-40A1-982A-F15F7A923D72';           
                        if($scope.page_id=="" || $scope.page_id==null || $scope.page_id==undefined)
                            $scope.page_id=0;
                        if($scope.refid=="" || $scope.refid==null || $scope.refid==undefined)
                            $scope.refid=0;
                        if($scope.short_notes=="" || $scope.short_notes==null || $scope.short_notes==undefined)
                            $scope.short_notes="";
                        
                        var url = "http://beta.iservices.earlymoments.com/insertpromomapping?token="+token+"&PromoCode="+$scope.promo_code+"&CampaignId="+$scope.campaign_id+"&PageId="+$scope.page_id+"&ConfirmReferenceId="+$scope.refid+"&ShortNotes="+$scope.short_notes+"&callback=JSON_CALLBACK";
                      
                        $http.jsonp(url)
                        .success(function (data, status, headers, config) {
                            alert("Record has been added Successfully");
                            $location.path("/promolist");
                        })
                        .error(function(data, status, headers, config){                     
                            alert("failure message: " + JSON.stringify({data: data}));
                        });
                      
                    } 
                   else 
                   {
                       var errMsg="",i=0; 
                        if($scope.promo_code=="" || $scope.promo_code==undefined)
                            errMsg= ++i +" Promo Code is required. <br/>";
                        if($scope.campaign_id=="" || $scope.campaign_id==undefined)
                            errMsg=errMsg + ++i + " Campaign Id is required. <br/>";
                        if(errMsg!="" && errMsg!= undefined)
                            errMsg="Please address the error and then submit the form...<br/><br/>"+errMsg;                           
                        
                        $scope.msg=errMsg;   
                        var modalInstance = $modal.open({
                                        templateUrl: 'myModalContent.html',
                                        controller: 'ModalInstanceCtrl',
                                        resolve: {
                                                    msg: function () {
                                                      return $scope.msg;
                                                    }
                                                 }
                                    });
                        $scope.promocodeForm.submitted = false;
                    }
                  
             } 
            
            
});