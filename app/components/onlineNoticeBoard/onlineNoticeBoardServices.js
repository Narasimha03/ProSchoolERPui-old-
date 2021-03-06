angular.module('school_erp')
.factory('NoticeBoardServices',['$http', 'globalServices', function($http, globalServices){
    var NoticeBoardServices = {};

    NoticeBoardServices.getNoticeBoard = function() {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + 'api/noticeboard/'+globalServices.globalValue.school_id
            })
        };

    NoticeBoardServices.setNoticeBoard = function(dataValue) {
            console.log(dataValue);
            return $http({
                method: 'POST',
                url: globalServices.globalValue.baseURL + 'api/noticeboard/'+globalServices.globalValue.school_id,
                data: $.param(dataValue),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
    };


    // NoticeBoardServices.EditNoticeBoard = function(dataValue, message_id){
    //         console.log(dataValue);
    //         return $http({
    //                     method: 'PUT',
    //                     url: globalServices.globalValue.baseURL + 'api/edit_assignments'+ assignment_id,
    //                     data: $.param(dataValue),
    //                     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    //                 })
    //     };

    NoticeBoardServices.DeleteNoticeBoard = function(message_id){
           return $http({
                    method: 'DELETE',
                    url: globalServices.globalValue.baseURL + 'api/delete_notice_board/'+message_id,
                })
      };

       return NoticeBoardServices;
    }]);  