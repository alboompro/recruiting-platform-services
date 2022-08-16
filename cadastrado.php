<?php

    if(isset($_POST['submit03']))
    {
        // print_r('Nome: ' . $_POST['nome']);
        // print_r('<br>');
        // print_r('Email: ' . $_POST['email']);
        
        include_once('conecta.php');

        $name = $_POST['name'];
        $email = $_POST['email'];

        $result = mysqli_query($con, "INSERT INTO access (user,email) 
        VALUES ('$name','$email')");

        header('Location: cadastrado.php');
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Coffee - Parabéns!</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(to right, rgb(242, 242, 231), rgb(150, 150, 150));
        }
        div{
            background-color: rgba(0, 0, 0, 0);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 80px;
            border-radius: 15px;
            color: #fff;
        }
        input{
            padding: 15px;
            border: none;
            outline: none;
            font-size: 15px;
        }
        .inputSubmit{
            background-color: #4B3621;
            border: none;
            padding: 15px;
            width: 100%;
            border-radius: 10px;
            color: white;
            font-size: 15px;
        }
        .inputSubmit:hover{
            background-color: #8F5C30;
            cursor: pointer;
        }
        .inputUser{
            background-color: whitesmoke;
            border: none;
            padding: 15px;
            border-radius: 10px;
            color: #8F5C30;
            font-size: 15px;
        }
        .logologin
        {
            width:5%;
            height:auto;
            float:right;
            margin:5px 0;
        }

    </style>
    <img src="images/itscoffeetime.png" class="logologin"/> 
</head>
<body>

    <div style="margin: -30px 0;";>
        <center>
            <img src="images/coffee.svg"/>
            <h1 style="text-align:center;color: #4B3621;"> Smart Coffee </h1>
            <br>
            <h3 style="text-align:center;color: green;"> Cadastro realizado com Sucesso! </h3>
            <br><br>
            <input class="inputSubmit" type="submit" name="submit05" value="Retornar" onclick="location.href='index.php'">
        </center>
    </div>
    
</body>
</html>