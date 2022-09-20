// /*Ejercicios
// 1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.
// https://codesandbox.io/s/mesa-ejercicio-1-bvthk?file=/src/index.js*/

// function decimales() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }

// };
// decimales();

// /*2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np*/

// function salteando() {
//     for (let i = 5; i <= 20; i+=3) {
//             console.log(i);
//     }
// };
// salteando();

// /*3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.
// https://codesandbox.io/s/mesa-21-ejercicio-3-zw962?file=/src/index.js*/

// function sumatoria() {
//     let sum = 0;
//     for (let i = 0; i < 100; i++) {
//         console.log(sum + '+' + (i+1) + '=' +(sum + (i+1)) );
//         sum = sum + (i+1)
//     }
//     return sum;
// };
// console.log(sumatoria());

/*4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
https://codesandbox.io/s/mesa-21-ejercicio-4-x9frm?file=/src/index.js*/

function contadorChar(string) {
    let vocales = [];
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            vocales.push(string[i])
            
        }

    }
    return vocales.length
}
console.log(contadorChar('leandro'));

/*5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.
https://codesandbox.io/s/mesa-21-ejercicio-5-812tw?file=/src/index.js*/

function invertir(lista) {
    listaInvertida = [];
    for (let i = lista.length-1; i >= 0; i--) {
        listaInvertida.push(lista[i])
    }
    return listaInvertida
}
console.log(invertir('hola'));

/*6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
.......
https://codesandbox.io/s/mesa-21-ejercicio-6-x10rx?file=/src/index.js*/

function piramide() {
    let arr = [];
    for (let i = 1; i < 31; i++) {
        for (let j = 0; j <= i-1; j++) {
            arr.push(i) 
        }
        console.log(arr.join('').toString());
        arr=[];
    }
}
piramide();