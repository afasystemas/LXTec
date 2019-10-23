<?php
require_once ('../../Model/Item.php');
require_once ('../../../config/bootstrap.php');
use Doctrine\Common\Collections\ArrayCollection;
	header ('Content-type: text/html; charset=UTF-8');

$idRemove = $_POST['id_remove'];

//$item->setSubitem($subItens);
try{
	$entityManager->remove($entityManager->find('Item', $idRemove));
	$entityManager->flush();
	
	echo json_encode(["success"=> true]);
} catch (Exception $erro){
	echo json_encode(["success"=> false]);
}

