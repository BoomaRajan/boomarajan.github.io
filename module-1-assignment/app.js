(function() {
  'use strict';

  angular.module('myCheck',[])
  .controller('MyCheckController',function ($scope) {
    $scope.eatitems = "";
    $scope.message = "";
    $scope.calculateeatitems = function () {
      if($scope.eatitems == ""){
      $scope.message = "Please enter data first";
    } else {
      var items = $scope.eatitems.split(",");
      console.log("items",items);
      console.log("item length",items.length);
      if(items.length <= 3){
        $scope.message = "Enjoy!";
      }else {
          $scope.message = "Too much!";
      }
    }

    };

  });
})();
