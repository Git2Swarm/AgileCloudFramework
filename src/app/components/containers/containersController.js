App.controller('containersController', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.srcUrl = {src:"https://" + location.host + "/portainer/"};
});

