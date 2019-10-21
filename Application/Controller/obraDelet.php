<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 17/10/19
 * Time: 18:55
 */

require_once "../../config/bootstrap.php";


$obra = $entityManager->find('Obra', 3);

$result = $entityManager->remove($obra);


$entityManager->flush();
echo 'Excluido com sucesso';

