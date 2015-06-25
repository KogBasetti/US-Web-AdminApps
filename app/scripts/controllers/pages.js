'use strict';

var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

/*app.controller('pageCtrl', function ($scope, $http, $route) {
        $scope.opendiv = 'reports';
        $scope.results = [];
        $scope.allPageIds = [];
        $scope.loading = true;
        $scope.oneAtATime = true;
        $scope.curPage = 0;
        $scope.pageSize = 5;
        $scope.MaxPage = 0;
        $scope.Run = 1;    
	
		 //Get All Project
         $http.jsonp("http://beta.iservices.earlymoments.com/getprojectlist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
         .success(function(data) {
            $scope.allProjects = data.response;
         }); //end
	
		//Get All Credit Rule
         $http.jsonp("http://beta.iservices.earlymoments.com/getcreditruleslist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
         .success(function(data) {
            $scope.allCreditrules = data.response;
         }); //end
    

        //Get All data start
        $http.jsonp("http://beta.iservices.earlymoments.com/getpagelist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
        .success(function(data) {
            $scope.results = data.response ;                     
            $scope.numberOfPages=function(){
                return Math.ceil($scope.results.length / $scope.pageSize);
            }
            $scope.MaxPage=$scope.numberOfPages();
            $scope.loading = false;                 
        }).error(function(){
            alert("Error");
        }); 
       //Get All data end  
}); */

app.controller('pageCtrl',function($scope){
    $scope.opendiv = 'reports';
    
    $scope.allcampaignlist = [
            {
            "CampaignId": "11825",
            "CampaingDesc": "Offer with $13.95",
            "CampaignCreditRule":"SCC",
            "CampaignShortNotes":"short_notes",
            "Project":"HOU",
            "allpagelist": [
                    {
                    "PageId":11825,
                    "PageName":"hop-ltr-1395",
                    "PageDesc":"Offer with $13.95",
                    "PageShortNotes":"short_notes",
                    "PageUrl":"short_notes",
                    "IsClubShopOffer":"Y"
                    }   
            ]
            },
        
            {
            "CampaignId": "11850",
            "CampaingDesc": "Offer with $13.95",
            "CampaignCreditRule":"SCC",
            "CampaignShortNotes":"short_notes",
            "Project":"HOU",
            "allpagelist": [
                    {
                        "PageId":11850,
                        "PageName":"hop-ltr-1495",
                        "PageDesc":"Offer with $14.95",
                        "PageShortNotes":"short_notes",
                        "PageUrl":"short_notes",
                        "IsClubShopOffer":"N"
                    },
                    {
                        "PageId":11852,
                        "PageName":"HOP-LTR-1495-2",
                        "PageDesc":"Offer with $14.95",
                        "PageShortNotes":"short_notes",
                        "PageUrl":"short_notes",
                        "IsClubShopOffer":"N"
                    },
                    {
                        "PageId":11918,
                        "PageName":"Learn-To-Read",
                        "PageDesc":"Learn-To-Read",
                        "PageShortNotes":"",
                        "PageUrl":"",
                        "IsClubShopOffer":"N"
                    },
                    {
                        "PageId":11896,
                        "PageName":"offer",
                        "PageDesc":"offer",
                        "PageShortNotes":"",
                        "PageUrl":"",
                        "CampaingDesc":"$14.95 offer",
                        "IsClubShopOffer":"N"
                    }
            ]
            }
            
            ];
    $scope.tableRowExpanded = false;
    $scope.tableRowIndexExpandedCurr = "";
    $scope.tableRowIndexExpandedPrev = "";
    $scope.storeIdExpanded = "";
    
    $scope.dayDataCollapseFn = function (index) {
        $scope.dayDataCollapse = [];
        $scope.campaignDataCollapse = [];
        for (var i = 0; i < $scope.allcampaignlist[index].allpagelist.length; i += 1) {
            $scope.dayDataCollapse.push(false);
        }
    };
    
    $scope.selectTableRow = function (index, CampaignId) {
        if (typeof $scope.dayDataCollapse === 'undefined') {
            $scope.dayDataCollapseFn(index);
        }

        if ($scope.tableRowExpanded === false && $scope.tableRowIndexExpandedCurr === "" && $scope.storeIdExpanded === "") {
            $scope.tableRowIndexExpandedPrev = "";
            $scope.tableRowExpanded = true;
            $scope.tableRowIndexExpandedCurr = index;
            $scope.storeIdExpanded = CampaignId;
            $scope.dayDataCollapse[index] = true;
            //$(".listSerialicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            $("#icon_"+CampaignId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
        } 
        else if ($scope.tableRowExpanded === true) {
            
            if ($scope.tableRowIndexExpandedCurr === index && $scope.storeIdExpanded === CampaignId) {
                $scope.tableRowExpanded = false;
                $scope.tableRowIndexExpandedCurr = "";
                $scope.storeIdExpanded = "";
                $scope.dayDataCollapse[index] = false;
                $("#icon_"+CampaignId).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            } else {
                $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
                $scope.tableRowIndexExpandedCurr = index;
                $scope.storeIdExpanded = CampaignId;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
                $(".listSerialicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
                $("#icon_"+CampaignId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
            }
        }

    };
});