App.controller('adminController', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.stackUrl = {src:"https://" + location.host + "/stackmanagement"};
  $scope.adminUrl = {src:"https://" + location.host + "/admin"};
  $scope.jenkinsUrl = {src:"https://" + location.host};
  $scope.artifactoryUrl = {src:"https://" + location.host + "/artifactory"};
  $scope.visualizerUrl = {src:"https://" + location.host + "/visualizer/"};
  $scope.kibanaUrl = {src:"https://" + location.host + "/app/kibana/"};
  $scope.portainerUrl = {src:"https://" + location.host + "/portainer/"};
});

