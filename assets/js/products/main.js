
(function(){
  var btnContinue = document.querySelector('[data-js="continue"]');
  var check =       document.querySelectorAll('[data-js="checkbox"]');
  btnContinue.addEventListener('click',handleChecks,false);

  function handleChecks(){
    var checked = [];
    check.forEach(function(element){
      if(isCheck(element))
        checked.push(element.id);
    });
    window.location="index.php?controller=c_complements&method=show&checks="+checked;
  };

  function isCheck(element){
    return element.classList.contains('style-checked');
  };
})()