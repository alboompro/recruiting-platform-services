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
		require_once "controller/routes.php";
		$routes = new routes();
		$routes->start();
	}
?>