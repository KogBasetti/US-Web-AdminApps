'use strict';

var app = angular.module('sandvikusaAdminAppsApp');

app.controller('testofferpageCtrl', function ($scope) {
        
        $scope.models = {
          changeInfo: [],
          searchText: '',
          offergrouplist: [
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
            "offergroupDesc": "Disney Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "Disney",
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
                    "offerDesc": "sumita",
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
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            },
            {
            "offergroupId": "12153",
            "offergroupDesc": "Test Adventure",
            "Offers": [
                    {
                    "offerId": "19631622",
                    "offerDesc": "test",
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
                    "offerId": "19631623",
                    "offerDesc": "sumita",
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
                    "campaignId": 12309,
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12310,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            },
            {
            "offergroupId": "12142",
            "offergroupDesc": "New Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "Test Desc",
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
                    "offerDesc": "Test Offer",
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
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            },
            {
            "offergroupId": "12143",
            "offergroupDesc": "Elmo Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "new Offer",
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
                    "offerDesc": "new 2",
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
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            },
            {
            "offergroupId": "12144",
            "offergroupDesc": "Elmo Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "save 20",
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
                    "offerDesc": "save 30",
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
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            },
            {
            "offergroupId": "12145",
            "offergroupDesc": "Disney Adventure",
            "Offers": [
                    {
                    "offerId": "19631621",
                    "offerDesc": "Disney",
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
                    "offerDesc": "sumita",
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
                    "campaignDesc": "Disney adventure"
                    },
                    {
                    "campaignId": 12302,
                    "campaignDesc": "Disney adventure"
                    }
            ]
            }
            
          ],
          state: {
            sortKey: 'offergroupId',
            sortDirection: 'DEC'
          }
        };
       
        $scope.offerTableColumnDefinition = [
              {
                columnHeaderDisplayName: 'Offer Group Id',
                displayProperty: 'offergroupId',
                sortKey: 'offergroupId',
                columnSearchProperty: 'offergroupId',
                width: '20em',
                visible: true
              },
              {
                columnHeaderDisplayName: 'Offer Group Desc',
                displayProperty: 'offergroupDesc',
                columnSearchProperty: 'offergroupDesc',
                visible: true
              },
              {
                columnHeaderDisplayName: 'Offers',
                displayProperty: 'offers',
                sortKey: 'offers',
                columnSearchProperty: 'offers',
                visible: false
              }
            ];
    
});