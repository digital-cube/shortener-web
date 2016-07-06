/**
 * Created by ivo on 10.6.16..
 */

import HomeController from './home.controller.js';
import template from './home.html!text';

export default function (module) {
    module.config(home_route);
}

home_route.$inject = ['$stateProvider','$locationProvider'];

function home_route($stateProvider,$locationProvider) { 
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider.state('app.home', {
        url: '/',
        scope: {},
        controller: HomeController,
        controllerAs: 'vm',
        template: template
    });
}