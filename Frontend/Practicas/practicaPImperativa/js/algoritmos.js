//  1)
//  * Escribir un programa que muestre por consola
//  * los números del 1 al 100, sustituyendo los
//  * múltiplos de 3 por la palabra “fizz”,
//  * los múltiplos de 5 por “buzz” y los múltiplos
//  * de ambos, es decir, los múltiplos de 3 y 5
//  * (o de 15), por la palabra “fizzbuzz”.

// // function fizzBuzz() {
// //     for (let i = 1; i <= 100; i++) {
// //         if (i%3 == 0 && i%5 == 0) {
// //             console.log('fizzbuzz');
// //         }else if (i%3 == 0) {
// //             console.log('fizz');
// //         }else if (i%5 == 0){
// //             console.log('buzz');
// //         }else{
// //             console.log(i);
// //         }
        
// //     }
// // }
// // console.log(fizzBuzz());

// // 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// // función deberá de mostrar por consola el valor del elemento según el
// // índice dado. Por ejemplo, dada la siguiente array e índice, la función
// // imprimirá '6'. let array =
// // [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// // Visiten este sandbox para escribir su código.
// // https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js

// // let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// // var index = 1;

// // function mostrarValor(indice) {
// //      console.log(array[indice]);
// // };
// // mostrarValor(index);

// // 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// // de días de ese mes —suponiendo que no es un año bisiesto—.
// // https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js

// // function diasDelMes(mes) {
// // 	let arr = [31,28,31,30,31,30,31,31,30,31,30,31]
// // 	return arr[mes-1];
// // }

// // // E invocala:
// // console.log(diasDelMes(2));

// /**
//  * Escribir una función de JavaScript que invierta
//  * un número. Por ejemplo, si x = 32443,
//  * la salida debería ser 34423.
//  */
// // function invertir(num) {
// //     let str = num.toString();
// //     arrayInvertido =[];
// //     for (let i = str.length; i>=0; i--) {
// //         arrayInvertido.push(str[i])
// //     }
// //     return parseInt(arrayInvertido.join(''));
// // }
// // console.log(invertir(32443));

// // 5) Escribir una función que reciba una array y solo imprima los valores que
// // se repiten. Por ejemplo, dada la siguiente array e índice, la función
// // imprimirá '6,23,33,100'.
// let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// // El método sort() puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.
// function mostrarValor(arr,indice) {
//      console.log(array[indice]);
// };
// mostrarValor(array,index);

// // Si el resultado es negativo, a se ordena antes que b.
// // Si el resultado es positivo, b se ordena antes de a.
// // Si el resultado es 0, nada cambia.

// // Si queremos ordenar los números en orden descendente, esta vez necesitamos restar el segundo parámetro (b) del primero (a)

// function numRepetidos(arr) {
//     arr.sort(function(a, b){return a - b});
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i+1]) {
//             console.log(arr[i]);
//         }
//     }
// }
// numRepetidos(array);

// //BUBLE SORT:
// console.log(invertir(245278));

// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'.
// let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// let numeros = [6,5,1,2,4,3,8,7];

// for(let i=0; i<numeros.length; i++) {
//     for (let j = 0; j < numeros.length; j++) {
//         if (numeros[j]>numeros[j+1]) {
//             let temp=numeros[j];
//             numeros[j]=numeros[j+1];
//             numeros[j+1]=temp;

//         } 
//     }
// }
// console.log(numeros);

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length-1; j++) {
        if (personas[j].estatura > personas[j+1].estatura) {
            let temp = personas[j].estatura;
            personas[j].estatura=personas[j+1].estatura;
            personas[j+1].estatura=temp;
        }
        
    }
}
console.log(personas);

/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let participantes = [
    {
        nombre:'Leandro',
        edad:35,
        likes:30
    },
    {
        nombre:'Micamamor',
        edad:29,
        likes:70
    },
    {
        nombre:'Lenu',
        edad:2,
        likes:50
    },
    {
        nombre:'Chichiloka',
        edad:3,
        likes:42
    }
]

for (let i = 0; i < participantes.length; i++) {
    for (let j = 0; j < participantes.length-1; j++) {
        if (participantes[j].likes < participantes[j+1].likes) {
            let temp = participantes[j];
            participantes[j]=participantes[j+1];
            participantes[j+1]=temp;
        }
    }
}
console.log(participantes);

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

// function numRepetidos(arr) {
//     arr.sort(function(a, b){return a - b});
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i+1]) {
//             console.log(arr[i]);
//         }
//     }
// }
// numRepetidos(array);
