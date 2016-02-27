import 'angular-ui-router';
import angular from 'angular';
import routes from './index.route';
import layoutModule from '../../layout/layout.module';

let m = angular.module('dcIndex', [
    'ui.router',
    layoutModule.name
]);

routes(m);

export default m;
