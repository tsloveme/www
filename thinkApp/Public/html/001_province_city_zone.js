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
        var currentId;
        if(provinceId){
            currentId = provinceId.toString();
        }
        else{
            currentId="";
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
                $('#'+selectId).find('option[value="'+currentId+'"]').attr('selected',true);
                //重新美化美化
                $('#'+selectId).vselect({
                    direction:'bottom',
                    //select选中值变化时触发的事件
                    change:function(){
                    provinceChange($('#'+selectId).val());
                    }
                });
            }
        });
    }

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
            currentId="";
        }
        var htmlStr = "";
        $.ajax({
            url:'/thinkapp/AreaSelect/index/getCity?provinceid='+provinceId,
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
                    direction:'bottom',
                    change:function(){
                        cityChange($('#'+selectId).val());
                    }
                });
            }
        });
    }

    //渲染地区 zoned:当前select选中的zoneId; cityId:所属城市id
    function renderZone(selectId,cityId,zoneId){
        var htmlStr = "";
        htmlStr += '<select id="'+ selectId +'">';
        htmlStr += '<option value="">请选地区</option>';
        var currentId;
        if(zoneId){
            currentId = zoneId.toString();
        }
        else{
            currentId="";
        }
        var appendAndRender = function(){
            htmlStr += '</select>';
            $('.zoneWrap').html(htmlStr);
            $('#'+selectId).find('option[value="'+currentId+'"]').attr('selected',true);
            $('#'+selectId).vselect({
                direction:'bottom'
            });
        }
        if(cityId){
            $.ajax({
                url:'/thinkapp/AreaSelect/index/getZone?cityid='+cityId,
                type:'get',
                success:function(data){
                    for(var i=0; i<data.length; i++){
                        htmlStr+='<option value="' + data[i].zoneid + '">'+ data[i].zonename +'</option>';
                    }
                    appendAndRender();
                }
            });
        }
        else{
            appendAndRender();
        }
    }
    //select province 绑定事件
    function provinceChange(id){
        renderCity ('citySelect',id);
        renderZone ('zoneSelect');
    }
     //select city 绑定事件
    function cityChange(id){
        renderZone ('zoneSelect',id);
    }
    //页面加载时初始化select;
    renderProvince('provinceSelect',currentProvinceId);
    renderCity ('citySelect',currentProvinceId,currentCityId);
    renderZone ('zoneSelect',currentCityId,currentZoneId);

})