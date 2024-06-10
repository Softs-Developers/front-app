angular.module('authApp').factory('authService', ['$http', function($http) {
    var service = {};

    service.login = function(user) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: {
                user: user.username,
                passwd: user.password

            }
            
        });
    };

    return service;
}]);

// service.logout = function() {
//     var sessionId = sessionStorage.getItem('sessionId');
//     if (!sessionId) {
//         throw new Error('No session to logout from');
//     }
//     return $http({
//         method: 'PUT',
//         url: 'http://localhost:8080/logout',
//         data: {
//             session_id: sessionId
//         }
//     }).then(function(response) {
//         if (response.data.success) {
//             // Elimina el identificador de sesión del almacenamiento de la sesión del navegador
//             sessionStorage.removeItem('sessionId');
//         } else {
//             throw new Error(response.data.message);
//         }
//     });
// };
