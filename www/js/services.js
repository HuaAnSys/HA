angular.module('starter.services', [])

.factory('DomesticService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getDomesticByStatus: function () {
      //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

        var url = "http://9.112.87.121:8080/HuanAnBackend/housekeepinfo/getHousekeepingInfo";
        var defer =$q.defer();
        var request =$http.get(url);

      //Successful HTTP post request or not
      request.success(function (result) {
          console.log(result);
        //var status = result.success;
        //if (status == "1") {
          defer.resolve(result);
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

.factory('publishThemeService', ['$http','$q',function($http, $q){
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    return {
        getPublishTheme: function () {
            //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

            var url = "http://9.112.87.121:8080/HuanAnBackend/myPersonalInfo/getMyPostedTopic";
            var defer =$q.defer();
            var request =$http.get(url);

            //Successful HTTP post request or not
            request.success(function (result) {
                console.log(result);
                //var status = result.success;
                //if (status == "1") {
                defer.resolve(result);
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

.factory('joinThemeService', ['$http','$q',function($http, $q){
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    return {
        getJoinTheme: function () {
            //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

            var url = "http://9.112.87.121:8080/HuanAnBackend/myPersonalInfo/getMyParticipativeTopic";
            var defer =$q.defer();
            var request =$http.get(url);

            //Successful HTTP post request or not
            request.success(function (result) {
                console.log(result);
                //var status = result.success;
                //if (status == "1") {
                defer.resolve(result);
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



.factory('shoppingCarService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getShoppingCar: function () {
      //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;
      var defer = $q.defer();
      var request = $http.get('js/shoppingCar.json');
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

.factory('commonService', function($ionicLoading,$ionicPopup){

    function loading(){
        $ionicLoading.show({
            showBackdrop: true,
            template: '<ion-spinner icon="spiral" class="spinner-assertive"></ion-spinner>'
        });
    }
    return {
        showLoading : function(){
            loading();
        },

        hideLoading : function(){
            $ionicLoading.hide();
        }
    };
})

.factory('homePageService', ['$http','$q',function($http, $q){
    return {
        getAdvertisements : function(){
            var url = "";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject(Messages.HOMEADVERSFAIL);
                }
            });
            request.error(function(){
                defer.reject(Messages.HOMEADVERSFAIL);
            });
            return defer.promise;
        },

        getHotProduct : function(){
            var url = "";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject(Messages.HOMEPRODUCTSFAIL);
                }
            });
            request.error(function(){
                defer.reject(Messages.HOMEPRODUCTSFAIL);
            });
            return defer.promise;
        }
    }
}])

.factory('CommunityService', ['$http','$q',function($http, $q){
    return {
        getAllBulletins : function(){
            var url = "http://localhost:7080/HuanAnBackend/bulletin/getBulletin";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllCommentsByCommunity : function(communityId){
            var url = "http://localhost:7080/HuanAnBackend/bulletin/getBulletinComments";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getLikeNumByCommunity : function(communityId){
            var url = "http://localhost:7080/HuanAnBackend/bulletin/getBulletinLike";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        setLikeByCommunity : function(communityId){
            var url = "http://localhost:7080/HuanAnBackend/bulletin/setBulletinLike";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        addCommentsByCommunity : function(communityId){
            var url = "http://localhost:7080/HuanAnBackend/bulletin/setBulletinComment";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllDiscussions : function(){
            var url = "http://localhost:7080/HuanAnBackend/discussionRoom/getDiscussion";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllCommentsByDiscussion : function(discussionID){
            var url = "http://localhost:7080/HuanAnBackend/discussionRoom/getDiscussionComments";
            var defer =$q.defer();
            var param = {"discussionID":discussionID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getLikeNumByDiscussion : function(discussionID){
            var url = "http://localhost:7080/HuanAnBackend/discussionRoom/getDiscussionLike";
            var defer =$q.defer();
            var param = {"discussionID":discussionID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        setLikeByDiscussion : function(discussionID){
            var url = "http://localhost:7080/HuanAnBackend/discussionRoom/setDiscussionLike";
            var defer =$q.defer();
            var param = {"discussionID":discussionID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        addCommentsByDiscussion : function(discussionID){
            var url = "http://localhost:7080/HuanAnBackend/discussionRoom/setDiscussionComment";
            var defer =$q.defer();
            var param = {"discussionID":discussionID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllCollections : function(){
            var url = "http://localhost:7080/HuanAnBackend/actityAlarm/getActityAlarm";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllCommentsByCollection : function(actityAlarmID){
            var url = "http://localhost:7080/HuanAnBackend/actityAlarm/getActityAlarmComments";
            var defer =$q.defer();
            var param = {"actityAlarmID":actityAlarmID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getLikeNumByCollection : function(actityAlarmID){
            var url = "http://localhost:7080/HuanAnBackend/actityAlarm/getActityAlarmLike";
            var defer =$q.defer();
            var param = {"actityAlarmID":actityAlarmID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        setLikeByCollection : function(actityAlarmID){
            var url = "http://localhost:7080/HuanAnBackend/actityAlarm/setActityAlarmLike";
            var defer =$q.defer();
            var param = {"actityAlarmID":actityAlarmID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        addCommentsByCollection : function(actityAlarmID){
            var url = "http://localhost:7080/HuanAnBackend/actityAlarm/setActityAlarmComment";
            var defer =$q.defer();
            var param = {"actityAlarmID":actityAlarmID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllBestMemory : function(){
            var url = "http://localhost:7080/HuanAnBackend/bestMemory/getBestMemory";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getAllCommentsByBestMemory : function(bestMemoryID){
            var url = "http://localhost:7080/HuanAnBackend/bestMemory/getBestMemoryComments";
            var defer =$q.defer();
            var param = {"bestMemoryID":bestMemoryID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        getLikeNumByBestMemory : function(bestMemoryID){
            var url = "http://localhost:7080/HuanAnBackend/bestMemory/getBestMemoryLike";
            var defer =$q.defer();
            var param = {"bestMemoryID":bestMemoryID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        setLikeByBestMemory : function(bestMemoryID){
            var url = "http://localhost:7080/HuanAnBackend/bestMemory/setBestMemoryLike";
            var defer =$q.defer();
            var param = {"bestMemoryID":bestMemoryID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        },

        addCommentsByBestMemory : function(bestMemoryID){
            var url = "http://localhost:7080/HuanAnBackend/bestMemory/setBestMemoryComment";
            var defer =$q.defer();
            var param = {"bestMemoryID":bestMemoryID};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function(){
                defer.reject("fail");
            });
            return defer.promise;
        }
    }
}])
.factory('LoginService', ['$http','$q',function($http, $q) {

    return {
        login: function (data) {
            var defer = $q.defer();
            var loginUrl ='http://9.110.54.76:7080/HuanAnBackend/user/login/phoneNo/' + data.phoneNo + '/pwd/'+data.pwd;
            var request = $http.post(loginUrl);
            request.success(function (data) {
                if(data.result=="success"){
                    defer.resolve(data.result);
                }
                else{
                  defer.reject("Login failed, please try again later.");
                }
            });
            request.error(function (data) {
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
            request.success(function (data) {
                if(data.result=='success'){
                    defer.resolve(data);
                }
                else{
                  defer.reject("Get captcha failed");
                }
            });
            request.error(function () {
                defer.reject("Verify the message authentication code failed");
            });
            return defer.promise;
        }
    }
}])

.factory('RegistService', ['$http','$q',function($http, $q) {

    return {
        regist: function (data) {
            var defer = $q.defer();
            var request = $http.post('http://9.110.54.76:7080/HuanAnBackend/user/registerUser',data);
            request.success(function (data) {
                if(data.result=='success'){
                    defer.resolve(data.result);
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
.factory('RelatedRepairsService', ['$http','$q',function($http, $q) {

    return {
        getRelatedRepairs: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getClaimedRepairs',user);
            var request = $http.get('js/propertyManagement.json');
            request.success(function (data) {
                var status =data.resultCode;
                //if(status == "1"){
                    defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        },

        //newAskForRepair: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewRepair',user);
        //    request.success(function (data) {
        //        var status =data.resultCode;
        //        if(status == "1"){
        //            defer.resolve(data.result);
        //        }else{
        //            defer.reject();
        //        }
        //    });
        //    request.error(function () {
        //        defer.reject("Get related repairs information failed.");
        //    });
        //    return defer.promise;
        //},

        repairDetails: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getComplain',user);
            var request = $http.get('js/repairsHistory.json');
            request.success(function (data) {
                //var status =data.resultCode;
                //if(status == "1"){
                defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        }
    }
}])
.factory('HouseSaleAndRentService', ['$http','$q',function($http, $q) {

    return {
        getHouseSaleAndRent: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getRentSaleProperty',user);
            var request = $http.get('js/houseSaleAndRent.json');
            request.success(function (data) {
                var status =data.resultCode;
                //if(status == "1"){
                    defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        },

        //newAskForHouseSaleOrRent: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewRentSaleProperty',user);
        //    request.success(function (data) {
        //        var status =data.resultCode;
        //        if(status == "1"){
        //            defer.resolve(data.result);
        //        }else{
        //            defer.reject();
        //        }
        //    });
        //    request.error(function () {
        //        defer.reject("Get related repairs information failed.");
        //    });
        //    return defer.promise;
        //},

        saleAndRentDetails: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getComplain',user);
            var request = $http.get('js/houseSaleHistory.json');
            request.success(function (data) {
                //var status =data.resultCode;
                //if(status == "1"){
                defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        }
    }
}])

.factory('VisitorPassportService', ['$http','$q',function($http, $q) {

    return {
        getVisitorPassport: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getCustomers',user);
            var request = $http.get('js/visitorPassport.json');
            request.success(function (data) {
                var status =data.resultCode;
                //if(status == "1"){
                    defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        },

        newVisitorInvites: function (user) {
            var defer = $q.defer();
            var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewCustomer',user);
            request.success(function (data) {
                var status =data.resultCode;
                if(status == "1"){
                    defer.resolve(data.result);
                }else{
                    defer.reject();
                }
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        }
    }
}])

.factory('ComplaintService', ['$http','$q',function($http, $q) {

    return {
        getComplaint: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getComplain',user);
            var request = $http.get('js/complaint.json');
            request.success(function (data) {
                //var status =data.resultCode;
                //if(status == "1"){
                    defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        },

        //newComplaint: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewComplain',user);
        //    request.success(function (data) {
        //        var status =data.resultCode;
        //        if(status == "1"){
        //            defer.resolve(data.result);
        //        }else{
        //            defer.reject();
        //        }
        //    });
        //    request.error(function () {
        //        defer.reject("Get related repairs information failed.");
        //    });
        //    return defer.promise;
        //},

        complaintDetails: function (user) {
            var defer = $q.defer();
            //var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/getComplain',user);
            var request = $http.get('js/complaintHistory.json');
            request.success(function (data) {
                //var status =data.resultCode;
                //if(status == "1"){
                defer.resolve(data.result);
                //}else{
                //    defer.reject();
                //}
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        }
    }
}])