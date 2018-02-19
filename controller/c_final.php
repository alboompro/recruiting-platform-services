<?php
include_once "auto.php";

class c_final
{
  function show()
  {

    session_start();
    $id_user = $_SESSION["id"];

    $m_user = new m_user($id_user);
    $m_userDAO = new m_userDAO();
    $user = $m_userDAO -> getOneUserId($m_user);
    require_once "view/final.php";
  }
}