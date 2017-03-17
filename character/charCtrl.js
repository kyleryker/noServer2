angular.module('starFinder').controller('charCtrl', function ($scope, mainSrv, $state){

$scope.getCharacter = function(){
  if($state.params){
     mainSrv.getCharacter($state.params.character).then(function (response){
         $scope.character = response.data.results[0];
    });
  }
}
$scope.getCharacter();
})
