/**
 * Created by ivo on 28.4.16..
 */

import angular from 'angular';
import 'angular-ui-router';
import 'angular-route';
import registerShortyDirective from './shorty/shorty.directive';
import registerFooterDirective from './footer/footer.directive';
import registerHeaderDirective from './header/header.directive';
import registerSignupDirective from './signup/signup.directive';
import registerLoginDirective from './login/login.directive';
import registerApiService from './util/apicalls';
import apiConfigModule from './util/apiconf';
import registerSelectDirective from './shorty/select_shorty.directive';
import registerSelectHistoryDirective from './shorty/history_select';
import loggedUserService from './util/loggedUser';
import overlaySwitchService from './util/overlaySwitch';

import registerRegisterRoute from './routes/register/register.route';

import registerHomeRoute from './routes/home/home.route';
// import homeModule from './routes/home/home.module';
import homeAbsModule from './routes/home_abs/home_abs.module';

let mainModule = angular.module('main', [
    apiConfigModule.name,
    homeAbsModule.name,
    // homeModule.name,
    'ui.router',
    'ngRoute'
]);

registerShortyDirective(mainModule);
registerHeaderDirective(mainModule);
registerFooterDirective(mainModule);
registerSignupDirective(mainModule);
registerLoginDirective(mainModule);
registerApiService(mainModule);
loggedUserService(mainModule);
overlaySwitchService(mainModule);
registerSelectDirective(mainModule);
registerSelectHistoryDirective(mainModule);

registerRegisterRoute(mainModule);

registerHomeRoute(mainModule);

export default mainModule;