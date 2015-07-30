'use strict';

/**
 * @ngdoc function
 * @name globsynApp.controller:promolistCtrl
 * @description
 * # AboutCtrl
 * Controller of the globsynApp
 */
var app=angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('promolistCtrl', function ($scope,$http,$route,$modal) {
    $scope.listAll = true;
    $scope.editAll = false;
    $scope.loading = true;
    $scope.editLoading=false;
    $scope.curPage = 0;
    $scope.pageSize = 5;
    $scope.MaxPage = 0;
    
    $scope.results = [];
    $scope.allcampaignids = [];
    $scope.pageids = [];
    $scope.allrefids = [];
    
    
     //Get All data
    $http.jsonp("http://beta.iservices.earlymoments.com/getpromomappings?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
        .success(function(data) {
            $scope.results = data.response ;
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
    $scope.editpromodata = function(index) {  
               
            $scope.editLoading=true;
            $http.jsonp('http://beta.iservices.earlymoments.com/getpromomappings?token=741889E3-4565-40A1-982A-F15F7A923D72&EntryId='+index+'&format=json&callback=JSON_CALLBACK')   
            
            .success(function (data, status, headers, config) {             
                $scope.listAll = false;
                $scope.editAll = true;  
              
                $scope.EntryId           =   data.response[0].EntryId;
                $scope.promo_code        =   data.response[0].PromoCode;
                $scope.campaign_id       =   data.response[0].CampaignId;
                $scope.page_id           =   data.response[0].PageId;
                $scope.refid             =   data.response[0].ConfirmRefId;
                $scope.short_notes       =   data.response[0].ShortNotes; 
                
                //////////////////////////////////////////////////////////
                    
                    //All Campaign Ids
                    $http.jsonp("http://beta.iservices.earlymoments.com/getcampaignlist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
                    .success(function(data) {
                          $scope.allcampaignids = data.response;
                          $scope.editLoading=false;
                    });
                
                     //All page Ids
                    $http.jsonp("http://beta.iservices.earlymoments.com/getpagelist?token=741889E3-4565-40A1-982A-F15F7A923D72&CampaignId="+ $scope.campaign_id+"&format=json&callback=JSON_CALLBACK")
                    .success(function(data) {
                        $scope.pageids = data.response;
                    });
                
                    //All reference Ids
                    $http.jsonp("http://beta.iservices.earlymoments.com/getorderformdetails?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
                    .success(function(data) {
                        $scope.allrefids = data.response;
                    });
                
                    //Get Page Id wrt Campaign Id
                    $scope.getPageId=function(item){
                         //if(angular.isObject(item)){
                            $http.jsonp("http://beta.iservices.earlymoments.com/getpagelist?token=741889E3-4565-40A1-982A-F15F7A923D72&CampaignId="+item+"&format=json&callback=JSON_CALLBACK")
                            .success(function(data) {
                                $scope.pageids = data.response;
                            });
                    } 
                /////////////////////////////////////////////////////////
            })
            .error(function(data, status, headers, config){
               alert("Error");
            });
    } 
    
    //update Data
    $scope.editPromoCode = function() {
                
               if ($scope.promocodeForm.$valid) 
               {                      
                        var token='741889E3-4565-40A1-982A-F15F7A923D72';                   
                        if($scope.page_id=="" || $scope.page_id==null || $scope.page_id==undefined)
                            $scope.page_id=0;
                        if($scope.refid=="" && $scope.refid==null || $scope.refid==undefined)
                            $scope.refid=0;
                        if($scope.short_notes==null || $scope.short_notes==undefined)
                            $scope.short_notes="";
                       
                        var url = "http://beta.iservices.earlymoments.com/UpdatePromoMapping?token="+token+"&EntryId="+$scope.EntryId+"&PromoCode="+$scope.promo_code+"&CampaignId="+$scope.campaign_id+"&PageId="+$scope.page_id+"&ConfirmReferenceId="+$scope.refid+"&ShortNotes="+$scope.short_notes+"&callback=JSON_CALLBACK";
                     
                       
                        $http.jsonp(url)
                        .success(function (data, status, headers, config) {
                            alert("Record has been updated Successfully");
                            $route.reload();
                            $scope.listAll = true;
                            $scope.editAll = false;
                        })
                        .error(function(data, status, headers, config){                     
                           alert( "failure message: " + JSON.stringify({data: data}));
                        });
                        
                } 
                else{
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
        
    //Refresh Page
    $scope.refreshdata = function(){
        $route.reload();
    }
 });    