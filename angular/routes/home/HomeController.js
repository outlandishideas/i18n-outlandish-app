angular
    .module('i8nOutlandishApp')
    .controller('HomeController', function($scope, $rootScope) {
        "use strict";

        $rootScope.className = 'home';
        $rootScope.title = 'Home';
    });