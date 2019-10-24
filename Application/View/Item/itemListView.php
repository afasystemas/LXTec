<?php
	
	require("../../../config/bootstrap.php");
	include("../../Model/Item.php");
	header("Content-Type: text/html; charset=ISO-8859-1;charset=utf-8");
	$em = $entityManager->getRepository('Item');
	$itens = $em->findAll();

?>

<html>
<head>
    <meta charset="utf-8"/>
    <script src="/LXTec/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/LXTec/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/LXTec/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="/LXTec/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/LXTec/node_modules/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/LXTec/node_modules/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css">
    <link rel="stylesheet" href="/LXTec/node_modules/select2-bootstrap4-theme/dist/select2-bootstrap4.css">
    <script src="itemList.js"></script>
    <link rel="stylesheet" href="item.css">

</head>

<body>



    <div class="">
        <?php
		        $tableIni = ' <h3> Lista de items</h3>
		                     <table class="table">
		                         <thead>
		                            <tr>
		                              <th scope="col">#</th>
		                              <th scope="col">Nome</th>
		                              <th scope="col">Quantidade</th>
		                              <th scope="col">Valor</th>
		                              <th scope="col">Ação</th>
		                            </tr>
		                          </thead>
		                          <tbody>';
		        $tableFinal = '  </tbody>
		                        </table> ';
		        $tr = '';
		        foreach ($itens as $item){
	
		            $tr.= '    <tr>
		                              <th scope="row">'.$item->getId().'</th>
		                              <td>'.$item->getNome().'</td>
		                              <td>'.$item->getQuantidade().'</td>
		                              <td>'.$item->getValorUnitario().'</td>
		                              <td>
		                                <table>
		                                    <tbody>
		                                        <tr>
		                                            <td><i class="fa fa-trash"></i></td>
		                                            <td><i class="fa fa-edit"></i></td>
		                                            <td>
		                                                <i class="fa fa-eye itens" onclick="openModal('.$item->getId().')" ></i>
		                                            </td>
		                                        </tr>
		                                    </tbody>
		                                </table>
		                              </td>
		                          </tr>';
		        }
		        echo $tableIni.$tr.$tableFinal;
	
		//        foreach ($itens as $item){
		//
		//            foreach ($item->getItens() as $item){
		//
		//                echo '<p>'.$item->getNome().'</p>';
		//            }
		//
		//        }
		//        ?>
    </div>



<div class="modal" id="modal-delet" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirma a Exlusão</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p id="mgs-modal"></p>
            </div>
            <div class="modal-footer">
                <button type="button" id="" class="btn btn-primary">Exlcuir</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>

