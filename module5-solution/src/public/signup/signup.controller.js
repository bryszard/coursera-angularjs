(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['getMenuItem', 'updateMenuItem'];
function SignupController(getMenuItem, updateMenuItem) {
  var $ctrl = this;
  var invalidDish;
  var saveSuccess;

  $ctrl.getItem = function (shortName) {
    var userData = {      
      'short_name': 'USER',
      'name': $ctrl.user.firstName + " " + $ctrl.user.lastName,
      'description': $ctrl.user.favouriteDish,
      'small_portion_name': $ctrl.user.email,
      'large_portion_name': $ctrl.user.phoneNumber
    };

    getMenuItem(shortName).then(function(response) {
      updateMenuItem(userData).then(function(response) {
        $ctrl.invalidDish = false;
        $ctrl.saveSuccess = true; 
      }, function(error) {
        $ctrl.invalidDish = false;
        $ctrl.saveSuccess = true; 
      })      
    }, function(error) {
      $ctrl.invalidDish = true;
      $ctrl.saveSuccess = false; 
    });
  };
}

})();