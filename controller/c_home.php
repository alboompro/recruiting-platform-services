<?php
include_once "auto.php";

class c_home
{
  function login()
  {
    if(isset($_SESSION['id'])){

    }
    
    if($_POST){       
      $name   = $_POST["name"];
      $email  = $_POST["email"];
      $coupon = $_POST["coupon"];

      print_r($email);
      if($name && $email != ''){ 
        $this -> insertUser($name,$email,$coupon);
      } 

      $user1 = new m_user(null,null,$email,null);
      $m_userDAO1 = new m_userDAO();
      $ret = $m_userDAO1 -> getOneUser($user1);

      session_start();
      $_SESSION["id"] = $ret[0]->id;
    }
    require_once "view/home.php";
  }

  function insertUser($name,$email,$coupon){
    $user = new m_user(null,$name,$email,$coupon);
    $m_userDAO = new m_userDAO();
    $m_userDAO -> insert($user);
  }

}

?>