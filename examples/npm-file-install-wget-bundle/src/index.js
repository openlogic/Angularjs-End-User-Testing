require("perforce-angularjs/angular.js")
require("perforce-angularjs/angular-animate.js")
require("perforce-angularjs/angular-aria.js")
require("perforce-angularjs/angular-cookies.js")
require("perforce-angularjs/i18n/angular-locale_en.js")
require("perforce-angularjs/angular-loader.js")
require("perforce-angularjs/angular-message-format.js")
require("perforce-angularjs/angular-messages.js")
// require("perforce-angularjs/angular-mocks.js")
require("perforce-angularjs/angular-parse-ext.js")
require("perforce-angularjs/angular-resource.js")
require("perforce-angularjs/angular-route.js")
require("perforce-angularjs/angular-sanitize.js")
require("perforce-angularjs/angular-touch.js")
require('./testModule');

angular
    .module("test", [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngLocale',
        'ngMessageFormat',
        'ngMessages',
        'ngParseExt',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        "testModule"
    ])
    .controller('TestController', function($rootScope) {
        this.hero = {
            name: 'Spawn'
        };
        $rootScope.text = 'Hello, world!';
    })
    .component('exampleComponent', {
        templateUrl: '/src/exampleComponent.html',
        bindings: {
            hero: '='
        }
    });;

console.log({
    angular,
})
