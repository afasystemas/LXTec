<?php
require("../../config/bootstrap.php");
include ("../Model/Obra.php");
include ("../Model/Item.php");
use Doctrine\ORM\Query\ResultSetMapping;

$rsm = new ResultSetMapping();

$em = $entityManager->getRepository('Obra');
$obras = $em->findAll();
//
//);


//$em = $entityManager->getRepository('Obra');


//$obras = $q->getResult();
//$obras = $resul->getArrayResult();

//$obras = $em->createQueryBuilder();

$list = array();
foreach ($obras as $obra){

    $obra = [
        'id'=> $obra->getId(),
        'nome'=> utf8_encode($obra->getNome()),
        'valor'=> $obra->getValor(),
        'descricao'=> utf8_encode($obra->getDescricao())
        ];
    array_push($list, $obra);

}

echo json_encode($list);