<?php

require("../../../config/bootstrap.php");
include ("../../Model/Item.php");

//$em = $entityManager->getRepository('Item');
//$itens = $em->findAll();

$conn =$entityManager->getConnection();

$sql = 'SELECT * FROM obra limit 5 offset 0';
$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
//var_dump($stmt->fetchAll());

$obras = array();

foreach ($result as $obj){
    $obra =[
            "id"=> $obj['id'],
            "nome"=> $obj['nome'],
            "valor"=> $obj['valor'],
            "descricao"=> $obj['descricao'],
    ];

    array_push($obras, $obra);
}

echo json_encode($obras);

?>

