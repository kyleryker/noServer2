angular.module('starFinder').controller('planetCtrl', function ($scope, mainSrv, $state){

  $scope.getPlanet =  function (){
    if($state.params){
       mainSrv.getPlanet($state.params.planet).then(function (response){
           $scope.planet = response.data.results[0];
      });
  }}
  $scope.getPlanet();
})
