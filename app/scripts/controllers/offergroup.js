'use strict';

var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

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
            
            if ($scope.tableRowIndexExpandedCurr === index && $scope.storeIdExpanded === offergroupId) {
                $scope.tableRowExpanded = false;
                $scope.tableRowIndexExpandedCurr = "";
                $scope.storeIdExpanded = "";
                $scope.dayDataCollapse[index] = false;
                $("#icon_"+offergroupId).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            } else {
                $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
                $scope.tableRowIndexExpandedCurr = index;
                $scope.storeIdExpanded = offergroupId;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
                $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
                $(".listSerialicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
                $("#icon_"+offergroupId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
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
                    "campaignDesc": "Elmo adventure",
                    "CampaignCreditRule":"SCC",
                    "CampaignShortNotes":"short_notes",
                    "Project":"HOU"
                    },
                    {
                    "campaignId": 12304,
                    "campaignDesc": "Elmo adventure",
                    "CampaignCreditRule":"SCC",
                    "CampaignShortNotes":"short_notes",
                    "Project":"HOU"
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
                    "campaignDesc": "Disney adventure",
                    "CampaignCreditRule":"SCC",
                    "CampaignShortNotes":"short_notes",
                    "Project":"HOU"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure",
                    "CampaignCreditRule":"SCC",
                    "CampaignShortNotes":"short_notes",
                    "Project":"HOU"
                    }
            ]
            }
            
            ];
        
});
