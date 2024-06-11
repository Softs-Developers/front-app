'use strict';
angular.module('adminApp').factory('adminService', ['$http', function($http) {
    var Action = {};
    var session_id = sessionStorage.getItem('sessionId');
 Action.GetUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/getUsuarios',
            headers: { 'Authorization': 'Bearer ' + session_id },
            session_id: session_id,
        });
    };
    Action.CreateUser = function(user) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postUsuario',
            headers: { 'Authorization': 'Bearer ' + session_id },
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
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                deleteIDUsuario: user.userID,
            }
        });
    }
    Action.UpdateUser = function(user) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/users',
            headers: { 'Authorization': 'Bearer ' + session_id },
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
            headers: { 'Authorization': 'Bearer ' + session_id },
             
        });
    };
    Action.CreateCategory = function(category) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postCategorias',
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                nameCategoria: category.name,
            }
        });
    };
    Action.DeleteCategory = function(category) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/deleteCategorias',
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                deleteNameCategoria: category.name,
            }
        });
    }
    Action.UpdateCategory = function(category) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/categories',
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                category: category.name,
            }
        });
    }
    Action.GetVideos = function() {
       
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/getVideos',
            headers: { 'Authorization': 'Bearer ' + session_id },
           data:{ token: this.session_id},
        });
    }
    Action.CreateVideo = function(video) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/postVideo',
            headers: { 'Authorization': 'Bearer ' + session_id },
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
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                "deleteNameVideo": "video.name",
            }
        });
    }
    Action.UpdateVideo = function(video) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:8080/videos',
            headers: { 'Authorization': 'Bearer ' + session_id },
            data: {
                video: video.name,
                url: video.url,
                category: video.category
            }
        });
    }

    
    return Action;
}]);