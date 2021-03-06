<?php
namespace AreaSelect\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $province = M('province');
        $data = $province->select();
        print_r($data);
        $this->display();
    }
    //获取所有省份
    public function getProvince(){
        $city = M('Province');
        $data = $city->select();
        $this->ajaxReturn($data);
    }
    //根据省份获取城市
    //通过url传参数 /getCity?id=11 or /getCity/id/11
    public function getCity($provinceid){
        $city = M('City');
        $data = $city->where('provinceId='.$provinceid)->select();
        $this->ajaxReturn($data);
    }
    //根据城市获取地区
    public function getZone($cityid){
        $zone = M('Zone');
        $data = $zone->where('cityId='.$cityid)->select();
        $this->ajaxReturn($data);
    }


}