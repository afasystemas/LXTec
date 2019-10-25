<?php
	
	require("../../config/bootstrap.php");
	if(isset($_GET['idObra'])){
	
		$obra = $entityManager->find('Obra', $_GET['idObra']);
//		$em = $entityManager->getRepository('Obra');
//		$query = $entityManager->createQuery('SELECT o FROM obra o WHERE id = 1');
//		$query->setFetchMode('Obra', 'item', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER);
////		$query->setParameter('id',$_GET['idObra']);
//		$obra = $query->execute();
//		$qb = $em->createQueryBuilder('o')
//		->innerJoin(Item::class, 'item', 'WITH','')
//			->where('i.id = o.itens')->andWhere6('o.id = :obraid')
//			->setParameter('idobra', 1)
//			->getQuery()
//			->getResult();
//
//		$itens = $obra->getItens();
//		var_dump( $qb);
//		echo $obra->getNome();
//		foreach ($itens as $index){
//				echo $itens[$index]->getNome();
//		};
		
//		$itens = $obra->getItens();
		$response = array(
			"success"=> true,
			'obra'=> array(
				'id'=> $obra->getId(),
				'nome'=>utf8_encode($obra->getNome()),
				'valor'=>$obra->getValor(),
				'descricao'=>utf8_encode($obra->getDescricao())
//				'itens'=> array(
//
//				)
			)
		);
	}
	else {
		$response = array(
			"success"=> false
		);
	}

	echo json_encode($response);
	