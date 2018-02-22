
(function(){
  'use strict';
  
  var btnContinue = document.querySelector('[data-js="continue"]');
  var check       = document.querySelectorAll('[data-js="checkbox"]');
  btnContinue.addEventListener('click',handleChecks,false);

  function isCheck(element){
    return element.classList.contains('style-checked');
  };

  function createElementP(){
    var p    = document.createElement('p');
    var text = document.createTextNode('Escolha pelo menos um café para passar para a próxima etapa!')
    p.appendChild(text);
    p.classList.add('alert');
    return p;
  }

  function handleChecks(){
    var checked = [];
    check.forEach(function(element){
      if(isCheck(element))
        checked.push(element.id);
    });

      if(checked == ''){
        var div_separator = document.getElementsByClassName('separator-main');
        div_separator[0].insertAdjacentElement('afterend',createElementP());
      }
      else{
        window.location="index.php?controller=c_complements&method=show&checks="+checked;
      }
    
  };

})()