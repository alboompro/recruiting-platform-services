<?php
include_once "auto.php";

class c_complements
{
  function show()
  {

      if($_GET){
        $checked = $_GET['checks'];
        $checks = explode(',', $checked);

        if(count($checks)>1){
          $product1 = new m_products($checks[0]);
          $productsDAO1 = new m_productsDAO();
          $ret1 = $productsDAO1 -> selectOne($product1);

          $product2 = new m_products($checks[1]);
          $productsDAO2 = new m_productsDAO();
          $ret2 = $productsDAO2 -> selectOne($product2);

          $arr_prod = Array($ret1,$ret2);
        }
        else {
          $product1 = new m_products($checks[0]);
          $productsDAO1 = new m_productsDAO();
          $ret1 = $productsDAO1 -> selectOne($product1);

          $arr_prod = Array($ret1);
        }

        $complements = new m_complementsDAO();
        $ret_complements = $complements -> selectAll();
      }
      require_once "view/complements.php";
  }
}