/**
 * Created by ivo on 13.5.16..
 */

import template from './header.html!text';
import ctrl from './header.controller';

export default (module) => {
    module.directive('header', () => {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: ctrl,
            controllerAs: 'vm'
        }
    });
}