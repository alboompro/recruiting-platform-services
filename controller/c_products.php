<?php
include_once "auto.php";

class c_products
{
  function show()
  {
    $productsDAO = new m_productsDAO();
    $ret = $productsDAO -> selectAll();


    require_once "view/products.php";
  }
}

?>