<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 17/10/19
 * Time: 18:43
 */

require_once "../../config/bootstrap.php";


$id = 1;
$newName = 'Supermercado Teles';
$valor= 784.45;
$descricao = 'Reforma externa';

$obra = $entityManager->find('Obra', $id);

if ($obra === null) {
    echo "Product $id does not exist.\n";
    exit(1);
}

$obra->setNome($newName);
$obra->setvalor($valor);
$obra->setDescricao($descricao);

$entityManager->flush();
echo 'Editado com sucesso';

