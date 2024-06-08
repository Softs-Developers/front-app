// controllers/authController.js
angular.module('authApp')
.controller('AuthController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = {};
    $scope.error = '';

    $scope.login = function() {
        AuthService.login($scope.user)
        .then(function(response) {
            // Manejar la respuesta del servidor
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Aquí puedes redireccionar al panel de administración o mostrar un mensaje de éxito
            } else {
                $scope.error = 'Login failed';
                
            }
        })
        .catch(function(error) {
            $scope.error = 'Login failed';
        });
    };
}]);
