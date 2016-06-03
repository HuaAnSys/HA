angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AboutMeCtrl', function($scope, $rootScope, $stateParams) {

})

.controller('DomesticCtrl', function($scope, $rootScope, $state, $ionicLoading,DomesticService) {
      $scope.on_select = function(idx){
        $rootScope.domesticTabTitle = "baojie";
        if(idx == 1){
          $rootScope.domesticTabTitle ="baojie";
        }else if(idx == 2){
          $rootScope.domesticTabTitle ="weixiu";
        }else if(idx == 3){
          $rootScope.domesticTabTitle ="daixi";
        }else if(idx == 4){
          $rootScope.domesticTabTitle ="banyun";
        }
        console.log($rootScope.domesticTabTitle);
        $ionicLoading.show({
          template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
          noBackdrop: true
        });
        DomesticService.getDomesticByStatus($rootScope.domesticTabTitle).then(function(data){
          $scope.domesticList = data;
          $ionicLoading.hide();
          $rootScope.domesticTabTitle = '';
        }, function(error){
          $ionicLoading.hide();
          //$scope.showAlert(error);
        });
      }
      $scope.moveToNextPage = function(){
          $state.go('Domestic1');
      }

})

.controller('Domestic1Ctrl', function($scope, $rootScope, $state, $ionicLoading,DomesticService) {

      $scope.on_select = function(idx){
        if(idx == 5){
          $rootScope.domesticTabTitle ="anzhuang";
        }else if(idx == 6){
          $rootScope.domesticTabTitle ="kaisuo";
        }else if(idx == 7){
          $rootScope.domesticTabTitle ="lvhua";
        }
        console.log($rootScope.domesticTabTitle);
        $ionicLoading.show({
          template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
          noBackdrop: true
        });
        DomesticService.getDomesticByStatus($rootScope.domesticTabTitle).then(function(data){
          $scope.domesticList = data;
          $ionicLoading.hide();
          $rootScope.domesticTabTitle = '';
        }, function(error){
          $ionicLoading.hide();
          //$scope.showAlert(error);
        });
      };

      $scope.moveToPrePage = function(){
        $state.go('tab.Domestic');
      };

      $scope.moveToHomePage = function(){
        $state.go('tab.Home');
      }

      $scope.moveToServicePage = function(){
        $state.go('tab.PropertyManagement');
      }

      $scope.moveToShopPage = function(){
        $state.go('tab.Shop');
      }

      $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
      }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeCtrl',function($scope,$state){
        console.log("HomeCtrl");

        $scope.slides = [
            {url:"img/adam.jpg"},
            {url:"img/ben.png"},
            {url:"img/perry.png"}
        ];
        var slideHeight = document.body.scrollHeight-47;
        $scope.slideHeight = slideHeight*0.4+"px";
        var slideWidth = document.body.scrollWidth;
        $scope.slideWidth = slideWidth+"px";

        $scope.goAdvertise = function(arg){
            if(arg==='a'){
                $state.go('community');
            }else if(arg==='b'){
                $state.go('community');
            }else if(arg==='c'){
                $state.go('community');
            }else if(arg==='d'){
                $state.go('community');
            }
        }

})

.controller('CommunityNews',function($scope,$state){
        console.log("11");
        $scope.back = function(){
            $state.go('tab.Home');
        }
        var scrollHeight = document.body.scrollHeight-44-49+"px";
        $scope.scrollHeight = {
            "height":scrollHeight
        }
        $scope.message_picture_width = document.body.scrollWidth-30+"px";

});
