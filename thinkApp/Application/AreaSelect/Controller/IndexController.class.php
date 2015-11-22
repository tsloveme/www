<?php
namespace AreaSelect\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        //echo(getcwd());
        //print_r(pdo_drivers());
        //echo('--------------');
        //echo(C('DB_NAME'));
        $citys = M('province');
        $data = $citys->select();
        $this->ajaxReturn($data);
    }
}