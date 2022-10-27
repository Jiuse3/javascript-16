function apertura() {
    var element = document.getElementById("bottone");
    element.classList.toggle("apertura");
  } 
  

  function apertura() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  let lista = document.querySelectorAll('li');
for (var i = 0; i < lista.length; i++) {
  lista[i].addEventListener('mouseover', function () {
    this.classList.add('selezione');
  });
  lista[i].addEventListener('mouseout', function () {
    this.classList.remove('selezione');
  });
  lista[i].addEventListener('click', function () {
    this.classList.toggle('fatto');
  });
}




