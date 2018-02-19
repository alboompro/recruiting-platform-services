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
      //pegar minutos e segundos
      $secFinal = $_POST["secFinal"];
      $minFinal = $_POST["minFinal"];

      //pegar cafés principais
      if($_POST['recipe2'] == 'undefined'){
        $arr_recipes = str_split($_POST['recipe1']);
      }
      else {
        $arr_recipes = array_merge( str_split($_POST['recipe1']),str_split($_POST['recipe2']));
      }

      //pegar complementos
      $complements1 = explode(",",$_POST['comp_1']);
      $complements2 = explode(",",$_POST['comp_2']);

      //guardar-pegar informações da sessão
      session_start();
      $_SESSION['min'] = $minFinal;
      $_SESSION['sec'] = $secFinal;
      $id_user = $_SESSION["id"];

      //adicionar na tabela client_recipes
      $this->addClientRecipe($arr_recipes,$id_user);

      //pegar id tabela de client_recipes
      $ret = $this -> getIdClientRecipe($id_user);

      
      //inserir na tabela Client_recipe_ingredient
      if(count($complements1)>0){
        $this -> insertClientRecipeIngredient($complements1,$ret[0]->id);
        if(count($ret)>1){
          $this -> insertClientRecipeIngredient($complements2,$ret[1]->id);
        }
      }
      
    }
  }

  function addClientRecipe($recipes,$id_user){
    foreach ($recipes as $id_recipe) {
      $client_recipes = new m_clientRecipe(null,$id_recipe,$id_user);
      $client_recipeDAO = new m_clientRecipeDAO();
      $client_recipeDAO -> insert($client_recipes);
    }
  }

  function getIdClientRecipe($id_user){
    $client_recipes1 = new m_clientRecipe(null,null,$id_user);
    $client_recipeDAO1 = new m_clientRecipeDAO();
    $ret = $client_recipeDAO1 -> getIdClientRecipe($client_recipes1);
    return $ret;
  }

  function insertClientRecipeIngredient($complements,$idClientRecipe){
    foreach ($complements as $comp) {
      $client_recipe_ingredient2 = new m_clientRecipeIngredient($comp, $idClientRecipe);
      $client_recipe_ingredientDAO2 = new m_clientRecipeIngredientDAO();
      $client_recipe_ingredientDAO2 -> insert($client_recipe_ingredient2);
    }
  }
}