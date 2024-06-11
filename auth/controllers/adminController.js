// controllers/authController.js
angular.module('adminApp')
.controller('adminController', ['$scope', 'adminService', function($scope, adminService) {
    // estos son para los gets
    $scope.Videos = [];
    $scope.error = '';
    $scope.Categorias = [];
    $scope.Usuarios = [];

    // estos siguientes son para los formularios
    $scope.user={};
    $scope.category={};
    $scope.video={};

    $scope.alert='';


    sessionId = sessionStorage.getItem('sessionId');
// gets 

     $scope.GetVideos = function() {
        adminService.GetVideos()
        .then(function(response) {
            console.log(response);
            $scope.Videos = response.data;

            
        })
        .catch(function(error) {
            $scope.error = 'Error al obtener videos' + error.message;
            console.log(error.message);
        });

    };
    $scope.GetCategories = function() {
        adminService.GetCategories()
        .then(function(response) {
            console.log(response);
            $scope.Categorias = response.data;
            
        })
        .catch(function(error) {
            $scope.error = 'Error al obtener categorias' + error.message;
            console.log(error.message);
        });

    };
    $scope.GetUsers = function() {
        adminService.GetUsers()
        .then(function(response) {
            console.log(response);
            $scope.Usuarios = response.data;
            if (response.data.success) {
              
                $scope.alert = 'Usuarios conseguidos correctamente';
                
            }
            
        })
        .catch(function(error) {
            $scope.error = 'Error al obtener usuarios' + error.message;
            console.log(error.message);
        });

    };

    $scope.CreateVideo = function() {
        adminService.CreateVideo($scope.video)
        .then(function(response) {
            console.log(response);
             
                $scope.GetVideos();
                $scope.alert = 'Video creado correctamente';
                $scope.video={};
           
           
        })
        .catch(function(error) {
            $scope.error = 'Error al crear video' + error.message;
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
