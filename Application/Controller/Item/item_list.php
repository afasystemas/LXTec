<?php

require("../../../config/bootstrap.php");
include ("../../Model/Item.php");
	header ('Content-type: text/html; charset=UTF-8');
//$em = $entityManager->getRepository('Item');
//$itens = $em->findAll();
//header("Content-type: text/html;charset=utf-8");
$conn =$entityManager->getConnection();
if(isset($_GET['page'])){
	$vp = (int) $_GET['page'];
	$page = ($vp - 1)* 5;
	
}
else {
	$page = 0;
}
//$page = (isset($_GET['page']))? ($_GET['page'] - 1)* 5: 0;

$sql = 'SELECT * FROM item limit 5 offset '.$page;
$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
//var_dump($stmt->fetchAll());

$itens = array();

foreach ($result as $obj){
	   
    $item =array(
        "id"=>($obj['id']),
        "nome"=> utf8_decode($obj['nome']),
        "quantidade"=> $obj['quantidade'],
        "valorUnitario"=> $obj['valorUnitario'],
		);
    array_push($itens, $item);
}


echo json_encode($itens);
?>

