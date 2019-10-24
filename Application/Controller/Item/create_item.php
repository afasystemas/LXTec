<?php

require_once ('../../Model/Item.php');
require_once ('../../../config/bootstrap.php');
use Doctrine\Common\Collections\ArrayCollection;
	header ('Content-type: text/html; charset=UTF-8');

$nameItem = utf8_decode($_POST['nome']);
$quantidade = $_POST['qtd'];
echo $quantidade;
$valorUnitario = $_POST['valorUnit'];
$item = new Item();
$item->setNome($nameItem);
$item->setQuantidade($quantidade);
$item->setValorUnitario($valorUnitario);

$em =  $entityManager->getRepository('Item');

//$subItens = new ArrayCollection();
//$subItens->add($entityManager->find('Item',4));
//$subItens->add($entityManager->find('Item',5));
//$subItens->add($entityManager->find('Item',6));
//$subItens->add($entityManager->find('Item',7));


//$item->setSubitem($subItens);
try{
	$entityManager->persist($item);
	$entityManager->flush();

    echo json_encode(["success"=> $item->getNome()]);
} catch (Exception $erro){
    echo json_encode(["success"=> false]);
}

