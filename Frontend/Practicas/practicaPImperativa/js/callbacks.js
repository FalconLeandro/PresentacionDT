// Pasar un callback
// Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

// La primera función se llamará doble. Esta recibirá un número y retornará el doble.

// La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

// La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

let doble = num => num*2;
let triple = num => num*3;
let aplicarCallback = (num,callback) => callback(num);
console.log(aplicarCallback(5,triple)); 

// Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
// Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.

let suma = (a,b) => a+b;
let resta = (a,b) => a-b;
let multiplicacion = (a,b) => a*b;
let division = (a,b) => a/b;
let calculadora = (num1,num2,callback) => callback(num1,num2);
console.log(calculadora(2,7,multiplicacion)); 

// Pasar un calback v2
// Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

// Para esto debemos completar la función procesar. Esta recibe dos parámetros:

// 1. El primer parámetro es un array.

// 2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

// La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.
let agregarHttp = (url) => 'http://'+ url;
let procesar = (array,callback) => {
    let array2= [];
    for (let i = 0; i < array.length; i++) {
        array2.push(callback(array[i]))
    }
    return array2
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoString = (urlCompletas) => {
    return urlCompletas.length;
}
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]

