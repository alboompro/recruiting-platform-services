<?php
include_once "auto.php";

class c_products
{
  function show()
  {
    $productsDAO = new m_productsDAO();
    $ret = $productsDAO -> selectAll();

    if($_GET){

      if(isset($_GET['check'])){
        $check = $_GET['check'];
        var_dump($check);
      }
 
      //header("Location:index.php?controller=routes&method=complements");
    }
    require_once "view/products.php";
  }

  // function getProducts()
  // {
  //   if($_POST){
  //     $checked = $_POST["checked"];
  //     $checks = explode(',', $checked);

  //     if(count($checks)>1){
  //       $product1 = new m_products($checks[0]);
  //       $productsDAO1 = new m_productsDAO();
  //       $ret1 = $productsDAO1 -> getOneProduct($product1);

  //       //pegar os produtos principais aqui tambem

  //       $product2 = new m_products($checks[1]);
  //       $productsDAO2 = new m_productsDAO();
  //       $ret2 = $productsDAO2 -> getOneProduct($product2);
  //     }
  //     else {
  //       $product1 = new m_products($checks[0]);
  //       $productsDAO1 = new m_productsDAO();
  //       $ret1 = $productsDAO1 -> getOneProduct($product1);
  //     }

  //     require_once "view/complements.php";
  //   }
  // }
}

?>