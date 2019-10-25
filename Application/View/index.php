<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 17/10/19
 * Time: 17:38
 */
/* AUTOLOAD & BOOTSTRAP */

$usuario = 'André F Alves';


?>

<html>
<head>
    <script src="../../node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="../../node_modules/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<!--        <a class="navbar-brand" href="#">Navbar</a>-->
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active option-menu" id="home-menu">
                    <a class="nav-link" href="#">Home</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obra
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item option-menu" id="obraListView-menu" data-toggle='dropdown-role-name'>Lista</a>
                        <a class="dropdown-item option-menu" id="obraCreateView-menu">Cadastrar</a>
                    </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Item
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item option-menu" id="itemListView-menu" data-toggle='dropdown-role-name'>Lista</a>
                        <a class="dropdown-item option-menu" id="itemCreateView-menu">Cadastrar</a>
                    </div>
                </li>

                <!--                <li class="nav-item option-menu" id="obra-menu">-->
<!--                    <a class="nav-link">Obra</a>-->
<!--                </li>-->
<!--                <li class="nav-item option-menu" id="item-menu">-->
<!--                    <a class="nav-link">Item</a>-->
<!--                </li>-->
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
            </form>
        </div>
    </nav>

    <div class="container content-iframe">
        <iframe id="iframe-main" class="iframe-main" src="Obra/obraListView.php"></iframe>
    <!--        <button id="btn-login" class="btn btn-primary">login</button>-->
    </div>

    <div class="toast-mgs">
        <div class="alert alert-success"><span class="mgs-toast"></span></div>
    </div>

   <div class="toast-mgs-alert">
        <div class="alert alert-danger"><span id="mgs-toast-alert"></span></div>
    </div>

</body>
</html>



