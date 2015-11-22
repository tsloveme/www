<?php
return array(
    'DB_TYPE'   => 'sqlite', // 数据库类型
    'SHOW_PAGE_TRACE' => true,//页面trace
    //'DB_HOST'   => 'localhost', // 服务器地址
    //'DB_NAME'   => 'D:\ts.db', // 数据库名
    'DB_NAME'   => getcwd().'\Application\AreaSelect\Conf\province_city_zone.db', //刚路径仅适用于windows,linux可能要重新配置，数据库名
    //'DB_USER'   => 'root', // 用户名
    //'DB_PWD'    => '123123', // 密码
    //'DB_PORT'   => 3306, // 端口
    'DB_PREFIX' => 't_', // 数据库表前缀
    //'URL_MODEL' => 1 ,
    'TMPL_FILE_DEPR'=> '_' //模板目录简化配置
);