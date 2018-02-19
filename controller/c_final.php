<?php
include_once "auto.php";

class c_final
{
  function show()
  {
    session_start();
    $id_user = $_SESSION["id"];

    $user = $this -> getUserId($id_user);
    require_once "view/final.php";
  }

  function getUserId($id_user){
    $m_user = new m_user($id_user);
    $m_userDAO = new m_userDAO();
    return $m_userDAO -> getOneUserId($m_user);
  }
}