<?php
?>
<html>
<head>
    <script src="/LXTec/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/LXTec/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/LXTec/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="/LXTec/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/LXTec/node_modules/font-awesome-4.7.0/css/font-awesome.min.css">

    <script src="obraCreate.js"></script>
    <script src="../utils.js"></script>
    <link rel="stylesheet" href="obra.css">

</head>

<body>

    <div class="container register">
        <div class="card">
            <h5 class="card-header">Cadastro de Obra</h5>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="nameObra" class="col-form-label">Nome da Obra</label>
                        <input id="nameObra" type="text" class="form-control" placeholder="Nome da obra">
                    </div>
                    <div class="form-group">
                        <label for="valorObra" class="col-form-label">Valor</label>
                        <input id="valorObra" type="number" class="form-control" placeholder="Valor">
                    </div>
                    <div class="form-group">
                        <label for="descricaoObra">Descricao</label>
                        <textarea class="form-control" id="descricaoObra" rows="3"></textarea>
                    </div>
<!--                    <div class="form-group">-->
<!--                        <label for="itens-select">Itens</label>-->
<!--                        <select class="form-control" id="itens-select">-->
<!--                        </select>-->
<!--                    </div>-->
                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" id="search-itens" class="form-control" placeholder="Busque os itens">
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div id="itens-select"></div>
                    </div>

                    <div class="form-group table-list-itens" id="table-list-itens">
                        <table class="table">
                            <thead>
                                <th></th>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Excluir</th>
                                <th>Adicionar</th>
                            </thead>
                            <tbody id="list-itens-selected">
                            </tbody>
                        </table>
                    </div>



                    <button type="button" id="saveObra" class="btn btn-primary">Salvar</button>
                </form>
            </div>

        </div>
    </div>
    <div class="toast-mgs">
        <div class="alert alert-success"><span class="mgs-toast"></span></div>
    </div>
</body>
</html>