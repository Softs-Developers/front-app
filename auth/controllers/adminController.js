// controllers/authController.js
angular.module('adminApp')
.controller('adminController', ['$scope', 'adminService', function($scope, adminService) {
    $scope.Video = {};
    $scope.errorVideo = '';
    sessionId = sessionStorage.getItem('sessionId');


     $scope.GetVideos = function() {
        adminService.GetVideos()
        .then(function(response) {
            console.log(response);
            $scope.Videos = response.data;

            
        })
        .catch(function(error) {
            $scope.errorVideo = 'Error al obtener videos' + error.message;
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
