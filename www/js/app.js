// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.Home', {
    url: '/Home',
    views: {
      'tab-Home': {
        templateUrl: 'templates/Home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.PropertyManagement', {
    url: '/PropertyManagement',
    views: {
      'tab-PropertyManagement': {
        templateUrl: 'templates/PropertyManagement.html',
        controller: 'PropertyManagementCtrl'
      }
    }
  })

  .state('tab.Shop', {
    cache: false,
    url: '/Shop',
    views: {
      'tab-Shop': {
        templateUrl: 'templates/Shop.html',
        controller: 'ShopCtrl'
      }
    }
  })

  .state('tab.Domestic', {
      cache: false,
      url: '/Domestic',
      views: {
        'tab-Domestic': {
          templateUrl: 'templates/Domestic.html',
          controller: 'DomesticCtrl'
        }
      }
    })

  .state('tab.AboutMe', {
    url: '/AboutMe',
    views: {
      'tab-AboutMe': {
        templateUrl: 'templates/AboutMe.html',
        controller: 'AboutMeCtrl'
      }
    }

  })

  .state('Domestic1', {
    url: '/Domestic1',
    templateUrl: 'templates/Domestic1.html',
    controller: 'Domestic1Ctrl',
    cache:false
  })

  .state('ShopProductDetail', {
    url: '/ShopProductDetail?name&type&price',
    templateUrl: 'templates/ShopProductDetail.html',
    controller: 'ShopProductDetailCtrl',
    cache:false
  })

  .state('community', {
      url: '/community/:tabIndex',
      templateUrl: 'templates/community.html',
      controller: 'CommunityMainCtrl',
      cache:false
  })

  .state('communityDetail', {
      url: '/communityDetail:tabIndex',
      templateUrl: 'templates/communityDetail.html',
      controller: 'CommunityDetail'
  })

  .state('addCommunity', {
      url: '/addCommunity:tabIndex',
      templateUrl: 'templates/addCommunity.html',
      controller: 'addCommunityNewsCtrl'
  })

/*
  Login and property management routes
*/
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('firstRegistPage', {
    url: '/firstRegistPage',
    templateUrl: 'templates/firstRegistPage.html',
    controller: 'firstRegistPageCtrl'
  })
  .state('secondRegistPage', {
    url: '/secondRegistPage',
    templateUrl: 'templates/secondRegistPage.html',
    controller: 'secondRegistPageCtrl'
  })
  .state('thirdRegistPage', {
    url: '/thirdRegistPage',
    templateUrl: 'templates/thirdRegistPage.html',
    controller: 'thirdRegistPageCtrl'
  })


  .state('firstRetrievePage', {
    url: '/firstRetrievePage',
    templateUrl: 'templates/firstRetrievePage.html',
    controller: 'firstRetrievePageCtrl'
  })
  .state('secondRetrievePage', {
    url: '/secondRetrievePage',
    templateUrl: 'templates/secondRetrievePage.html',
    controller: 'secondRetrievePageCtrl'
  })
  .state('thirdRetrievePage', {
    url: '/thirdRetrievePage',
    templateUrl: 'templates/thirdRetrievePage.html',
    controller: 'thirdRetrievePageCtrl'
  })

  .state('selectLocationToPayProperty', {
    url: '/selectLocationToPayProperty',
    templateUrl: 'templates/selectLocationToPayProperty.html',
    controller: 'selectLocationToPayPropertyCtrl'
  })

  .state('showBalanceInPayProperty', {
    url: '/showBalanceInPayProperty',
    templateUrl: 'templates/showBalanceInPayProperty.html',
    controller: 'showBalanceInPayPropertyCtrl'
  })

  .state('confirmStartAndEndDate', {
    url: '/confirmStartAndEndDate',
    templateUrl: 'templates/confirmStartAndEndDate.html',
    controller: 'confirmStartAndEndDateCtrl'
  })

//Related repairs
  .state('relatedRepairs', {
    url: '/relatedRepairs',
    templateUrl: 'templates/relatedRepairs.html',
    controller: 'relatedRepairsCtrl'
  })
  .state('newAskForRepair', {
    url: '/newAskForRepair',
    templateUrl: 'templates/newAskForRepair.html',
    controller: 'newAskForRepairCtrl'
  })

  .state('shoppingCar', {
    url: '/shoppingCar',
    templateUrl: 'templates/shoppingCar.html',
    controller: 'shoppingCarCtrl',
    cache:false
  })

  .state('paymentOrder', {
    url: '/paymentOrder',
    templateUrl: 'templates/paymentOrder.html',
    controller: 'paymentOrderCtrl',
    cache:false
  })

  .state('myOrder', {
    url: '/myOrder',
    templateUrl: 'templates/myOrder.html',
    controller: 'myOrderCtrl',
    cache:false
  })

  .state('publishTheme', {
    url: '/publishTheme',
    templateUrl: 'templates/publishTheme.html',
    controller: 'publishThemeCtrl',
    cache:false
  })

  .state('joinTheme', {
    url: '/joinTheme',
    templateUrl: 'templates/joinTheme.html',
    controller: 'joinThemeCtrl',
    cache:false
  })

  .state('personalInfo', {
    url: '/personalInfo',
    templateUrl: 'templates/personalInfo.html',
    controller: 'personalInfoCtrl',
    cache:false
  })

  .state('editNickname', {
    url: '/editNickname',
    templateUrl: 'templates/editNickName.html',
    controller: 'editNicknameCtrl',
    cache:false
  })
      // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/Home');

});
