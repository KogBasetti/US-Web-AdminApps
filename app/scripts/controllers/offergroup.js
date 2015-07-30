'use strict';

var app = angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.controller('OfferGroupCtrl', function ($scope,$http,$filter) {
        $scope.editing = false;
        $scope.showModal = false;
        $scope.OfferGroups=offerGroups;
        $scope.models = {
          changeInfo: [],
          searchText: '',
          offergrouplist: $scope.OfferGroups,
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
            }
            return selected.length ? selected[0].text : 'Not set';
        };
        $scope.saveUser = function(data, id) {
            //angular.extend(data, {id: id});
            //return $http.post('/saveUser', data);
            alert("please wait...");
            //return false;
        };

     //Edit Section and Save Edit..    
    
    //Edit campaign data..
    $scope.editCampaignData = function(campaignData,action){
        //alert(action);
            $scope.showModal = !$scope.showModal;
            $scope.actionVal=false;
            $scope.action = action;
            $scope.campaignId = campaignData.campaignId;
            $scope.CampaingDesc = campaignData.CampaingDesc;
            $scope.CampaignCreditRule = campaignData.CampaignCreditRule;
            $scope.CampaignShortNotes = campaignData.CampaignShortNotes;
            $scope.Project = campaignData.Project;
            $scope.IsClubShopOffer = campaignData.IsClubShopOffer;
            if(action==='View'){
             $scope.actionVal=true;}

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

    };
    
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

