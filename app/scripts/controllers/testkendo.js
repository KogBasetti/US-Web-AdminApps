var app = angular.module("sandvikusaAdminAppsApp");

app.controller( "testkendoCtrl", function($scope,$http){
    
     $scope.opendiv = 'reports';
        
    //////////////////////////
     $scope.mainGridOptions = {
            dataSource: new kendo.data.DataSource({
                  type: "odata",
                  transport: {
                      read:{
                            url:"http://beta.iservices.earlymoments.com/getpagelist?token=741889E3-4565-40A1-982A-F15F7A923D72",
                            dataType: "json"
                      }
                      /*parameterMap: function (options, type) {
                            var paramMap = kendo.data.transports.odata.parameterMap(options);
                            delete paramMap.$inlinecount; // <-- remove inlinecount parameter.
                            delete paramMap.$format; // <-- remove format parameter.
                            return paramMap;
                      }*/
                  },
                  schema: {
                    data: 'response',
                    total: function(data){
                        return data.response.length;
                    },
                    model: {
                        fields: {
                                CampaignId: { type: "number" },
                                PageId: { type: "number" },
                                PageName: { type: "string" },
                                PageDesc: { type: "string" },
                                Project: { type: "string" }
                        }
                    }
                  },
                  pageSize: 20,
                  //serverPaging: true,//this is problem for pagination
                  //serverFiltering: true,
            }),
            height: 488,
            filterable: {
              mode: "row"
            },
            pageable: true,
            columns: 
            [{
               field: "Project",
               title: "Project",
               filterable: {
                 cell: {
                   operator: "contains"              
                 }
               }
             },
                {
              field: "CampaignId",
              title: "Campaign Id",
              filterable: {
                cell: {
                  showOperators: false
                }
              }
            },
             {
               field: "PageId",
               title: "Page Id",
               filterable: {
                 cell: {
                   //operator: "gte" 
                   showOperators: false
                 }
               }
             },
             {
               field: "CampaignShortNotes",
               title: "Offer Description",
               filterable: {
                 cell: {
                  operator: "contains"
                 }
               }
             },
             {
               field: "CampaignCreditRule",
               title: "Credit Rule",
               filterable: {
                 cell: {
                  operator: "contains"
                 }
               }
             },
             {
               field: "PageName",
               title: "Page Name",
               filterable: {
                 cell: {
                   operator: "contains"
                 }
               }
             },
             {
               field: "PageDesc",
               title: "Page Desc",
                filterable: {
                 cell: {
                   operator: "contains"
                 }
               }
             },
             {
               field: "PageShortNotes",
               title: "Page ShortNotes",
                filterable: {
                 cell: {
                   operator: "contains"
                 }
               }
             },
              {
               field: "PageUrl",
               title: "Page Url",
                filterable: {
                 cell: {
                   operator: "contains"
                 }
               }
             },
             {
               field: "IsClubShopOffer",
               title: "Page Type",
               template: "#= IsClubShopOffer ? 'Maxchoice' : 'Horizontal' #",
                filterable: {
                 //ui: titleFilter
               }
             }
             
            ]
          };
    /////////////////////////
    
});
/*function titleFilter(element) {
    var titles=["Maxchoice", "Horizontal"];
    element.kendoAutoComplete({
        dataSource: titles
    });
}*/