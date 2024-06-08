
angular.module('authApp')
.controller('AuthController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = {};
    $scope.error = '';

    $scope.login = function() {
        AuthService.login($scope.user)
        .then(function(response) {
            // Manejar la respuesta del servidor
            if(response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Redireccionar al panel de administración
            } else {
                $scope.error = 'Login failed';
            }
        })
        .catch(function(error) {
            $scope.error = 'Login failed';
        });
    };
}]);
