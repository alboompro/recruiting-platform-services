<?php
	class m_clientRecipe
	{
	    private $idclientRecipe;
	    private $recipeId;
	    private $clientId;
	    
	    public function __construct($idclientRecipe='',  $recipeId='', $clientId='')
	    {
	        $this->idclientRecipe = $idclientRecipe;
	        $this->recipeId = $recipeId;
	        $this->clientId = $clientId;
	    }

		public function getIdclientrecipe()
	    {
	        return $this->idclientRecipe;
	    }

	    public function setIdclientRecipe($idclientRecipe)
	    {
	        $this->idclientRecipe = $idClientRecipe;
	    }

	    public function getRecipeId()
	    {
	        return $this->recipeId;
	    }

	    public function setRecipeId($recipeId)
	    {
	        $this->recipeId = $recipeId;
	    }

	   	public function getClientId()
	    {
	        return $this->clientId;
	    }

	    public function setClientId($clientId)
	    {
	        $this->clientId = $clientId;
	    }

	}
?>