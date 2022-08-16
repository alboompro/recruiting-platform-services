<?php
$comp ="LocalHost";
$user = "root";
$pw= "";
$db = "smart_coffee";

$con= mysqli_connect($comp, $user, $pw, $db);

if ($con) 
{
    echo "" . mysqli_connect_error();
}
?>