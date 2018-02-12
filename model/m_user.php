<?php

class m_user
{
    private $iduser;
    private $name;
    private $email;
    private $coupon_code;
    
    public function __construct($iduser='',  $name='', $email='',$coupon_code='')
    {
        $this->iduser = $iduser;
        $this->name = $name;
        $this->email = $email;
        $this->coupon_code = $coupon_code;
    }

    public function getIduser()
    {
        return $this->iduser;
    }

    public function setIduser($iduser)
    {
        $this->iduser = $iduser;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getCoupon_code()
    {
        return $this->coupon_code;
    }

    public function setCoupon_code($coupon_code)
    {
        $this->email = $coupon_code;
    }

    


}