/* eslint-disable */

module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($http, techsData) {
  var vm = this;

  init();

  function init(){
    techsData
      .getTechs()
      .then(function(result){
        vm.techs = result;
      });
  }
}
