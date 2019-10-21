<?php
?>
<html>
<head>
    <script src="/LXTec/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/LXTec/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/LXTec/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="/LXTec/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/LXTec/node_modules/font-awesome-4.7.0/css/font-awesome.min.css">

    <script src="itemCreate.js"></script>
    <link rel="stylesheet" href="item.css">

</head>

<body>

    <div class="container register">
        <div class="card">
            <h5 class="card-header">Cadastro de Item</h5>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="nameItem" class="col-form-label">Nome da Item</label>
                        <input id="nameItem" type="text" class="form-control" placeholder="Nome da Item">
                    </div>
                    <div class="form-group">
                        <label for="quantidadeItem" class="col-form-label">Quantidade</label>
                        <input id="quantidadeItem" type="number" class="form-control" placeholder="Valor">
                    </div>
                    <div class="form-group">
                        <label for="valorItem" class="col-form-label">Valor</label>
                        <input id="valorItem" type="number" class="form-control" placeholder="Valor">
                    </div>
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

                    <div class="form-group table-list-itens" >
                        <table class="table">
                            <thead>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Excluir</th>
                            </thead>
                            <tbody id="list-itens-selected">
                            </tbody>
                        </table>
                    </div>

                    <button type="button" id="saveItem" class="btn btn-primary">Salvar</button>
                </form>
            </div>

        </div>
    </div>
    <div class="toast-mgs">
        <div class="alert alert-success"><span class="mgs-toast"></span></div>
    </div>
</body>
</html>