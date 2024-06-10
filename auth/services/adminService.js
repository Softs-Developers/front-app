angular.module('adminApp').factory('adminService', ['$http', function($http) {
    var Action = {};

 Action.GetUsers = function() {
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
    Action.DeleteUser = function(user) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/users',
            data: {
                user: user.username,
                passwd: user.password
            }
        });
    }
    Action.UpdateUser = function(user) {
        return $http({
            method: 'PUT',
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
    Action.DeleteCategory = function(category) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    }
    Action.UpdateCategory = function(category) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/categories',
            data: {
                category: category.name,
            }
        });
    }
    Action.GetVideos = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/videos',
        });
    }
    Action.CreateVideo = function(video) {
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
    Action.DeleteVideo = function(video) {
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
    Action.UpdateVideo = function(video) {
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

    
    return Action;
}]);