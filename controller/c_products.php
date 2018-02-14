<?php
include_once "auto.php";

class c_products
{
  function show()
  {
    $productsDAO = new m_productsDAO();
    $ret = $productsDAO -> selectAll();

    // chamada do id_user da sessao
    //session_start();
    //  $id_user = $_SESSION["id"];
    //  var_dump($id_user);

    require_once "view/products.php";
  }
}

?>