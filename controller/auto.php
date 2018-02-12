<?php
	function __autoload($classe)
	{
	  require_once "model/{$classe}.php";
	}
		
?>