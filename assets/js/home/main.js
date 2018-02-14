var form = document.querySelector('[data-js="form-home"]');

function code(){
  var codigo='';
  var letras=['W','X','Y','Z','F','B','C','K','G','B'];
  var numeracao = Math.random();
  var string = String(numeracao);
  var string = string.split('.');
  var numeros = string[1].split('');
  for(var i=0;i<3;i++){
    codigo+=numeros[i]+letras[numeros[i]];	
  }
  return codigo;
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  var name = document.querySelector('[data-js="name"]').value;
  var email = document.querySelector('[data-js="email"]').value;
  var coupon = code();

  $.ajax({
    url: "index.php?controller=c_home&method=login",
    type: "POST",
    data: "name="+name+"&email="+email+"&coupon="+coupon,
    dataType: "html"

  }).done(function(resposta) {
    console.log(resposta);
    window.location="index.php?controller=c_products&method=show";
  }).fail(function(jqXHR, textStatus ) {
      console.log("Request failed: " + textStatus);

  });

});




