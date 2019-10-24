<?php

require_once "../../config/bootstrap.php";
include ('../Model/Item.php');
include ('../Model/Obra.php');
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

$nameObra = $_POST['nome'];
$valor = $_POST['valor'];
$descricao = $_POST['descricao'];
$itensPost = $_POST['itens'];
$obra = new Obra();
$obra->setNome($nameObra);
$obra->setValor($valor);
$obra->setDescricao($descricao);
//$em =  $entityManager->getRepository('Item');

$itens = new ArrayCollection();
foreach ($itensPost as $id) {
    $ite= $entityManager->find('Item',$id);
    $itens->add($ite);
}

$obra->setItens($itens);
//
$entityManager->persist($obra);
$entityManager->flush();


echo "CRIADA OBRA com ID ". $obra->getId();

