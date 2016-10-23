(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['getUserData'];
function MyInfoController(getUserData) {
  var $ctrl = this;

  $ctrl.getUserData = function () {
    var email = $ctrl.user.email;

    return getUserData(email);
  };
}

})();