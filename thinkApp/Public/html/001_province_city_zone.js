/**
 * Created by Window 7 on 2015/11/25.
 */
$(function(){
    $('#provinceSelect,#citySelect,#zoneSelect').vselect({
        direction:'bottom'
    });
    //省市区ID获取
    var currentProvinceId = 19;
    var currentCityId = 200;
    var currentZoneId = 1739;

    function renderProvince(pid){
        var id;
        if(pid){
            id=pid.toString();
        }
        else{
            id="";
        }
        var htmlStr='<option value="">请选择省份</option>';
        $.ajax({
            url:'/thinkapp/AreaSelect/index/getProvince',
            type:'get',
            data:{},
            success:function(data){
                for(var i=0; i<data.length; i++){
                    htmlStr+='<option value="' + data[i].provinceid + '">'+ data[i].provincename +'</option>';
                }
                console.log(htmlStr);
            }
        });
    }
    renderProvince();

})