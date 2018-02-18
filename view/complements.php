
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <!-- <script defer src="./assets/fontawesome/on-server/js/fontawesome-all.js"></script> -->
  <script src="./assets/js/jquery.min.js"></script>
  <title>Complements</title>
</head>
<body class="complements">
  <div class="complements-box">
    <div class="top"> 
      <div class="top-img">
        <img src="./assets/images/coffee.svg" alt="">
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
              <img src="./assets/<?php echo $banco->foto?>" alt="">
            </div>
            <div class="box-details-description">
              <div class="box-details-description-titles">
                  <h2 class="box-details-description-titles-name" data="pai" idpai="<?php echo $banco->id ?>"><?php echo $banco->nome ?></h2>
                  <h3 class="box-details-description-titles-time" data-js="time-main"><i class="icon far fa-clock"></i><?php echo $banco->tempo?>min</h3>
              </div>
            </div>
        </div>
    <?php
          foreach($ret_complements as $dado){?>
            <div class="complements-box-additional">
              <div class="complements-box-additional-side">
                <div class="complements-box-additional-side-img">
                  <img src="./assets/<?php echo $dado->foto?>" alt="">
                </div>
                <div class="complements-box-additional-side-details">
                  <div class="complements-box-additional-side-details-titles">
                      <h2 class="complements-box-additional-side-details-titles-name"><?php echo $dado->complemento?></h2>
                      <h3 class="complements-box-additional-side-details-titles-time"><i class="icon far fa-clock"></i><?php echo $dado->tempo_complemento?> min</h3>
                  </div>
                  <div class="complements-box-additional-side-details-check">
                      <label class="style-check complements"  for="<?php echo $dado->id_complemento ?>">
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
        <a href="products.php"><input class="complements-box-button-red" type="submit" value="VOLTAR"/></a>
        <a href="final.html"><input class="complements-box-button-green" data-js="btn-next" type="submit" value="FINALIZAR"/></a>
    </div>
  </div>
 
  <script src="./assets/js/complements/main.js"></script>
</body>
</html>