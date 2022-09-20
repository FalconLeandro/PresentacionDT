
// //********MATRIZ MACHINE by Leandroide*************

// //Función para crear matriz:
// function crearMatriz(filas,columnas) {
//     let matriz=new Array(filas);
//     for (let i = 0; i < filas; i++) {
//         matriz[i]=new Array(columnas);
//     }
//     return matriz
// }

// let matrizCreada = crearMatriz(10,10) //<--Acá podés configurar la cantidad de filas y columnas de tu matriz (filas,columnas)

// //Función para llenar matriz (con números enteros positivos):
// function llenarMatriz(matriz,llenadoAleatorio,rango) {
//     let acumulador = 1;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (llenadoAleatorio === true) {
//                 matriz[i][j]=Math.floor(Math.random()*rango)
//             } else {
//                 matriz[i][j]=acumulador++
//             }
//         }
//     }
//     console.table(matriz);
//     return matriz
// }
// let matrizLlena = llenarMatriz(matrizCreada,true,10); //<--Si querés llenado aleatorio pasale true como segundo parametro, y como tercero el rango de números. Ejemplo: llenarMatriz(array,true,10) mostrará tu array (ya definido) relleno con números aleatorios entre 1 y 10

// //Función para sumar los valores de los elementos de tu matriz:
// function sumarElementos(matriz) {
//     let acumulador = 0;
//     for (let i = 0; i < matriz.length; i++) {
//             acumulador += matriz[i].reduce((a,b)=>a+b);
//     }
//     return 'Suma de los valores de todos los elementos: ' + acumulador
// }
// console.log(sumarElementos(matrizLlena)); 


function ordenAlfabetico(lista) {
    lista.sort((a,b) => {
        if (condition) {
            
        } else {
            
        }
    })
}

//     let matriz;
//     let arrColumna=new Array(filas);
//     for (let i = 0; i < filas; i++) {
//         arrColumna[i]=new Array(columnas);
//     }
//     matriz = arrColumna
//     return matriz
// }

// //Función para llenar matriz (con números enteros positivos):
// function llenarMatriz(matriz,llenadoAleatorio,rango) {
//     let acumulador = 1;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (llenadoAleatorio === true) {
//                 matriz[i][j]=Math.floor(Math.random()*rango)
//             } else {
//                 matriz[i][j]=acumulador++
//             }
//         }
//     }
//     console.table(matriz);
//     return matriz
// }

// //Función para sumar los valores de los elementos de tu matriz:
// function sumaElementos(matriz,numFila,numColumna) {
//     let acumulador = 0;
//     let arrDeMax = [];
//     let arrDeMin = [];
//     let sumaXSemana = matriz[numFila].reduce((a,b)=>a+b);
//     let xDia = matriz[numFila][numColumna];

//     for (let i = 0; i < matriz.length; i++) {
//         acumulador += matriz[i].reduce((a,b)=>a+b);
//         arrDeMax.push(Math.max(...matriz[i]));
//         arrDeMin.push(Math.min(...matriz[i]));
//     }
//     return 'Suma de los valores de todos los elementos: ' + acumulador + '\nTotal fila ' + numFila + ' = ' + sumaXSemana +  '\nValor máximo de la matriz: ' + Math.max(...arrDeMax) + '\nValor mínimo de la matriz: ' + Math.min(...arrDeMin) + '\nValor del elemento seleccionado: ' + xDia
// }

// let matrizCreada = crearMatriz(4,7) //<--Acá podés configurar la cantidad de filas y columnas de tu matriz (filas,columnas)
// let matrizLlena = llenarMatriz(matrizCreada,true,130); //<--Si querés llenado aleatorio pasale true como segundo parametro, y como tercero el rango de números. Ejemplo: llenarMatriz(array,true,100) mostrará tu array (ya definido) relleno con números aleatorios entre 1 y 10
// console.log(sumaElementos(matrizLlena,0,0)); //Suma los valores de los elementos de tu matriz,también entrega el valor máximo y el mínimo. Como segundo y tercer parametro se puede ingresar opcionalmente las coordenadas (numFila,numColumna) para conocer el valor contenido en la respectiva posición

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function suma(arr) {
    let acumulador=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] >=10 && arr[i][j] <1000) {
            acumulador += arr[i][j]
            }
        }
    }
    return acumulador
}
console.log(suma(numeros));

