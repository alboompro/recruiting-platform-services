<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Coffee - Complementos</title>
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
            background-color: gray;
            border: none;
            padding: 15px;
            width: 100%;
            border-radius: 10px;
            color: white;
            font-size: 15px;
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
        .scafexpres{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -142px;
        }
        .scafame{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -170px;
        }
        .scafcap{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -130px;
        }
        .scafeduploclock{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px 0px 0px -183px;
        }
        .esc_clock{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px 0px 0px -148px;
        }
        .esc_clock_le{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px 0px 0px -148px;
        }
        .esc_clock_ch{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px 0px 0px -148px;
        }
        .esc_acucar{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 15px 0px 0px -130px;
        }
        .esc_leite{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 5px 0px 0px -132px;
        }
        .esc_chantilly{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -148px;
        }
        .esc_cup{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 10px 0px 0px -148px;
        }
        .esc_coo{
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px 0px 0px -162px;
        }
        .sc_coffee{
            width: 20%;
            height: auto;
            margin: -25px 0;
            padding: 5px;
        }
        .sc_cafe_expresso{
            width: 20%;
            height: auto;
            margin: -30px 0px 0px -25px;
            padding: 35px;
            float: left;
        }
        .cp_acucar{
            width: 15%;
            height: auto;
            margin: -30px 0px 0px -65px;
            padding: 35px;
            float: left;
        }
        .cp_leite{
            width: 15%;
            height: auto;
            margin: -35px 0px 0px -115px;
            padding: 35px;
            float: left;
        }
        .cp_chantilly{
            width: 15%;
            height: auto;
            margin: -20px 0px 0px -115px;
            padding: 35px;
            float: left;
        }
        .hr01{
            width: 100%;
            margin: 0px 0px 0px 0px;
        }

        /*---------------Checkbox Custom---------------*/

        .container01{
            width: 960px;
            margin: -265px 110px;
            padding-top: 10%;
        }
        .container02{
            width: 960px;
            margin: -180px 110px;
            padding-top: 10%;
        }
        .container03{
            width: 960px;
            margin: -93px 110px;
            padding-top: 10%;
        }
        .container04{
            width: 960px;
            margin: 85px 110px;
            padding-top: 10%;
        }
        .container05{
            width: 960px;
            margin: 175px 110px;
            padding-top: 10%;
        }
        .container06{
            width: 960px;
            margin: 265px 110px;
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
            top: 66px;
            left: 90px;
            right: 80px;
            bottom: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 40px;
            background-color: #B8860B; /*#475569*/
        }
        .switch .switch-wrapper input{
            opacity: 0;
            width: 0;
            height: 0;
        }
        .switch .switch-wrapper .switch-button::before{
            content: "";
            width: 20px;
            height: 20px;
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
            transform: translateX(22px);
        }
        /*---------------Checkbox Custom Complement---------------*/

    </style>
    <img src="images/itscoffeetime.png" class="logologin"/> 
</head>
<body>

    <div style="margin: 5px 0;";>
        <center>
            <form action="final.php" method="POST">
                <img src="images/coffee.svg" class="sc_coffee"/> 
                <h1 class="scoffee" style="text-align:center;color: #4B3621;"> Smart Coffee </h1>
                <hr>
                <br>
                <img src="images/coffee.svg" name="ce" class="sc_cafe_expresso"/>
                <h4 class="scafexpres" style="text-align:center;color: #5C4031;"> Café Expresso</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 0:45 min</h5>
                <!--Complemento C.E-->
                <br><br>
                <img src="images/acucar.svg" name="cp" class="cp_acucar"/>
                <div class="container01">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Açucar Ref." checked/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_acucar" style="text-align:center;color: #5C4031;"> Açúcar Ref. </h5>
                <br>
                <h6 class="esc_clock" style="text-align:center;color: #5C4031;"> &#x23F1; 0:30 min</h6>
                <br><br><br>
                <img src="images/leite.svg" name="cp" class="cp_leite"/>
                <div class="container02">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Leite"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_leite" style="text-align:center;color: #5C4031;"> Leite Desn. </h5>
                <br>
                <h6 class="esc_clock_le" style="text-align:center;color: #5C4031;"> &#x23F1; 0:20 min</h6>
                <br><br><br>
                <img src="images/chantilly.svg" name="cp" class="cp_chantilly"/>
                <div class="container03">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Chantilly"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_chantilly" style="text-align:center;color: #5C4031;"> Chantilly </h5>
                <br>
                <h6 class="esc_clock_ch" style="text-align:center;color: #5C4031;"> &#x23F1; 0:55 min</h6>
                <hr class="hr01">
                <br>
                <img src="images/cafe-americano.svg" name="ca" class="sc_cafe_expresso"/>
                <h4 class="scafame" style="text-align:center;color: #5C4031;"> Americano</h4>
                <br>
                <h5 class="scafeduploclock" style="text-align:center;color: #5C4031;"> &#x23F1; 2:30 min</h5>
                <br><br>
                <img src="images/acucar.svg" name="cp" class="cp_acucar"/>
                <div class="container04">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Açucar Ref." checked/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_acucar" style="text-align:center;color: #5C4031;"> Açúcar Ref. </h5>
                <br>
                <h6 class="esc_clock" style="text-align:center;color: #5C4031;"> &#x23F1; 0:30 min</h6>
                <br><br><br>
                <img src="images/cupcake.svg" name="cp" class="cp_leite"/>
                <div class="container05">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Cupcake"/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_cup" style="text-align:center;color: #5C4031;"> Cupcake </h5>
                <br>
                <h6 class="esc_clock_le" style="text-align:center;color: #5C4031;"> &#x23F1; 0:20 min</h6>
                <br><br><br>
                <img src="images/cookie.svg" name="cp" class="cp_chantilly"/>
                <div class="container06">
                    <label class="switch">
                        <div class="switch-wrapper">
                            <input type="checkbox" name="esp[]" value="Cookie" checked/>
                            <span class="switch-button"></span>
                        </div>
                    </label>
                </div>
                <h5 class="esc_coo" style="text-align:center;color: #5C4031;"> Cookie </h5>
                <br>
                <h6 class="esc_clock_ch" style="text-align:center;color: #5C4031;"> &#x23F1; 1:30 min</h6>
                <br><br>
                <input class="inputSubmit_cp" type="submit" name="" value="Adicione complementos ao seu pedido">
            </form>
            <br>
            <input class="inputSubmit" type="submit" name="submit07" value="Finalizar" onclick="location.href='final.php'">
            <hr>
            <input class="inputSubmit" type="submit" name="submit08" value="Retornar" onclick="location.href='produtos.php'">
        </center>
    </div>
</body>
</html>