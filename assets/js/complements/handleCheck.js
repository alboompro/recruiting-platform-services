
(function(){
  'use strict';

  var checks  = document.querySelectorAll('[data-js="checkbox"]');
  
  function isCheck(atual){
    return atual.className === 'style-checked';
  };

  checks.forEach(function(atual) {
    atual.addEventListener('click',function(event){
      event.preventDefault();
      isCheck(atual)? atual.classList.remove('style-checked'):atual.classList.add('style-checked');
    })
  });
})()
