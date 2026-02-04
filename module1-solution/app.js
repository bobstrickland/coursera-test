(function () {
  'use strict';
  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
      $scope.lunchMenu="";
      $scope.message="";
      $scope.messageColor="";

      $scope.clickLunch = function() {
          var lunchMenuItems = $scope.lunchMenu.split(/\s*,\s*/);
          var lunchMenuItemCount = lunchMenuItems.length;
          for (var i=0; i < lunchMenuItems.length; i++){
            if (lunchMenuItems[i].length == 0) {
                lunchMenuItemCount--;
            }
          }
          if (lunchMenuItemCount == 0) {
            $scope.messageColor="RED";
            $scope.message="Please enter data first";
          } else if (lunchMenuItemCount < 4) {
            $scope.messageColor="GREEN";
            $scope.message="Enjoy!";
          } else {
            $scope.messageColor="GREEN";
            $scope.message= "Too Much!";
          }
      };

    }


})();