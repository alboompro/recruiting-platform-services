var btnContinue = document.querySelector('[data-js="continue"]');
btnContinue.addEventListener('click',handleChecks,false);

function handleChecks(){
  var check = document.querySelectorAll('[data-js="checkbox"]');
  var checked = [];
  check.forEach(function(element){
    if(element.classList.contains('teste')){
      checked.push(element.id);
    }
  })
}