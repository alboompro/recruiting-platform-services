
(function(){

  var checks  = document.querySelectorAll('[data-js="checkbox"]');
  var btnNext = document.querySelector('[data-js="btn-next"]');
  var recipes = document.querySelectorAll("[data-js='recipe']");
  var recipe1 = recipes[0].getAttribute('idrecipe');
  if(recipes.length>1)
    var recipe2 = recipes[1].getAttribute('idrecipe');

  var datas = {
    main:         [],
    complements:  [],
    times:        [],
    order:        [],
    complements2: [],
    times2:       [],
    order2:       []
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

      datas.order.push(datas.complements);
      datas.order.push(datas.times);

      datas.order2.push(datas.complements2);
      datas.order2.push(datas.times2);

      datas.main.push(datas.order);
      datas.main.push(datas.order2);

      //pegar os tempos
      var times_complements = datas.times.concat(datas.times2);

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
      data: "recipe1="+recipe1+"&recipe2="+recipe2+"&comp_1="+datas.complements+"&comp_2="+datas.complements2+"&secFinal="+secFinal+"&minFinal="+minFinal,
      dataType: "html"
  
    }).done(function(resposta) {
      window.location="index.php?controller=c_final&method=show";
    }).fail(function(jqXHR, textStatus ) {
        console.log("Request failed: " + textStatus);
  
    });

  })
})()

 