angular
    .module('i18nOutlandishApp')
    .directive('localeSelector', function($translate) {
        return {
            restrict: 'C',
            replace: true,
            templateUrl: 'angular/common/localeSelector/locale-selector.html',
            link: function(scope, elem, attrs) {
                scope.locale = $translate.proposedLanguage();

                scope.setLocale = function() {
                    $translate.use(scope.locale);
                };
            }
        };
    });