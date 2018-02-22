<?php
	class m_clientRecipeDAO extends conexao
	{
		function __construct()
		{
            parent:: __construct();
        }

      function insert($clientRecipe){
        $sql = "INSERT INTO client_recipes (recipe_id,client_id) values(?,?)";
        try
        {
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(1, $clientRecipe->getRecipeId());
            $stmt->bindValue(2, $clientRecipe->getClientId());
            $ret = $stmt->execute();
            $this->db = null;
            if(!$ret)
            {
                die("Erro buscar produtos");
            }
            else 
            {
              return $ret = $stmt->fetchAll(PDO::FETCH_OBJ);                
            }
        }
        catch (PDOException $e)
        {
            die ($e->getMessage());
        }
      }

      function getIdClientRecipe($clientRecipe){
        $sql = "SELECT id FROM client_recipes WHERE client_id = ?";
        try
        {
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(1, $clientRecipe->getClientId());
            $ret = $stmt->execute();
            $this->db = null;
            if(!$ret)
            {
                die("Erro buscar id ");
            }
            else 
            {
              return $ret = $stmt->fetchAll(PDO::FETCH_OBJ);                
            }
        }
        catch (PDOException $e)
        {
            die ($e->getMessage());
        }
      }

  }
      