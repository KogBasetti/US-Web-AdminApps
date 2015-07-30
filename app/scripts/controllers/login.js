'use strict';

var app = angular.module('sandvikusaAdminAppsApp');
    
app.controller('loginCtrl', loginCtrl).$inject = ['$location', 'AuthenticationService', 'FlashService', '$rootScope'];
    
function loginCtrl($location, AuthenticationService, FlashService,$rootScope) {
        
        $rootScope.loggedIn = false; 
        $rootScope.errmsg = false;
    
        var vm = this;
        vm.login = login;
        
        (function initController() {
            AuthenticationService.ClearCredentials();
        })();
        
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                    $rootScope.errmsg = true;
                }
            });
        };       
    }

    function logoutCtrl($location, AuthenticationService, FlashService) {        
        function logout() {
            AuthenticationService.ClearCredentials();
        };       
    };

    



