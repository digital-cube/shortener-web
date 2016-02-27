import angular from 'angular';

import mainConfigModule from './config/main.config';

import layoutModule from "./components/layout/layout.module";
import indexModule from "./components/pages/index/index.module";
import adminModule from "./components/pages/admin/admin.module";
import shortenerBoxModule from "./components/shortener-box/shortener-box.directive";

import '/assets/css/styles.css!';

export let mainModule = angular.module('main', [

    mainConfigModule.name,
    layoutModule.name,
    indexModule.name,
    adminModule.name,
    shortenerBoxModule.name,

]);

