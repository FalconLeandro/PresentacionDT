
var name = prompt("Ingresa tu nombre");

var text = document.createTextNode("Hola " + name);

var p = document.createElement("P");

p.appendChild(text);

document.body.appendChild(p);
