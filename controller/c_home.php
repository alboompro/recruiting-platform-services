<?php
include_once "auto.php";

class c_home
{
  function login()
  {
    
    if($_POST){       
      $name   = $_POST["name"];
      $email  = $_POST["email"];
      $coupon = $_POST["coupon"];

      if($name && $email != ''){  $this -> insertUser($name,$email,$coupon);} 

      $ret = $this -> getUserByEmail($email);

      session_start();
      $_SESSION["id"] = $ret[0]->id;
    }
    require_once "view/home.php";
  }

  function getUserByEmail($email){
    $user1 = new m_user(null,null,$email,null);
    $m_userDAO1 = new m_userDAO();
    return $m_userDAO1 -> getOneUser($user1);
  }

  function insertUser($name,$email,$coupon){
    $user = new m_user(null,$name,$email,$coupon);
    $m_userDAO = new m_userDAO();
    $m_userDAO -> insert($user);
  }

}

?>