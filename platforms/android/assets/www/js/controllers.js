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
        commonService.showLoading();
        DomesticService.getDomesticByStatus($rootScope.domesticTabTitle).then(function(data){
          $scope.domesticList = data;
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
        DomesticService.getDomesticByStatus($rootScope.domesticTabTitle).then(function(data){
          $scope.domesticList = data;
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
            {url:"img/adv_demo.png"},
            {url:"img/ben.png"},
            {url:"img/perry.png"}
        ];

        $scope.hotProducts = [
            {
             "productImg":"img/adam.jpg",
             "description":"波兰(Mleko)进口纯牛奶",
             "price":"9.9"
            },
            {
                "productImg":"img/adam.jpg",
                "description":"波兰(Mleko)进口纯牛奶",
                "price":"9.9"
            },
            {
                "productImg":"img/adam.jpg",
                "description":"波兰(Mleko)进口纯牛奶",
                "price":"9.9"
            },
            {
                "productImg":"img/adam.jpg",
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

.controller('CommunityMainCtrl',function($scope,$state,$stateParams,$ionicTabsDelegate){

        $scope.back = function(){
            $state.go('tab.Home');
        }
        var scrollHeight = document.body.scrollHeight-44-49+"px";
        $scope.scrollHeight = {
            "height":scrollHeight
        }
        $scope.message_picture_width = document.body.scrollWidth-30+"px";

        $scope.onTabSelect = function(index){
            selectTab();
        }

        $scope.goMessageDetail = function(){
            var index = $ionicTabsDelegate.selectedIndex();
            $state.go('communityDetail',{"tabIndex":index});
        }

        function selectTab(){
            var index = parseInt($stateParams.tabIndex);
            if(index>-1){
                $ionicTabsDelegate.$getByHandle('communityTabs_handle').select(index);
                $stateParams.tabIndex = -1;
            }else{

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


})

.controller('addCommunityNewsCtrl',function($scope,$state,$stateParams,$cordovaCamera){

        $scope.back = function(){
            $state.go("community",{"tabIndex":$stateParams.tabIndex});
        }

        $scope.showAddImgFlag = true;

        $scope.takePhoto=function(){
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
                $scope.showAddImgFlag = false;
                $scope.imageSrc= imageURI;
                //image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {

            });
        }
    })

.controller('CommunityDetail',function($scope,$state,$stateParams){

    var width = document.body.scrollWidth;
    $scope.message_picture_width = width-30;
    $scope.divMain = {
        "width":width,
        "padding":"15px",
        "background-color": "#FFFFFF",
        "border-bottom": "1px solid #c8c7cc"
    }

        $scope.commentsDetail = {
            "name":"社区管理员",
            "detail":"五一到了，大家想好去哪玩了吗？想不想和邻居一起拼车出游呢？社区正在举办" +
                "邻里拼车出游的活动：打算自驾出游有空位的邻居，可以发帖寻人平摊油钱；" +
                "买不到车票的邻里也可以顺路搭车了；不想闲在家里的邻居还可以找人一起结伴玩~" +
                "想参加的邻里，点击顶部活动照片就可以了解更多活动详情哦~",
            "descriptionImg":"img/adam.jpg",
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
        var a = $scope.homtComments;
        console.log(a);
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
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);

    })

/*
    Login and property mangement controllers
 */
    .controller('loginCtrl', function($scope,$state) {
        $scope.regist=function(){
            $state.go('firstRegistPage');
        }
        $scope.retrievePassword=function(){
            $state.go('firstRetrievePage');
        }
        $scope.loginToMainPage=function(){
            $state.go('tab.Home');
        }
    })

//Regist account page controllers
    .controller('firstRegistPageCtrl', function($scope,$state,$ionicHistory) {
        $scope.goSecondRegistPage=function(){
            $state.go('secondRegistPage');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

    .controller('secondRegistPageCtrl', function($scope,$state,$ionicHistory) {
        $scope.goThirdRegistPage=function(){
            $state.go('thirdRegistPage');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('thirdRegistPageCtrl', function($scope,$state,$ionicHistory,$ionicPopup) {
        $scope.registAccount = function() {

            //if($scope.inputPassword && $scope.confirmPassword && $scope.inputName && $scope.inputIdentifyId && $scope.inputNickName !=null){
            var alertPopup = $ionicPopup.alert({
                title: '注册成功'
                //template: '注册成功！'
            });
            alertPopup.then(function(res) {
                $state.go('login');
            });
            //}
        };

        //$scope.selectMale=function(){
        //    $('.selectMale').css('color','#FC5E5E');
        //    $('.selectFemale').css('color','none');
        //}
        //$scope.selectFemale=function(){
        //    $('.selectMale').css('color','none');
        //    $('.selectFemale').css('color','#FC5E5E');
        //}
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
            var alertPopup = $ionicPopup.alert({
                title: '设置成功!'
                //template: '注册成功！'
            });
            alertPopup.then(function(res) {
                $state.go('login');
            });
            $scope.back=function(){
                $ionicHistory.goBack();
            }
        };


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
                        text: '<b>拨打物业电话</b>',
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
    .controller('relatedRepairsCtrl', function($scope,$state,$ionicHistory) {
        $scope.goNewAskForRepair = function () {
            $state.go('newAskForRepair');
        }
        $scope.goRepairDetails = function () {
            $state.go('repairDetails');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('newAskForRepairCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth - 30;
        var screenHeight = document.body.scrollHeight - 30;
        $scope.textAreaCols = Math.floor(screenWidth/14)*2;
        $scope.submitBtnBackgroundHeight = screenHeight-15-162-36-120+'px';
        $scope.goRelatedRepairs= function(){
            $state.go('relatedRepairs');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('repairDetailsCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth;
        $scope.progressDetailContentWidth = screenWidth-15-40-20+'px';
        console.log($scope.progressDetailContentWidth);


        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

//House sale and rent controller
    .controller('houseSaleAndRentCtrl', function($scope,$state,$ionicHistory) {
        $scope.goNewAskForSaleOrRent = function () {
            $state.go('newAskForSaleOrRent');
        }
        $scope.goSaleOrRentDetails = function () {
            $state.go('houseSaleAndRentDetails');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('newAskForSaleOrRentCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth - 30;
        var screenHeight = document.body.scrollHeight - 30;
        $scope.textAreaCols = Math.floor(screenWidth/14)*2;
        $scope.submitBtnBackgroundHeight = screenHeight-15-162-36-120+'px';
        $scope.gotoHouseSaleAndRent= function(){
            $state.go('houseSaleAndRent');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('houseSaleAndRentDetailsCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth;
        $scope.progressDetailContentWidth = screenWidth-15-40-20+'px';
        console.log($scope.progressDetailContentWidth);


        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })

    .controller('visitorPassportCtrl', function($scope,$state,$ionicHistory) {


        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })