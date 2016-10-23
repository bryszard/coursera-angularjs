(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['getMenuItem'];
function SignupController(getMenuItem) {
  var $ctrl = this;
  var invalidDish;
  var saveSuccess;

  $ctrl.getItem = function (shortName) {
    getMenuItem(shortName).then(function(response) {
      console.log(response);
      $ctrl.invalidDish = false;
      $ctrl.saveSuccess = true; 
    }, function(error) {
      console.log(error);
      $ctrl.invalidDish = true;
      $ctrl.saveSuccess = false; 
    });
  };
}

})();