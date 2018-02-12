<?php
	class m_productsDAO extends conexao
	{
		function __construct()
		{
			parent:: __construct();
    }

    function selectALL() {
      $sql = "SELECT r.id,r.name 'nome', SEC_TO_TIME(SUM(i.preparation_time)) 'tempo', r.photo 'foto' 
              FROM recipe_ingredients ri
              INNER JOIN ingredients i ON(ri.ingredient_id = i.id)
              INNER JOIN recipes r ON (r.id = ri.recipe_id)
              GROUP BY r.name
              ";
        try
        {
            $stmt = $this->db->prepare($sql);
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

  }