<?php
	include_once "auto.php";
	class routes
	{
		function start()
		{
			header("Location:index.php?controller=c_home&method=login");
		}
	}
?>