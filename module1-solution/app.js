(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.menuList = "";
    $scope.message = "";
    $scope.msgStyle = "";

    $scope.checkCount = function () {
      var menu = $scope.menuList.trim()
                                .split(',')
                                .filter(function(entry) { return entry.trim() != ''; });
      var count = menu.length; // not taking into account 'empty' items

      if (count === 0) {
        $scope.message = "Please enter data first";
        $scope.msgStyle = "color: red; border: solid 1px red; padding: 2px;";
        return;
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.msgStyle = "color: green; border: solid 1px green; padding: 2px;";
      } else if (count > 3) {
        $scope.message = "Too much!";
        $scope.msgStyle = "color: green; border: solid 1px green; padding: 2px;";
      }
    };
  }

})();