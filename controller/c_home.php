<?php
include_once "auto.php";

class c_home
{
  function login()
  {
    if($_POST){       
      $name = $_POST["name"];
      $email= $_POST["email"];
      $coupon = $_POST["coupon"];

      if($name && $email != ''){ 
        $user = new m_user(null,$name,$email,$coupon);
        $m_userDAO = new m_userDAO();
        $m_userDAO -> insert($user);
      } 
    }
    require_once "view/home.php";
  }
}

?>