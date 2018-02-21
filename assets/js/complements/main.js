
(function(){

  var checks  = document.querySelectorAll('[data-js="checkbox"]');
  var btnNext = document.querySelector('[data-js="btn-next"]');
  var recipes = document.querySelectorAll("[data-js='recipe']");
  var recipe1 = recipes[0].getAttribute('idrecipe');
  if(recipes.length>1)
    var recipe2 = recipes[1].getAttribute('idrecipe');

  var datas = {
    complements:  [],
    times:        [],
    complements2: [],
    times2:       []
  };

  function isCheck(element){
    return element.className === 'style-checked';
  }

  function beginMainArray(id,time,recipe,recipe1,recipe2){
    if ( recipe1 == recipe ) {
      datas.complements.push(id);
      datas.times.push(time);
    } else if ( recipe2 == recipe ) {
      datas.complements2.push(id);
      datas.times2.push(time);
    }
  }

  function map(arr,operation){
    if(operation === 'replace'){
      return Array.prototype.map.call(arr,function(element){
              return element.textContent.replace("min",'');
            })
    }
    if(operation === 'split'){
      return arr = arr.map(function(element){
                return element.split(':');
              });
    }
    if(operation === 'pop'){
      return arr.map(function(element){
              return element.pop();
            });
    }
    if(operation === 'multiply'){
      return arr.map(function(min){
              return min*60;
            });
    }

  }

  function reduce(arr){
    return arr.reduce(function(total,atual){
            return Number(total)+Number(atual);
          });
  }
 
  btnNext.addEventListener('click',function(event){
    event.preventDefault();
  
      checks.forEach(function(atual){
        if(isCheck(atual)){
          var time   = atual.getAttribute('time');
          var recipe = atual.getAttribute('recipe');
          var id     = atual.id;
          beginMainArray(id,time,recipe,recipe1,recipe2);
        }
      })

      //juntar os tempos
      var times_complements = datas.times.concat(datas.times2);
      var time_main         = document.querySelectorAll('[data-js="time-main"]');

      var arr_times_main = map(time_main,'replace');
      arr_times_main = arr_times_main.concat(times_complements);
      arr_times_main = map(arr_times_main,'split');

      var seconds = map(arr_times_main,'pop');
      var minutes = map(arr_times_main,'pop').map(function(min){return min*60});

      var allSeconds = seconds.concat(minutes);
      allSeconds = reduce(allSeconds);

      var minFinal = parseInt(allSeconds / 60, 10);
      var secFinal = parseInt(allSeconds % 60, 10);
      secFinal = secFinal < 10 ? "0" + secFinal : secFinal;  

    $.ajax({
      url: "index.php?controller=c_complements&method=handleOrder",
      type: "POST",
      data: "recipe1="+recipe1+"&recipe2="+recipe2+"&comp_1="+datas.complements+"&comp_2="+datas.complements2+"&secFinal="+secFinal+"&minFinal="+minFinal,
      dataType: "html"
  
    }).done(function(resposta) {
      window.location="index.php?controller=c_final&method=show";
    }).fail(function(jqXHR, textStatus ) {
      console.log("Request failed: " + textStatus);
  
    });

  })
})()

 