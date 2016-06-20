angular.module('starter.services', [])

.factory('DomesticService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getDomesticByStatus: function (domesticTabTitle) {
      //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

      console.log(domesticTabTitle);
      var defer = $q.defer();

      if(domesticTabTitle=='baojie'){
        var request = $http.get('js/Domestic.json');
      }else if(domesticTabTitle=='weixiu'){
        var request = $http.get('js/Domestic1.json');
      }else if(domesticTabTitle=='daixi'){
        var request = $http.get('js/Domestic2.json');
      }else if(domesticTabTitle=='banyun'){
        var request = $http.get('js/Domestic3.json');
      }else if(domesticTabTitle=='anzhuang'){
        var request = $http.get('js/Domestic4.json');
      }else if(domesticTabTitle=='kaisuo'){
        var request = $http.get('js/Domestic5.json');
      }else if(domesticTabTitle=='lvhua'){
        var request = $http.get('js/Domestic6.json');
      }

      //Successful HTTP post request or not
      request.success(function (result) {
        //var status = result.success;
        //if (status == "1") {
          defer.resolve(result.data);
        //} else {
        //  defer.reject("Get draft list failed, please try again later.");
        //}
      });
      request.error(function () {
        defer.reject("Get draft list failed, please try again later.");
      });
      return defer.promise;
    }
    };
}])
.factory('ShopTypeService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getShopByType: function (type) {
      //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

      console.log(type);
      var defer = $q.defer();

      if(type=='a'){
        var request = $http.get('js/shopType_a.json');
      }else if(type=='b'){
        var request = $http.get('js/shopType_b.json');
      }else if(type=='c'){
        var request = $http.get('js/shopType_d.json');
      }else if(type=='d'){
        var request = $http.get('js/shopType_d.json');
      }else if(type=='e'){
        var request = $http.get('js/shopType_a.json');
      }else if(type=='f'){
        var request = $http.get('js/shopType_b.json');
      }else if(type=='g'){
        var request = $http.get('js/shopType_c.json');
      }else if(type=='h'){
        var request = $http.get('js/shopType_d.json');
      }else if(type=='i'){
        var request = $http.get('js/shopType_a.json');
      }else if(type=='j'){
        var request = $http.get('js/shopType_b.json');
      }else if(type=='hot'){
        var request = $http.get('js/shopTyp_hot.json');
      }

      //Successful HTTP post request or not
      request.success(function (result) {
        //var status = result.success;
        //if (status == "1") {
        defer.resolve(result.data);
        //} else {
        //  defer.reject("Get draft list failed, please try again later.");
        //}
      });
      request.error(function () {
        defer.reject("Get draft list failed, please try again later.");
      });
      return defer.promise;
    }
  };
}])
.factory('ShopBannerService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getShopBanner: function () {
      //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

      //console.log(type);
      var defer = $q.defer();
      var request = $http.get('js/shopBanner.json');
      //if(type=='a'){
      //  var request = $http.get('js/shopType_a.json');
      //}else if(type=='b'){
      //  var request = $http.get('js/shopType_b.json');
      //}else if(type=='c'){
      //  var request = $http.get('js/shopType_d.json');
      //}else if(type=='d'){
      //  var request = $http.get('js/shopType_d.json');
      //}else if(type=='e'){
      //  var request = $http.get('js/shopType_a.json');
      //}else if(type=='f'){
      //  var request = $http.get('js/shopType_b.json');
      //}else if(type=='g'){
      //  var request = $http.get('js/shopType_c.json');
      //}else if(type=='h'){
      //  var request = $http.get('js/shopType_d.json');
      //}else if(type=='i'){
      //  var request = $http.get('js/shopType_a.json');
      //}else if(type=='j'){
      //  var request = $http.get('js/shopType_b.json');
      //}else if(type=='hot'){
      //  var request = $http.get('js/shopTyp_hot.json');
      //}

      //Successful HTTP post request or not
      request.success(function (result) {
        //var status = result.success;
        //if (status == "1") {
        defer.resolve(result.data);
        //} else {
        //  defer.reject("Get draft list failed, please try again later.");
        //}
      });
      request.error(function () {
        defer.reject("Get draft list failed, please try again later.");
      });
      return defer.promise;
    }
  };
}])
    .factory('ShopProductDetailService', ['$http','$q',function($http, $q){
      // Might use a resource here that returns a JSON array

      // Some fake testing data

      return {
        getShopProductDetail: function (product) {
          //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

          console.log(product);
          var defer = $q.defer();
          var request = $http.get('js/ShopProductDetail.json');
          //if(type=='a'){
          //  var request = $http.get('js/shopType_a.json');
          //}else if(type=='b'){
          //  var request = $http.get('js/shopType_b.json');
          //}else if(type=='c'){
          //  var request = $http.get('js/shopType_d.json');
          //}else if(type=='d'){
          //  var request = $http.get('js/shopType_d.json');
          //}else if(type=='e'){
          //  var request = $http.get('js/shopType_a.json');
          //}else if(type=='f'){
          //  var request = $http.get('js/shopType_b.json');
          //}else if(type=='g'){
          //  var request = $http.get('js/shopType_c.json');
          //}else if(type=='h'){
          //  var request = $http.get('js/shopType_d.json');
          //}else if(type=='i'){
          //  var request = $http.get('js/shopType_a.json');
          //}else if(type=='j'){
          //  var request = $http.get('js/shopType_b.json');
          //}else if(type=='hot'){
          //  var request = $http.get('js/shopTyp_hot.json');
          //}

          //Successful HTTP post request or not
          request.success(function (result) {
            //var status = result.success;
            //if (status == "1") {
            defer.resolve(result.data);
            //} else {
            //  defer.reject("Get draft list failed, please try again later.");
            //}
          });
          request.error(function () {
            defer.reject("Get draft list failed, please try again later.");
          });
          return defer.promise;
        }
      };
    }])
.factory('LoginService', ['$http','$q',function($http, $q) {

    return {
        login: function (user) {
            var defer = $q.defer();
            var request = $http.post('http://localhost:7080/HuanAnBackend/user/login',user);
            request.success(function (res) {
                if(res.result=='success'){
                    defer.resolve(res.result);
                }
                else{
                  defer.reject("Login failed, please try again later.");
                }
            });
            request.error(function () {
                defer.reject("Login failed, please try again later.");
            });
            return defer.promise;

        }
    }
}])
.factory('checkCaptchaService', ['$http','$q',function($http, $q) {

    return {
        checkCaptcha: function (data) {
            var defer = $q.defer();
            var request = $http.post('http://localhost:7080/HuanAnBackend/user/****************',data);
            request.success(function (res) {
                if(res.result=='success'){
                    defer.resolve(res.result);
                }
                else{
                  defer.reject("Get captcha failed, please try again later.");
                }
            });
            request.error(function () {
                defer.reject("Verify the message authentication code failed, please try again later.");
            });
            return defer.promise;
        }
    }
}])

.factory('RegistService', ['$http','$q',function($http, $q) {

    return {
        regist: function (data) {
            var defer = $q.defer();
            var request = $http.post('http://localhost:7080/HuanAnBackend/user/registerUser',data);
            request.success(function (res) {
                if(res.result=='success'){
                    defer.resolve(res.result);
                }
                else{
                  defer.reject("Regist failed, please try again later.");
                }
            });
            request.error(function () {
                defer.reject("Regist failed, please try again later.");
            });
            return defer.promise;
        }
    }
}])