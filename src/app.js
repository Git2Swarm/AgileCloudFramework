var App = angular.module('mainApp', ['ui.router']);
App.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/stackManagement');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/partial-home/partial-home.html'
        })

        //ADMIN PAGE ================================================
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/components/admin/admin.html',
            controller: 'adminController'
        })

        //Artifactory Page
        .state('artifactory', {
            url: '/artifactory',
            templateUrl: 'app/components/artifactory/artifactory.html'
        })

        //Visualizer Page
        .state('visualizer', {
            url: '/visualizer',
            templateUrl: 'app/components/visualizer/visualizer.html',
            controller: 'visualizerController'
        })

        // Kibana Page
        .state('kibana', {
            url: '/kibana',
            templateUrl: 'app/components/logAggregation/logAggregation.html',
            controller: 'logAggregationController'
        })

        //CICD Engine Page
        .state('jenkins', {
            url: '/jenkins',
            templateUrl: 'app/components/cicdEngine/cicdEngine.html',
            controller: 'cicdEngineController'
        })

        //Containers page Portainer
        .state('portainer', {
            url: '/portainer',
            templateUrl: 'app/components/containers/containers.html',
            controller: 'containersController'
        })

        // Stack Management and views ==========================================
        .state('stackManagement', {
            url: '/stackManagement',
            templateUrl: 'app/components/stackManagement/stackManagement.html',
            controller: 'stackManagementController'
        })

        //Projects
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/components/projects/projects.html',
            controller: 'projectsController'
        })
        .state('environments', {
            url: '/environments',
            templateUrl: 'app/components/environments/environments.html',
            controller: 'environmentsController'
        })
        .state('workFlows', {
            url: '/workFlows',
             templateUrl: 'app/components/workFlows/workFlows.html',
             controller: 'workFlowsController'
        })
        .state('appStacks', {
            url: '/appStacks',
             templateUrl: 'app/components/appStacks/appStacks.html',
             controller: 'appStacksController'
        });

});
