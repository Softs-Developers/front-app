
angular.module('authApp')
.factory('AuthService', ['$http', function($http) {
    var login = function(user) {
        return $http.post('/login', user);
    };

    return {
        login: login
    };
}]);
