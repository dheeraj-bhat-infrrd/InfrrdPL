var angular =  require('./angular/angular.min.js');

angular.module('registerMod',['ui.router'])

.config(['$urlRouterProvider','$stateProvider',function ($urlRouterProvider, $stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'register',
        controller: 'registerCtrl'
    });
}])
    
.controller('registerCtrl',['$scope',function ($scope) {
    $scope.signUp = function () {

    }
}])
