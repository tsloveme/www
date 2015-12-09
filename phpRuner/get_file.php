<?php
$fileName = $_REQUEST['file'];
require('lib/ReadFile.php');
$file =  new ReadFile($fileName);
echo $file->exportsResult();
