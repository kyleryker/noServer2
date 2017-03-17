angular.module('starFinder').controller('filmCtrl', function ($scope, mainSrv, $state){

$scope.getFilm = function(){
  if($state.params){
     mainSrv.getFilm($state.params.film).then(function (response){
         $scope.film = response.data.results[0];
      console.log(response);
      console.log($scope.film);
    });
  }
}
$scope.getFilm();
})
