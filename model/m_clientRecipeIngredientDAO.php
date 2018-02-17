<?php
	class m_clientRecipeIngredientDAO extends conexao
	{
		function __construct()
		{
            parent:: __construct();
      
    }

    function insert($clientRecipeIngredient){
      var_dump($clientRecipeIngredient);
      $sql = "INSERT INTO client_recipe_ingredients (ingredient_id,client_recipe_id) VALUES(?,?)";
      try
      {
          $stmt = $this->db->prepare($sql);
          $stmt->bindValue(1, $clientRecipeIngredient->getIdIngredient());
          $stmt->bindValue(2, $clientRecipeIngredient->getIdClientRecipe());
          $ret = $stmt->execute();
          $this->db = null;
          if(!$ret)
          {
              die("Erro ao inserir pedido");
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
?>