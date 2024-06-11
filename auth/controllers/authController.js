// controllers/authController.js
angular.module('authApp')
.controller('authController', ['$scope', 'authService', function($scope, authService) {
    $scope.user = {};
    $scope.error = '';

    $scope.login = function() {
        authService.login($scope.user)
        .then(function(response) {
            console.log(response);
            if (response.data.token) {
              
              //  localStorage.setItem('token', response.data.token); esto no tiene sentido xd
                sessionStorage.setItem('sessionId', response.data.token);
                // voy a adminPanel
                console.log (response.data.token);
                window.location.href = 'adminPanel.html';
                 

            } else { 
                
                $scope.error = 'Login failed debido a  ' + response.data.errormsg;
                
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
