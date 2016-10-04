(function () {

angular.module('data')
.component('items', {
  templateUrl: 'src/data/templates/items.template.html',
  bindings: {
    list2: '<'
  }
});


})();