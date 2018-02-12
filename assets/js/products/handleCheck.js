
(function(){

  'use strict';

  var check = document.querySelectorAll('[data-js="checkbox"]');
  var arr = [];

  check.forEach(function(atual){
    atual.addEventListener('click',function(event){
      event.preventDefault();

      if(atual.className == 'teste'){
        arr = arr.filter(function(elemento){
          return elemento !== atual;
        });
        atual.classList.remove('teste');
      }
      else {
        if(arr.length < 2){
          arr.push(atual);
          atual.classList.add('teste');
        }
        else {
          var remove = arr.pop();
          remove.classList.remove('teste'); 
          atual.classList.add('teste');
          arr.push(atual);
        }
      }
    })
  })


})();
