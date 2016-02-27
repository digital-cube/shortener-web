import template from './menu.html!text';
import MenuController from './menu.controller';

export default
angular.module('app.menu', []).directive('dcMenu', function () {
    return {
        restrict: 'E',
        template: template,
        controller: MenuController,
        controllerAs: 'vm',
        scope: {}
    };
});
