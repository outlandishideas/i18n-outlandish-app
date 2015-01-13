angular
    .module('i8nOutlandishApp', ['ngRoute', 'ngCookies', 'pascalprecht.translate', 'templates'])
    .config(function($routeProvider, $locationProvider, $translateProvider) {
        "use strict";

        $routeProvider
            .when('/', {
                templateUrl: 'angular/routes/home/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $translateProvider.useCookieStorage();
        $translateProvider.useUrlLoader('/api/lang');
        $translateProvider.preferredLanguage('en');

        $locationProvider.html5Mode(true);
    });