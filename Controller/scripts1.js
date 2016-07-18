var app = angular.module("myApp", []);

 app.controller('AlumnosController', function($scope) {
   $scope.alumnos=[
  {nombre:"Juan Blanco",telefono:"99810",curso:"Segundo ESO",},
  {nombre:"Rosa Luxemburgo",telefono:"99817",curso:"Tercero ESO",},
  {nombre:"Ana Mariño",telefono:"998109",curso:"Primero ESO",},
  {nombre:"Carlos Barahona",telefono:"998102",curso:"Tercero ESO",},
 ];
 })