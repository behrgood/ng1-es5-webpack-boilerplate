var angular = require('angular');
require('angular-mocks');
var {Techs-data} = require('./techs-data');

describe('Techs-data service', function () {
  beforeEach(function () {
    angular
      .module('Techs-data', [])
      .service('Techs-data', Techs-data);
    angular.mock.module('Techs-data');
  });

  it('should', angular.mock.inject(function (Techs-data) {
    expect(Techs-data.getData()).toEqual(3);
  }));
});
