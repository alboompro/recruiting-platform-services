<?php
	abstract class conexao
	{
		protected $bd;
		
		function __construct()
		{
			//parametros de conexao: qual é o servidor e nome banco de dados)
			$parm = "mysql:host=localhost;dbname=smart_coffee;charset=utf8";
			$utf = array(
				PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
			);
			try
			{
				$this->db = new PDO($parm, "root", "", $utf);
			}
			catch(Exeption $e)
			{
				die($e->getMessage());
			}
		}//construct
	}//classe
?>








