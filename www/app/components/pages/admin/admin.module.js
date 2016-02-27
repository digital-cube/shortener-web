import 'angular-ui-router';
import angular from 'angular';
import routes from './admin.route';
import layoutModule from '../../layout/layout.module';

let adminModule = angular.module('dcAdmin', [
    'ui.router',
    layoutModule.name
]);

routes(adminModule);

export default adminModule;
