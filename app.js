(function (){
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

  $scope.list="";
  $scope.Message="";
  $scope.check=function(){
    if($scope.list=="")
    {
      $scope.Message= "Please enter data first";
    }
    else {
      var words=$scope.list.split(',');
      var ignore_empty=[];
      for(var i=0;i<words.length;i++)
      {
        if(words[i]!="" && words[i]!=" ")
        {

          ignore_empty.push(words[i]);
        }
      }

      if(ignore_empty.length<=3){
      $scope.Message = "Enjoy!";
    }
    else {
      $scope.Message = "Too much!";
    }
    }

  };
  }

})();
