<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 16/10/19
 * Time: 20:22
 */

// Importação do autoload do composer
require_once __DIR__.'/../vendor/autoload.php';
// Importação dos pacotes necessários
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
// Criar uma configuração ORM do Doctrine simples "default" para utilizar Annotations
$isDevMode = true;
$configuration = Setup::createAnnotationMetadataConfiguration(
    [__DIR__.'/../Application/Model'],
    $isDevMode
);
// Configurações do banco de dados
$connectionOptions = [
    'driver' => 'pdo_mysql',
    'path'   => __DIR__.'/../db/db.mysql', // caminho onde será armazenado o DB.
    'dbname' => 'lxtecobradb',
    'user' => 'andrefa',
    'password' => 'root',
    'host' => 'localhost',
];


// Obtemos o Entity Manager
$entityManager = EntityManager::create($connectionOptions, $configuration);




