import template from './footer.html!text';

export default
angular.module('app.footer', []).directive('dcFooter', function () {
    return {
        restrict: 'E',
        template: template,
    };
});
