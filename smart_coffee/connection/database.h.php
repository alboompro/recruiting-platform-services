<?php
	// Atribuindo valores as variáveis 'hostname_db', 'name_db', 'user_db' e 'pass_db'
	$hostname_db = "localhost";
	$name_db = "smart_coffee";
	$user_db = "root";
	$pass_db = "";
	// Abrindo uma conexão e atribuindo a variável 'conn' e verificando se há conexão com o servidor MySQL
	if(!($conn = mysqli_connect($hostname_db, $user_db, $pass_db, $name_db))){
		echo "Erro ao conectar ao MySQL";
		exit;
	}
	// Alterando o banco de dados da conexão
	mysqli_select_db($conn, "smart_coffee");
?>