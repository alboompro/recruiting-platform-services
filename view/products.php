<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <script defer src="./assets/fontawesome/on-server/js/fontawesome-all.js"></script>
  <script src="./assets/js/jquery.min.js"></script>
  <title>Products</title>
</head>
<body class="products">
  <div class="products-box">
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
    <?php
       if(count($ret) > 0)
       {
         for($x=0; $x < count($ret); $x++)
         {
          echo"<div class='box-details'>";
            echo"<div class='box-details-img'>";
              echo"<img src='./assets/{$ret[$x]->foto}' alt=''>";
            echo"</div>";
            echo"<div class='box-details-description'>";
              echo"<div class='box-details-description-titles'>";
                echo"<h2 class='box-details-description-titles-name'>{$ret[$x]->nome}</h2>";
                echo"<h3 class='box-details-description-titles-time'><i class='icon far fa-clock'></i>{$ret[$x]->tempo} min</h3>";
              echo"</div>";
              echo"<div class='box-details-description-check'>";
                echo"<label class='style-check'  for='{$ret[$x]->id}'>";
                echo"<input data-js='checkbox' name='check[]' type='checkbox' value='{$ret[$x]->id}' id='{$ret[$x]->id}'>";
              echo"</div>";
            echo"</div>";
          echo"</div>";
          echo"<div class='separator'></div>";
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