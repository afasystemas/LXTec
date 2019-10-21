<?php

require_once "config/bootstrap.php";
include ('../LXTec/Application/Model/Item.php');
include ('../LXTec/Application/Model/Obra.php');
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;



$nameObra = $_POST['nome'];
$valor = $_POST['valor'];
$descricao = $_POST['descricao'];
$obra = new Obra();
$obra->setNome($nameObra);
$obra->setValor($valor);
$obra->setDescricao($descricao);

$em =  $entityManager->getRepository('Item');

$itens = new ArrayCollection();
$itens->add($entityManager->find('Item',1));
$itens->add($entityManager->find('Item',2));
//$itens->add(2);

//foreach ($itens as $ind => $ite){
//    echo json_encode($entityManager->find('Item',1));
//}

$obra->setItens($itens);

$entityManager->persist($obra);
$entityManager->flush();

echo "CRIADA OBRA com ID ".$obra->getId() ;

