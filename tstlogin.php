<?php
    session_start();
    // print_r($_REQUEST);
    if(isset($_POST['submit']) && !empty($_POST['name']) && !empty($_POST['email']))
    {
        // Acessa
        include_once('conecta.php');
        $name = $_POST['name'];
        $email = $_POST['email'];

        // print_r('Name: ' . $email);
        // print_r('<br>');
        // print_r('E-mail: ' . $email);

        $sql = "SELECT * FROM access WHERE user = '$name' and email = '$email'";

        $result = $con->query($sql);

        // print_r($sql);
        // print_r($result);

        if(mysqli_num_rows($result) < 1)
        {
            unset($_SESSION['name']);
            unset($_SESSION['email']);
            header('Location: index.php');
        }
        else
        {
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            header('Location: produtos.php');
        }
    }
    else
    {
        // Não acessa
        header('Location: index.php');
    }
?>