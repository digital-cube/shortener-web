/**
 * Created by ivo on 10.6.16..
 */

import RegisterController from './register.controller';
import template from './register.html!text';

export default function (module) {
    module.config(register_route);
}

register_route.$inject = ['$stateProvider', '$locationProvider'];

function register_route($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider.state('register', {
        url: '/register',
        scope: {},
        controller: RegisterController,
        controllerAs: 'vm',
        template: template
    });
    
    // $urlRouterProvider.otherwise('/register');
}
