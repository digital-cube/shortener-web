/**
 * Created by ivo on 28.4.16..
 */

import template from './shorty.html!text';
import ctrl from './shorty.controller';

export default (module) => {
    module.directive('shorty', () => {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: ctrl,
            controllerAs: 'vm'
        }
    });
}