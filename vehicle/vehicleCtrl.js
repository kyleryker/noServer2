angular.module('starFinder').controller('vehicleCtrl', function ($scope, mainSrv, $state){

$scope.getVehicle= function(){
  if($state.params){
     mainSrv.getVehicle($state.params.vehicle).then(function (response){
         $scope.vehicle = response.data.results[0];
      console.log(response);
      console.log($scope.vehicle);
    });
  }
}
$scope.getVehicle();
})
