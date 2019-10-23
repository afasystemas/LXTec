<?php

require("../../../config/bootstrap.php");
include ("../../Model/Item.php");
	header ('Content-type: text/html; charset=UTF-8');


if(!isset($_GET['nameItem'])){
	 echo 'necessário parametro';
	die();
}

//$page = (isset($_GET['page']))? ($_GET['page'] - 1)* 5: 0;
$nameItem =  "%".$_GET['nameItem']."%";
$sql = "SELECT * FROM item WHERE LOWER (nome) LIKE '".$nameItem."'";
	$conn =$entityManager->getConnection();
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

