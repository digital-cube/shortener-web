/**
 * Created by ivo on 28.4.16..
 */

import angular from 'angular';
import mainModule from './main';

angular.element(document).ready(() => {
    angular.bootstrap(document.querySelector('body'),
    [
        mainModule.name
    ], {
        strictDi: true
    })
});
