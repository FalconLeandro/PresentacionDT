// const nombre = 'Leandro';
// var edad = 35;
// var peso = 85;
// var altura = 1.93;
// var prepaga = false;
// let imc = peso/(altura*altura);

// console.log(nombre +' tiene ' + edad + ' y su índice de masa corporal es de ' + imc)

// function test(x,y){
//     return x*2;
//     console.log(x);
//     return x/2;
// }
// test(10);



/*1. Crear una función que convierta pulgadas en centímetros. Es decir, recibe por
parámetro pulgadas y retorna su equivalente en centímetros.*/
function conversor(numero){
    return numero * 2.54
}
console.log(conversor(1100));


/*2. Crear una función que recibe un string y lo convierte en una URL.
Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.*/

function toUrl(string){
    return 'http://www.' + string + '.com' 
}
console.log(toUrl('leandroide'))

/*3. Crear una función que recibe un string y devuelve la misma frase, pero con
admiración.*/

function admiracion(string){
    return '¡' + string + '!'
}
console.log(admiracion('culo'))

/*4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

function edadPichos(años){
    return años * 7
}
console.log(edadPichos(4))

/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40
horas.*/

function pagoPorHora(sueldo){
    return sueldo/(24*8)
}
console.log(pagoPorHora(98000))
J

/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/

function imcCalc(altura,peso){
    return peso/(altura*altura)
}
console.log(imcCalc(1.93,90))

/* 1. Crear una función que recibe un string en minúscula, lo convierta a
 mayúsculas y lo retorne. Pista: investigá qué hace el método de strings:
 toUpperCase()*/

function toUpper(string){
    return string.toUpperCase() 
}
console.log(toUpper('cacona'))

// 2. Crear una función que recibe un parámetro y devuelve qué tipo de dato
// es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada
// typeof.

function tipoDato(dato){
    return typeof dato
}
console.log(tipoDato('sdfgsdf'))
// 3. Crear una función a la que le pasamos el radio de un círculo y nos
// devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus
// propiedades el número pi.

function circun(radio){
    return 2*Math.PI*radio
}
console.log(circun(5))

console.log(Math.random())

// Definir y crear una función es lo mismo, en este caso, definamos una que muestre en
// la consola un saludo. Luego, para poder ejecutarla, debemos invocarla o llamarla. Que
// sea algo así:
// function saludar() {
// console.log("hola, tanto tiempo sin verte.");
// }
// saludar()

// Muy bien, ahora deberemos modificar la función para que tome por parámetro un
// nombre y salude a esa persona cuando el lenguaje la ejecute.

function saludar(name) {
    console.log('Hola ' + name +', tanto tiempo sin verte.');
}
saludar('Leandro')

// Crear el código JS que exprese los siguientes enunciados:
// 1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
// debe ser mayor a 1,30 m.

function sube(edad,altura) {
    return (edad>=12)&&(altura>=1.3)
}
console.log(sube(15,1.2));

// 2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
// debe usar el flash.

function flash(luz,movimiento) {
    return luz||movimiento
}
console.log(flash(true,true));

// 3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
// parciales, o si obtiene un 4 en el examen final.

function pasa(nota, final) {
    return (nota>=7)||(final>=4)
}
console.log(pasa(7,1));

// MI primer if
// Lograremos con este ejercicio realizar un simple if.

// Declaremos una variable con el nombre dato y asignémosle un valor booleano.

// Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".

let dato=true;
if (dato==true) {
    console.log('es true');
}else{
    console.log('es false');
}
// En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".

let lenguaje='javascript' 
if (lenguaje=='javascript') {
    console.log('lo estoy aprendiendo');
} else {
    console.log('lo aprendere mas tarde');
}
// Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

function pasa(name) {
    
    if (name=='cosme fulanito') {
        return true
    } else {
        return false
    }
    
}
console.log(pasa('cosme fulanitx'));

// Revisá el siguiente código y asegúrate de entenderlo para poder avanzar con el
// ejercicio.
// let edad=20 //(el número es a modo de ejemplo, podes cambiarlo o crear otras
// para tener varias pruebas)
// if(edad<18) {
// console.log("No puede pasar al bar.")
// }
// else if(edad<21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// }
// else{
// console.log("Puede pasar al bar y tomar alcohol.")
// }
// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: No se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
// es impar?".


function pasaCuliao(edad){
        if(edad<18 && edad>0) {
        console.log("No puede pasar al bar.")
        
        }
        else if(edad<21 && edad>0){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
        }
        else if(edad<=0){
            console.log('Error, edad inválida. Por favor ingrese un número válido.')
        }
        else{
        console.log("Puede pasar al bar y tomar alcohol. Felicitaciones por haber alcanzado la mayoria de edad")
        }
        if ((edad%2)!=0 && edad!=0) {
            console.log('sabias que tue edad es impar?');
        }

}
console.log(pasaCuliao(2));

// totalAPagar()
// Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
// litrosConsumidos.
// A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones.
// ● Si el vehículo es “coche”, el precio por litro es de $86,
// ● Si es “moto” ha de ser $70.
// ● Si es “autobús” ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.

function totalAPagar(vehiculo,litrosConsumidos) {
    let precioLitro = 0;
    let total = 0;
    if (vehiculo === 'coche') {
        precioLitro=86;
    } else if (vehiculo === 'moto') {
        precioLitro=70;
    }else if (vehiculo === 'autobus') {
        precioLitro=55;
    }
    subTotal = precioLitro*litrosConsumidos;

    if (litrosConsumidos>=0 && litrosConsumidos<=25) {
        return (subTotal = subTotal + 50);
    } else if(litrosConsumidos>=25){
        return (subTotal = subTotal + 25);
    } 
    
}
let total = totalAPagar('moto',25)
console.log('El total a pagar es: $' + total + '. Gracias por utilizar nuestro servicio.')


