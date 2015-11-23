<?php
namespace AreaSelect\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $citys = M('province');
        $data = $citys->select();
        //print_r($data);
        $this->display();
    }
    //获取所有省份
    public function getProvince(){
        $city = M('Province');
        $data = $city->select();
        $this->ajaxReturn($data);
    }
    //获取某个省份的所有市
    public function getCity($id){// /getCity?id=11 or /getCity/id/11
        $city = M('City');
        $data = $city->where('cityId='.$id)->select();
        $this->ajaxReturn($data);
    }
    //获取某个市的所有区域
    public function getZone($id){
        $zone = M('Zone');
        $data = $zone->where()->select();
        $this->ajaxReturn($data);
    }


}