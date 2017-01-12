var angular = require('angular');

var tech = require('./tech/tech');
var techs = require('./techs');

var techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('tech', tech)
  .component('techs', techs);
