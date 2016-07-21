var BASE_URL = "http://9.112.87.121:8080/HuanAnBackend/";
angular.module('starter.services', [])

.factory('DomesticService', ['$http','$q',function($http, $q){
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
    getDomesticByStatus: function () {
        var url = BASE_URL + "housekeepinfo/getHousekeepingInfo";
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
    return {
        getPublishTheme: function () {
            //var url = SERVICE_CONTEXT + "/smalldata/users/" + id + "/getIntentListByStatus/" + status;

            var url = BASE_URL + "myPersonalInfo/getMyPostedTopic";
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

.factory('joinThemeService', ['$http','$q',function($http, $q){   return {
        getJoinTheme: function () {
            var url = BASE_URL + "myPersonalInfo/getMyParticipativeTopic";
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
            var url = BASE_URL+"shoppingmall/getHotProducts";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                defer.resolve(data);
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
            var url = BASE_URL + "bulletin/getBulletins";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(){
                defer.reject(Messages.GETBULLETINSFAIL);
            });
            return defer.promise;
        },

        getAllCommentsByCommunity : function(communityId){
            var url = BASE_URL + "bulletin/getBulletinComments";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(error){
                defer.reject(Messages.getCommentByBulletinId);
            });
            return defer.promise;
        },

        getLikeNumByCommunity : function(communityId){
            var url = BASE_URL + "bulletin/getBulletinLike";
            var defer =$q.defer();
            var param = {"bulletinID":communityId};
            var request =$http.post(url,param);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(){
                defer.reject(Messages.getlikeNumByBulletinId);
            });
            return defer.promise;
        },

        setLikeByCommunity : function(communityId,userId){
            var url = BASE_URL + "bulletin/setBulletinLike";
            var defer =$q.defer();
            var param = {"bulletinID":communityId,"userID":userId};
            var request =$http.post(url,param);
            request.success(function(data) {
                if(data.result=="success"){
                    defer.resolve(data);
                }else{
                    defer.reject("fail");
                }

            });
            request.error(function(error){
                defer.reject(Messages.likeCommunity);
            });
            return defer.promise;
        },

        addCommentsByCommunity : function(userId,communityId,comments){
            var url = BASE_URL + "bulletin/setBulletinComment";
            var defer =$q.defer();
            var param = {"bulletinID":communityId,"userID":userId,"commentDetail":comments};
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.result;
                if(status == "success"){
                    defer.resolve(data);
                }else{
                    defer.reject(Messages.addCommtsByBulletin);
                }
            });
            request.error(function(){
                defer.reject(Messages.addCommtsByBulletin);
            });
            return defer.promise;
        },

        getAllDiscussions : function(){
            var url = BASE_URL + "discussionRoom/getDiscussion";
            var defer = $q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(error){
                defer.reject(Messages.getAllDiscussionsError);
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
            var url = BASE_URL + "actityAlarm/getAllActityAlarm";
            var defer = $q.defer();
            var request = $http.post(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(){
                defer.reject(Messages.getAllCollectionsError);
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
            var url = BASE_URL + "bestMemory/getAllBestMemory";
            var defer =$q.defer();
            var request =$http.post(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(){
                defer.reject(Messages.getAllBestMemoryError);
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
        login: function (user) {
            var defer = $q.defer();
            var loginUrl = BASE_URL + 'user/login/phoneNo/' + user.phoneNo + '/pwd/'+user.pwd;
            var request = $http.post(loginUrl,user);
            request.success(function (data) {
                if(data.result=="success"){
                    defer.resolve(data);
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
            var url = BASE_URL + 'user/registerUser';
            var request = $http.post(url,data);
            request.success(function (data) {
                if(data.result=='success'){
                    defer.resolve(data);
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

.factory('getHouseInfoService', ['$http','$q',function($http, $q) {

    return {
        getHouseInfo: function(user){
            var defer = $q.defer();
            var url = BASE_URL + 'myPersonalInfo/getMyProperty';
            //var request = $http.post(url,user);
            var request = $http.get('js/houseInfo.json');
            request.success(function (data) {
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        }

    }
}])

.factory('RelatedRepairsService', ['$http','$q',function($http, $q) {

    return {
        getRelatedRepairs: function (user) {
            var defer = $q.defer();
            var url = BASE_URL + 'propertyManagement/getClaimedRepairs';
            var request = $http.post(url,user);
            //var request = $http.get('js/propertyManagement.json');
            request.success(function (data) {
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get related repairs information failed.");
            });
            return defer.promise;
        },

        //newAskForRepair: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:8080/HuanAnBackend/propertyManagement/createNewRepair',user);
        //    request.success(function (data) {
        //            defer.resolve(data);
        //    });
        //    request.error(function () {
        //        defer.reject("Get related repairs information failed.");
        //    });
        //    return defer.promise;
        //},

        repairDetails: function (user) {
            var defer = $q.defer();
            var url = BASE_URL + 'propertyManagement/getComplain';
            var request = $http.post(url,user);
            //var request = $http.get('js/repairsHistory.json');
            request.success(function (data) {
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get related repairs details failed.");
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
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get sale and rent information failed.");
            });
            return defer.promise;
        },

        //newAskForHouseSaleOrRent: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewRentSaleProperty',user);
        //    request.success(function (data) {
        //            defer.resolve(data);
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
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get sale and rent details failed.");
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
                    defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get visitor information failed.");
            });
            return defer.promise;
        },

        newVisitorInvites: function (user) {
            var defer = $q.defer();
            var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewCustomer',user);
            request.success(function (data) {
                    defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Creat new visitor information failed.");
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
                    defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get complaint information failed.");
            });
            return defer.promise;
        },

        //newComplaint: function (user) {
        //    var defer = $q.defer();
        //    var request = $http.post('http://localhost:7080/HuanAnBackend/propertyManagement/createNewComplain',user);
        //    request.success(function (data) {
        //            defer.resolve(data);
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
                defer.resolve(data);
            });
            request.error(function () {
                defer.reject("Get complaint details failed.");
            });
            return defer.promise;
        }
    }
}])