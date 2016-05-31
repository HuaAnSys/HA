// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function($ionicConfigProvider) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      $ionicConfigProvider.platform.android.tabs.position('bottom');

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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
    url: '/Shop',
    views: {
      'tab-Shop': {
        templateUrl: 'templates/Shop.html',
        controller: 'ShopCtrl'
      }
    }
  })

  .state('tab.DomesticService', {
      url: '/DomesticService',
      views: {
        'tab-DomesticService': {
          templateUrl: 'templates/DomesticService.html',
          controller: 'DomesticServiceCtrl'
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
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/Home');

});
