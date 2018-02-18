<!-- somo o total de tempo pelo javascript, chamo o ajax e envio esse total, guardo o total na sessao e chamo a pagina final
na pagina final coloco o total em um input invisivel, pego esse input pelo javascript e faço o tempo -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js"></script>
  <script src="https://rawgit.com/mckamey/countdownjs/master/countdown.min.js"></script>
  <script defer src="./assets/fontawesome/on-server/js/fontawesome-all.js"></script>

  <title>Final</title>
</head>
<body class="final">
  <div class="final-box">
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
      <div class="final-box-title">
        <h1>Pedido realizado com sucesso!</h1>
        <input type="hidden" data-js="min" value="<?php  session_start(); echo $_SESSION['min']?>">
        <input type="hidden" data-js="sec" value="<?php echo $_SESSION['sec']?>">
      </div>
      <div class="final-box-countdown">
          <div class="c-container">
              <div class="c-text"></div>
              <svg id="yeah" viewbox="0 0 100 100">
                  <path id="bg" stroke-linecap="round" stroke-width="4" stroke="#cacaca" fill="none" d="M50 2 
                     a 48 48 0 0 1 0 96 
                     a 48 48 0 0 1 0 -96">
                  </path>
                  <path id="progress" stroke-linecap="round" stroke-width="4" stroke="#48D2A0" fill="none" d="M50 2 
                     a 48 48 0 0 1 0 96 
                     a 48 48 0 0 1 0 -96">
                  </path>
              </svg>
          </div>
      </div>
      <div class="final-box-cupon">
        <h2>SOCO9009</h2>
      </div>
      <div class="final-box-button">
          <a href="home.html" class="final-box-button-reload"><img src="./assets/images/reload.svg"></a>
          <input class="final-box-button-print" type="submit" value="IMPRIMIR CUPOM"/>
      </div>
  </div>
  </div>

  <script src="./assets/js/final/main.js"></script>
</body>
</html>