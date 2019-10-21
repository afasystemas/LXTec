<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 20/10/19
 * Time: 09:50
 */
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

//$configuration = Setup::createAnnotationMetadataConfiguration(
//    [__DIR__.'/../Application/Model'],
//    $isDevMode
//);

//$connectionOptions = [
//    'driver' => 'pdo_mysql',
//    'path'   => __DIR__.'/../db/db.mysql', // caminho onde será armazenado o DB.
//    'dbname' => 'lxtecobradb',
//    'user' => 'andrefa',
//    'password' => 'root',
//    'host' => 'localhost',
//];


class DatabseConnect
{

//    private static $instance         = null;
    private        $connection       = array();
//    private static $configuration = Setup::createAnnotationMetadataConfiguration([''],true));
    private static $connectionOptions = [
        'driver' => 'pdo_mysql',
        'path'   => __DIR__.'/../db/db.mysql', // caminho onde será armazenado o DB.
        'dbname' => 'lxtecobradb',
        'user' => 'andrefa',
        'password' => 'root',
        'host' => 'localhost',
    ];


    protected function __construct()
    {
        $this->addConnection();
//        $connec
    }

    protected function addConnection()
    {
//        $this->connection[$connectionName]       = $connection;
//        $this->stmtStack[$connectionName]        = array();
//        $this->transactionStack[$connectionName] = array();
//        $this->connectionName                    = $connectionName;
    }

    public function getConnection()
    {
        return null;
    }

    /**
     * @return DatabaseConnector
     */
    public static function getInstance()
    {
        if (static::$instance === null) {
            static::$instance = new static();
        }

        return static::$instance;
    }

}