angular.module('starFinder', [`ui.router`])
.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    templateUrl:'home/home.html',
    controller: 'mainCtrl',
    url: '/'
  })
  .state('character', {
    templateUrl:'character/character.html',
    controller: 'charCtrl',
    url:'/character/:character'
  })
  .state('planet', {
    templateUrl: 'planet/planet.html',
    controller: 'planetCtrl',
    url:'/planet/:planet'
  })
  .state('species', {
    templateUrl: 'species/species.html',
    controller:'speciesCtrl',
    url: '/species/:species'
  })
  .state('ship', {
    templateUrl: 'ship/ship.html',
    controller:'shipCtrl',
    url: '/ship/:ship'
  })
  .state('vehicle', {
    templateUrl: 'vehicle/vehicle.html',
    controller: 'vehicleCtrl',
    url: '/vehicle/:vehicle'
  })
  .state('film', {
    templateUrl: 'film/film.html',
    controller: 'filmCtrl',
    url: '/film/:film'
  });
  $urlRouterProvider.otherwise('/');
})
