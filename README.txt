1- Instale o apache
2- Instale o mysql (sudo apt-get install mysql-server)
3- Vá ao arquivo php.ini em "/etc/php/[version]/apache2/php.ini" e
    descomente a seguinte linha ";extension=pdo_mysql.so" mudando para
    "extension=pdo_mysql.so", retirando apenas o ponto e virgula (;)
4- Restart o servidor com os seguines comandos "service apache2 restart"
5- Crie um database com nome de "lxecobradb"
6- Crie no mysql um usuario com senha(password), ou utilize o modelo baseado no arquivo
    "/var/www/html/LXTec/config/bootstrap.php" que contém ja um usuário e senha
    de acesso ao banco de dados
7- Instale o composer com o seguinte comando "curl -sS https://getcomposer.org/installer|php"
8- Verifique se o composer foi instalado com o seguinte comando "php composer.phar"
9- faça os seguintes comandos:
    sudo apt install composer
    composer install
10- para criar o database execute o comando "php vendor/bin/doctrine orm:schema-tool:create"
11 - utilizar o "npm install" para atualizar as dependencias