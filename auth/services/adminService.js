'use strict';
angular.module('adminApp').factory('adminService', ['$http', function($http) {
    var Action = {};
    var session_id = sessionStorage.getItem('sessionId');
 Action.GetUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/getUsuarios',
            session_id: session_id,
        });
    };
    servisce.CreateUser = function(user) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postUsuario',
            data: {
                postNameDeUsuario: user.username,
                postpasswddelUsuario: user.password,
                postMailDelUsuario: user.email,
            }
        });
    };
    Action.DeleteUser = function(user) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/deleteUsuarios',
            data: {
                deleteIDUsuario: user.userID,
            }
        });
    }
    Action.UpdateUser = function(user) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/users',
            data: {
                user: user.username,
                passwd: user.password
            }
        });
    }

    Action.GetCategories = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/getCategorias',
            session_id: session_id,
        });
    };
    servisce.CreateCategory = function(category) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postCategorias',
            data: {
                nameCategoria: category.name,
            }
        });
    };
    Action.DeleteCategory = function(category) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/deleteCategorias',
            data: {
                deleteNameCategoria: category.name,
            }
        });
    }
    Action.UpdateCategory = function(category) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    }
    Action.GetVideos = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/getVideos',
            session_id: session_id,
        });
    }
    Action.CreateVideo = function(video) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postVideo',
            data: {
                postNameDeVideo: video.name,
                postUrlDeVideo: video.url,
                postNameCategoriaDeVideo: video.category
            }
        });
    }
    Action.DeleteVideo = function(video) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/deleteVideos',
            data: {
                "deleteNameVideo": "video.name",
            }
        });
    }
    Action.UpdateVideo = function(video) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/videos',
            data: {
                video: video.name,
                url: video.url,
                category: video.category
            }
        });
    }

    
    return Action;
}]);