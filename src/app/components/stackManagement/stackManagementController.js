App.controller('stackManagementController', function($scope,$compile,$http) {
    var hostName = window.location.hostname;
    $scope.appLauncherUrl = "https://" + hostName + "/applauncher/";
    $scope.state = 'test 222';
    $scope.jobName = "";
    $scope.srcUrl  = "";
    $scope.opsUrl = "";
    $scope.listStackUrl = $scope.appLauncherUrl + "listStack";
    $scope.coutapplicationfile = 0;
    $scope.coutappendOperationsStack =0;
    $scope.ApplicationFiles;
    $scope.OperationStacks;

    $scope.appendApplicationFile = function(){
        $scope.coutapplicationfile = $scope.coutapplicationfile + 1;
        var myEl = angular.element( document.querySelector( '#divApplicationFile' ) );
        var toadd = '<div class = "col-xs-12 " id = "'+"divAppFileNumber"+$scope.coutapplicationfile+'">'+
                        '<div class = "input-group ">'+
                            '<input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty borderColor appFileClass" ng-model ="ApplicationFiles.ApplicationFileNum'+$scope.coutapplicationfile+'" ng-blur= "Urlvalidation(ApplicationFiles.ApplicationFileNum'+$scope.coutapplicationfile+', \''+"divAppFileNumber"+$scope.coutapplicationfile+'\')" placeholder="compose file">'+
                            '<span class="input-group-addon" ng-click="appendApplicationFile()"><i class="glyphicon glyphicon-plus green-icon"></i></span>'+
                            '<span class="input-group-addon" ng-click="removeDiv(\''+"divAppFileNumber"+$scope.coutapplicationfile+'\');removeApplicationFiles(\'ApplicationFileNum'+$scope.coutapplicationfile+'\');"><i " class="glyphicon glyphicon-minus red-icon"></i></span>'+
                           '</div>'+
                    '</div>';
        var generated = myEl.append(toadd);
        var appendedElement = angular.element( document.querySelector( '#divAppFileNumber'+$scope.coutapplicationfile ) );
        $compile(appendedElement)($scope);
    };

    $scope.removeApplicationFiles = function(fileNumber) {
        delete $scope.ApplicationFiles[fileNumber];
    };

    $scope.appendOperationsStack = function(){
        $scope.coutappendOperationsStack = $scope.coutappendOperationsStack + 1;
        var myEl = angular.element( document.querySelector( '#divOperationsStack' ));
        var toadd = '<div class = "col-xs-12" id = "'+"divOperationStackNumber"+$scope.coutappendOperationsStack+'">'+
                        '<div class = "input-group">'+
                            '<input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty borderColor"   ng-model ="OperationStacks.OperationStackNum'+$scope.coutappendOperationsStack+'" ng-blur= "Urlvalidation(OperationStacks.OperationStackNum'+$scope.coutappendOperationsStack+', \''+"divOperationStackNumber"+$scope.coutappendOperationsStack+'\' )" placeholder="compose file">'+
                            '<span class="input-group-addon" ng-click="appendOperationsStack()"><i  class="glyphicon glyphicon-plus red-icon"></i></span>'+
                            '<span class="input-group-addon" ng-click="removeDiv(\''+"divOperationStackNumber"+$scope.coutappendOperationsStack+'\');removeOperationsStack(\'OperationStackNum'+$scope.coutappendOperationsStack+'\');"><i class="glyphicon glyphicon-minus red-icon"></i></span>'+
                        '</div>'+
                    '</div>';
        var generated = myEl.append(toadd);
        var appendedElement = angular.element( document.querySelector( '#divOperationStackNumber'+$scope.coutappendOperationsStack ) );
        $compile(appendedElement)($scope);
    };

    $scope.removeOperationsStack = function(fileNumber) {
        delete $scope.OperationStacks[fileNumber];
    };

    $scope.removeDiv = function (id){
        var totalSiblind = $("#"+id).parent().children().length;
        if(totalSiblind > 1){
            var iEl = angular.element( document.querySelector( '#'+id) );
            iEl.remove();
        }
    };

    $scope.createJenkinsBuild = function(){
         if($scope.jobName === "" || typeof $scope.jobName === "undefined" ){
            $(".stackName").css("border","2px solid red");
        }else{
            $(".stackName").css("border","2px solid green");
        }
         if($scope.configURL === "" || typeof $scope.configURL === "undefined" ) {
            $(".configURL").css("border","2px solid red");
        }else{
            $(".configURL").css("border","2px solid green");
        }
        if($scope.ApplicationFiles !== "" || typeof $scope.configURL !== "undefined" ){
            var srcURL="";
            var opsURL="";
            var configURL = $scope.configURL;
            var buildName = $scope.jobName;
            var values = $scope.ApplicationFiles;
            var errorCounterApplicationFiles =0;
            var blobCounter =0;

             angular.forEach(values, function(value, key) {
                var newStrValue = new RegExp ( '/blob/' );
                if(value == ""){
                    delete $scope.ApplicationFiles[key];
                }else if(newStrValue.test(value) == false){
                    errorCounterApplicationFiles++;
                }else{
                    blobCounter ++;
                }
            });
            console.log(errorCounterApplicationFiles);
            if(errorCounterApplicationFiles == 0 &&  blobCounter > 0 ){
                angular.forEach(values, function(value, key) {
                    srcURL = srcURL + value +';' ;
                });
                var values = $scope.OperationStacks;
                angular.forEach(values, function(value, key) {
                    opsURL = opsURL + value +';' ;
                });

                var jenkinsURL = $scope.appLauncherUrl  + "createJenkinsBuild?jobName=" + buildName
                                        + "&configGitHubURL=" + configURL
                                        + "&appsCompose=" + srcURL
                                        + "&opsCompose=" + opsURL;
                $http({
                        method : 'GET',
                        url : jenkinsURL
                    }).then(function successCallback(response) {
                        console.log(response)
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                });
                $scope.jobList();
            }else{
                $(".appFileClass").css("border","2px solid red");
            }
        }


    };

    $scope.startBuild = function() {
        var buildName =  $scope.jobName;
        if(buildName === "" || typeof buildName === "undefined"){
            $('.stackName').css("border","2px solid red");
        }else{
            $('.stackName').css("border","1px solid #ccc");
            var startBuildUrl = $scope.appLauncherUrl + "startJenkinsBuild?jobName=" + buildName;
            $http({
                method : 'GET',
                url : startBuildUrl
                }).then(function successCallback(response) {
                    console.log(response)
                }, function errorCallback(response) {
                    console.log(response.statusText);
            });
            $scope.jobList();
        }
    };

    $scope.runStack = function(val) {
        var buildName =  $scope.jobName;
        var startBuildUrl =$scope.appLauncherUrl + "startJenkinsBuild?jobName=" + val;
        $http({
            method : 'GET',
                url : startBuildUrl
            }).then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log(response.statusText);
        });
    };

    $scope.deleteStack = function(val) {
        var buildName =  $scope.jobName;
        var deleteStackUrl =$scope.appLauncherUrl + "deleteStack?stackName=" + val;
        $http({
            method : 'GET',
                url : deleteStackUrl
            }).then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log(response.statusText);
        });
        $scope.jobList();
    };

   $scope.deleteJob = function(val) {
         var deleteStackUrl = $scope.appLauncherUrl  + "deleteJob?jobName=" + val;
          $http({
                method : 'GET',
                url : deleteStackUrl
            }).then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
             $scope.listStack();
             $scope.jobList();
    };

    $scope.jobList = function (){
        var jobListUrl = $scope.appLauncherUrl + "jobList";
        $http.get(jobListUrl,{}).success(function (data) {   $scope.rawJobListDatas =  data ;
            $scope.listStack();
            if (typeof $scope.listStackDatas !== 'undefined'){
                for (var i = 0 ; i< $scope.listStackDatas.length; i++){
                    for(var j = 0; j <  $scope.rawJobListDatas.length; j++){
                        if($scope.listStackDatas[i].name == $scope.rawJobListDatas[j].Name){
                            $scope.rawJobListDatas.splice(j,1);
                        }
                    }
                }
                $scope.jobListDatas=$scope.rawJobListDatas;
            }

        });
    };

    $scope.jobList();

    $scope.listStack = function() {
        $http.get($scope.listStackUrl,{}).success(function (data){ $scope.listStackDatas = data ;});
    };

    $scope.deleteListStack = function (stackName){
        var deleteStackUrl =  $scope.appLauncherUrl  + "deleteStack" ;
        $http.get(deleteStackUrl,{'stackName': stackName}).success(function (data){  });
        $scope.jobList();
    };

    $scope.Urlvalidation= function(inputValue, divId){
         if(inputValue === '' || typeof inputValue === "undefined"){
           $( "#"+divId ).children('.input-group').children('.borderColor').css( "border", "1px solid #ccc" );
         }else{
           var newStrValue = new RegExp ( '/blob/' );
           if(newStrValue.test(inputValue) == false){
               $( "#"+divId ).children('.input-group').children('.borderColor').css( "border", "2px solid red" );
           }else{
               $( "#"+divId ).children('.input-group').children('.borderColor').css( "border", "2px solid green" );
           }
       }
    };

    var reloadTimer= setInterval(reloadfunctions, 2000);
    function reloadfunctions() {$scope.jobList();};

    $(".content-head").click(function() {
        $(this).siblings(".content").toggle();
    });
});

