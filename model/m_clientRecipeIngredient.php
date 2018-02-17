<?php

class m_clientRecipeIngredient
{
    private $idIngredient;
    private $idClientRecipe;
    
    public function __construct($idIngredient='', $idClientRecipe='')
    {
        $this->idIngredient = $idIngredient;
        $this->idClientRecipe = $idClientRecipe;
    }

    public function getIdIngredient()
    {
        return $this->idIngredient;
    }

    public function setIdIngredient($idIngredient)
    {
        $this->idIngredient = $idIngredient;
    }

    public function getIdClientRecipe()
    {
        return $this->idClientRecipe;
    }

    public function setIdClientRecipe($idClientRecipe)
    {
        $this->idClientRecipe = $idClientRecipe;
    }
}