<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
        .inputSubmit_cp{
            background-color: lightgray;
            border: none;
            padding: 15px;
            width: 100%;
            border-radius: 10px;
            color: #4B3621;
            font-size: 25px;
            border: gray 5px dashed;
            font-weight: 700;
        }
        .button{
            background-color: linear-gradient(to right, rgb(242, 242, 231), rgb(150, 150, 150));
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 80px;
            border-radius: 15px;
            color: #fff;
            width: 13%;
        }
        .box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 200px 0px;
        }
        .box-circle svg{
        
            width: 150px;
            height: 150px;
            position: relative;
        }
        circle{
            width: 150px;
            height: 150px;
            fill: none;
            stroke: black;
            stroke-width: 10;
            transform: translate(5px,5px);
            stroke-dasharray: 440;
            stroke-dashoffset: 440;
        }
        circle:nth-child(1){
            stroke-dashoffset: 0;
            stroke: gray; /*#BAB8B5*/
        }
        circle:nth-child(2){
            stroke: #3DB489;
            stroke-dashoffset: calc(440 - 50);
            /*transition: stroke-dashoffset 0.8s;*/
        }
        .number{
            position: absolute;
            top: 115px;
            left: 120px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #4B3621;
            font-size: x-large;
            font-weight: 700;
        }
        .scoffee{
            display: inline-block;
            font-size: x-large;
        }
        .sc_coffee{
            width: 20%;
            height: auto;
            margin: -25px 0;
            padding: 5px;
        }

        h6{
            position: relative;
            top: 25px;
            color: #4B3621;
        }
        h2{
            position: relative;
            top: 25px;
            color: #4B3621;
            font-weight: 500;
        }
        h3{
            position: relative;
            top: 25px;
            color: #4B3621;
            font-weight: 700;

        }
        .ret{
            width: 12%;
            height: auto;
            margin: 510px 820px;
            padding: 5px;
            left: 0px;
        }
        .logologin
        {
            width:5%;
            height:auto;
            float:right;
            margin:5px 0;
        }

    </style>

    <script src="js/scripts.js" defer></script>

    <img src="images/itscoffeetime.png" class="logologin"/>

</head>
<body> 

    <div style="margin: -200px 0;";>

        <center>
            <img src="images/coffee.svg" class="sc_coffee"/> 
            <h1 class="scoffee" style="text-align:center;color: #4B3621;"> Smart Coffee </h1>
            <hr>
            <h2> Pedido realizado <br> com sucesso! </h2>
        </center>
    
        <div class="box">
            <div class="box-circle">
                <svg>
                    <circle cx = "70" cy="70" r="70"></circle>
                    <circle id="circleProgress" cx = "70" cy="70" r="70"></circle>
                </svg>
            </div>
            <div id="timer" class="number"> </div>
            <center><h6> tempo restante para ficar pronto</h6></center>
        </div>

    </div>

    <div class="button">
        <center>
            <input class="inputSubmit_cp" type="submit" name="" value="SC123456">
            <hr>
            <input class="inputSubmit" type="submit" name="submit07" value="Imprimir Cupom" onclick="location.href=''">
            <hr>
            <input class="inputSubmit" type="submit" name="submit08" value="Retornar" onclick="location.href='index.php'">
        </center>
    </div>

</body>
<!--
<script>
    function go()
    {
        var circle = document.querySelector('#circleProgress');
        var number = document.querySelector('#numberProgress').value;
        document.querySelector('.number').innerHTML = number
        circle.style.strokeDashoffset = 440 - (440 * number) / 100;
    }
    /*
</script>
-->
</html>