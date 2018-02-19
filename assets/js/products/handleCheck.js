
(function(){

  'use strict';

  var check = document.querySelectorAll('[data-js="checkbox"]');
  var arr   = [];

  function isCheck(atual){
    return atual.className == 'style-checked';
  }

  check.forEach(function(atual){
    atual.addEventListener('click',function(event){
      event.preventDefault();

      if(isCheck(atual)){
        arr = arr.filter(function(elemento){
          return elemento !== atual;
        });
        atual.classList.remove('style-checked');
      }
      else {
        if(arr.length < 2){
          arr.push(atual);
          atual.classList.add('style-checked');
        }
        else {
          var remove = arr.pop();
          remove.classList.remove('style-checked'); 
          atual.classList.add('style-checked');
          arr.push(atual);
        }
      }
    })
  })


})();
