<?php

require("../../../config/bootstrap.php");
include ("../../Model/Obra.php");
include ("../../Model/Item.php");

$em = $entityManager->getRepository('Obra');
$obras = $em->findAll();

?>

<html>
<head>
    <script src="/LXTec/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/LXTec/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/LXTec/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="/LXTec/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/LXTec/node_modules/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/LXTec/node_modules/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css">
    <link rel="stylesheet" href="/LXTec/node_modules/select2-bootstrap4-theme/dist/select2-bootstrap4.css">
    <script src="obra.js"></script>
    <link rel="stylesheet" href="obra.css">

</head>

<body>

<!-- Modal -->
<div class="modal fade  bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Itens da Obra</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="modal-itens">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


    <div class="">
        <?php
        $tableIni = ' <h3> Lista de obras</h3>
                     <table class="table">
                         <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nome</th>
                              <th scope="col">Valor</th>
                              <th scope="col">Descrição</th>
                              <th scope="col">Ação</th>
                            </tr>
                          </thead>
                          <tbody>';
        $tableFinal = '  </tbody>
                        </table> ';
        $tr = '';
        foreach ($obras as $obra){

            $tr.= '    <tr>
                              <th scope="row">'.$obra->getId().'</th>
                              <td>'.$obra->getNome().'</td>
                              <td>'.$obra->getValor().'</td>
                              <td>'.$obra->getDescricao().'</td>
                              <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><i class="fa fa-trash"></i></td>    
                                            <td><i class="fa fa-edit"></i></td>    
                                            <td>
                                                <i class="fa fa-eye itens" onclick="openModal('.$obra->getId().')" ></i> 
                                            </td>    
                                        </tr>
                                    </tbody>
                                </table>
                              </td>
                          </tr>';
        }
        echo $tableIni.$tr.$tableFinal;

//        foreach ($obras as $obra){
//
//            foreach ($obra->getItens() as $item){
//
//                echo '<p>'.$item->getNome().'</p>';
//            }
//
//        }
//        ?>
    </div>




</body>
</html>

