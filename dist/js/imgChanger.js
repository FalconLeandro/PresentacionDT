var arreglo=['dist/img/about-us1 (1).jpg','dist/img/about-us1 (3).jpg','dist/img/about-us1 (2).jpg']
var i = 0;

document.getElementById('fotoPerfil').addEventListener("click", function( event ) {
    
    document.getElementById('fotoPerfil').src=arreglo[i];
    i++;
    if (i==3) {
      i=0;
    }
    
    }, false);

  