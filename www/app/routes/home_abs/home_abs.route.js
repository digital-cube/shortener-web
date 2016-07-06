/**
 * Created by ivo on 10.6.16..
 */

import HomeAbsController from './home_abs.controller';
// import template from './home_abs.html!text';

export default function (module) {
    module.config(home_abs_route);
}

home_abs_route.$inject = ['$stateProvider','$locationProvider'];

function home_abs_route($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider.state('app', {
        abstract: true,
        template: '<div ui-view></div>',
        controller: HomeAbsController,
        controllerAs: 'vm',
        scope: {}
    });
}