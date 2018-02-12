<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./assets/css/normalize/normalize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/main.min.css">
  <script src="./assets/js/jquery.min.js"></script>

  <title>Cadastro</title>
</head>
<body class="home">
  <div class="home-box">
    <div class="home-box-img">
      <img src="./assets/images/coffe.svg" alt="Logo Smart Coffe">
    </div>
    <form data-js="form-home" class="home-box-form">
      <div class="home-box-form-name">
        <label>Nome Completo</label>
        <input type="text" data-js="name" required>
      </div>
      <div class="home-box-form-email">
        <label>Email</label>
        <input type="email" data-js="email" required>
      </div>
      <div class="home-box-form-button">
        <a href="products.html"><input type="submit" value="CADASTRAR"/></a>
      </div>
    </form>
  </div>
  <script src="./assets/js/home/main.js"></script>
</body>
</html>