'use strict';

var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

/*app.controller('OfferGroupCtrl', function ($scope, $http) {
        
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
  });*/



app.controller('OfferGroupCtrl', function ($scope) {
    
    $scope.tableRowExpanded = false;
    $scope.tableRowIndexExpandedCurr = "";
    $scope.tableRowIndexExpandedPrev = "";
    $scope.storeIdExpanded = "";
    
    $scope.dayDataCollapseFn = function (index) {
        $scope.dayDataCollapse = [];
        $scope.campaignDataCollapse = [];
        for (var i = 0; i < $scope.offergrouplist[index].Offers.length; i += 1) {
            $scope.dayDataCollapse.push(false);
        }
        for (var i = 0; i < $scope.offergrouplist[index].campaigns.length; i += 1) {
            $scope.campaignDataCollapse.push(false);
        }
    };
    
    $scope.selectTableRow = function (index, offergroupId) {
        if (typeof $scope.dayDataCollapse === 'undefined') {
            $scope.dayDataCollapseFn(index);
        }

        if ($scope.tableRowExpanded === false && $scope.tableRowIndexExpandedCurr === "" && $scope.storeIdExpanded === "") {
            $scope.tableRowIndexExpandedPrev = "";
            $scope.tableRowExpanded = true;
            $scope.tableRowIndexExpandedCurr = index;
            $scope.storeIdExpanded = offergroupId;
            $scope.dayDataCollapse[index] = true;
            //$(".listSerialicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            $("#icon_"+offergroupId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
        } 
        else if ($scope.tableRowExpanded === true) {
            $("#icon_"+offergroupId).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            if ($scope.tableRowIndexExpandedCurr === index && $scope.storeIdExpanded === offergroupId) {
                $scope.tableRowExpanded = false;
                $scope.tableRowIndexExpandedCurr = "";
                $scope.storeIdExpanded = "";
                $scope.dayDataCollapse[index] = false;
            } else {
                $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
                $scope.tableRowIndexExpandedCurr = index;
                $scope.storeIdExpanded = offergroupId;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
            }
        }

    };

    $scope.offergrouplist = [
            {
            "offergroupId": "12151",
            "offergroupDesc": "Elmo Adventure",
            "Offers": [
                    {
                    "offerId": "19631624",
                    "offerDesc": "Elmo",
                    "offerDescCode": "B",
                    "displayOrder": 3,
                    "itemSelected": "Y",
                    "isBonusBundled": "",
                    "displayInCart": "Y",
                    "isBonusOffer": "N",
                    "isUser": "Y",
                    "specialText": ""
                    },
                    {
                    "offerId": "19631625",
                    "offerDesc": "Elmo",
                    "offerDescCode": "B",
                    "displayOrder": 3,
                    "itemSelected": "Y",
                    "isBonusBundled": "",
                    "displayInCart": "Y",
                    "isBonusOffer": "N",
                    "isUser": "Y",
                    "specialText": ""
                    }    
            ],
            "campaigns": [
                    {
                    "campaignId": 12303,
                    "campaignDesc": "Elmo adventure"
                    },
                    {
                    "campaignId": 12304,
                    "campaignDesc": "Elmo adventure"
                    }
            ]
            },
        
            {
            "offergroupId": "12152",
            "offergroupDesc": "Elmo Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "Elmo",
                    "offerDescCode": "B",
                    "displayOrder": 3,
                    "itemSelected": "Y",
                    "isBonusBundled": "",
                    "displayInCart": "Y",
                    "isBonusOffer": "N",
                    "isUser": "Y",
                    "specialText": ""
                    },
                    {
                    "offerId": "19631621",
                    "offerDesc": "Elmo",
                    "offerDescCode": "B",
                    "displayOrder": 3,
                    "itemSelected": "Y",
                    "isBonusBundled": "",
                    "displayInCart": "Y",
                    "isBonusOffer": "N",
                    "isUser": "Y",
                    "specialText": ""
                    }    
            ],
            "campaigns": [
                    {
                    "campaignId": 12301,
                    "campaignDesc": "Elmo adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Elmo adventure"
                    }
            ]
            }
            
            
            ];
        
});

app.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });
