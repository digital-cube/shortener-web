import angular from 'angular';
import routes from './layout.routes';
import 'angular-ui-router';

import dcHeader from './header/header.directive';
import dcFooter from './footer/footer.directive';
import dcMenu from './menu/menu.directive';

let layoutModule = angular.module('dcLayout', [
    'ui.router',
    dcHeader.name,
    dcFooter.name,
    dcMenu.name,
]);

routes(layoutModule);

export default layoutModule;
