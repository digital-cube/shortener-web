/**
 * Created by ivo on 18.5.16..
 */
import template from './signup.html!text';
import ctrl from './signup.controller';

export default (module) => {
    module.directive('signup', () => {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: ctrl,
            controllerAs: 'vm'
        }
    });
}