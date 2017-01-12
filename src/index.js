var angular = require('angular');

var techsModule = require('./app/components/techs/techs.module');
var servicesModule = require('./app/services/services.module');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/components/main/main');
var header = require('./app/components/common/header/header');
var footer = require('./app/components/common/footer/footer');

require('./index.scss');

angular
  .module('app', [servicesModule, techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('appHeader', header)
  .component('appFooter', footer);
