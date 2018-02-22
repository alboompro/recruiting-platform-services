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

          function selectOne($product){
            $sql = "SELECT r.id,r.name 'nome', SEC_TO_TIME(SUM(i.preparation_time)) 'tempo', r.photo 'foto' 
                    FROM recipe_ingredients ri
                    INNER JOIN ingredients i ON(ri.ingredient_id = i.id)
                    INNER JOIN recipes r ON (r.id = ri.recipe_id)
                    WHERE r.id = (?)
                    GROUP BY r.name
                 ";
            try
            {
                $stmt = $this->db->prepare($sql);
                $stmt->bindValue(1, $product->getIdproducts());
                $ret = $stmt->execute();
                $this->db = null;
                if(!$ret)
                {
                    die("Erro buscar produto");
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
      
        //   function getOneProduct($product){
        //       $sql = "SELECT r.name 'principal', i.name 'complemento',r.id 'id_principal', i.id 'id_complemento' , i.photo 'foto',SEC_TO_TIME(i.preparation_time) 'tempo_complemento'
        //                 FROM complements c
        //                 INNER JOIN ingredients i ON (i.id = c.ingredient_id)
        //                 INNER JOIN recipes r ON (r.id = c.recipe_id)
        //                 WHERE r.id = (?)
        //             ";
        //       try
        //       {
        //           $stmt = $this->db->prepare($sql);
        //           $stmt->bindValue(1, $product->getIdproducts());
        //           $ret = $stmt->execute();
        //           $this->db = null;
        //           if(!$ret)
        //           {
        //               die("Erro buscar produto");
        //           }
        //           else 
        //           {
        //             return $ret = $stmt->fetchAll(PDO::FETCH_OBJ);                
        //           }
        //       }
        //       catch (PDOException $e)
        //       {
        //           die ($e->getMessage());
        //       }
      
        //   }
    }

    