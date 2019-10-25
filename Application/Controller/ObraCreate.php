<?php

require_once "../../config/bootstrap.php";
include ('../Model/Item.php');
include ('../Model/Obra.php');
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

$nameObra = utf8_decode($_POST['nome']);
$valor = $_POST['valor'];
$descricao = utf8_decode($_POST['descricao']);
$obra = new Obra();
$obra->setNome($nameObra);
$obra->setValor($valor);
$obra->setDescricao($descricao);
//$em =  $entityManager->getRepository('Item');

if(isset($_POST['descricao'])){
  $itensPost = $_POST['itens'];
	$itens = new ArrayCollection();
	foreach ($itensPost as $id) {
	    $ite= $entityManager->find('Item',$id);
	    $itens->add($ite);
	}
	$obra->setItens($itens);
}


if($_POST['id'] > 0){
	$obra->setId($_POST['id']);
}

$entityManager->merge($obra);
$entityManager->flush();



echo "CRIADA OBRA com ID ". $obra->getId();

