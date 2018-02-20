<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <script src="./assets/js/jquery.min.js"></script>
  <title>Products</title>
</head>
<body class="products">
  <div class="products-box">
    <div class="top"> 
      <div class="top-img">
          <img src="./assets/images/coffee.svg" alt="Smart Coffe">
      </div>
      <div class="top-description">
          <h1 class="top-description-title">Smart Coffe</h1>
          <p class=top-description-alboom>by Alboom</p>
      </div>
    </div>
    <div class="separator-main"></div>
    <?php 
      if(count($ret) > 0){
        foreach($ret as $dado){ ?>
          <div class='box-details'>
            <div class='box-details-img'>
              <img src='./assets/<?php echo$dado->foto ?>' alt='<?php echo$dado->nome?>'>
            </div>
            <div class='box-details-description'>
              <div class='box-details-description-titles'>
                <h2 class='box-details-description-titles-name'><?php echo$dado->nome?></h2>
                <h3 class='box-details-description-titles-time'><img class='icon-clock' src='./assets/images/circle-time.svg' alt='Relógio'/><?php echo$dado->tempo?> min</h3>
              </div>
              <div class='box-details-description-check'>
                <label class='style-check'  for='<?php echo$dado->id?>'>
                <input data-js='checkbox' name='check[]' type='checkbox' value='<?php echo$dado->id?>' id='<?php echo$dado->id?>'>
              </div>
            </div>
          </div>
          <div class='separator'></div>
      <?php 
        }
      }
      ?>
      <div class="products-box-button">
          <a data-js="continue" ><input type="submit" value="CONTINUAR"/></a>
      </div>
  </div>
  <script src="./assets/js/products/handleCheck.js"></script>
  <script src="./assets/js/products/main.js"></script>
</body>
</html>