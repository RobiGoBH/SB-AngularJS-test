'use strict';

angular.module('userMgrApp')

  .controller('mainController', function($scope, UserDataService) {
      $scope.orderByField = 'name';
      $scope.orderDesc = false;
      $scope.nameFilter ='';

      $scope.myFilter = function (item) {
        if($scope.nameFilter.length==0) {
          return true
        }
        return item.name.toLowerCase().includes($scope.nameFilter.toLowerCase()); 
      };
      
      $scope.resetAllBalances = function() {
        $scope.users.forEach((user, index) => {
          user.balance = 0;
        });
        $scope.$broadcast('$$rebind:refresh');
        //as the JSON file is read only we can't save this change into that users.json.
      };

      $scope.getFavClassIcon= function (column) {
        
          if($scope.orderByField !== column){
            return  'fa fa-sort';
          }
          if($scope.orderByField == column && $scope.orderDesc == true){
            return 'fa fa-sort-asc';
          }
          if($scope.orderByField == column && $scope.orderDesc == false){
            return  'fa fa-sort-desc';
          }
      };
      
      //UserDataService can not read files running locally, need to be pushed to an online https server!
      $scope.users = UserDataService.getUsers();
  });