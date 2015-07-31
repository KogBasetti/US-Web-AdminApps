'use strict';

var app = angular.module('sandvikusaAdminAppsApp');


app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.controller('OfferGroupCtrl', function ($scope,$http,$filter) {
        $scope.editing = false;
        $scope.showModal = false;
    
        $scope.models = {
          changeInfo: [],
          searchText: '',
          offergrouplist: [
            {
            "offergroupId": "12195",
            "offergroupDesc": "Disney Max Choice Frozen $5.99BE DW6- Disney MAX choice 4 books $1.24 each / $2.99 and $5.99 Backend",
            "Offers": [
                    {
                    "offerId": "19632221",
                    "offerDescCode": "O",
                    "displayOrder": 17,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632222",
                    "offerDescCode": "O",
                    "displayOrder": 18,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632223",
                    "offerDescCode": "O",
                    "displayOrder": 19,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632224",
                    "offerDescCode": "O",
                    "displayOrder": 20,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                    "offerId": "19632225",
                    "offerDescCode": "O",
                    "displayOrder": 21,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632226",
                    "offerDescCode": "O",
                    "displayOrder": 22,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632227",
                    "offerDescCode": "O",
                    "displayOrder": 23,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19632228",
                    "offerDescCode": "O",
                    "displayOrder": 24,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    }
            ],
            "campaigns": [
                    {
                    "campaignId": 12366,
                    "CampaingDesc": "Disney Wonderful World of Reading",
                    "CampaignCreditRule":"SBM",
                    "CampaignShortNotes":"Disney MAX choice 4 books $1.24 each / $2.99 and $5.99 Backend",
                    "Project":"DBU",
                    "IsClubShopOffer":"Y",
                    "pages":[
                        {
                        "PageId":12367,
                        "PageName":"disney-max-4for124each299-sbm",
                        "PageDesc":"disney-max-choice",
                        "PageShortNotes":"Disney MAX choice 4books $1.24each/$2.99 and $5.99 Backend",
                        "PageUrl":"https://disney.earlymoments.com/special_offer/offers-new.aspx?pid=12366&pgd=12367"
                        }]
                    }
             ]
            },
            
            {
            "offergroupId": "12196",
            "offergroupDesc": "Seuss Max Choice $.79 ea Cat in the Hat - BW6",
            "Offers": [
                    {
                    "offerId": "19631528",
                    "offerDescCode": "O",
                    "displayOrder": 1,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631963",
                    "offerDescCode": "O",
                    "displayOrder": 2,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631964",
                    "offerDescCode": "O",
                    "displayOrder": 3,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631965",
                    "offerDescCode": "O",
                    "displayOrder": 4,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                    "offerId": "19631966",
                    "offerDescCode": "O",
                    "displayOrder": 5,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631967",
                    "offerDescCode": "O",
                    "displayOrder": 6,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631968",
                    "offerDescCode": "O",
                    "displayOrder": 7,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631969",
                    "offerDescCode": "O",
                    "displayOrder": 8,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    }
            ],
            "campaigns": [
                    {
                    "campaignId": 12367,
                    "CampaingDesc": "Dr. Seuss™ & His Friends",
                    "CampaignCreditRule":"SBM",
                    "CampaignShortNotes":"Control: Max Choice 5 for $3.95 + 2 Bonus Books at $4.99",
                    "Project":"BRU",
                    "IsClubShopOffer":"Y",
                    "pages":[
                        {
                        "PageId":12368,
                        "PageName":"seuss-2015-sbm-5for395-599BE",
                        "PageDesc":"seuss-max-choice",
                        "PageShortNotes":"Seuss Winter Regular 5for595 noprem 499be",
                        "PageUrl":"https://enrollments.earlymoments.com/seuss-winter-2014-regular-5for595-noprem-499be.aspx"
                        }]
                    }
             ]
            },
              
            {
            "offergroupId": "12197",
            "offergroupDesc": "Seuss Max Choice $.79 ea Cat in the Hat - BW6",
            "Offers": [
                    {
                    "offerId": "19631531",
                    "offerDescCode": "O",
                    "displayOrder": 1,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631532",
                    "offerDescCode": "O",
                    "displayOrder": 2,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631533",
                    "offerDescCode": "O",
                    "displayOrder": 3,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631534",
                    "offerDescCode": "O",
                    "displayOrder": 4,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    }
            ],
            "campaigns": [
                    {
                    "campaignId": 12365,
                    "CampaingDesc": "Dr. Seuss™ & His Friends",
                    "CampaignCreditRule":"SBM",
                    "CampaignShortNotes":"Control: Max Choice 5 for $3.95 + 2 Bonus Books at $4.99",
                    "Project":"BRU",
                    "IsClubShopOffer":"Y",
                    "pages":[
                        {
                        "PageId":12366,
                        "PageName":"seuss-2015-sbm-5for395-599BE",
                        "PageDesc":"seuss-max-choice",
                        "PageShortNotes":"Seuss Winter Regular 5for595 noprem 499be",
                        "PageUrl":"https://enrollments.earlymoments.com/seuss-winter-2014-regular-5for595-noprem-499be.aspx"
                        }]
                    }
             ]
            },
              
            {
            "offergroupId": "12198",
            "offergroupDesc": "Seuss Max Choice $.79 ea Cat in the Hat - BW6",
            "Offers": [
                    {
                    "offerId": "19631542",
                    "offerDescCode": "O",
                    "displayOrder": 1,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631543",
                    "offerDescCode": "O",
                    "displayOrder": 2,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631544",
                    "offerDescCode": "O",
                    "displayOrder": 3,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    },
                    {
                   "offerId": "19631545",
                    "offerDescCode": "O",
                    "displayOrder": 4,
                    "itemSelected": "N",
                    "isBonusBundled": "N",
                    "displayInCart": "Y",
                    "isBaseOffer": "N",
                    "inUse": "Y",
                    "specialText": ""
                    }
            ],
            "campaigns": [
                    {
                    "campaignId": 12369,
                    "CampaingDesc": "Dr. Seuss™ & His Friends",
                    "CampaignCreditRule":"SBM",
                    "CampaignShortNotes":"Control: Max Choice 5 for $3.95 + 2 Bonus Books at $4.99",
                    "Project":"BRU",
                    "IsClubShopOffer":"Y",
                    "pages":[
                        {
                        "PageId":12370,
                        "PageName":"seuss-2015-sbm-5for395-599BE",
                        "PageDesc":"seuss-max-choice",
                        "PageShortNotes":"Seuss Winter Regular 5for595 noprem 499be",
                        "PageUrl":"https://enrollments.earlymoments.com/seuss-winter-2014-regular-5for595-noprem-499be.aspx"
                        }]
                    }
             ]
            }
            
          ],

          state: {
            sortKey: 'offergroupId',
            sortDirection: 'DEC' 
          }
        };
       
        $scope.offerGroupTableColumnDefinition = [
              {
                columnHeaderDisplayName: 'Offer Group Id',
                displayProperty: 'offergroupId',
                sortKey: 'offergroupId',
                //columnSearchProperty: 'offergroupId',
                width: '20em',
                visible: true
              },
              {
                columnHeaderDisplayName: 'Offer Group Desc',
                displayProperty: 'offergroupDesc',
                //columnSearchProperty: 'offergroupDesc',
                visible: true
              },
              {
                columnHeaderDisplayName: 'campaigns',
                displayProperty: 'campaigns',
                sortKey: 'campaigns',
                //columnSearchProperty: 'campaigns',
                visible: false
              }
            ];
    
        //for second layer : offer soring..
        $scope.orderByField = 'offerId';
        $scope.reverseSort = false;
     
    
        //////// third Layer...
        $scope.tableRowExpanded = false;
        $scope.tableRowIndexExpandedCurr = "";
        $scope.tableRowIndexExpandedPrev = "";
        $scope.storeIdExpanded = "";
    
        $scope.dayDataCollapseFn = function (index) {
            $scope.dayDataCollapse = [];
            for (var i = 0; i < $scope.models.offergrouplist[index].campaigns[[index]].pages.length; i += 1) {
                $scope.dayDataCollapse.push(false);
            }
        };
    
        $scope.selectTableRow = function (index, campaignId) {
            if (typeof $scope.dayDataCollapse === 'undefined') {
                $scope.dayDataCollapseFn(index);
            }

            if ($scope.tableRowExpanded === false && $scope.tableRowIndexExpandedCurr === "" && $scope.storeIdExpanded === "") {
                $scope.tableRowIndexExpandedPrev = "";
                $scope.tableRowExpanded = true;
                $scope.tableRowIndexExpandedCurr = index;
                $scope.storeIdExpanded = campaignId;
                $scope.dayDataCollapse[index] = true;
                $("#icon_"+campaignId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
            } 
            else if ($scope.tableRowExpanded === true) {

                if ($scope.tableRowIndexExpandedCurr === index && $scope.storeIdExpanded === campaignId) {
                    $scope.tableRowExpanded = false;
                    $scope.tableRowIndexExpandedCurr = "";
                    $scope.storeIdExpanded = "";
                    $scope.dayDataCollapse[index] = false;
                    $("#icon_"+campaignId).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
                } else {
                    $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
                    $scope.tableRowIndexExpandedCurr = index;
                    $scope.storeIdExpanded = campaignId;
                    $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
                    $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
                    $(".listSerialicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
                    $("#icon_"+campaignId).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
                }
            }

        };
       //////// third Layer.....
     
        

      //Edit Section and Save Edit..
        $scope.itemstatus = [
            {value: 'Y', text: 'Yes'},
            {value: 'N', text: 'No'},
            {value: 'X', text: 'X'}
          ];

        $scope.showStatus = function(offerData) {
            var selected = [];
            if(offerData.itemSelected) {
              selected = $filter('filter')($scope.itemstatus, {value: offerData.itemSelected});

        $scope.allstatus = [
            {value: 'Y', text: 'Yes'},
            {value: 'N', text: 'No'}
          ];
        $scope.showStatus = function(itemSelected,c) {
            var selected = [];
            if(itemSelected) {
              if(c==1)
                  selected = $filter('filter')($scope.itemstatus, {value: itemSelected});
              else
                  selected = $filter('filter')($scope.allstatus, {value: itemSelected});

            }
            return selected.length ? selected[0].text : 'Not set';
        };
        $scope.saveUser = function(data, id) {
            //angular.extend(data, {id: id});
            //return $http.post('/saveUser', data);
            alert("please wait...");
            //return false;
        };

    
    //Edit campaign data..
    $scope.editCampaignData = function(campaignData,action){

            $scope.showModal = !$scope.showModal;
            $scope.actionVal=false;
            $scope.action = action;
            $scope.campaignId = campaignData.campaignId;
            $scope.CampaingDesc = campaignData.CampaingDesc;
            $scope.CampaignCreditRule = campaignData.CampaignCreditRule;
            $scope.CampaignShortNotes = campaignData.CampaignShortNotes;
            $scope.Project = campaignData.Project;
            $scope.IsClubShopOffer = campaignData.IsClubShopOffer;

          

            if(action==='View') $scope.actionVal=true;

            //alert(action+' changed');
    };
    $scope.updateCampaignData= function() {
        var campaignData = {'campaignId':this.campaignId,
                            'CampaingDesc':this.CampaingDesc,
                            'CampaignCreditRule':this.CampaignCreditRule,
                            'CampaignShortNotes':this.CampaignShortNotes,
                            'Project':this.Project,
                            'IsClubShopOffer':this.IsClubShopOffer
                           };

        //console.log(campaignData);
        //alert("please wait...");
        $scope.showModal = !$scope.showModal;
        this.editCampaignData(campaignData,'View');


        //alert("please wait...");
        this.editCampaignData(campaignData,'View');

    }
            }
}
        
});


app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };

  });

   

