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
    //��ȡ����ʡ��
    public function getProvince(){
        $city = M('Province');
        $data = $city->select();
        $this->ajaxReturn($data);
    }
    //��ȡĳ��ʡ�ݵ�������
    public function getCity($id){// /getCity?id=11 or /getCity/id/11
        $city = M('City');
        $data = $city->where('cityId='.$id)->select();
        $this->ajaxReturn($data);
    }
    //��ȡĳ���е���������
    public function getZone($id){
        $zone = M('Zone');
        $data = $zone->where()->select();
        $this->ajaxReturn($data);
    }


}