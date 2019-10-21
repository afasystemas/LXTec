<?php

namespace ObraController;

use Doctrine\ORM\EntityManagerInterface;

/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 17/10/19
 * Time: 16:47
 */
require "../../config/bootstrap.php";

include ("../Model/Obra.php");



$obraEntity = $entityManager->getRepository('Obra');
$obras = $obraEntity->findAll();
//echo sizeof($obras);

    $objects = array();
foreach ($obras as $obra) {
    $item = [
        'nome' => $obra->getNome() ,
        'valor'=> $obra->getValor(),
        'descricao'=> $obra->getDescricao()
    ];
    array_push($objects, $item);
}



echo json_encode($objects);

//class ObraController {
//
//    private $entityManager;
//
//    public function __construct(EntityManager $entityManager){
//        $this->entityManager = $entityManager;
//
//    }
//
//
//    function getALl(){
//        $this->entityManager->getRepository('Obra');
//        return 'aki asdasd ad a ';
//
//    }
//
//
//}