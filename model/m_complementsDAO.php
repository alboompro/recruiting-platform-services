<?php
	class m_complementsDAO extends conexao
	{
		function __construct()
		{
      parent:: __construct();
    }

      function selectAll(){
        $sql = "SELECT DISTINCT i.name 'complemento', i.id 'id_complemento' , i.photo 'foto',SEC_TO_TIME(i.preparation_time) 'tempo_complemento'
        FROM complements c
        INNER JOIN ingredients i ON (i.id = c.ingredient_id)
        INNER JOIN recipes r ON (r.id = c.recipe_id)
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
      