<?php
	if ($_GET)
	{
		$controle = $_GET['controller'];
		$metodo = $_GET["method"];
		require_once "controller/" . $controle. ".php";
		$obj = new $controle();
		$obj->$metodo();
	}
	else
	{
		require_once "controller/c_home.php";
		$c_home = new c_home();
		$c_home->login();
	}
?>