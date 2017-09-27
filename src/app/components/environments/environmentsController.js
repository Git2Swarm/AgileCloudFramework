App.controller('environmentsController', function($scope,$compile,$http, $parse) {
    $scope.test = function(){
        var iEl = angular.element( $('#divDescription').children());
        iEl.remove();
    };
    $scope.coutapplicationfile  = 0;
    $scope.countNodeFile = 0;
    $scope.appendDescription =function(){
        $scope.coutapplicationfile = $scope.coutapplicationfile + 1;
        var myEl = angular.element( document.querySelector( '#divDescription' ));
        var toadd =
        '<div class = "col-xs-12 " id = "'+"divDescriptionNumber"+$scope.coutapplicationfile+'">'+
        '<div class = "input-group ">'+
        '<div class = "col-sm-4 no-padding"><input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-empty" placeholder="key" ng-model="keys.id'+$scope.coutapplicationfile+'"></div>'+
        '<div class = "col-sm-8 no-padding"><input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-empty" placeholder="Value" ng-model="values.id'+$scope.coutapplicationfile+'"></div>'+
        '<span class="input-group-addon input-sm" ng-click="appendDescription()"><i class="glyphicon glyphicon-plus green-icon"></i></span>'+
        '<span class="input-group-addon input-sm" ng-click="removeDiv(\''+"divDescriptionNumber"+$scope.coutapplicationfile+'\');removelabels( '+$scope.coutapplicationfile+' );"><i " class="glyphicon glyphicon-minus red-icon"></i></span>'+
        '</div>'+
        '</div>';
        var generated = myEl.append(toadd);
        var appendedElement = angular.element( document.querySelector( '#divDescriptionNumber'+$scope.coutapplicationfile ));
        $compile(appendedElement)($scope);
    };
    $scope.removeDiv = function (id){
        var totalSiblind = $("#"+id).parent().children().length;
        if(totalSiblind > 1){
            var iEl = angular.element( document.querySelector( '#'+id) );
            iEl.remove();
        }
    };
    $scope.removelabels = function(contentNumber) {
      var key = 'id'+ contentNumber;
      console.log(key);
      if(typeof($scope.keys) != "undefined"){
          if(typeof($scope.keys[key]) != "undefined"){
            console.log($scope.keys[key]);
            delete $scope.keys[key];
          }
      }
      if(typeof($scope.values) != "undefined"){
          if(typeof($scope.values[key]) != "undefined"){
            console.log( $scope.values[key]);
            delete $scope.values[key];
          }
      }

    };

    $scope.removeNode = function(id){
        if(typeof($scope.node) != "undefined"){
            if(typeof($scope.node.name) != "undefined"){
                if(typeof($scope.node.name[id]) != "undefined"){
                    delete $scope.node.name[id];
                }
            }
            if(typeof($scope.node.cloudName) != "undefined"){
                if(typeof($scope.node.cloudName[id]) != "undefined"){
                    delete $scope.node.cloudName[id];
                }
            }
            if(typeof($scope.node.instanceType) != "undefined"){
                if(typeof($scope.node.instanceType[id]) != "undefined"){
                    delete $scope.node.instanceType[id];
                }
            }
            if(typeof($scope.node.instance) != "undefined"){
                if(typeof($scope.node.instance[id]) != "undefined"){
                   delete $scope.node.instance[id];
                }
            }
            if(typeof($scope.node.osType) != "undefined"){
                if(typeof($scope.node.osType[id]) != "undefined"){
                   delete $scope.node.osType[id];
                }
            }
            if(typeof($scope.node.bid) != "undefined"){
                if(typeof($scope.node.bid[id]) != "undefined"){
                    delete $scope.node.bid[id];
                }
            }
        }


    };
    $(".content-head").click(function() {
        $(this).siblings(".content").toggle();
    });
    $scope.appendNodeFile = function(){
        $scope.countNodeFile = $scope.countNodeFile + 1 ;
        var myEl = angular.element( document.querySelector( '#nodeFile' ));
        var toadd =
        '<div class = "col-xs-12 " id = "'+"divNodeFileNumber" +  $scope.countNodeFile +'">'+
                        '<div class="col-xs-2 no-padding">'+
                        '<input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-empty " placeholder="Node Name" ng-model = "node.name.id'+ $scope.countNodeFile+'">'+
                        '</div>'+
                        '<div class="col-xs-2 no-padding">'+
        '<input class=" form-control input-sm" type="text" id="'+"cloudName"+  $scope.countNodeFile +'" list="'+"idCloudeName"+  $scope.countNodeFile +'" '+
        'ng-model="'+"node.cloudName.id"+  $scope.countNodeFile +'" placeholder="Cloude Name" ng-change = "instanceTypeSelector(\''+"id"+$scope.countNodeFile+'\')"'+
        ' ng-blur = "validateCloudName(node.cloudName.id'+$scope.countNodeFile +', \'node.cloudName.id'+  $scope.countNodeFile +'\');">'+
                        '<datalist id="'+"idCloudeName"+  $scope.countNodeFile +'"  ng-model="'+"node.cloudName.id"+  $scope.countNodeFile +'" >'+
                        ' <option ng-repeat = " cloudName  in cloudNames" value="{{cloudName}}">'+
                        '</datalist>'+
                        '</div>'+
                        '<div class="col-xs-2 no-padding">'+
        '<input class=" form-control input-sm" type="text" name="instanceType'+$scope.countNodeFile+'" list="'+"idInstanceType"+  $scope.countNodeFile +'" ng-model="node.instanceType.id'+$scope.countNodeFile+'" placeholder="Instance Type ">'+
                        '<datalist id="'+"idInstanceType"+  $scope.countNodeFile +'"  ng-model="node.instanceType.id'+$scope.countNodeFile+'" >'+
                            '  <option ng-repeat = " instanceType  in instanceTypesid'+$scope.countNodeFile+'" value="{{instanceType}}">'+
                            '</datalist>'+
                        '</div>'+
                        '<div class="col-xs-1 no-padding">'+
                            '<input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-empty" placeholder="# Instance" ng-model ="node.instance.id'+$scope.countNodeFile+'">'+
                        '</div>'+
                        '<div class="col-xs-2 no-padding">'+
        '<input class=" form-control input-sm" type="text" name="osType'+$scope.countNodeFile+'" list="'+"idOsType"+  $scope.countNodeFile +'" ng-model="node.osType.id'+$scope.countNodeFile+'" placeholder="OS">'+
                            '<datalist id="'+"idOsType"+  $scope.countNodeFile +'"  ng-model="node.osType.id0'+$scope.countNodeFile+'" >'+
                             ' <option ng-repeat = " osType  in osTypesid'+$scope.countNodeFile+'" value="{{osType}}">'+
                            '</datalist>'+
                        '</div>'+
                        '<div class="col-xs-3 input-group  no-padding">'+
                          '<input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid ng-empty" placeholder="Bid $" ng-model ="node.bid.id'+$scope.countNodeFile+'">'+
                            '<span class="input-group-addon input-sm" ng-click="appendNodeFile();"><i class="glyphicon glyphicon-plus red-icon"></i></span>'+
        '<span class="input-group-addon input-sm" ng-click="removeDiv(\'divNodeFileNumber'+$scope.countNodeFile+'\'); removeNode(\'id'+$scope.countNodeFile+'\');"><i  class="glyphicon glyphicon-minus red-icon"></i></span>'+
        '</div>'+
        '</div>';
        var generated = myEl.append(toadd);
        var appendedElement = angular.element( document.querySelector( "#divNodeFileNumber" +  $scope.countNodeFile ));
        $compile(appendedElement)($scope);
    };
    $scope.removeDiv = function (id){
        var totalSiblind = $("#"+id).parent().children().length;
        if(totalSiblind > 1){
            var iEl = angular.element( document.querySelector( '#'+id) );
            iEl.remove();
        }
    };

    $scope.cloudNames=["ec2", "aws_spot", "do"];
    $scope.awsInstanceTypes = ['t2.small','t2.tiny', 't2.micro', 'm1.small', 'm2.tiny', 'm3.medium'];
    $scope.awsOsTypes = ['ami-5e63d13e', 'inv-ami5734ab77', 'inv-ami2034ab33', 'inv-ami3234ab154', 'inv-ami12934ab67'];
    $scope.doInstanceTypes = ['1gb', '2gb', '4gb', '8gb', '16gb'];
    $scope.doOsTypes = ['ubuntu-16-04-x64', 'inv-ubuntu 12.04', 'inv-ubuntu 14.04', 'inv-ubuntu 16.04', 'inv-ubuntu 16.06', 'inv-ubuntu 16.09'];
    $scope.instanceTypeSelector = function(id){
        if($scope.node.cloudName[id] == ''){
            $scope['instanceTypes'+id] =[];
            $scope['osTypes'+id] =[];
        }else if($scope.node.cloudName[id] == 'ec2'){
            $scope['instanceTypes'+id] =$scope.awsInstanceTypes;
            $scope['osTypes'+id] = $scope.awsOsTypes;
        }else if($scope.node.cloudName[id] == 'aws_spot'){
            $scope['instanceTypes'+id] =$scope.awsInstanceTypes;
            $scope['osTypes'+id] =  $scope.awsOsTypes;
        }else if ($scope.node.cloudName[id] =='do') {
            $scope['instanceTypes'+id]=$scope.doInstanceTypes;
            $scope['osTypes'+id] = $scope.doOsTypes;
        }else{
            $scope['instanceTypes'+id] =[];
            $scope['osTypes'+id] =[];
        }
    };
    $scope.validateCloudName = function(value,id){
        var result = $scope.cloudNames.indexOf(value);
        if(result == -1 ){
            $('#'+id).css("border","2px solid red");
        }else{
            $('#'+id).css("border","1px solid #ccc");
        }
    };

    $scope.jsonRecursion = function( data , callType ){
        if(callType == 'POST') {
            url = 'https://'+location.host+'/envlaunch/';
        } else {
            url = 'https://'+location.host+'/envlaunch/' + data ;
        }
        $http({
            method : callType,
            url   : url,
            contentType: "application/json",
            data : data,
        }).then(function successCallback(response) {
            if(response.data.state == 0  || response.data.state == 1 ){
                setTimeout(function() {
                    $scope.jsonRecursion( response.data.id, 'GET');
                }, 2000);
            }else if(response.data.state == 2){
                $scope.createEnvirnomentJsonResponse =  response.data ;
                console.log(response.data)
            }
        }, function errorCallback(response) {});
    };

    $scope.createEnvirnomentJsonFormat = function(){
        var json  = new Object();
        json.environment= {};
        json.environment.name =   $scope.environmetName;
        json.environment.description = $scope.environmetDescription;
        json.environment.labels = [];
        var labels =  Object.keys($scope.keys);
        var labelsLength = labels.length;
        for(var i in $scope.keys ){
            var keyVal = $scope.keys[i];
            var value  = $scope.values[i];
            var obj = {};
            obj[keyVal] = value ;
            json.environment.labels.push(obj);
        }
        json.nodes = {};
        for(var i in $scope.node.name){
            var nodeName = $scope.node.name[i];
            json.nodes[nodeName] = {};
            json.nodes[nodeName]['cloud'] = $scope.node.cloudName[i];
            json.nodes[nodeName]['type'] = $scope.node.instanceType[i];
            json.nodes[nodeName]['image'] = $scope.node.osType[i];
            json.nodes[nodeName]['count'] = $scope.node.instance[i];
            if( $scope.node.instanceType[i] == 'aws_spot'){
                json.nodes[nodeName]['bid'] = $scope.node.bid[i];
            }
        }
        var jsonString = JSON.stringify(json);
        console.log("json"+jsonString);
        var callType = 'POST';
        $scope.jsonRecursion(jsonString , 'POST' );
    };

$scope.listEnvironmentsFileOrDir = function(){
    $http({
          method : 'GET',
          url : 'https://'+location.host+'/environment/files'  /* Get the file list */
      }).then(function successCallback(response) {
        $scope.listEnvironments = response.data;
          console.log(response)
      }, function errorCallback(response) {
          console.log(response.statusText);
      });
  };

  $scope.listEnvironmentsFileOrDir();


$scope.populateFileDetails = function(fileName){
  var url = 'https://'+location.host+'/environment/files/'+ fileName;  /* Get the file content */
  $http({
    method : 'GET',
    url   : url,
    contentType: "application/json",
  }).then(function successCallback(response) {
      console.log(response.data);
      $scope.fileDetails = response.data;
  $scope.environmetName = $scope.fileDetails.environment.name;
  $scope.environmetDescription = $scope.fileDetails.environment.description;
  $scope.keys = {};
  $scope.values={};
  $scope.coutapplicationfile  = -1;
  var labelsLength = $scope.fileDetails.environment.labels.length;
  var labels = $scope.fileDetails.environment.labels;
  var x = [];
  var iEl = angular.element( $('#divDescription').children());
  iEl.remove();
  $.each(labels, function(index, value) {
    for(var key  in value){
      var keyname = "id" + index;
      var valueName = "id" + index;
      $scope.keys[keyname] = key;
      $scope.values[valueName] = value[key];
      $scope.appendDescription();
    }
  });
  $scope.coutapplicationfile  = 0;
  $scope.countNodeFile = -1;
  var nodes = $scope.fileDetails.nodes;
  var iEl = angular.element( $('#nodeFile').children());
  iEl.remove();
  $scope.nodeNames={};
    var count = 0;
  $.each(nodes, function(index, value) {
    $scope.appendNodeFile();
    var id = 'id'+count;
    $parse('node.name.'+id).assign($scope, index);
    $parse('node.cloudName.'+id).assign($scope, $scope.fileDetails.nodes[index].cloud);
    $parse('node.instanceType.'+id).assign($scope, $scope.fileDetails.nodes[index].type);
    $parse('node.instance.'+id).assign($scope, $scope.fileDetails.nodes[index].count);
    $parse('node.osType.'+id).assign($scope, $scope.fileDetails.nodes[index].image);
    $parse('node.bid.'+id).assign($scope, $scope.fileDetails.nodes[index].bid);
    count++;

  });
    $scope.countNodeFile = 0;
  }, function errorCallback(response) {});
};

$scope.deleteFileDetails = function(fileName){
  $http.delete('https://'+location.host+'/environment/files/'+fileName).then(function successCallback(response) {
    console.log(response);
    $scope.listEnvironmentsFileOrDir();
  }, function errorCallback(response) {
    console.log(response);
  });
};
});
