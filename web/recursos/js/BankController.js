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
    $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    //Fin inicializacion de variables
    
    
    //Inicio Funciones
    $scope.editUser = function(id){
        $scope.showTable = false;
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
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
    };
    
    $scope.addUser= function(){
        $scope.persona.id = $scope.personas[$scope.personas.length - 1].id + 1;
        $scope.personas.push($scope.persona);
        $scope.persona = {id:0,nombre:'',genero:'',nacionalidad:''};
        $scope.showTable = true;
    };
    
    //Fin Funciones
});


//Enrutamiento de indice
/*app.config(function($routeProvider){
    $routeProvider
            .when("/index.htm",{
                templateUrl:"table.htm"
            });
});*/





