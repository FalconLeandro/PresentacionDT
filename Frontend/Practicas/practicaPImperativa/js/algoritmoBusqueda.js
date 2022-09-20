/*El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.
Desafío extra: Orden, lugar y números
Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores. Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, pero partiendo de esta lista:*/

// let list = [12,3,5,7,1,22,47,100];

// function ordenar(arr) {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]>arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arrOrdenado = ordenar(list);
// console.log(arrOrdenado);


/*Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:

¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
Podrán realizar este ejercicio en un Code Sandbox o Node. Escoger el ambiente en el que se sientan con más comodidad.*/

// function binarySearch(arr,item) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((low + high)/2);
//         const guess = arr[mid];
//         if (guess === item) {
//             return mid;
//         }
//         if (guess > item) {
//             high = mid - 1;
//         }else{
//             low = mid + 1;
//         }
//     }
//     return null;
// }
// console.log(binarySearch(arrOrdenado,22));

// Ejercicio 1
// Dado un array con los datos de una encuesta realizada sobre los temas musicales
// más populares —lo que se tiene en el array son objetos definidos con el nombre de
// un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
// temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
// cada uno.
// Los votos obtenidos están desordenados.
// Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// a) Resolverlo aplicando búsqueda lineal.
// b) Resolverlo aplicando búsqueda binaria.

const object = [
    {
        tema:'toto',
        likes: 214

    },
    {
        tema:'polola',
        likes:45
    },
    {
        tema:'kaka',
        likes:78
    },
    {
        tema:'pirulo',
        likes:5489
    },
    {
        tema:'campiña',
        likes:2
    }
]

// a) Resolverlo aplicando búsqueda lineal.

function linealSearch(arr,item){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tema === item) {
            return arr[i].likes
        }
    }
    return null;
}
console.log(linealSearch(object,'campiña'));

// b) Resolverlo aplicando búsqueda binaria.

function votosSort(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].votos > array[j+1].votos) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function binarySearch(arr,item) {
    let sortedArray = votosSort(arr);
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        const mid = Math.floor((low+high)/2);
        const guess = sortedArray[mid].tema;
        if (guess === item) {
            return sortedArray[mid].likes;
        } 
        if (guess > item) {
            high = mid -1; 
        } else {
            low = mid + 1;
        }
    }
    return null;
}
console.log(binarySearch(object,'pirulo'));