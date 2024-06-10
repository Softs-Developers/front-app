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
    service.GetUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/users',
        });
    };
    servisce.CreateUser = function(user) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/users',
            data: {
                user: user.username,
                passwd: user.password
            }
        });
    };
    service.DeleteUser = function(user) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/users',
            data: {
                user: user.username,
                passwd: user.password
            }
        });
    }
    service.UpdateUser = function(user) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/users',
            data: {
                user: user.username,
                passwd: user.password
            }
        });
    }

    service.GetCategories = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/categories',
        });
    };
    servisce.CreateCategory = function(category) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    };
    service.DeleteCategory = function(category) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    }
    service.UpdateCategory = function(category) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    }
    service.GetVideos = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/videos',
        });
    }
    service.CreateVideo = function(video) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/videos',
            data: {
                video: video.name,
                url: video.url,
                category: video.category
            }
        });
    }
    service.DeleteVideo = function(video) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/videos',
            data: {
                video: video.name,
                url: video.url,
                category: video.category
            }
        });
    }
    service.UpdateVideo = function(video) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/videos',
            data: {
                video: video.name,
                url: video.url,
                category: video.category
            }
        });
    }
    


        

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
