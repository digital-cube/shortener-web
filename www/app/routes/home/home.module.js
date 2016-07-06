/**
 * Created by ivo on 10.6.16..
 */

import angular from 'angular';
import 'angular-ui-router';

import registerHomeRoute from './home.route';
import registerHeaderDirective from '../../header/header.directive';
import homeABSModule from '../home_abs/home_abs.module';

let home_module = angular.module('home', [
    // registerHomeRoute.name,
    homeABSModule.name,
    'ui.router'
]);/*.run(['$state', ($state) => {
    $state.go('home');
}]);*/

registerHomeRoute(home_module);
registerHeaderDirective(home_module);

export default home_module;