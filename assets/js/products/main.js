var btnContinue = document.querySelector('[data-js="continue"]');
btnContinue.addEventListener('click',handleChecks,false);

function handleChecks(){
  var check = document.querySelectorAll('[data-js="checkbox"]');
  var checked = [];
  check.forEach(function(element){
    if(element.classList.contains('style-checked')){
      checked.push(element.id);
    }
  })

 window.location="index.php?controller=c_complements&method=show&checks="+checked;


  // $.ajax({
  //   url: "index.php?controller=c_products&method=getProducts",
  //   type: "POST",
  //   data: "checked="+checked,
  //   dataType: "html"

  // }).done(function(resposta) {
  //    $('html').html(resposta);
  // }).fail(function(jqXHR, textStatus ) {
  //     console.log("Request failed: " + textStatus);

  // });


}