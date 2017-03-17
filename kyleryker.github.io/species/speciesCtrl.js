angular.module('starFinder').controller('speciesCtrl', function ($scope, mainSrv, $state){

$scope.getSpecies = function(){
  if($state.params){
     mainSrv.getSpecies($state.params.species).then(function (response){
         $scope.species = response.data.results[0];
    });
  }
}
$scope.getSpecies();
})
