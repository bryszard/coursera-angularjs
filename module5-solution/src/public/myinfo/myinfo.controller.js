(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['getUserData', 'getMenuItem', 'ApiPath'];
function MyInfoController(getUserData, getMenuItem, ApiPath) {
  var $ctrl = this;
  var registered;
  var notRegistered;
  var favourite;

  $ctrl.basePath = ApiPath;
  $ctrl.getUserData = function () {
    var email = $ctrl.user.email;
    
    getUserData(email).then(function (response) {
      var users = response;

      if (users !== 'undefined' && users.length > 0) {
        $ctrl.registered = users.pop();
        getMenuItem($ctrl.registered.description).then(function(response) {
          $ctrl.favourite = response.data;
          console.log($ctrl.favourite);
        });        
        $ctrl.notRegistered = false;
      } else {
        $ctrl.notRegistered = true;
        $ctrl.registered = false;
      }
    })
  };
}

})();