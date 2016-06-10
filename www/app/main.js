/**
 * Created by ivo on 28.4.16..
 */

import angular from 'angular';
import registerShortyDirective from './shorty/shorty.directive';
import registerHeaderDirective from './header/header.directive';
import registerSignupDirective from './signup/signup.directive';
import registerLoginDirective from './login/login.directive';
import registerApiService from './util/apicalls';
import apiConfigModule from './util/apiconf';
import registerSelectDirective from './shorty/select_shorty.directive';
import registerSelectHistoryDirective from './shorty/history_select';
import logedUserService from './util/loggedUser';
import overlaySwitchService from './util/overlaySwitch';

let mainModule = angular.module('main', [
    apiConfigModule.name
]);
registerShortyDirective(mainModule);
registerHeaderDirective(mainModule);
registerSignupDirective(mainModule);
registerLoginDirective(mainModule);
registerApiService(mainModule);
logedUserService(mainModule);
overlaySwitchService(mainModule);
registerSelectDirective(mainModule);
registerSelectHistoryDirective(mainModule);


export default mainModule;