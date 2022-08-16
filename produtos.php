<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Coffee - Produtos</title>
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
        .logologin{
            width:5%;
            height:auto;
            float:right;
            margin:5px 0;
        }
        .scoffee{
            display: inline-block;
            font-size: x-large;
        }
        .scafeduplo{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -130px;
        }
        .scafexpres{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -102px;
        }
        .scafmoch{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -162px;
        }
        .scafame{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -128px;
        }
        .scafcap{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -130px;
        }
        .scafeduploclock{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px 0px 0px -143px;
        }
        .sc_coffee{
            width: 20%;
            height: auto;
            margin: -25px 0;
            padding: 5px;
        }
        .sc_cafe_duplo{
            width: 20%;
            height: auto;
            margin: -30px 0px 0px 11px;
            padding: 35px;
            float: left;
        }
        .sc_cafe_expresso{
            width: 20%;
            height: auto;
            margin: -30px 0px 0px 11px;
            padding: 35px;
            float: left;
        }
        .hr01{
            width: 100%;
            margin: 0px 0px 0px 0px;
        }

        /*---------------Checkbox Custom---------------*/

        .container{
            width: 960px;
            margin: -268px 110px;
            padding-top: 10%;
        }
        .container02{
            width: 960px;
            margin: -128px 110px;
            padding-top: 10%;
        }
        .container03{
            width: 960px;
            margin: 12px 110px;
            padding-top: 10%;
        }
        .container04{
            width: 960px;
            margin: 152px 110px;
            padding-top: 10%;
        }
        .container05{
            width: 960px;
            margin: 292px 110px;
            padding-top: 10%;
        }
        .switch{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .switch .switch-wrapper{
            display: inline-block;
            width: 60px;
            height: 34px;
        }
        .switch .switch-wrapper .switch-button{
            position: absolute;
            top: 60px;
            left: 80px;
            right: 70px;
            bottom: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 40px;
            background-color: #B8860B;
        }
        .switch .switch-wrapper input{
            opacity: 0;
            width: 0;
            height: 0;
        }
        .switch .switch-wrapper .switch-button::before{
            content: "";
            width: 26px;
            height: 26px;
            position: absolute;
            left: 4px;
            bottom: 4px;
            border-radius: 50%;
            transition: .4s all ease;
            background-color: aliceblue;
        }
        .switch .switch-wrapper input:checked + .switch-button{
            background-color: #58A721;
        }
        .switch .switch-wrapper input:checked + .switch-button::before{
            transform: translateX(36px);
        }
        /*---------------Checkbox Custom Complement---------------*/

    </style>
    <img src="images/itscoffeetime.png" class="logologin"/> 
</head>
<body>

    <div style="margin: -10px 0;";>
        <center>
            <form action="complementos.php" method="POST">
                <img src="images/coffee.svg" class="sc_coffee"/> 
                <h1 class="scoffee" style="text-align:center;color: #4B3621;"> Smart Coffee </h1>
                <hr>
                <br>
                <img src="images/cafe-duplo.svg" name="cd" class="sc_cafe_duplo"/>
                <div class="container">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Café Duplo"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h4 class="scafeduplo" style="text-align:center;color: #5C4031;"> Café Duplo </h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 0:45 min</h5>
                <hr class="hr01">
                <br><br>
                <img src="images/coffee.svg" name="ce" class="sc_cafe_expresso"/>
                <div class="container02">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Café Expresso" checked/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h4 class="scafexpres" style="text-align:center;color: #5C4031;"> Café Expresso</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 0:45 min</h5>
                <hr class="hr01">
                <br><br>
                <img src="images/mocha.svg" name="mc" class="sc_cafe_expresso"/>
                <div class="container03">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Mocha"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h4 class="scafmoch" style="text-align:center;color: #5C4031;"> Mocha</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 2:30 min</h5>
                <hr class="hr01">
                <br><br>
                <img src="images/cafe-americano.svg" name="ca" class="sc_cafe_expresso"/>
                <div class="container04">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Americano" checked/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h4 class="scafame" style="text-align:center;color: #5C4031;"> Americano</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 2:30 min</h5>
                <hr class="hr01">
                <br><br>
                <img src="images/cappuccino.svg" name="cc" class="sc_cafe_expresso"/>
                <div class="container05">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Cappuccino"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h4 class="scafcap" style="text-align:center;color: #5C4031;"> Cappuccino</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 2:30 min</h5>
                <hr class="hr01">
                <br><br>
                <input class="inputSubmit" type="submit" name="submit06" value="Continuar" onclick="location.href='Complementos.php'">
            </form>
        </center>
    </div>
</body>
</html>