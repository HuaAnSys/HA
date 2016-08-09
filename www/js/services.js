//var BASE_URL = "http://9.112.87.121:8080/HuanAnBackend/";
//var BASE_URL = "http://192.168.1.33:8080/HuanAnBackend/";
var BASE_URL = "http://9.110.52.31:8080/HuanAnBackend/";

angular.module('starter.services', [])

.factory('DomesticService', ['$http','$q',function($http, $q){
    return {
        getDomesticByStatus: function () {
            //var url = "js/Domestic.json";
            var url = BASE_URL + "housekeepinfo/getHousekeepingInfo";
            var defer =$q.defer();
            var request =$http.get(url);
            //var request = $http.get('js/Domestic.json');
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getDomestic);
            });
            return defer.promise;
        }
    };
}])

.factory('personalInfoService', ['$http','$q',function($http, $q){
    return {
        getHouse: function (userId) {
            var userId = userId;
            //var url = "js/Domestic.json";
            var url = BASE_URL + "myPersonalInfo/getMyProperty/"+userId;
            var defer =$q.defer();
            var request =$http.get(url);
            //var request = $http.get('js/Domestic.json');
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getHouse);
            });
            return defer.promise;
        },

        getPublishTheme: function (userId) {
            var userID = userId;
            var url = BASE_URL + "myPersonalInfo/getMyPostedTopic/" + userID;
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getPublishTheme);
            });
            return defer.promise;
        },

        getJoinTheme: function (userId) {
            var userID = userId;
            var url = BASE_URL + "myPersonalInfo/getMyParticipativeTopic/" + userID;
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getJoinTheme);
            });
            return defer.promise;
        },

        updateNickName: function(userId,nickName){
            var userID = userId;
            var param = {"nickName" : nickName};
            var url = BASE_URL + "user/updateNickName/userId/" + userID;
            var defer =$q.defer();
            var request =$http.post(url,param);
            request.success(function (result) {
                if(result.result=="success"){
                    defer.resolve(result);
                    console.log("success");
                }else{
                    defer.reject(Messages.updateUserInfo);
                    console.log("fail");
                }
            });
            request.error(function () {
                defer.reject(Messages.updateUserInfo);
            });
            return defer.promise;
        }
    };
}])

.factory('shopService', ['$http','$q',function($http, $q){
    return {
        getType : function(){
            var url = BASE_URL + "shoppingmall/getCategory";
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getCategory);
            });
            return defer.promise;
        },

        getShopByType: function (type) {
            console.log(type);
            var defer = $q.defer();

            //if(type=='a'){
            //    var request = $http.get('js/shopType_a.json');
            //}else if(type=='b'){
            //    var request = $http.get('js/shopType_b.json');
            //}else if(type=='c'){
            //    var request = $http.get('js/shopType_d.json');
            //}else if(type=='d'){
            //    var request = $http.get('js/shopType_d.json');
            //}else if(type=='e'){
            //    var request = $http.get('js/shopType_a.json');
            //}else if(type=='f'){
            //    var request = $http.get('js/shopType_b.json');
            //}else if(type=='g'){
            //    var request = $http.get('js/shopType_c.json');
            //}else if(type=='h'){
            //    var request = $http.get('js/shopType_d.json');
            //}else if(type=='i'){
            //    var request = $http.get('js/shopType_a.json');
            //}else if(type=='j'){
            //    var request = $http.get('js/shopType_b.json');
            //}else if(type=='hot'){
            //    var request = $http.get('js/shopTyp_hot.json');
            //}
            var url = BASE_URL + "shoppingmall/getProducts";
            var defer =$q.defer();
            console.log(type);
            var param = {"categoryID": type};
            var request =$http.post(url,param);
            request.success(function (result) {
                console.log(result)
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getShopByType);
            });
            return defer.promise;
        },

        getShopProductDetail: function (productId) {
            console.log(productId);
            var url = BASE_URL + "shoppingmall/getProduct";
            //var request = $http.get('js/ShopProductDetail.json');
            var defer = $q.defer();
            var param = {"productID": productId};
            var request =$http.post(url,param);
            request.success(function (result) {
                console.log(result);
                //defer.resolve(result.data);
                defer.resolve(result[0]);
            });
            request.error(function () {
                defer.reject(Messages.getShopProductDetail);
            });
            return defer.promise;
        },

        getShoppingCar: function (userId) {
            var shoppingcart_userID = userId;
            var url = BASE_URL + "myPersonalInfo/getMyShoppingCart/" + shoppingcart_userID;
            var defer =$q.defer();
            //var request = $http.get('js/shoppingCar.json');
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
                //defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getShoppingCar);
            });
            return defer.promise;
        },

        removeShoppingItem: function (shoppingItem_id) {
            var shoppingItem_id = shoppingItem_id;
            var url = BASE_URL + "shoppingmall/removeProductFromCart/" + shoppingItem_id;
            var defer =$q.defer();
            //var request = $http.get('js/shoppingCar.json');
            var request =$http.delete(url);
            request.success(function (result) {
                if(result.result=="success"){
                    defer.resolve(result);
                    console.log("success");
                }else{
                    defer.reject(Messages.removeShoppingItem);
                    console.log("fail");
                }
            });
            request.error(function () {
                defer.reject(Messages.removeShoppingItem);
            });
            return defer.promise;
        },

        getPaymentOrder: function (userId) {
            var shoppingcart_userID = userId;
            var url = BASE_URL + "myPersonalInfo/getMyPendingOrder/"+ shoppingcart_userID;
            var defer =$q.defer();
            //var request = $http.get('js/shoppingCar.json');
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getPaymentOrder);
            });
            return defer.promise;
        },

        cancelPaymentOrder: function (userId,orderId) {
            var userID = userId;
            var orderID = orderId;
            var url = BASE_URL + "myPersonalInfo/cancelMyPendingOrder/userID/" + userID + "/orderID/" + orderID;
            var defer =$q.defer();
            var request =$http.delete(url);
            request.success(function (result) {
                if(result.result=="success"){
                    defer.resolve(result);
                }else{
                    defer.reject(Messages.cancelPaymentOrder);
                }
            });
            return defer.promise;
        },

        getMyOrder: function (userId) {
            var shoppingcart_userID = userId;
            var url = BASE_URL + "myPersonalInfo/getMyOrder/"+ shoppingcart_userID;
            var defer =$q.defer();
            //var request = $http.get('js/shoppingCar.json');
            var request =$http.get(url);
            request.success(function (result) {
                console.log(result);
                defer.resolve(result);
            });
            request.error(function () {
                defer.reject(Messages.getMyOrder);
            });
            return defer.promise;
        }
    };
}])

//.factory('ShopBannerService', ['$http','$q',function($http, $q){
//  return {
//    getShopBanner: function () {
//      var defer = $q.defer();
//      var request = $http.get('js/shopBanner.json');
//      request.success(function (result) {
//        defer.resolve(result.data);
//      });
//      request.error(function () {
//        defer.reject("Get draft list failed, please try again later.");
//      });
//      return defer.promise;
//    },
//  };
//}])

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
        getAdvAndHot : function(){
            var url = BASE_URL+"shoppingmall/getHotProducts";
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(error){
                defer.reject(Messages.HOMEADVERSFAIL);
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

        getAllCommentsByCommunity : function(bulletinID,userID){
            var url = BASE_URL + "bulletin/getBulletinComments/"+bulletinID+"/"+userID;
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function(data) {
                console.log(data);
                if(data.status=='success'){
                    defer.resolve(data);
                }else{
                    defer.reject(Messages.getCommentByBulletinId);
                }
            });
            request.error(function(error){
                defer.reject(Messages.getCommentByBulletinId);
            });
            return defer.promise;
        },

/*        getLikeNumByCommunity : function(communityId,userID){
            var url = BASE_URL + "bulletin/getBulletinLike/"+communityId+"/"+userID;
            var defer =$q.defer();
            var request =$http.get(url);
            request.success(function(data) {
                if(data.status=='success'){
                    defer.resolve(data);
                }else{
                    defer.reject(Messages.getlikeNumByBulletinId);
                }
            });
            request.error(function(){
                defer.reject(Messages.getlikeNumByBulletinId);
            });
            return defer.promise;
        },*/

        setLikeByCommunity : function(communityId,userId,likeOrNot){
            var url = BASE_URL + "bulletin/setBulletinLike";
            var defer =$q.defer();
            var param = {"bulletinID":communityId,"userID":userId,"likeFlag":likeOrNot};
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
            var request =$http.get(url);
            request.success(function(data) {
                defer.resolve(data);
            });
            request.error(function(error){
                defer.reject(Messages.getAllDiscussionsError);
            });
            return defer.promise;
        },

        getAllCommentsByDiscussion : function(discussionID,userID){
            var url = BASE_URL + "discussionRoom/getDiscussionComments";
            var defer =$q.defer();
            var param = {
                "discussionID":discussionID,
                "userID":userID
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status = data.status;
                if(status == "success"){
                    defer.resolve(data);
                }else{
                    defer.reject("获�?�议事厅评论失败!");
                }
            });
            request.error(function(){
                defer.reject("获�?�议事厅评论失败!");
            });
            return defer.promise;
        },

/*        getLikeNumByDiscussion : function(discussionID){
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
        },*/

        setLikeByDiscussion : function(discussionID,userID,likeFlag){
            var url = BASE_URL + "discussionRoom/setDiscussionLike";
            var defer =$q.defer();
            var param = {
                "discussionID":discussionID,
                "userID":userID,
                "likeFlag":likeFlag
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.result;
                if(status == "success"){
                    defer.resolve(data);
                }else{
                    defer.reject("为议事厅点赞失败!");
                }
            });
            request.error(function(){
                defer.reject("为议事厅点赞失败!");
            });
            return defer.promise;
        },

        addCommentsByDiscussion : function(userID,discussionID,detail){
            var url = BASE_URL + "discussionRoom/setDiscussionComment";
            var defer =$q.defer();
            var param = {
                "discussion_roomID":discussionID,
                "commentDetail":detail,
                "userID":userID
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.result;
                if(status == "success"){
                    defer.resolve(data.result);
                }else{
                    defer.reject("为议事厅增加评论失败�?");
                }
            });
            request.error(function(){
                defer.reject("为议事厅增加评论失败�?");
            });
            return defer.promise;
        },

        getAllActivityAlarm : function(){
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

        getCommentsLikeNumByActivity : function(actityAlarmID,userID){
            var url = BASE_URL + "actityAlarm/getActityAlarmComments";
            var defer =$q.defer();
            var param = {
                "activityID":actityAlarmID,
                "userID":userID
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status = data.status;
                if(status == "success"){
                    defer.resolve(data);
                }else{
                    defer.reject("获�?��?集令评论失败�?");
                }
            });
            request.error(function(){
                defer.reject("获�?��?集令评论失败�?");
            });
            return defer.promise;
        },

/*        getLikeNumByCollection : function(actityAlarmID){
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
        },*/

        setLikeByActivity : function(actityAlarmID,userID,likeFlag){
            var url = BASE_URL + "actityAlarm/setActityAlarmLike";
            var defer =$q.defer();
            var param = {
                "activityAlarmId":actityAlarmID,
                "userID":userID,
                "likeFlag":likeFlag
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.result;
                if(status == "success"){
                    defer.resolve(data);
                }else{
                    defer.reject("为�?集令点赞失败!");
                }
            });
            request.error(function(){
                defer.reject("为�?集令点赞失败!");
            });
            return defer.promise;
        },

        addCommentsByActivity : function(userID,actityAlarmID,detail){
            var url = BASE_URL + "actityAlarm/setActityAlarmComment";
            var defer =$q.defer();
            var param = {
                "activity_alarmID":actityAlarmID,
                "commentDetail":detail,
                "userID":userID
            };
            var request =$http.post(url,param);
            request.success(function(data) {
                var status =data.result;
                if(status == "success"){
                    defer.resolve(data.result);
                }else{
                    defer.reject("为�?集令增加评论失败�?");
                }
            });
            request.error(function(){
                defer.reject("为�?集令增加评论失败�?");
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
            var url = BASE_URL + 'myPersonalInfo/getMyProperty/' + user;
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
        getRelatedRepairs: function (user,site) {
            var defer = $q.defer();
            var url = BASE_URL + 'propertyManagement/getClaimedRepairs';
            var request = $http.post(url,user,site);
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