// Local de sándwiches
// Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes
// eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma
// el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x,
// despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y
// asi sucecivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera:
// Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor
// base diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir
// entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos, es decir true o
// false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total
// de 6 valores booleanos, uno por cada adicional).
// Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el
// sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función
// deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de
// pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá
// retornar el valor numérico del total a pagar del cliente.


 
function totalAPagarr(tipoSandwich,tipoPan,queso,tomate,lechuga,cebolla,mostaza,mayonesa) {
    
    let subTotal=0;
    let total=0;
    let cantAdicionales=0;
if (tipoSandwich === 'pollo') {
    subTotal=150;
} else if (tipoSandwich === 'carne') {
    subTotal=200;c
} else if (tipoSandwich === 'veggie') {
    subTotal=100;
} else {
    console.log('No contamos con el tipo de sandwich seleccionado');
}
if (tipoPan==='blanco') {
    subTotal=subTotal+50;
} else if (tipoPan==='negro') {
    subTotal=subTotal+60;
} else if (tipoPan==='s/gluten') {
    subTotal=subTotal+75;
} else {
    console.log('No contamos con el tipo de pan seleccionado');
}
if (queso=true) {
    subTotal=subTotal+20;
    cantAdicionales++
} else if (tomate=true) {
    subTotal=subTotal+15;
    cantAdicionales++
}else if (lechuga=true) {
    subTotal=subTotal+10;
    cantAdicionales++
}else if (cebolla=true) {
    subTotal=subTotal+15;
    cantAdicionales++
}else if (mostaza=true) {
    subTotal=subTotal+5;
    cantAdicionales++
}else if (mayonesa=true) {
    subTotal=subTotal+5;
    cantAdicionales++
}else{
    console.log('No contamos con el tipo de adicional seleccionado');
}

return (total= subTotal);

}
console.log( totalAPagarr('pollo','blanco',true,false,false,false,true,true) + '. Gracias por su compra!');