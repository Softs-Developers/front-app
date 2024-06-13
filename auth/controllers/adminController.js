
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
    $scope.deleteVideo = function() {
        adminService.DeleteVideo($scope.video)
         
        .then(function(response) {
             
                $scope.GetVideos();
                $scope.alert = response.data.msg;
                $scope.video={};
            
        })
        .catch(function(error) {
            $scope.error = 'Error al eliminar video' + error.message;

            console.log(error.message);
        });
    };


    $scope.modificarVideo = function() {
        $scope.video.id = $scope.Videos.find(video => video.title === $scope.video.title).id;
        console.log($scope.video);

        adminService.UpdateVideo($scope.video)
        .then(function(response) {
            console.log(response);
            $scope.GetVideos();
            $scope.alert = 'Video modificado correctamente';
            $scope.video={};
            
        })
        .catch(function(error) {
            $scope.error = 'Error al actualizar video' + error.message;
            console.log(error.message);
        });
    } ;

    $scope.CreateCategory = function() {
        adminService.CreateCategory($scope.category)
        .then(function(response) {
            console.log(response);
            $scope.GetCategories();
            $scope.alert = 'Categoria creada correctamente';
            $scope.category={};
        })
        .catch(function(error) {
            $scope.error = 'Error al crear categoria' + error.message;
            console.log(error.message);
        });

    }

    $scope.deleteCategory = function() {
        adminService.DeleteCategory($scope.category)
        .then(function(response) {
            console.log(response);
            $scope.GetCategories();
            $scope.alert = response.data.msg;
            $scope.category={};
        })
        .catch(function(error) {
            $scope.error = 'Error al eliminar categoria' + error.message;
            console.log(error.message);
        });
    }

    $scope.modificarCategory = function() {
        $scope.category.id = $scope.Categorias.find(category => category.name === $scope.category.name).id;
        console.log($scope.category);

        adminService.UpdateCategory($scope.category)
        .then(function(response) {
            console.log(response);
            $scope.GetCategories();
            $scope.alert = 'Categoria modificada correctamente';
            $scope.category={};
        })
        .catch(function(error) {
            $scope.error = 'Error al actualizar categoria' + error.message;
            console.log(error.message);
        });
    } ;
    $scope.logout = function() { 
        adminService.logout(sessionId)
        .then(function(response) {
            sessionStorage.removeItem('sessionId');
            console.log(response);
            window.location.href = 'index.html';
        }).catch(function(error) {
            $scope.error = error.message;
        });
    };
    $scope.createUser = function() {
        adminService.createUser($scope.user)
        .then(function(response) {
            console.log(response);
            $scope.GetUsers();
            $scope.alert = 'Usuario creado correctamente';
            $scope.user={};
        })
        .catch(function(error) {
            $scope.error = 'Error al crear usuario' + error.message;
            console.log(error.message);
        });
    }
    $scope.updateUser = function() {
        $scope.user.id = $scope.Usuarios.find(user => user.name === $scope.user.name).user_id;
        adminService.updateUser($scope.user)
        .then(function(response) {
            console.log(response);
            $scope.GetUsers();
            $scope.alert = 'Usuario modificado correctamente';
            $scope.user={};
        })
        .catch(function(error) {
            $scope.error = 'Error al actualizar usuario' + error.message;
            console.log(error.message);
        });
    }
    $scope.deleteUser  = function() {
        $scope.user.id = $scope.Usuarios.find(user => user.name === $scope.user.name).user_id;
         
        adminService.DeleteUser($scope.user)
        .then(function(response) {
            console.log(response);
            $scope.GetUsers();
            $scope.alert = response.data.msg;
            $scope.user={};
        })
        .catch(function(error) {
            $scope.error = 'Error al eliminar usuario' + error.message;
            console.log(error.message);
        });
    }




     
}]);

