var angular = require('angular');

var techsData = require('./techs-data/techs-data');

var servicesModule = 'services';

module.exports = servicesModule;

angular
  .module(servicesModule, [])
  .service('techsData', techsData);
