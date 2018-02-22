
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <link rel="shortcut icon" href="//c.fastcdn.co/u/945855fc/7076173-0-favicon.png" type="image/ico">
  <script src="./assets/js/jquery.min.js"></script>
  <title>Complementos</title>
</head>
<body class="complements">
  <div class="complements-box">
    <div class="top"> 
      <div class="top-img">
        <img src="./assets/images/coffee.svg" alt="Smart ">
      </div>
      <div class="top-description">
        <h1 class="top-description-title">Smart Coffe</h1>
        <p class=top-description-alboom>by Alboom</p>
      </div>
    </div>
    <div class="separator-main"></div>
    <div class="complements-box-title">
      <p>Adicione complementos ao seu pedido</p>
    </div>
    <?php
      foreach($arr_prod as $dado){
        foreach($dado as $banco){?>
          <div class="box-details">
            <div class="box-details-img">
              <img src="./assets/<?php echo $banco->foto?>" alt="<?php echo $banco->nome ?>">
            </div>
            <div class="box-details-description">
              <div class="box-details-description-titles">
                  <h2 class="box-details-description-titles-name" data-js="recipe" idRecipe="<?php echo $banco->id ?>"><?php echo $banco->nome ?></h2>
                  <h3 class="box-details-description-titles-time" data-js="time-main"><img class='icon-clock' src='./assets/images/circle-time.svg' alt='Relógio'/><?php echo $banco->tempo?>min</h3>
              </div>
            </div>
        </div>
    <?php
          foreach($ret_complements as $dado){?>
            <div class="complements-box-additional">
              <div class="complements-box-additional-side">
                <div class="complements-box-additional-side-img">
                  <img src="./assets/<?php echo $dado->foto?>" alt="<?php echo $dado->complemento?>">
                </div>
                <div class="complements-box-additional-side-details">
                  <div class="complements-box-additional-side-details-titles">
                      <h2 class="complements-box-additional-side-details-titles-name"><?php echo $dado->complemento?></h2>
                      <h3 class="complements-box-additional-side-details-titles-time"><img class='icon-clock' src='./assets/images/circle-time.svg' alt='Relógio'/><?php echo $dado->tempo_complemento?> min</h3>
                  </div>
                  <div class="complements-box-additional-side-details-check">
                      <label class="style-check complements">
                      <input type="checkbox" time="<?php echo $dado->tempo_complemento?>"recipe="<?php echo$banco->id?>" data-js="checkbox" id="<?php echo$dado->id_complemento ?>">
                  </div>
                </div>
              </div>
            </div>
    <?php
          }
    ?>
    <div class="separator-complements"></div>
    <?php
        }
      }
    ?>
    <div class="complements-box-button">
        <a href="index.php?controller=c_products&method=show"><input class="complements-box-button-red" type="submit" value="VOLTAR"/></a>
        <a href="final.html"><input class="complements-box-button-green" data-js="btn-next" type="submit" value="FINALIZAR"/></a>
    </div>
  </div>
 
  <script src="./assets/js/complements/min/main.min.js"></script>
  <script src="./assets/js/complements/min/handleCheck.min.js"></script>
</body>
</html>