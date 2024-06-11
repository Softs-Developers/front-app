// controllers/adminController.js
angular.module('authApp')
.controller('adminController', ['$scope', 'admiService', function($scope, admiService) {
    $scope.user = {};
    $scope.error = '';

    $scope.createUser = function() {
        admiService.Action.CreateUser($scope.user)
        .then(function(response) {
            console.log(response);
           
        })
        .catch(function(error) {
            $scope.error = 'Failed to create user: ' + error.message;
            console.log(error.message);
        });
    };
}]);