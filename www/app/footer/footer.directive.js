
import template from './footer.html!text';
import ctrl from './footer.controller';

export default (module) => {
    module.directive('footer', () => {
        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: ctrl,
            controllerAs: 'vm'
        }
    });
}