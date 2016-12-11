(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchListStr = "";
  $scope.message = "";
  $scope.countItems = function(){
    //console.log($scope.lunchListStr);
    if($scope.lunchListStr.length == 0){
      $scope.message = "Please enter data first";
    }else {
      var lunchList = $scope.lunchListStr.split(',');
      //console.log(lunchList);
      //console.log(lunchList.length);
      if(lunchList.length <=3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    }
  };
}

})();
