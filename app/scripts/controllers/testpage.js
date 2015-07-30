'use strict';

var app = angular.module("sandvikusaAdminAppsApp");

app.controller( "testpageCtrl", function($scope,$http){
    
     $scope.opendiv = 'reports';
    
    //////////////////////////
     $scope.mainGridOptions = {
            dataSource: new kendo.data.DataSource({
                  type: "odata",
                  transport: {
                     read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                  },
                  schema: {
                    model: {
                        fields: {
                                OrderID: { type: "number" },
                                Freight: { type: "number" },
                                ShipName: { type: "string" },
                                OrderDate: { type: "date" },
                                ShipCity: { type: "string" }
                            }
                    }
                  },
                  pageSize: 20,
                  serverPaging: true,
                  serverFiltering: true,
            }),
            height: 529,
            filterable: {
              mode: "row"
            },
            pageable: true,
            columns: 
            [{
              field: "OrderID",
              width: 220,
              filterable: {
                cell: {
                  showOperators: false 
                }
              }
            },
             {
               field: "ShipName",
               width: 500,
               title: "Ship Name",
               filterable: {
                 cell: {
                   operator: "contains"              
                 }
               }
             },
             {
               field: "Freight",
               width: 250,
               filterable: {
                 cell: {
                   operator: "gte"
                 }
               }
             },
             {
               field: "OrderDate",
               title: "Order Date",
               format: "{0:MM/dd/yyyy}"
             }]
          };
    /////////////////////////
     
    
});