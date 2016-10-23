(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['getUserData', 'ApiPath'];
function MyInfoController(getUserData, ApiPath) {
  var $ctrl = this;
  var registered;
  var notRegistered;

  $ctrl.basePath = ApiPath;

  $ctrl.getUserData = function () {
    var email = $ctrl.user.email;
    
    getUserData(email).then(function (response) {
      var users = response;

      if (users !== 'undefined' && users.length > 0) {
        $ctrl.registered = users.pop();
        console.log($ctrl.registered);
        window.userData = $ctrl.registered;
        $ctrl.notRegistered = false;
      } else {
        $ctrl.notRegistered = true;
        $ctrl.registered = false;
      }
    })
  };
}

})();