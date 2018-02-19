<?php
include_once "auto.php";

class c_products
{
  function show()
  {
    $ret = $this -> allProducts();

    require_once "view/products.php";
  }

  function allProducts(){
    $productsDAO = new m_productsDAO();
    return $productsDAO -> selectAll();
  }
}

?>