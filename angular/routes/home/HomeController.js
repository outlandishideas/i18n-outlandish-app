angular
    .module('i18nOutlandishApp')
    .controller('HomeController', function($scope, $rootScope) {
        "use strict";

        $rootScope.className = 'home';
        $rootScope.title = 'Home';
    });