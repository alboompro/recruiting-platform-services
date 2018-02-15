(function(){
  var checks = document.querySelectorAll('[data-js="checkbox"]');

  checks.forEach(function(atual) {
    atual.addEventListener('click',function(event){
      event.preventDefault();
      
      if(atual.className === 'style-checked'){
        atual.classList.remove('style-checked');
      }
      else {
        atual.classList.add('style-checked');
        var id_atual = atual.id;
        //remove ultimo caracter
        id_atual = id_atual.substring(0,(id_atual.length - 1));
        //remove primeiro caracter
        id_atual = id_atual.substring(1);

        //id do atual e do pai dele
        var ids = id_atual.split(',');
      }
    })
  });
})()