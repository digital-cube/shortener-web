import template from './header.html!text';

export default
angular.module('app.header', []).directive('dcHeader', function () {
    return {
        restrict: 'E',
        template: template
    };
});
