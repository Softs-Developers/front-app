// controllers/authController.js
angular.module('authApp')
.controller('authController', ['$scope', 'authService', function($scope, authService) {
    $scope.user = {};
    $scope.error = '';

    $scope.login = function() {
        authService.login($scope.user)
        .then(function(response) {
            
            if (response.data.token) {
                console.log("llega token")
                localStorage.setItem('token', response.data.token);
                
            } else { 
                 console.log("no llega token")
                $scope.error = 'Login failed';
                
            }
        })
        .catch(function(error) {
            $scope.error = 'fallo login'+ error.message;
            console.log(error.message);
        });
    };

    // $scope.logout = function() {
    //     authService.logout().then(function() {
    //       windows.location.href = '/login';
    //     }).catch(function(error) {
            
    //         $scope.error = error.message;
    //     });
    // };
}]);
