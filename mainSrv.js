angular.module('starFinder').service('mainSrv', function ($http){

  this.getCharacter = (charName) => {
    return $http.get(`http://swapi.co/api/people/?search=${charName}`)
  }

  this.getPlanet = (planetName) => {
    return $http.get(`http://swapi.co/api/planets/?search=${planetName}`)
  }

  this.getStarship = (shipName) =>{
  if (shipName){
    return $http.get(`http://swapi.co/api/starships/?search=${shipName}`)}
  }

  this.getVehicle = (vehicleName) =>{
    if (vehicleName){
      return $http.get(`http://swapi.co/api/vehicles/?search=${vehicleName}`)}
  }

  this.getFilm = (filmTitle) =>{
    return $http.get(`http://swapi.co/api/films/?search=${filmTitle}`)
  }

  this.getSpecies = (speciesName) =>{
    return $http.get(`http://swapi.co/api/species/?search=${speciesName}`)
  }



})
