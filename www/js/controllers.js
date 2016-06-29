angular.module('starter.controllers', ['starter.services'])

.controller('appCtrl', function($scope, $ionicPopup) {
    $scope.showAlert = function(errorMessage){
        var alertPopup = $ionicPopup.alert({
            template: errorMessage,
            cssClass: 'alertPop',
            buttons: [
                {  text: '知道了',
                   type: 'button-positive'
                }
            ]
        });
        alertPopup.then(function(res) {
            console.log('');
        });
    }
})

.controller('AboutMeCtrl', function($scope, $state, $cordovaCamera) {
        var screenWidth = document.body.scrollWidth;
        var picHeight=Math.ceil((screenWidth * 274)/375);
        $scope.picHeight=picHeight+'px';
        $scope.imageSrc = "img/adam.jpg";

        $scope.changePhoto = function () {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: true,
                encodingType:Camera.EncodingType.JPEG,
                allowEdit: true,
                mediaType:0,
                cameraDirection:0,
                popoverOptions: CameraPopoverOptions
            };

            $cordovaCamera.getPicture(options).then(function(imageURI) {
                $scope.imageSrc= imageURI;
                //image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {

            });
        }

        $scope.moveToShoppingCarPage =  function(){
            $state.go('shoppingCar');
        }

        $scope.moveToPaymentOrderPage =  function(){
            $state.go('paymentOrder');
        }

        $scope.moveToMyOrderPage =  function(){
            $state.go('myOrder');
        }

        $scope.moveToPublishThemePage =  function(){
            $state.go('publishTheme');
        }

        $scope.moveToJoinThemePage =  function(){
            $state.go('joinTheme');
        }

        $scope.moveToInfoPage =  function(){
            $state.go('personalInfo');
        }

        $scope.moveToLoginPage = function(){
            $state.go('login');
        }

})

.controller('shoppingCarCtrl', function($scope, $state, $rootScope, commonService, shoppingCarService, $stateParams) {
    $scope.itemTotalNum = 0;
    $scope.totalPrice = 0;
    commonService.showLoading();
        var len = 0;
    shoppingCarService.getShoppingCar().then(function(data){
        $scope.shoppingCarList = data;
         len = $scope.shoppingCarList.length;
        commonService.hideLoading();
    }, function(error){
        commonService.hideLoading();
        //$scope.showAlert(error);
    });

    $scope.checkItem = function(index){
        var shopingCartList = $scope.shoppingCarList;
        var shoppingCarListLength = shopingCartList.length;
        var checkStatue = shopingCartList[index].checked;
        //checkbox and select all
        if(checkStatue==false&&$scope.checkAll==true){
            $scope.checkAll= false;
        }else if(checkStatue==true&&($scope.checkAll==false||$scope.checkAll==undefined)){
            var selectAllFlag = true;
            for(var i=0;i<shoppingCarListLength;i++){
                if(shopingCartList[i].checked == false || shopingCartList[i].checked == undefined){
                    selectAllFlag = false;
                    break;
                }
            }
            if(selectAllFlag==true){
                $scope.checkAll= true;
            }else{
                $scope.checkAll= false;
            }
        }
        //change price
        if(checkStatue==false){
            var total = shopingCartList[index].price*shopingCartList[index].amount;
            $scope.totalPrice = $scope.totalPrice - total;
        }else{
            var total = shopingCartList[index].price*shopingCartList[index].amount;
            $scope.totalPrice = $scope.totalPrice + total;
        }
        //
        var j=0;
        if($scope.checkAll==false || $scope.checkAll==undefined){
            for(var i=0;i<shoppingCarListLength;i++){
                if(shopingCartList[i].checked == true){
                    j++;
                }
            }
            $scope.itemTotalNum = j;
        }else if($scope.checkAll==true){
            $scope.itemTotalNum = shoppingCarListLength;
        }

    }

    $scope.checkAllIntents = function(){
        $scope.totalPrice = 0;
        var shoppingCarListLength = $scope.shoppingCarList.length;
        var shoppingCarCheckFlag = false;
        if($scope.checkAll){
            $scope.itemTotalNum = shoppingCarListLength;
            shoppingCarCheckFlag  = true;
        }else{
            $scope.itemTotalNum = 0;
            shoppingCarCheckFlag  = false;
        }
        for(var i=0;i<shoppingCarListLength;i++){
            if($scope.checkAll){
                $scope.shoppingCarList[i].checked = shoppingCarCheckFlag;

            }else{
                $scope.shoppingCarList[i].checked = shoppingCarCheckFlag;
            }
            if($scope.shoppingCarList[i].checked == true){
                $scope.totalPrice += $scope.shoppingCarList[i].price * $scope.shoppingCarList[i].amount;
            }else{
                $scope.totalPrice = 0;
            }


        }
    };


    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

    $scope.changeProductNum = function(){
        var totle = 0;
        var shoppingCarList = $scope.shoppingCarList;
        var length = $scope.shoppingCarList.length;
        for(var i=0;i<length;i++){
            var obj = shoppingCarList[i];
            if(obj.checked==true){
                totle = totle + obj.amount * obj.price;
            }
        }
        $scope.totalPrice = totle;

    }

})

.controller('paymentOrderCtrl', function($scope, $state, $rootScope, $ionicPopup, commonService, shoppingCarService, $stateParams) {

        commonService.showLoading();
        shoppingCarService.getShoppingCar().then(function(data){
            $scope.shoppingCarList = data;
            var shoppingCarListLength = $scope.shoppingCarList.length;
            $scope.totalPrice = 0;
            for(var i=0;i<shoppingCarListLength;i++){
                $scope.totalPrice +=$scope.shoppingCarList[i].price * $scope.shoppingCarList[i].amount;
            }
            commonService.hideLoading();
        }, function(error){
            commonService.hideLoading();
            //$scope.showAlert(error);
        });

        $scope.cancelOrder = function(){
        var confirmPopup = $ionicPopup.confirm({
            title: '确认取消订单？',
            buttons: [
                { text: '取消' },
                {
                    text: '<b>确认</b>',
                    type: 'button-positive'
                }
            ]
        });

        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    }

        $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('myOrderCtrl', function($scope, $state, $rootScope,  $ionicPopup, commonService, shoppingCarService, $stateParams) {
    commonService.showLoading();
    shoppingCarService.getShoppingCar().then(function(data){
        $scope.shoppingCarList = data;
        var shoppingCarListLength = $scope.shoppingCarList.length;
        $scope.totalPrice = 0;
        for(var i=0;i<shoppingCarListLength;i++){
            $scope.totalPrice +=$scope.shoppingCarList[i].price * $scope.shoppingCarList[i].amount;
        }
        commonService.hideLoading();
    }, function(error){
        commonService.hideLoading();
        //$scope.showAlert(error);
    });

    $scope.deleteOrder = function(){
        var confirmPopup = $ionicPopup.confirm({
            title: '确认删除订单？',
            buttons: [
                { text: '取消' },
                {
                    text: '<b>确认</b>',
                    type: 'button-positive',
                    onTap: function() { return true; }
                }
            ]
        });

        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    }

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

    $scope.comment = function(){
        $state.go('comment');
    }

})

.controller('commentCtrl', function($scope, $state, $rootScope,  $ionicPopup, commonService, shoppingCarService, $stateParams) {
    $scope.commentCheck = true;
    $scope.max = 5;
    $scope.ratingVal = 5;
    $scope.readonly = false;
    $scope.onHover = function(val){
        $scope.hoverVal = val;
    };
    $scope.onLeave = function(){
        $scope.hoverVal = null;
    }
    $scope.onChange = function(val){
        $scope.ratingVal = val;
    }
    commonService.showLoading();
    shoppingCarService.getShoppingCar().then(function(data){
        $scope.shoppingCarList = data;
        var shoppingCarListLength = $scope.shoppingCarList.length;
        $scope.totalPrice = 0;
        for(var i=0;i<shoppingCarListLength;i++){
            $scope.totalPrice +=$scope.shoppingCarList[i].price * $scope.shoppingCarList[i].amount;
        }
        commonService.hideLoading();
    }, function(error){
        commonService.hideLoading();
        //$scope.showAlert(error);
    });

    $scope.moveToMyOrderPage = function(){
        var confirmPopup = $ionicPopup.confirm({
            title: '评价还没完成，您确定要离开？',
            buttons: [
                { text: '取消' },
                {
                    text: '<b>确认</b>',
                    type: 'button-positive',
                    onTap: function() { return true; }
                }
            ]
        });

        confirmPopup.then(function(res) {
            if(res) {
                $state.go('myOrder');
            } else {
                console.log('You are not sure');
            }
        });

    }

    $scope.publishComment = function(){
        $state.go('myOrder');
    }

})

.directive('star', function () {
    return {
        template: '<ul class="rating" ng-mouseleave="leave()">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            readonly: '@',
            onHover: '=',
            onLeave: '='
        },
        controller: function($scope){
            $scope.ratingValue = $scope.ratingValue || 0;
            $scope.max = $scope.max || 5;
            $scope.click = function(val){
                if ($scope.readonly && $scope.readonly === 'true') {
                    return;
                }
                $scope.ratingValue = val;
            };
            $scope.over = function(val){
                $scope.onHover(val);
            };
            $scope.leave = function(){
                $scope.onLeave();
            }
        },
        link: function (scope, elem, attrs) {
            elem.css("text-align", "center");
            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            updateStars();

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
            scope.$watch('max', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    };
})

.controller('publishThemeCtrl', function($scope, $state, $rootScope, $ionicLoading, ShopTypeService, $stateParams) {

    $scope.message_picture_width = document.body.scrollWidth-30+"px";

    $scope.communityNews = [
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
    ];


    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('joinThemeCtrl', function($scope, $state, $rootScope, $ionicLoading, ShopTypeService, $stateParams) {

    $scope.message_picture_width = document.body.scrollWidth-30+"px";

    $scope.communityNews = [
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
        {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
            "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
            "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
            "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg"
        },
    ];

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('personalInfoCtrl', function($scope, $state, $rootScope, $stateParams) {
    var screenWidth = document.body.scrollWidth;
    var picHeight=Math.ceil((screenWidth * 100)/290);
    $scope.picHeight=picHeight+'px';

    $scope.editNickname = function(){
        $state.go('editNickname');
    };

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('editNicknameCtrl', function($scope, $state, $rootScope, $stateParams) {

    $scope.nickName = 'aaa';

    $scope.clearInput = function(){
        $('.nickName').val('');
        $scope.nickName = '';
    };

    $scope.moveToPerInfoPage = function(){
        $state.go('personalInfo');
    }

    function valid(){
        $scope.nickName = $('.nickName').val();
        console.log($scope.nickName);
        if($scope.nickName == '' || $scope.nickName == undefined){
            $scope.showAlert("用户名不能为空");
            return false;
        }
        return true;
    }

    $scope.save = function(){
        if(valid()){
            console.log($scope.nickName);
            $state.go('personalInfo');
        }
    }


})

.controller('DomesticCtrl', function($scope, $rootScope, $state, commonService, DomesticService) {
        $scope.on_select = function(idx){
        if(idx == 1){
          $rootScope.domesticTabTitle ="baojie";
        }else if(idx == 2){
          $rootScope.domesticTabTitle ="weixiu";
        }else if(idx == 3){
          $rootScope.domesticTabTitle ="daixi";
        }else if(idx == 4){
          $rootScope.domesticTabTitle ="banyun";
        }
        commonService.showLoading();
        DomesticService.getDomesticByStatus().then(function(data){
            $scope.domesticList = [];
            for(i=0;i<data.length;i++){
                if($rootScope.domesticTabTitle == data[i].type){
                    $scope.domesticList.push(data[i]);
                }
            }
          commonService.hideLoading();
          $rootScope.domesticTabTitle = '';
        }, function(error){
          commonService.hideLoading();
          //$scope.showAlert(error);
        });
      }
      $scope.moveToNextPage = function(){
          $state.go('Domestic1');
      }

})

.controller('Domestic1Ctrl', function($scope, $rootScope, $state, commonService, DomesticService) {

      $scope.on_select = function(idx){
        if(idx == 5){
          $rootScope.domesticTabTitle ="kaisuo";
        }else if(idx == 6){
          $rootScope.domesticTabTitle ="lvhua";
        }else if(idx == 7){
          $rootScope.domesticTabTitle ="anzhuang";
        }
        console.log($rootScope.domesticTabTitle);
        commonService.showLoading();
          DomesticService.getDomesticByStatus().then(function(data){
              $scope.domesticList = [];
              for(i=0;i<data.length;i++){
                  if($rootScope.domesticTabTitle == data[i].type){
                      console.log(data[i].type);
                      $scope.domesticList.push(data[i]);
                  }
              }
              commonService.hideLoading();
              $rootScope.domesticTabTitle = '';
          }, function(error){
          commonService.hideLoading();
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

.controller('HomeCtrl',function($scope,$state,commonService,homePageService){
        console.log("HomeCtrl");
        $scope.slides = [
            {url:"img/adv_demo.PNG"},
            {url:"img/advertise_a.png"},
            {url:"img/advertise_b.png"}
        ];

        $scope.hotProducts = [
            {
             "productImg":"img/a.jpg",
             "description":"波兰(Mleko)进口纯牛奶",
             "price":"9.9"
            },
            {
                "productImg":"img/a.jpg",
                "description":"波兰(Mleko)进口纯牛奶",
                "price":"9.9"
            },
            {
                "productImg":"img/a.jpg",
                "description":"波兰(Mleko)进口纯牛奶",
                "price":"9.9"
            },
            {
                "productImg":"img/a.jpg",
                "description":"波兰(Mleko)进口纯牛奶",
                "price":"9.9"
            }
        ];


        var slideHeight = document.body.scrollHeight-47;
        $scope.slideHeight = slideHeight*0.4+"px";
        var slideWidth = document.body.scrollWidth;
        $scope.slideWidth = slideWidth+"px";

        $scope.goAdvertise = function(arg){
            if(arg==='0'){
                $state.go('community',{'tabIndex':arg});
            }else if(arg==='1'){
                $state.go('community',{'tabIndex':arg});
            }else if(arg==='2'){
                $state.go('community',{'tabIndex':arg});
            }else if(arg==='3'){
                $state.go('community',{'tabIndex':arg});
            }
        }

        $scope.moreProduct = function(){
            $state.go("tab.Shop");
        }

        function getAdvsAndProducts(){
            commonService.showLoading();
            homePageService.getAdvertisements().then(function(data){
                if(data.length == 0){
                    $scope.slides = [{url:"img/adv_demo.png"}];
                }else{


                }
                homePageService.getHotProduct().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            },function(error){
                commonService.hideLoading();
                $scope.slides = [{url:"img/adv_demo.png"}];
                $scope.showAlert(error);
            });
        }

})

.controller('CommunityMainCtrl',function($scope,$state,$stateParams,$ionicTabsDelegate,CommunityService,commonService){

        $scope.back = function(){
            $state.go('tab.Home');
        }
        var scrollHeight = document.body.scrollHeight-44-49+"px";
        $scope.scrollHeight = {
            "height":scrollHeight
        }
        $scope.message_picture_width = document.body.scrollWidth-30+"px";

        $scope.onTabSelect = function(index){
            var selectedTab = parseInt($stateParams.tabIndex);
            if(index==1&&(selectedTab>-1)&&(selectedTab!=0)){
//                console.log("第一次进tab页");
                $stateParams.tabIndex = -1;
                $ionicTabsDelegate.$getByHandle('communityTabs_handle').select(selectedTab);
            }else if(index==1&&selectedTab==0){
                $stateParams.tabIndex = -1;
//                getCommunityByTab(1);
            }else{
//                getCommunityByTab(index);
            }

        }

        $scope.goMessageDetail = function(){
            var index = $ionicTabsDelegate.selectedIndex();
            $state.go('communityDetail',{"tabIndex":index});
        }

        function getCommunityByTab(index){
            console.log("获取第几个tab页数据："+index);
            if(index==1){
                CommunityService.getAllBulletins().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }else if(index==2){
                CommunityService.getAllDiscussions().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }else if(index==3){
                CommunityService.getAllCollections().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }else{
                CommunityService.getAllBestMemory().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }
        }

        $scope.addNews = function(){
            var index = $ionicTabsDelegate.selectedIndex();
            $state.go("addCommunity",{"tabIndex":index});
        }

        $scope.communityNews = [
            {
                "personIcon":"img/adam.jpg",
                "name":"社区管理员",
                "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
                        "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
                        "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
                        "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
                "descriptionImg":"img/community_demo.jpg"
            },
            {
                "personIcon":"img/adam.jpg",
                "name":"社区管理员",
                "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
                "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
                "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
                "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
                "descriptionImg":"img/community_demo.jpg"
            },
            {
                "personIcon":"img/adam.jpg",
                "name":"社区管理员",
                "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
                "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
                "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
                "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
                "descriptionImg":"img/community_demo.jpg"
            },
        ];


})

.controller('addCommunityNewsCtrl',function($scope,$state,$stateParams,$cordovaCamera,CommunityService,$cordovaFileTransfer){

        $scope.commentText = "";
        $scope.back = function(){
            $state.go("community",{"tabIndex":$stateParams.tabIndex});
        }

        $scope.showAddImgFlag = true;

        $scope.takePhoto=function() {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum: true,
                encodingType: Camera.EncodingType.JPEG,
                allowEdit: true,
                mediaType: 0,
                cameraDirection: 0,
                popoverOptions: CameraPopoverOptions
            };

            $cordovaCamera.getPicture(options).then(function (imageURI) {
                $scope.showAddImgFlag = false;
                $scope.imageSrc = imageURI;
                //image.src = "data:image/jpeg;base64," + imageData;
            }, function (err) {

            });
        }

        $scope.fileUpload = function() {

            var uploadUrl = "http://9.110.54.253:8080/HuanAnBackend/upload/file";
            var filePath = $scope.imageSrc;
            var options = {};
            options.comment = $scope.commentText;
            $cordovaFileTransfer.upload(uploadUrl, filePath, options)
                .then(function (result) {
                    // Success!
                    alert("1");
                }, function (err) {
                    // Error
                    alert("0");
                }, function (progress) {
                    alert("0");
                    // constant progress updates
                });
        }

        function addCommunity(){
            var index = $stateParams.tabIndex;
            if(index==1){
                CommunityService.addCommentsByDiscussion().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }else if(index==2){
                CommunityService.addCommentsByCollection().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }else{
                CommunityService.addCommentsByBestMemory().then(function(data){
                    if(data.length == 0){

                    }else{


                    }
                    commonService.hideLoading();
                },function(error){
                    commonService.hideLoading();
                    $scope.showAlert(error);
                });
            }
        }
})

.controller('CommunityDetail',function($scope,$state,$stateParams){

    $scope.hotComments = "";
    var width = document.body.scrollWidth;
    $scope.message_picture_width = width-30;
    $scope.divMain = {
        "width":width,
        "padding":"15px",
        "background-color": "#FFFFFF",
        "border-bottom": "1px solid #c8c7cc"
    }

        $scope.commentsDetail = {
            "personIcon":"img/adam.jpg",
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
                "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
                "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
                "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/community_demo.jpg",
            "comments":[
                {
                    name:'社区管理员',
                    detail:'赞,支持!'
                },
                {
                    name:'社区管理员',
                    detail:'赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.' +
                    '赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.' +
                    '赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.' +
                    '赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.' +
                    '赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.赞,支持!这是一个神奇的网站.'
                },
                {
                    name:'社区管理员',
                    detail:'赞,支持!'
                }
            ]

        };


    $scope.back = function(){
        $state.go('community',{"tabIndex":$stateParams.tabIndex});
    }

    $scope.submitComment = function(){
        var say = $scope.hotComments;
        var a = {"name":"社区管理员","detail":say};
        $scope.commentsDetail.comments.push(a);
        $scope.hotComments = "";
    }
})
    
    .controller('ShopCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopTypeService, ShopBannerService, ShopProductDetailService, $timeout) {



        $scope.navLists = [
            {
                name:"热门商品",
                type:"hot"
            },
            {
                name:"食品生鲜",
                type:"b"
            },
            {
                name:"个人化妆",
                type:"c"
            },
            {
                name:"酒水饮料",
                type:"d"
            },
            {
                name:"家居用品",
                type:"e"
            },
            {
                name:"母婴用品",
                type:"f"
            },
            {
                name:"有机蔬菜",
                type:"g"
            },
            {
                name:"家政保洁",
                type:"h"
            },
            {
                name:"精品水果",
                type:"i"
            },
            {
                name:"景区门票",
                type:"j"
            }

        ];
        ShopBannerService.getShopBanner().then(function(data){
            $scope.ShopBanner = data;
            $ionicLoading.hide();
        }, function(error){
            $ionicLoading.hide();
            //$scope.showAlert(error);
        });



        $scope.clickNav = function(type){
            $scope.navListType = type;

            console.log(this);
            $ionicLoading.show({
                template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
                noBackdrop: true
            });
            ShopTypeService.getShopByType(type).then(function(data){
                $scope.products = data;
                $timeout(function(){
                    var shopViewContent = $(".shopViewContent").outerHeight();
                    var winHeight = $(window).height();
                    if(shopViewContent > winHeight){
                        shopViewContent = (shopViewContent + 20);
                        $("#shopView").css("height", shopViewContent);
                    }else{
                        $("#shopView").css("height", winHeight);
                    }



                    console.log(shopViewContent);
                })
                $ionicLoading.hide();
            }, function(error){
                $ionicLoading.hide();
                //$scope.showAlert(error);
            });


        };
        $scope.clickNav("hot");
        $scope.goProductDetail = function(product){
            console.log(product);
            $state.go('ShopProductDetail', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }





    })
    .controller('ShopProductDetailCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.submitOrder=function(product){
            $state.go('submitOrder', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);
        $scope.product = $stateParams;
        $scope.productDetail = function(product){
            ShopProductDetailService.getShopProductDetail(product).then(function(data){
                $scope.productDetailData = data;
                console.log(data);

                $ionicLoading.hide();
            }, function(error){
                $ionicLoading.hide();
                //$scope.showAlert(error);
            });

        }
        $scope.productDetail($stateParams);
        $scope.productTypeRadio = "";
        $scope.clicProductTypeRadio = function(item){
            $scope.itemRadio = item;


        };
        $scope.productNumAmount = 1;
        $scope.buyProduct = function(){

        }

        //Tab 3
        $scope.clicProductCommentType = function(item){
            $scope.ProductCommentType = item;


        };

    })
    .controller('submitOrderCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.product = $stateParams;
        $scope.submit=function(product){
            $state.go('choosePaymentTerms', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })
    .controller('choosePaymentTermsCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.product = $stateParams;
        $scope.submit=function(product){
            $state.go('chooseBankCard', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })
    .controller('chooseBankCardCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.product = $stateParams;
        $scope.submit=function(product){
            $state.go('bankCardPassword', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })
    .controller('PaymentTermsResultCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.product = $stateParams;
        $scope.goMyOrder=function(product){
            $state.go('myOrder');
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })
    .controller('bankCardPasswordCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout, $ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack();
        }
        $scope.product = $stateParams;
        $scope.submit=function(product){
            $state.go('PaymentTermsResult', {
                name: product.name,
                type: product.type,
                price: product.price
            });
        }
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })

/*
    Login and property mangement controllers
 */
    .controller('loginCtrl', function($scope,$state,$http,$ionicPopup,LoginService) {
        $scope.user = {
            phoneNo: '',
            pwd: ''
        }
        $scope.login = function() {
            LoginService.login($scope.user).then(function(res) {
                $state.go('tab.Home');
            }, function(errMsg) {
                var alertPopup = $ionicPopup.alert({
                    title: '登录失败',
                    template: '账号或密码错误，请重新输入'
                })
                console.log(errMsg);
            });
        }
        $scope.regist=function(){
            $state.go('firstRegistPage');
        }
        $scope.retrievePassword=function(){
            $state.go('firstRetrievePage');
        }
        //$scope.loginToMainPage=function(){
        //    $state.go('tab.Home');
        //}
    })

//Regist account page controllers
    .controller('firstRegistPageCtrl', function($scope,$state,$ionicPopup,$ionicHistory) {
        $scope.userPhoneNum = {
            phoneNum:''
        }
        $scope.goSecondRegistPage=function(){
            if(!angular.isNumber(parseInt($scope.userPhoneNum.phoneNum)) || $scope.userPhoneNum.phoneNum == '' || $scope.userPhoneNum.phoneNum.length <11 ){
                var alertPopup = $ionicPopup.alert({
                    title: '注册失败',
                    template: '亲，请输入11位的手机号码呦~'
                })
            }
            else{
                $state.go('secondRegistPage',{phoneNum : $scope.userPhoneNum.phoneNum});
            }
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

    .controller('secondRegistPageCtrl', function($scope,$state,$stateParams,$ionicHistory) {
        $scope.userPhoneNum = $stateParams.phoneNum;
        $scope.inputCaptcha = {
            captcha:''
        }
        /*
           call service function to verify the captcha
        */
        $scope.goThirdRegistPage=function(){
            $state.go('thirdRegistPage',{phoneNum : $scope.userPhoneNum});
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('thirdRegistPageCtrl', function($scope,$state,$ionicHistory,$http,$stateParams,$ionicPopup,commonService,RegistService) {
        $scope.userPhoneNum = $stateParams.phoneNum;

        $scope.user = {
            phoneNo:'',
            pwd:'',
            confirmPassword:'',
            name:'',
            identifierNo:'',
            nickName:'',
            sex:'',
        }
        $scope.user.phoneNo = $scope.userPhoneNum;
        $scope.selectSex= function (sex) {
            if(sex=='male'){
                $scope.user.sex = 'male';
                console.log($scope.user.sex);
            }
            else{
                $scope.user.sex = 'female';
                console.log($scope.user.sex);
            }
        }
        $scope.registAccount = function() {
            console.log($scope.user.pwd);
            var isPassword = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
            var isIDCard=new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
            if(!isPassword.test($scope.user.pwd) || $scope.user.pwd.length<6){
                $scope.showAlert('亲，密码必须由字母和数字组成而且不能小于6位哦');
            }
            else if($scope.user.pwd !== $scope.user.confirmPassword){
                $scope.showAlert('您输入的两次密码不一致，请修改');
            }
            else if($scope.user.name=='' || $scope.user.name.length<2){
                console.log($scope.user);
                $scope.showAlert('亲，留下您的尊姓大名吧');
            }
            else if(!isIDCard.test($scope.user.identifierNo) || $scope.user.identifierNo.length<15){
                $scope.showAlert('亲，身份证最少也是15位的呀，检查下吧');
            }
            else if($scope.user.pwd==''||$scope.user.confirmPassword==''||$scope.user.name==''||$scope.user.identifierNo==''||$scope.user.nickName==''||$scope.user.userSex==''){
                $scope.showAlert('您填写的信息不完整呦，填满嘛~');
            }
            else{
                commonService.showLoading();
                RegistService.regist($scope.user).then(function(res) {
                    commonService.hideLoading();
                    $state.go('login');
                }, function(errMsg) {
                    commonService.hideLoading();
                    var alertPopup = $ionicPopup.alert({
                        title: '哎呀，出错了',
                        template: '注册失败，请稍后重试'
                    })
                    console.log(errMsg);
                })
            }
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

//Retrieve password page controllers
    .controller('firstRetrievePageCtrl', function($scope,$state,$ionicHistory) {
        $scope.goSecondRetrievePage=function(){
            $state.go('secondRetrievePage');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('secondRetrievePageCtrl', function($scope,$state,$ionicHistory) {
        $scope.goThirdRetrievePage=function(){
            $state.go('thirdRetrievePage');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('thirdRetrievePageCtrl', function($scope,$state,$ionicHistory,$ionicPopup) {
        $scope.changePassword = function() {
            //$scope.showAlert('设置成功！');
            //request retrieve
            alertPopup.then(function(res) {
                $state.go('login');
            });
        }

        //submit retrieve code

        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

//Property management sub page controllers
    .controller('PropertyManagementCtrl', function($scope,$state,$ionicPopup) {
        var screenWidth = document.body.scrollWidth;
        var picHeight=Math.ceil((screenWidth * 164)/375);
        $scope.picHeight=picHeight+'px';

        $scope.gotoPayPropertyFirstPage=function(){
            $state.go('selectLocationToPayProperty');
        }
        $scope.gotoRelatedRepairs=function(){
            $state.go('relatedRepairs');
        }
        $scope.gotoHouseSaleAndRent=function(){
            $state.go('houseSaleAndRent');
        }
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                //title: 'Consume Ice Cream',
                template: '<div style="float: left;width: 42px;height: 42px;margin-left: 8px;padding-top: 7px;;border-radius: 50%;background-color: #00C800;"><i class="ion-ios-telephone" style="font-size: 30px;margin-left: 11px;color: #FFFFFF;"></i></div><div style="float: right;font-size: 35px;margin-top: 5px;margin-right: 5px">88888888</div> ',
                //scope: $scope,
                cssClass:"showPhoneNumPopup",
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<a href="tel:10086">拨打物业电话</a>',
                        type: 'button-positive',
                        onTap: function(e) {
                            console.log("call");
                        }
                    }
                ]
            })
            //confirmPopup.then(function(res) {
            //    if(res) {
            //        console.log('You are sure');
            //    } else {
            //        console.log('You are not sure');
            //    }
            //});
        }
        $scope.gotoVisitorPassport=function(){
            $state.go('visitorPassport');
        }
        $scope.gotoComplaintPage=function(){
            $state.go('complaintPage');
        }
    })
    .controller('selectLocationToPayPropertyCtrl', function($scope,$state,$ionicHistory) {
        //$scope.groups = [];
        for(i=0;i<1;i++){
            var firstList = [];

        };
        $scope.groups = [{name:'A',
            childs: [{period: '一',
                building: 1,
                unit:1,
                floor:1,
                number:101},
                {period: '二',
                    building: 2,
                    unit:2,
                    floor:2,
                    number:202} ]},
            {name:'B',
                childs:[{period: '一',
                    building: 1,
                    unit:1,
                    floor:1,
                    number:101},
                    {period: '二',
                        building: 2,
                        unit:2,
                        floor:2,
                        number:202}]}
        ];
        //$scope.groups[i]push(i + '-' + j);
        //for (var j=0; j<3; j++) {
        //    $scope.groups[i].items.push(i + '-' + j);
        //}


        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
            console.log($scope.shownGroup );
            console.log(group);
        }

        $scope.goShowBalancePage = function(){
            $state.go('showBalanceInPayProperty');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

    .controller('showBalanceInPayPropertyCtrl', function($scope,$state,$ionicHistory) {
        $scope.goConfirmStartAndEndDate=function(){
            $state.go('confirmStartAndEndDate');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

    .controller('confirmStartAndEndDateCtrl', function($scope,$state,$ionicHistory) {

        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

//Related repairs controllers
    .controller('relatedRepairsCtrl', function($scope,$state,commonService,RelatedRepairsService) {
        commonService.showLoading();
        RelatedRepairsService.getRelatedRepairs($scope.user).then(function(data) {
            $scope.items = data;
            commonService.hideLoading();
        }, function(errMsg) {
            commonService.hideLoading();
            $scope.showAlert('获取信息失败，请稍后重试');
            console.log(errMsg);
        });
        $scope.goNewAskForRepair = function () {
            $state.go('newAskForRepair');
        }
        $scope.goRepairDetails = function (item) {
            $state.go('repairDetails',{datas: item});
            console.log(item);
        }
        $scope.back=function(){
            $state.go('tab.PropertyManagement');
        }
    })
    .controller('newAskForRepairCtrl', function($scope,$state,commonService,RelatedRepairsService) {
        var screenWidth = document.body.scrollWidth - 30;
        var screenHeight = document.body.scrollHeight - 30;
        $scope.textAreaCols = Math.floor(screenWidth/14)*2;
        $scope.submitBtnBackgroundHeight = screenHeight-15-162-36-120+'px';
        $scope.submitNewRepair= function(){
            commonService.showLoading();
            RelatedRepairsService.newAskForRepair($scope.user).then(function(data) {
                commonService.hideLoading();
                $state.go('relatedRepairs');
            }, function(errMsg) {
                commonService.hideLoading();
                $scope.showAlert('提交失败，请稍后重试');
                console.log(errMsg);
            });
        }
        $scope.back=function(){
            $state.go('relatedRepairs');
        }
    })
    .controller('repairDetailsCtrl', function($scope,$state,$stateParams) {
        $scope.items = $stateParams.datas;

        var screenWidth = document.body.scrollWidth;
        $scope.progressDetailContentWidth = screenWidth-15-40-20+'px';
        console.log($scope.progressDetailContentWidth);

        // Urging or cancle

        $scope.back=function(){
            $state.go('relatedRepairs');
        }
    })

//House sale and rent controller
    .controller('houseSaleAndRentCtrl', function($scope,$state,commonService,HouseSaleAndRentService) {
        $scope.info={

        }
        commonService.showLoading();
        HouseSaleAndRentService.getHouseSaleAndRent($scope.user).then(function(data) {

            commonService.hideLoading();
        }, function(errMsg) {
            commonService.hideLoading();
            $scope.showAlert('获取信息失败，请稍后重试');
            console.log(errMsg);
        });

        $scope.goNewAskForSaleOrRent = function () {
            $state.go('newAskForSaleOrRent');
        }
        $scope.goSaleOrRentDetails = function () {
            $state.go('houseSaleAndRentDetails');
        }
        $scope.back=function(){
            $state.go('tab.PropertyManagement');
        }
    })
    .controller('newAskForSaleOrRentCtrl', function($scope,$state,commonService,HouseSaleAndRentService) {
        var screenWidth = document.body.scrollWidth - 30;
        var screenHeight = document.body.scrollHeight - 30;
        $scope.textAreaCols = Math.floor(screenWidth/14)*2;
        $scope.submitBtnBackgroundHeight = screenHeight-15-162-36-120+'px';
        $scope.submitNewSaleOrRent= function(){
            commonService.showLoading();
            HouseSaleAndRentService.newAskForHouseSaleOrRent($scope.user).then(function(data) {
                commonService.hideLoading();
                $state.go('houseSaleAndRent');
            }, function(errMsg) {
                commonService.hideLoading();
                $scope.showAlert('提交失败，请稍后重试');
                console.log(errMsg);
            });
        }
        $scope.back=function(){
            $state.go('houseSaleAndRent');
        }
    })
    .controller('houseSaleAndRentDetailsCtrl', function($scope,$state) {
        var screenWidth = document.body.scrollWidth;
        $scope.progressDetailContentWidth = screenWidth-15-40-20+'px';
        console.log($scope.progressDetailContentWidth);

        // Urging or cancle

        $scope.back=function(){
            $state.go('houseSaleAndRent');
        }
    })

//Visitor passport page
    .controller('visitorPassportCtrl', function($scope,$state,commonService,VisitorPassportService) {
        $scope.info={

        }
        commonService.showLoading();
        VisitorPassportService.getVisitorPassport($scope.user).then(function(data) {

            commonService.hideLoading();
        }, function(errMsg) {
            commonService.hideLoading();
            $scope.showAlert('获取信息失败，请稍后重试');
            console.log(errMsg);
        })

        $scope.gotoNewVisitorInvite=function(){
            $state.go('newVisitorInvite');
        }
        $scope.back=function(){
            $state.go('tab.PropertyManagement');
        }
    })
    .controller('newVisitorInviteCtrl', function($scope,$state) {
        $scope.info={
            visitorName:''
        };
        $scope.sexOne='男';
        $scope.sexTwo='女';
        $scope.isActive = false;
        $scope.openDropList=function(){
            if($scope.isActive == false){
                $scope.isActive = true;
            }
            else{
                $scope.isActive = false;
            }
        }
        $scope.selectFemale=function(){
            var changeSex1=$scope.sexTwo;
            var changeSex2 =$scope.sexOne;
            $scope.sexOne = changeSex1;
            $scope.sexTwo = changeSex2;
            $scope.isActive = false;
        }
        $scope.gotoGenerateQR=function(){
            if($scope.info.visitorName !=''){
                $state.go('generateQRCode',{QRvisitorName: $scope.info.visitorName,visitorSex: $scope.sexOne});
            }
            else{
                $scope.showAlert('姓名不能为空哦');
            }

        }
        $scope.back=function(){
            $state.go('visitorPassport');
        }
    })
    .controller('generateQRCodeCtrl', function($scope,$state,$stateParams) {
        $scope.name = $stateParams.QRvisitorName;
        $scope.sex = $stateParams.visitorSex;
        var nameAndSex = $scope.name + ' '+ $scope.sex;
        var screenHeight = document.body.scrollHeight;
        var screenWidth = document.body.scrollWidth;
        $scope.whiteAreaHeight=screenHeight*0.92+'px';
        $scope.contentHeight=screenHeight*0.84+'px';
        $scope.paddingPX=screenWidth*0.08+'px';
        $scope.qrWidth = screenWidth*0.68+'px';

        function utf16to8(str) {
            var out, i, len, c;
            out = "";
            len = str.length;
            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                }
            }
            return out;
        }
        $('#outputQR').qrcode(utf16to8(nameAndSex));
        $('#outputQR>canvas').css('height',$scope.qrWidth);
        $('#outputQR>canvas').css('width',$scope.qrWidth);
        //$('#outputQR>canvas:last-child').remove()
        if($('#outputQR>canvas').length !==1){
            $('#outputQR>canvas:last-child').remove();
        }

        $scope.back=function(){
            $state.go('newVisitorInvite');
        }
    })
//Complaint and suggestion page
    .controller('complaintPageCtrl', function($scope,$state,commonService,ComplaintService) {
        $scope.info={

        }
        commonService.showLoading();
        ComplaintService.getComplaint($scope.user).then(function(data) {

            commonService.hideLoading();
        }, function(errMsg) {
            commonService.hideLoading();
            $scope.showAlert('获取信息失败，请稍后重试');
            console.log(errMsg);
        })

        $scope.goComplaintDetails= function () {
            $state.go('complaintDetails');
        }
        $scope.goNewComplaintPage= function () {
            $state.go('newComplaintPage');
        }
        $scope.back=function(){
            $state.go('tab.PropertyManagement');
        }
    })
    .controller('newComplaintPageCtrl', function($scope,$state,commonService,ComplaintService) {
        var screenWidth = document.body.scrollWidth - 30;
        var screenHeight = document.body.scrollHeight - 30;
        $scope.textAreaCols = Math.floor(screenWidth/14)*2;
        $scope.submitBtnBackgroundHeight = screenHeight-15-162-36-120+'px';
        $scope.submitNewComplaint= function(){
            commonService.showLoading();
            ComplaintService.newComplaint($scope.user).then(function(data) {
                commonService.hideLoading();
                $state.go('complaintPage');
            }, function(errMsg) {
                commonService.hideLoading();
                $scope.showAlert('提交失败，请稍后重试');
                console.log(errMsg);
            });
        }
        $scope.back=function(){
            $state.go('complaintPage');
        }
    })
    .controller('complaintDetailsCtrl', function($scope,$state) {
        var screenWidth = document.body.scrollWidth;
        $scope.progressDetailContentWidth = screenWidth-15-40-20+'px';

        $scope.back=function(){
            $state.go('complaintPage');
        }
    })