//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.getElementById('tarjeta');
tarjeta.setAttribute('class','card');

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let imagen = document.getElementById('logo');
imagen.setAttribute('src','https://www.youtube.com/img/desktop/yt_1200.png');

//3- Quitarle al titulo la clase que le está dando un formato feo
let tituloFeo = document.querySelector('h1');
tituloFeo.removeAttribute('class')

//4- Chequear si el link a youtube posee o no el atributo href
let linkCheck = document.getElementById('link_youtube');
let a = linkCheck.hasAttribute('href');
console.log(a);

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let link = document.querySelector('#link_wikipedia');
let b = link.getAttribute('href');
console.log(b);
