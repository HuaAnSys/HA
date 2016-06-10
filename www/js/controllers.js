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

.controller('AboutMeCtrl', function($scope, $state, $rootScope, $stateParams) {
        var screenWidth = document.body.scrollWidth;
        var picHeight=Math.ceil((screenWidth * 274)/375);
        $scope.picHeight=picHeight+'px';

        $scope.moveToShoppingCarPage =  function(){
            $state.go('shoppingCar');
        }

        $scope.moveToPaymentOrderPage =  function(){
            $state.go('paymentOrder');
        }

        $scope.moveToMyOrderPage =  function(){
            $state.go('myOrder');
        }

        $scope.moveToInfoPage =  function(){
            $state.go('personalInfo');
        }

        $scope.moveToLoginPage = function(){
            $state.go('login');
        }

})

.controller('shoppingCarCtrl', function($scope, $state, $rootScope, $ionicLoading, ShopTypeService, $stateParams) {

    $ionicLoading.show({
        template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
        noBackdrop: true
    });
        ShopTypeService.getShopByType('a').then(function(data){
        $scope.shoppingCarList = data;
        $ionicLoading.hide();
        $rootScope.domesticTabTitle = '';
    }, function(error){
        $ionicLoading.hide();
        //$scope.showAlert(error);
    });

    $scope.editNickname = function(){
        $state.go('editNickname');
    };

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('paymentOrderCtrl', function($scope, $state, $rootScope, $ionicLoading, ShopTypeService, $stateParams) {

    $ionicLoading.show({
        template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
        noBackdrop: true
    });
    ShopTypeService.getShopByType('a').then(function(data){
        $scope.shoppingCarList = data;
        $ionicLoading.hide();
        $rootScope.domesticTabTitle = '';
    }, function(error){
        $ionicLoading.hide();
        //$scope.showAlert(error);
    });

    $scope.editNickname = function(){
        $state.go('editNickname');
    };

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('myOrderCtrl', function($scope, $state, $rootScope, $ionicLoading, ShopTypeService, $stateParams) {

    $ionicLoading.show({
        template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>',
        noBackdrop: true
    });
    ShopTypeService.getShopByType('a').then(function(data){
        $scope.shoppingCarList = data;
        $ionicLoading.hide();
        $rootScope.domesticTabTitle = '';
    }, function(error){
        $ionicLoading.hide();
        //$scope.showAlert(error);
    });

    $scope.editNickname = function(){
        $state.go('editNickname');
    };

    $scope.moveToAboutPage = function(){
        $state.go('tab.AboutMe');
    }

})

.controller('personalInfoCtrl', function($scope, $state, $rootScope, $stateParams) {
    var screenWidth = document.body.scrollWidth;
    var picHeight=Math.ceil((screenWidth * 100)/290);
    $scope.picHeight=picHeight+'px';
    console.log($scope.picHeight);

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
          $rootScope.domesticTabTitle ="kaisuo";
        }else if(idx == 6){
          $rootScope.domesticTabTitle ="lvhua";
        }else if(idx == 7){
          $rootScope.domesticTabTitle ="anzhuang";
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
                $stateParams.type = -1;
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
    .controller('ShopProductDetailCtrl', function($scope, $rootScope, $state, $stateParams, $ionicLoading, ShopProductDetailService, $timeout) {
        console.log($stateParams);
        console.log($stateParams.name);
        console.log($stateParams.type);
        console.log($stateParams.price);
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
    .controller('PropertyManagementCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth;
        var picHeight=Math.ceil((screenWidth * 164)/375);
        $scope.picHeight=picHeight+'px';

        $scope.gotoPayPropertyFirstPage=function(){
            $state.go('selectLocationToPayProperty');
        }
        $scope.gotoRelatedRepairs=function(){
            $state.go('relatedRepairs');
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
        $scope.goNewAskForRepair= function () {
            $state.go('newAskForRepair');
        }
        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })
    .controller('newAskForRepairCtrl', function($scope,$state,$ionicHistory) {
        var screenWidth = document.body.scrollWidth - 30;
        $scope.textAreaCols=Math.floor(screenWidth/14)*2;

        $scope.back=function(){
            $ionicHistory.goBack();
        }
    })