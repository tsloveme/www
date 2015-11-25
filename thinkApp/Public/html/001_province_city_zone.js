/**
 * Created by Window 7 on 2015/11/25.
 */
$(function(){
    //销毁生成的select
    var destroySelect = function(id){
        var parent = $('#'+id).parents('.vselect');
        var parentId = parent.attr('id');
        parent.remove();
        $(parentId+'panel').remove();
    }
    //美化select
    $('#provinceSelect,#citySelect,#zoneSelect').vselect({
        direction:'bottom'
    });
    //省市区ID获取
    var currentProvinceId = 19;
    var currentCityId = 200;
    var currentZoneId = 1739;

    //渲染省份
    function renderProvince(selectId,provinceId){
        var id;
        if(provinceId){
            id = provinceId.toString();
        }
        else{
            id="";
        }
        var htmlStr = "";
        $.ajax({
            url:'/thinkapp/AreaSelect/index/getProvince',
            type:'get',
            success:function(data){
                htmlStr += '<select id="'+ selectId +'">';
                htmlStr += '<option value="">请选择省份</option>';
                for(var i=0; i<data.length; i++){
                    htmlStr+='<option value="' + data[i].provinceid + '">'+ data[i].provincename +'</option>';
                }
                htmlStr += '</select>';
                //销毁已经美化了的
                destroySelect(selectId);
                //拼装select
                $('.provinceWrap').html(htmlStr);
                //设置选中值
                $('#'+selectId).find('option[value="'+id+'"]').attr('selected',true);
                //重新美化美化
                $('#'+selectId).vselect({
                    direction:'bottom'
                });
            }
        });
    }
    renderProvince('provinceSelect',currentProvinceId);

    //渲染城市 cityId:当前select选中的cityId; provinceId:所属省份id
    function renderCity(selectId,provinceId,cityId){
        if(!provinceId){
            return;
        }
        var currentId;
        if(cityId){
            currentId = cityId.toString();
        }
        else{
            id="";
        }
        var htmlStr = "";
        $.ajax({
            url:'/thinkapp/AreaSelect/index/getCity?id='+provinceId,
            type:'get',
            success:function(data){
                htmlStr += '<select id="'+ selectId +'">';
                htmlStr += '<option value="">请选择城市</option>';
                for(var i=0; i<data.length; i++){
                    htmlStr+='<option value="' + data[i].cityid + '">'+ data[i].cityname +'</option>';
                }
                htmlStr += '</select>';
                $('.cityWrap').html(htmlStr);
                $('#'+selectId).find('option[value="'+currentId+'"]').attr('selected',true);
                $('#'+selectId).vselect({
                    direction:'bottom'
                });
            }
        });
    }
    renderCity ('citySelect',currentProvinceId,currentCityId);

    //渲染地区 zoned:当前select选中的zoneId; cityId:所属城市id
    function renderZone(selectId,cityId,zoneId){
        if(!cityId){
            return;
        }
        var currentId;
        if(zoneId){
            currentId = zoneId.toString();
        }
        else{
            id="";
        }
        var htmlStr = "";
        $.ajax({
            url:'/thinkapp/AreaSelect/index/getZone?id='+cityId,
            type:'get',
            success:function(data){
                htmlStr += '<select id="'+ selectId +'">';
                htmlStr += '<option value="">请选择城市</option>';
                for(var i=0; i<data.length; i++){
                    htmlStr+='<option value="' + data[i].zoneid + '">'+ data[i].zonename +'</option>';
                }
                htmlStr += '</select>';
                $('.zoneWrap').html(htmlStr);
                $('#'+selectId).find('option[value="'+currentId+'"]').attr('selected',true);
                $('#'+selectId).vselect({
                    direction:'bottom'
                });
            }
        });
    }
    renderZone ('zoneSelect',currentCityId,currentZoneId);

})