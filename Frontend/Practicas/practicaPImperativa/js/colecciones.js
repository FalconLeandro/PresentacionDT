// Colecciones de películas (y más...)
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// Para esto, deberás:
// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ['star wars','totoro','rocky','pulp fiction','la vida es bella'];

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar
// todas en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().

function toMayusculas(array1) {
    array1[0]=array1[0].toUpperCase();
    array1[1]=array1[1].toUpperCase();
    array1[2]=array1[2].toUpperCase();
    array1[3]=array1[3].toUpperCase();
    array1[4]=array1[4].toUpperCase();

    return array1
}
console.log(toMayusculas(peliculas));


// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
// que crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como
// parámetros, para poder agregar los elementos contenidos en el segundo array
// dentro del primero, y así retornar un solo array con todas las películas como
// sus elementos.
// Importante: las películas animadas también deberían convertirse a
// mayúsculas.

let peliculasInfantiles = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// function mayusculas(array1, array2) {
//     array2[0]=array2[0].toUpperCase();
//     array2[1]=array2[1].toUpperCase();
//     array2[2]=array2[2].toUpperCase();
//     array2[3]=array2[3].toUpperCase();
//     array2[4]=array2[4].toUpperCase();

//     array1.push(array2[0]);
//     array1.push(array2[1]);
//     array1.push(array2[2]);
//     array1.push(array2[3]);
//     array1.push(array2[4]);


//     return array1
// }
// console.log(mayusculas(peliculas,peliculasInfantiles));

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
// del array de películas animadas es un videojuego. Ahora tenés que editar el
// código y modificarlo de manera que puedas eliminar ese último elemento
// antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

function mayusculas(array1, array2) {
    array2[0]=array2[0].toUpperCase();
    array2[1]=array2[1].toUpperCase();
    array2[2]=array2[2].toUpperCase();
    array2[3]=array2[3].toUpperCase();
    array2[4]=array2[4].toUpperCase();

    let elementoBorrado = array2.pop(array1);//borrado ultimo elemento

    array1.push(array2[0]);
    array1.push(array2[1]);
    array1.push(array2[2]);
    array1.push(array2[3]);
    array1.push(array2[4]);

    return array1
}
console.log(mayusculas(peliculas,peliculasInfantiles));

// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
 const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
 const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son
// iguales o diferentes. Te confirman que están en el orden adecuado y que solo
// traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden
// en orden al del array resultante de combinar películas con películas animadas.
// Es decir, el primer elemento del array de películas general corresponde al
// primer elemento de asiaScores y al primer elemento de euroScores, y así
// sucesivamente.

function compararArrays(array1,array2){
    if (array1[0]==array2[0]) {
        console.log('Posicion ' + 0 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 0 + ': diferente puntaje');
    }
    if (array1[1]==array2[1]) {
        console.log('Posicion ' + 1 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 1 + ': diferente puntaje');
    }
    if (array1[2]==array2[2]) {
        console.log('Posicion ' + 2 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 2 + ': diferente puntaje');
    }
    if (array1[3]==array2[3]) {
        console.log('Posicion ' + 3 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 3 + ': diferente puntaje');
    }
    if (array1[4]==array2[4]) {
        console.log('Posicion ' + 4 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 4 + ': diferente puntaje');
    }
    if (array1[5]==array2[5]) {
        console.log('Posicion ' + 5 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 5 + ': diferente puntaje');
    }
    if (array1[6]==array2[6]) {
        console.log('Posicion ' + 6 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 6 + ': diferente puntaje');
    }
    if (array1[7]==array2[7]) {
        console.log('Posicion ' + 7 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 7 + ': diferente puntaje');
    }
    if (array1[8]==array2[8]) {
        console.log('Posicion ' + 8 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 8 + ': diferente puntaje');
    }
    if (array1[9]==array2[9]) {
        console.log('Posicion ' + 9 + ': igual puntaje');
    } else {
        console.log('Posicion ' + 9 + ': diferente puntaje');
    }
    
}
compararArrays(asiaScores,euroScores)

// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de
// las funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!



