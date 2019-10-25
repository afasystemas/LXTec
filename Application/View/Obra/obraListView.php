<?php

require("../../../config/bootstrap.php");
include ("../../Model/Obra.php");
include ("../../Model/Item.php");


$em = $entityManager->getRepository('obra');
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
    <script src="../utils.js"></script>
    <script src="../index.js"></script>
    <link rel="stylesheet" href="obra.css">
</head>

<body>

<!-- Modal -->
<div class="modal fade  bd-example-modal-lg" id="modalDelet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Deletar Obra</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="modal-Obra">
            
            </div>
            <div class="modal-footer">
                <button type="button" id="btn-cancel" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" id="btn-confirm" class="btn btn-primary" data-dismiss="modal">Deletar</button>
            </div>
        </div>
    </div>
</div>

    <div class="">
        <h3> Lista de obras</h3>
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
            <tbody id="tbody-obras">
            </tbody>
        </table>
    </div>
</body>
</html>

