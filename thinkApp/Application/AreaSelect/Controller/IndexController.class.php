<?php
namespace AreaSelect\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $citys = M('province');
        $data = $citys->select();
        print_r($data);
        $this->display();
    }
    //获取�?有省�?
    public function getProvince(){
        $city = M('Province');
        $data = $city->select();
        $this->ajaxReturn($data);
    }
    //根据省份获取城市
    public function getCity($id){// /getCity?id=11 or /getCity/id/11
        $city = M('City');
        $data = $city->where('provinceId='.$id)->select();
        $this->ajaxReturn($data);
    }
    //根据城市获取地区
    public function getZone($id){
        $zone = M('Zone');
        $data = $zone->where('cityId='.$id)->select();
        $this->ajaxReturn($data);
    }


}