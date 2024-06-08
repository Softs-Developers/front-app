angular.module('authApp')
.factory('AuthService', ['$http', function($http) {
    var login = function(user) {
        return $http.post('http://localhost:8080/login', {
            user: user.username,
            passwd: user.password
        });
    };

    return {
        login: login
    };
}]);