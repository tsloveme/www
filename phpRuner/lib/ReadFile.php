<?php
class ReadFile
{
    public $fileDir;
    public function __construct($dirStr){
        $this->fileDir = $dirStr;
    }
    public function exportsResult(){
        if (file_exists($this->fileDir)){
            $content = file_get_contents($this->fileDir);
            return $content;
        }
        else{
            return false;
        }
    }
}