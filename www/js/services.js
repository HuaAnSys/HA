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
}]);
