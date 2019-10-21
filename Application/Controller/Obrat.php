<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;


class Obrat
{

    private $connection = null;

    public function __construct($connect)
    {
        require_once "../../config/bootstrap.php";
        if(isset($connect)){
            $this->$this->connection = $connect;
        }
        else {
            $this->connection = EntityManager::create();
        }
    }

    public function getdatas(){

        return 'funcioncou';
    }

}