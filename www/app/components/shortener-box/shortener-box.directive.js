import template from './shortener-box.html!text';
import ShortenerBoxController from './shortener-box.controller';

export default
angular.module('app.shortener', []).directive('dcShortenerBox', function () {
    return {
        restrict: 'E',
        template: template,
        controller: ShortenerBoxController,
        controllerAs: 'vm',
        scope: {}
    };
});
