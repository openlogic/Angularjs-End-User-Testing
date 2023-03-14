import angular, { IRootScopeService } from "angular"
import angularLoader from "angular-loader/angular-loader"

import "./testModule"

type ITestController = { hero?: { name: string }}

type TestControllerRootScope = IRootScopeService & { text: string }

class TestController implements ITestController {
    hero = {
        name: 'Spawn'
    };
    constructor($rootScope: TestControllerRootScope) {
        $rootScope.text = 'Hello, world 2!';
    }
}

const TestAppModules = [
    require("angular-animate"),
    require("angular-aria"),
    require("angular-cookies"),
    require("angular-resource"),
    require("angular-route"),
    require("angular-sanitize"),
    require("angular-message-format"),
    require("angular-messages"),
    require("angular-parse-ext"),
    require("angular-touch"),
    require("angular-i18n/en"),
    "testModule"
]

angular
    .module("test", TestAppModules)
    .controller('TestController', TestController)
    .component('exampleComponent', {
        templateUrl: '/src/exampleComponent.html',
        bindings: {
            hero: '='
        }
    });


console.log({
    angular,
    angularLoader,
    TestAppModules,
})
