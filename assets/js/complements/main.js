
  var checks = document.querySelectorAll('[data-js="checkbox"]');
  var arr_principal = [];
  var arr_pai = [];
  var arr_filhos = [];
  var arr_time = [];
  var arr_bloco = [];
  
  var pais = document.querySelectorAll("[data='pai']");
  var id_pai1 = pais[0].getAttribute('idpai');

  if(pais.length>1){
    var id2_pai2 = pais[1].getAttribute('idpai');
  }
  
  var arr_filhos2 = [];
  var arr_time2 = [];
  var arr_bloco2 = [];


  checks.forEach(function(atual) {
    atual.addEventListener('click',function(event){
      event.preventDefault();
      
      if(atual.className === 'style-checked'){
        atual.classList.remove('style-checked');
      }
      else {
        atual.classList.add('style-checked');
      }
    })
  });

 
  var btnNext = document.querySelector('[data-js="btn-next"]');
  btnNext.addEventListener('click',function(event){
    event.preventDefault();
  
      checks.forEach(function(atual){
        if(atual.className === 'style-checked'){
          var time = atual.getAttribute('time');
          var recipe = atual.getAttribute('recipe');
          var id = atual.id;

          //criando o array principal
          if ( id_pai1 == recipe ) {
            arr_filhos.push(id);
            arr_time.push(time);
          } else if ( id2_pai2 == recipe ) {
            arr_filhos2.push(id);
            arr_time2.push(time);
          }
        }

      })

      arr_bloco.push(arr_filhos);
      arr_bloco.push(arr_time);

      arr_bloco2.push(arr_filhos2);
      arr_bloco2.push(arr_time2);

      arr_principal.push(arr_bloco);
      arr_principal.push(arr_bloco2)

      
      //dividir o array em dois pedidos
      var first_recipe = arr_principal[0];
      first_recipe = first_recipe[0];

      var second_recipe = arr_principal[1];
       second_recipe = second_recipe[0];

      //pegar os tempos
      var time_first = arr_principal[0][1];
      var time_second = arr_principal[1][1];
      var times_complements = time_first.concat(time_second);

  

      //somar os tempos
      var time_main = document.querySelectorAll('[data-js="time-main"]');

      var arr_times_main = Array.prototype.map.call(time_main,function(element){

        return element.textContent.replace("min",'');
      });

      arr_times_main = arr_times_main.concat(times_complements);
      arr_times_main = arr_times_main.map(function(element){
        return element.split(':');
      });

      var seconds = arr_times_main.map(function(element){
        return element.pop();
      });

      var minutes = arr_times_main.map(function(element){
        return element.pop();
      }).map(function(min){
        return min*60;
      });

      var allSeconds = seconds.concat(minutes);
      allSeconds = allSeconds.reduce(function(total,atual){
      return Number(total)+Number(atual);
      });

      var minFinal = parseInt(allSeconds / 60, 10);
      var secFinal = parseInt(allSeconds % 60, 10);
      secFinal = secFinal < 10 ? "0" + secFinal : secFinal;  

    $.ajax({
      url: "index.php?controller=c_complements&method=handleOrder",
      type: "POST",
      data: "recipe1="+id_pai1+"&recipe2="+id2_pai2+"&comp_1="+first_recipe+"&comp_2="+second_recipe+"&secFinal="+secFinal+"&minFinal="+minFinal,
      dataType: "html"
  
    }).done(function(resposta) {
      window.location="index.php?controller=c_final&method=show";
    }).fail(function(jqXHR, textStatus ) {
        console.log("Request failed: " + textStatus);
  
    });

  })