<?php
	
	use Doctrine\ORM\EntityManagerInterface;
	require "../../../config/bootstrap.php";
	include ("../../Model/Obra.php");
	$response = [];
	if(isset($_POST['idObra'])){
		$id = $_POST['idObra'];
		$obra = $entityManager->find('Obra', $id);
		$result = $entityManager->remove($obra);
		$entityManager->flush();
		
		$response = [
			"success"=> true,
			"mgs"=> "Excluido com Sucesso",
		];
	}
	else{
		$response = [
			"success"=> false,
			"mgs"=> "Parametro necessário",
		];
	}
	echo json_encode($response);

