var app = angular.module('bankApp', ["ngRoute"]);


//Controlador l
app.controller('bankCtrl', function ($scope, $interval) {
    //Inicializacion de variables
    $scope.saludo = "Bienvenido a BankApp";
    $scope.fecha = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    $interval(function () {
        $scope.fecha = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    }, 1000);
    $scope.personas = [
        {id: 1, nombre: 'Tyron Woodley', genero: 'M', nacionalidad: 'USA'},
        {id: 2, nombre: 'Megan Anderson', genero: 'F', nacionalidad: 'Australia'},
        {id: 3, nombre: 'Demian Maia', genero: 'M', nacionalidad: 'Brazil'},
        {id: 4, nombre: 'Volkan Oezdemir', genero: 'M', nacionalidad: 'Suecia'},
        {id: 5, nombre: 'Karolina Kowalkewics', genero: 'F', nacionalidad: 'Poland'},
        {id: 6, nombre: 'Jing Lang', genero: 'F', nacionalidad: 'China'}
    ];
    $scope.showTable = true;
    $scope.showEdit = false;
    $scope.showConfirm = false;
    $scope.showForm = false;
    $scope.operacion = '';
    $scope.opcion = '';
    //Variables de paginacion
    $scope.currentPage = 1;
    $scope.totalItems = $scope.personas.length;
    $scope.entryLimit = 5;
    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
    
    //fin Variables de paginacion
    $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    //Fin inicializacion de variables
    
    
    /*       Inicio 
            Funciones      */
    $scope.editUser = function(id){
        $scope.showTable = false;
        $scope.showForm = true;
        if (id == 'new'){
            $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
            $scope.showEdit = false;
        } else {
            $scope.showEdit = true;
            $scope.persona.id = $scope.personas[id].id;
            $scope.persona.nombre = $scope.personas[id].nombre;
            $scope.persona.genero = $scope.personas[id].genero;
            $scope.persona.nacionalidad = $scope.personas[id].nacionalidad;
        }
        
    };
    
    $scope.goBack = function(){
        $scope.showTable = true;
        $scope.showConfirm = false;
         $scope.showForm = false;
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    };
    
    $scope.valUser= function(op){
     $scope.showConfirm = true;
     $scope.showForm = false;
        if (op == 'a') {
            $scope.operacion = 'Agregar';
            $scope.opcion = 'a';
        } else if (op == 'm') {
            $scope.operacion = 'Modificar';
            $scope.opcion = 'm';
        } else if (op == 'e') {
            $scope.operacion = 'Eliminar';
            $scope.opcion = 'e';
        }
    };
    
    $scope.executeOp= function(){
     $scope.showConfirm = true;
     $scope.showForm = false;
        if ($scope.opcion == 'a') {
            $scope.addUser();
        } else if ($scope.opcion == 'm') {
            $scope.modUser();
        } else if ($scope.opcion == 'e') {
            $scope.delUser();
        }
    };
    
    
    $scope.addUser= function(){
        $scope.showConfirm = false;
        $scope.showTable = true;
        if ($scope.personas.length == 0) {
           $scope.persona.id = 1; 
        }else{
           $scope.persona.id = $scope.personas[$scope.personas.length - 1].id + 1; 
        }
        $scope.personas.push($scope.persona);
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
        $scope.showTable = true;
    };
    
    $scope.modUser=function(){
        $scope.showConfirm = false;
        $scope.showTable = true;
        for (var i =0;i<$scope.personas.length;i++){
            if ($scope.personas[i].id == $scope.persona.id) {
                $scope.personas[i] = $scope.persona;
                
            }
        }
        
        $scope.showTable = true;
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    };
    
    $scope.delUser=function(){
        $scope.showConfirm = false;
        $scope.showTable = true;
        for (var i =0;i<$scope.personas.length;i++){
            if ($scope.personas[i].id == $scope.persona.id) {
                $scope.personas.splice(i,1);
                
            }
        }
        
        $scope.showTable = true;
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    };
    
    /*      Fin 
     *      Funciones   */
});


//Enrutamiento de indice
/*app.config(function($routeProvider){
    $routeProvider
            .when("/index.htm",{
                templateUrl:"table.htm"
            });
});*/





