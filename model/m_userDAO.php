<?php
	class m_userDAO extends conexao
	{
		function __construct()
		{
			parent:: __construct();
    }

    function insert($user) {
      $sql = "INSERT INTO clients (name,email,coupon_code) VALUES (?,?,?)";
        try
        {
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(1, $user->getName());
            $stmt->bindValue(2, $user->getEmail());
            $stmt->bindValue(3, $user->getCoupon_code());
            $ret = $stmt->execute();
            $this->db = null;
            if(!$ret)
            {
                die("Erro ao inserir cliente");
            }
        }
        catch (PDOException $e)
        {
            die ($e->getMessage());
        }
    }

    function getOneUser($user){
        $sql = "SELECT * 
                FROM clients 
                WHERE email = (?);";
        try
        {
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(1, $user->getEmail());
            $ret = $stmt->execute();
            $this->db = null;
            if(!$ret)
            {
                die("Erro ao buscar usuário");
            }
            else {
                return $ret = $stmt->fetchAll(PDO::FETCH_OBJ);      
            }
        }
        catch (PDOException $e)
        {
            die ($e->getMessage());
        }

    }

  }