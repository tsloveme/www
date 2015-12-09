var app = angular.module('area',[]);
app.controller('IndexController',function($scope,$http){
    $scope.data = {};
    //AJAX获取select数据
    $scope.getData = function(type,parentid,callback){
        var url;
        var queryStr='';
        switch(type){
            case 'province':
                url = '/thinkapp/AreaSelect/index/getProvince';
                break;
            case 'city':
                url = '/thinkapp/AreaSelect/index/getCity';
                queryStr = '?provinceid='+parentid;
                break;
            case 'zone':
                url = '/thinkapp/AreaSelect/index/getZone';
                queryStr = '?cityid='+parentid;
                break;
            default:
                break;
        }
        //AJAX请求
        $http.get(url + queryStr)
            .success(function(data,status){
                $scope.data[type] = data;
                callback && callback(); // <＝>if(callback){callback()}
            });
    }
    $scope.getData('province','',function(){
        $scope.getData('city',$scope.provinceVal,function(){
            $scope.getData('zone',$scope.cityVal);
        });
    });

    $scope.getCitys = function(){
        $scope.getData('city',$scope.provinceVal,function(){
            $scope.cityVal='';
            $scope.zoneVal='';
        });
    }

    $scope.getZones = function(){
        $scope.getData('zone',$scope.cityVal,function(){
            $scope.zoneVal='';
        });
    }
})