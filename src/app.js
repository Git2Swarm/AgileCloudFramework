var App = angular.module('mainApp', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/stackManagement');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/partial-home/partial-home.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'app/components/partial-home-list/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'app/components/partial-abouts/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'app/components/table-data/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        })
        // Stack Management and views ==========================================
        .state('stackManagement', {
            url: '/stackManagement',
             templateUrl: 'app/components/stackManagemet/stackManagemet.html',
             controller:'stackManagemetController'
        });
        
});

App.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});

