import angular from 'angular';
import 'angular-ui-router';

export let mainConfigModule = angular.module('mainConfigModule', [
  'ui.router'
]);

mainConfigModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);

export default mainConfigModule;