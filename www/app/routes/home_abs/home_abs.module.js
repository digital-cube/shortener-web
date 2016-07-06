/**
 * Created by ivo on 10.6.16..
 */

import angular from 'angular';
import 'angular-ui-router';

import registerHomeABSRoute from './home_abs.route';

let home_module = angular.module('home', [
    'ui.router'
]);
registerHomeABSRoute(home_module);


export default home_module;