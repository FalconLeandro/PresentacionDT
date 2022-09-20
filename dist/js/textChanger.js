const hi=`<h2 id="hi">Hola! Somos MiVivienda.com</h2>`;

const p1=`<p>Desarrollamos esta aplicación para dotar de herramientas y de una guía completísima
 a las familias argentinas con el objetivo de construir su casa centralizando todas las necesidades del recorrido</p>`;

const p2=`<p>Nuestra misión: “Disminuir el déficit de vivienda en el planeta y promover su acceso igualitario”</p>`;

const p3=`<p>A continuación algunos de los servicios que ofrecemos! &#128512</p>`;

const texto=document.getElementById('texto');

var arrayText=[p1,p2,p3]
var i = 0;

texto.addEventListener("click", function( event ) {
   
  if (i<=2) {
    texto.innerHTML=arrayText[i];
    i++;
  } else {
    texto.innerHTML=hi;
    window.location.hash = "#portfolio";
    i=0;
  }
  
  
  
  

    // texto.innerHTML=arrayText[i];
    // i++;
    // if (i==3) {
    //   i=0;
    // }
    
}, false);


    
