angular.module('starFinder').controller('mainCtrl', function ($scope, mainSrv){

  $scope.test = "CTRL CONNECTED";

    $scope.getData = function(){
if($scope.charName){
   mainSrv.getCharacter($scope.charName).then(function (response){
       $scope.character = response;
    console.log(response);
    console.log($scope.character);
  });
}
else if($scope.planetName){
   mainSrv.getPlanet($scope.planetName).then(function (response){
       $scope.planet = response.data.results[0];
    console.log(response);
    console.log($scope.planet.name);
  });
}
else if($scope.shipName){
   mainSrv.getStarship($scope.shipName).then(function (response){
       $scope.starship = response;
    console.log(response);
    console.log($scope.starship);
  });
}
else if($scope.vehicleName){
   mainSrv.getVehicle($scope.vehicleName).then(function (response){
       $scope.vehicle = response;
    console.log(response);
    console.log($scope.vehicle);
  });
}
else if($scope.filmTitle){
   mainSrv.getFilm($scope.filmTitle).then(function (response){
       $scope.film = response;
    console.log(response);
    console.log($scope.film);
  });
}
else if($scope.speciesName){
   mainSrv.getSpecies($scope.speciesName).then(function (response){
       $scope.species = response;
    console.log(response);
    console.log($scope.species);
  });
}
}




})
