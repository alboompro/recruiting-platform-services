<?php

class m_products
{
    private $idproducts;
    private $name;
    private $photo;
    
    public function __construct($idproducts='',  $name='', $photo='')
    {
        $this->idproducts = $idproducts;
        $this->name = $name;
        $this->photo = $photo;
    }

    public function getIdproducts()
    {
        return $this->idproducts;
    }

    public function setIdproducts($idproducts)
    {
        $this->idproducts = $idproducts;
    }

    
    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getPhoto()
    {
        return $this->photo;
    }

    public function setPhoto($photo)
    {
        $this->photo = $photo;
    }

}