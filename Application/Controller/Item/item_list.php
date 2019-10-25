<?php

require("../../../config/bootstrap.php");
include ("../../Model/Item.php");
	use Doctrine\ORM\Query\ResultSetMapping;
//	header ('Content-type: text/html; charset=UTF-8');
	
	$obraEntity = $entityManager->getRepository('Item');
	$itens = $obraEntity->findAll();
//echo sizeof($obras);
	
	$objects = array();
	foreach ($itens as $item) {
		$item = [
			'id' => $item->getId() ,
			'nome'=> $item->getNome(),
			'quantidade'=> $item->getQuantidade()
		];
		array_push($objects, $item);
	}
	var_dump($objects);
	echo json_encode($objects);
