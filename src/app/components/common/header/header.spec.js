var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function () {
  beforeEach(function () {
    angular
      .module('appHeader', ['app/header.html'])
      .component('appHeader', header);
    angular.mock.module('appHeader');
  });

  it('should render \'Fountain Generator\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app-header></app-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('a');
    expect(header.html().trim()).toEqual('Angular 1 Seed');
  }));
});
