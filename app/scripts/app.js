'use strict';

/**
 * @ngdoc overview
 * @name sandvikusaAdminAppsApp
 * @description
 * # sandvikusaAdminAppsApp
 *
 * Main module of the application.
 */
var app = angular.module('sandvikusaAdminAppsApp', [
                        'ngCookies',
                        'ngMessages',
                        'ngResource',
                        'ngRoute',
                        'ngSanitize',
                        'ngTouch',
                        'ngTable',
                        'ui.bootstrap',
                        'adaptv.adaptStrap',
                        'xeditable'
                      ]);

  app.config(function ($routeProvider) {
    $routeProvider
     .when('/orderforms', {
        templateUrl: 'views/orderforms.html',
        controller: 'OrderFormsCtrl'
      })
     .when('/insertorderforms', {
        templateUrl: 'views/insertorderforms.html',
        controller: 'insertOrderFormsCtrl'
      })
     .when('/promocode', {
        templateUrl: 'views/promocode.html',
        controller: 'promocodeCtrl'
      })
    .when('/promolist', {
        templateUrl: 'views/promolist.html',
        controller: 'promolistCtrl'
      })
     .when('/pages', {
        templateUrl: 'views/pages.html',
        controller: 'pageCtrl'
      })
      .when('/checkpage', {
        templateUrl: 'views/checkpage.html',
        controller: 'CheckPageCtrl'
      })
    .when('/offergroup', {
        templateUrl: 'views/offergroup.html',
        controller: 'OfferGroupCtrl'
      })
	.when('/insertcampaigns', {
        templateUrl: 'views/insertcampaigns.html',
        controller: 'insertCampaignsCtrl'
      })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs:'vm'
      })
    .otherwise({
        redirectTo: '/pages'
    });
     
  });

app.run(function($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            
            if(loggedIn === undefined || loggedIn === '' || loggedIn === 'undefined')
                    $rootScope.loggedIn = false;
            else
                    $rootScope.loggedIn = true;
        
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
            
            if($location.path() === '/pages' || $location.path() === '/testkendo'){
                $rootScope.opendiv = 'reports';
            }
            else if($location.path() === '/orderforms' || $location.path() === '/promolist' || $location.path() === '/offergroup' || $location.path() === '/promocode' || $location.path() === '/insertorderforms'){
                $rootScope.opendiv = 'offersetup';
            }
            else{
                $rootScope.opendiv = '';
            }
            $rootScope.selectdiv = function(selval) {  
                   $rootScope.opendiv = selval;
            }
            
            //For Active menu
            $rootScope.getClass = function(selmenu){
                var res='';
                if($location.path() === selmenu) 
                    res = 'active';
                return res;
            }
            
        });
});



//Common filters...
app.filter('pagination', function()
{
     return function(input, start)
     {
         if (!input || !input.length) { return; }
      start = +start;
      return input.slice(start);
     };
});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, msg) {  
    $scope.msg = msg;
    $scope.ok = function () {
                $modalInstance.close();
    };
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