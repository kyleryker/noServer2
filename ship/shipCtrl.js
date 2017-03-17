angular.module('starFinder').controller('shipCtrl', function ($scope, mainSrv, $state){

$scope.getStarship = function(){
  if($state.params){
     mainSrv.getStarship($state.params.ship).then(function (response){
         $scope.ship = response.data.results[0];
      console.log(response);
      console.log($scope.ship);
    });
  }
}
$scope.getStarship();
})
