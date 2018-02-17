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

  function handleOrder(){
    if($_POST){

      if($_POST['recipe2'] == 'undefined'){
        $arr_recipes = str_split($_POST['recipe1']);
      }
      else {
        $arr_recipes = array_merge( str_split($_POST['recipe1']),str_split($_POST['recipe2']));
      }

      $complements1 = explode(",",$_POST['comp_1']);
      $complements2 = explode(",",$_POST['comp_2']);

      $total_complements = [];
      array_push($total_complements,$complements1,$complements2);

      session_start();
      $id_user = $_SESSION["id"];

      
      //adicionar na tabela client_recipes
      foreach ($arr_recipes as $id_recipe) {
        $client_recipes = new m_clientRecipe(null,$id_recipe,$id_user);
        $client_recipeDAO = new m_clientRecipeDAO();
        $client_recipeDAO -> insert($client_recipes);
      }

      //pegar id tabela de client_recipes
      $client_recipes1 = new m_clientRecipe(null,null,$id_user);
      $client_recipeDAO1 = new m_clientRecipeDAO();
      $ret = $client_recipeDAO1 -> getIdClientRecipe($client_recipes1);



      foreach ($complements1 as $comp) {
        $client_recipe_ingredient = new m_clientRecipeIngredient($comp, $ret[0]->id);
        $client_recipe_ingredientDAO = new m_clientRecipeIngredientDAO();
        $client_recipe_ingredientDAO -> insert($client_recipe_ingredient);
      }

      if(count($ret)>1){
        foreach ($complements2 as $comp2) {
          $client_recipe_ingredient2 = new m_clientRecipeIngredient($comp2, $ret[1]->id);
          $client_recipe_ingredientDAO2 = new m_clientRecipeIngredientDAO();
          $client_recipe_ingredientDAO2 -> insert($client_recipe_ingredient2);
        }
  
      }
      
      //adicionar na tabela client_recipe_ingredients

    }
  }
}