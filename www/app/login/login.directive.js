/**
 * Created by ivo on 18.5.16..
 */
import template from './login.html!text';
import ctrl from './login.controller.js';

export default (module) => {
    module.directive('login', () => {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: ctrl,
            controllerAs: 'vm'
        }
    });
}