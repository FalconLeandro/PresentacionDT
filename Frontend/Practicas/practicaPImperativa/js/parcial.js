// //Ejercicio 1:

// //Objetos Dentro de Arreglos

// /* 
// Supongamos que tenemos un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
// */

// // let autos = [
// //   {
// //     marca: "Citroen",
// //     modelo: "C3",
// //     año: 2013,
// //     dueño: "Juan",
// //     color: {
// //       capot: "gris",
// //       puertas: "negro",
// //     },
// //     dueñosAnteriores: [], // Lo compro 0KM
// //   },
// //   {
// //     marca: "Honda",
// //     modelo: "Fit",
// //     año: 2016,
// //     dueño: "Santiago",
// //     color: {
// //       capot: "rojo",
// //       puertas: "rojo",
// //     },
// //     dueñosAnteriores: ["Jorge", "Iván"],
// //   },
// // ];

// /* 
// Santiago le compra el auto a Juan y le pinta el capot a negro.
// ¿Cómo harías para modificar esas Propiedades?
// */

// // autos[0].dueño = 'Santiago';
// // autos[0].color.capot = 'Negro';
// // autos[0].dueñosAnteriores = 'Juan';

// // console.log(autos[0]);

// //PREGUNTAS - (solo enviar la opcion que para ustedes es correcta)

// /* 
// A)
// Utilizamos pop() para ...

// - Ingresar un elemento en la última posición del array
// - Eliminar un elemento ubicado en la primera posición del array
// - Ingresar un elemento en la primera posición del array
// --> Eliminar un elemento ubicado en la última posición del array */  

// /*
// B) 
// Para encontrar la posición de un elemento dentro de un array, ¿cuál es la instrucción correcta?

// --> ["a", "b", "c", "d"].indexOf("c")
// - ["a", "b", "c", "d"].getItem("c")
// - ["a", "b", "c", "d"].positionOf("c")
// - ["a", "b", "c", "d"].get("c")
// */

// /*
// C) 
// ¿A qué valor estamos accediendo?


// let miArray = ["Ana", "Pedro", "Pablo"]
//  console.log(miArray[miArray.length - 1]); 

// - Ana
// - Pedro
// --> Pablo
// - undefined

// */

// /*
// D) 
// ¿Cuál o cuales son las formas correctas de agregarle un nuevo dato a un objeto llamado persona?

// --> persona."edad" = 25
// - persona['edad'] = 25
// - persona.edad = 25
// - "persona".edad = 25
let persona =
  {
    modelo: "C3",
    año: 2013,
    dueño: "Juan",
  }
  

  persona.edad = 25; 
console.log(persona);
// */

// /*
// E) 
// ¿Qué se termina mostrando?

// let perro = {
//     nombre: "Charly",
//     edad: 6
// }
// let key = "nombre"
// console.log(perro[key])

// - 0
// - key
// - nombre
// --> Charly
// */

// /*
// F) 
// ¿Qué se termina mostrando?

// let musicos = [
//     {
//         nombre: "Luca Prodan",
//         idiomas: ["Ingles", "Español"]
//     },
//     {
//         nombre: "Luis A. Spinetta",
//         idiomas: ["Español"]
//     }
// ]
// console.log(musicos[1].idiomas[0])

// - undefined
// --> Español
// - Inglés
// - Luca Prodan
// */

// /* 
// //Ejercicio 2: 

// Una funcion multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

// Una funcion resta que tome dos números como Parámetros y devuelva el la resta de los dos.

// Una funcion sumador que tome 4 numeros como parametros y te devuelva la suma de los 4. 

// */
// function multiplicador(num1,num2) {
//   return num1 * num2;
// } 
// function restador(num1,num2) {
//   return num1 - num2;
// }
// function sumador(num1,num2,num3,num4) {
//   return num1 + num2 + num3 + num4;
// }
// /* 
// //Ejercicio 3: 

// Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:

// let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]

// - Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).

// - Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).

// - Determiná cuán largo es el Arreglo en este momento.

// - Sacá un producto y guardalo en una Variable que se llame noHabia.

// - Sacá un producto y guardalo en otra Variable que se llame comprado.

// - ¿Cuán largo es el Arreglo ahora?

// */
// let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"];
// pizzas.push('albahaca');
// pizzas.push('cherry');
// pizzas.unshift('ajo');
// pizzas.unshift('oregano');
// console.log(pizzas.length); 
// let noHabia = pizzas.pop();
// let comprado = pizzas.shift();
// console.log(noHabia); 
// console.log(comprado);
// /* 
// //Crear un array VACÍO, que tenga el nombre de autos. 
// */

// /*
// // Usando estos 3 Objetos
// */
// let ford = {
//     año	 : 2015,
//     color	: "blanco",
//     puertas: 5
// }
   
// let peugeot = {
// año	 : 2010,
// color	: "rojo",
// puertas: 3
// }
   
// let volkswagen = {
// año	 : 2012,
// color	: "gris",
// puertas: 4
// }
// /*
// //Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
// */

// let autos = [];
// autos.push(ford);
// autos.push(peugeot);
// autos.push(volkswagen);
// console.log(autos);



// /*
// // Mostrar por consola el array para ver que contenga esos objetos.


   

// /* Tenes que crear una función que reciba el array autos como unico parámetro, e incremente en 3 la cantidad de puertas que van a tener los autos en el futuro con una modificacion, llámala futurosAutos. Debes utilizar una estructura de repetición. */

// function futurosAutos(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i].puertas += 3;
//   }
// }
// futurosAutos(autos);
// console.log(autos);

// // - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// // 1 - Funcion que reciba un array de edades y retorne el promedio 
// // 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// // 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// // 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// // 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// // 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
// //    {
// //       edadesMenor : "// edades menor a 18",  
// //       edadesMayor : "// edades menor a 18"
// //    }

// // nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)

// let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
// function promediar(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return 'El promedio de todas las edades es: ' + sum / arr.length;
// }
// console.log(promediar(edades));

// function mayor(arr) {
//   let mayor = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (mayor < arr[i]) {
//       mayor = arr[i];
//     }
//   }
//   return 'El mayor es: ' + mayor;
// }
// console.log(mayor(edades));

// function menor(arr) {
//   let i = 0;
//   let menor = arr[i];
  
//   for (i; i < arr.length; i++) {

//     if (menor > arr[i]) {
//       menor = arr[i];
//     }
//   }
//   return 'El menor es: ' + menor;
// };
// console.log(menor(edades));

// function comparar(arr) {
//  let hayRepetidos;
//  let numeroRepetido;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i]==arr[j]) {
//         hayRepetidos = true;
//         numeroRepetido = arr[j];
//       }else{
//         hayRepetidos = false;
//       }
      
//     }
//   }
//   return 'Hay repetidos: ' + hayRepetidos  + '\nEs el número: ' + numeroRepetido;
// }
// console.log(comparar(edades));

// function buscar(arr,elemento) {
//   let posElemento = arr.indexOf(elemento);
//   if ( posElemento != -1) {
//     return 'El elemento se encuentra en la posicion: ' + posElemento;
//   } else {
//     return 'El elemento no existe';
//   }
  
// }
// console.log(buscar(edades, 22));


// function mayorMenor(arr) {
//   let objetoEdades = {
//     edadesMenor:[],
//     edadesMayor:[],
//   };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>18) {
//       objetoEdades.edadesMayor.push(arr[i]);
//     } else {
//       objetoEdades.edadesMenor.push(arr[i]);
//     }
//   }
//   return objetoEdades;
  
// }
// console.log(mayorMenor(edades));

// Parte 1: Crear Mi Objeto

// Crea un Objeto nave con las siguientes Propiedades y Valores:
// Tipo de nave: Un String que diga "Espacial".
// País: Un String que indique de qué país es la nave.
// Cantidad de tripulantes: Un número que indique la cantidad de tripulantes de la nave.
// Tripulantes: Un Arreglo con los nombres de los tripulantes.
// País de los tripulantes: Un arreglo con nombres de los países de los tripulantes
// Estado: Un String que diga "Usada".

// Despegar:
// a) Una Función que imprima en la consola el siguiente mensaje:
// "🚀 ¡Todo listo para el despegue! 

//  ¡algo se rompió!"
// b) Y tire un Alert(ver que es un alert, si no lo conocen) que diga:
// ¡BOOOM!
// Parte 2: Acceso A Los Valores
// Ahora desde la consola o su VSC seguí este paso a paso para extraer los valores del Objeto nave:

// Extraé el país de la nave usando Dot notation.
// Extraé el tipo de nave usando Bracket notation.
// Extraé la cantidad de tripulantes usando Dot notation... ¿se puede?(pensar porque y dejar un comentario explicándolo)
// let nave = {
//   tipoDeNave:'Espacial',
//   pais:'Fiji',
//   cantidadTripulantes: 4,
//   tripulantes:['micu','leandroide','rosaura','lola'],
//   paísTripulantes:['Camerun', 'Noruega','Finlandia','Eslovaquia'],
//   estado:'usada',
//   despegar: function() {
//     console.log('🚀 ¡Todo listo para el despegue!\n¡algo se rompió!');
//     alert('¡Boooom!');
//   }

// }
// console.log(nave.pais);
// console.log(nave['tipoDeNave']);
// console.log(nave.cantidadTripulantes);

// Pares e Impares

// Deben crear una función llamada paresEimpares 
// que recibe 3 parámetros 
// los dos primeros que sean números y el tercero una palabra (string) 
// la función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe 
// pero debe en primer lugar mostrar todos los números pares 
// y luego los impares 
// además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 

// function paresEimpares(num1,num2,str) {
//   for (let i = 0; i <= num1; i++) {
//     if (i%2==0 && i%num2==0) {
//       console.log(str);
//     }else if(i%2==0 && i%num2!=0){
//       console.log(i);
//     } 
//   }
//   for (let j = 0; j <= num1; j++) {
//     if (j%2!=0 && j%num2==0) {
//       console.log(str);
//     }else if(j%2!=0 && j%num2!=0){
//       console.log(j);
//     } 
//   }
// }

// paresEimpares(10,7,'culo');

// // Ejemplo: 
// // paresEImpares(10,7,’prueba’)
// // ====> 
// // 0
// // 2
// // 4
// // 6
// // 8
// // 10
// // ("---------------------------------------------------")
// // 1
// // 3
// // 5
// // ’Prueba’
// // 9
// // /

// // / 
// // 2 - 

// // LOOP DE PARES
// // Debés crear una función llamada loopDePares que reciba como parámetro un número 

// // y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

// // En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrará en la consola “El número x es par”.

// function loopDePares(num) {
//   for (let i = 0; i <= 100; i++) {
//     if ((i+num)%2==0) {
//       console.log('El número ' + (i+num) + ' es par');
//     } else {
//       console.log(i);
//     }
    
//   }
// }
// loopDePares(5)

// */
// Les dejo también el siguiente ejercicio para que puedan volver a realizarlo:

// De 3 en 3

// Tenemos que crear una función 
// que recibe tres parámetros: un número de comienzo, uno de final, y el ultimo va a servir de sumador.
// Esta deberá retornar un arreglo con los numeros que esten entre el comienzo y el de final, sumando de a tanto como sea el sumador.
//Ejemplo:

//Sumador(1,10,3) => [1, 4, 7, 10]


// 1) Del siguiente array de “ceros” tenemos un intruso, carácter que no es
// “cero” (cero entre comillas)
// ['0', '0', '0', '0', '0', 'O', '0', '0', '0']
// nuestro trabajo será desarrollar una función que lo detecte
// reemplazando por un “cero” y retorna él índice que se encontraba él
// intruso

// let array = ['0', '0', 'O', '0', '0', 'O', '0', '0', 'O'];

// function detectorIntruso(arr) {
//   let intrusos = [];
//   console.log('Escaneando array...\n' + arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]!='0') {
//       console.log('Hay un intruso en la posicion ' + i); 
//       intrusos.push(i);
//       arr[i] = '0';
//     }
//   }
//   return '\nLos intrusos encontrados en las posiciones: ' + intrusos + ', han sido remplazados:\n' + arr;
// }
// console.log(detectorIntruso(array));
// // Dado los siguientes numeros:

// let num1 = 43;
// let num2 = 78;
// let num3 = 14;

// // Crea un algoritmo que te permita identificar
// // el numero mayor. Utiliza condicionales como el
// // if, else, o else if.

// // Escribe tu código debajo de estas lineas,
// // y observa los resultados por la consola.
// // especificamente para este conjunto de datos
// // deberias ver por consola el numero 78,
// // adicional, cambia los valores de num1, num2 y num3
// // para verificar que tu algoritmo funcione con
// // cualquiera 3 valores.
// // cualquiera 3 valores.
// function numMayor(num1,num2,num3){
//   let mayor;
//   if(num1>num2 && num1>num3){
//     mayor = num1;
//   }else if(num2>num1 && num2>num3){
//     mayor = num2;
//   }else{
//     mayor = num3;
//   }
//   return 'El número mayor es: ' + mayor;
// }
// console.log(numMayor(num1, num2, num3));
// // Ahora bien. dado los siguientes numeros:


// // agrega una variable mas, llamada num4
// // con un valor numerico

// // let num1 = 13.5;
// // let num2 = -1663;
// // let num3 = 333;
// // let num4 = 33;

// // Crea un algoritmo que te permita identificar
// // el numero mayor de los 4 anteriores.

// // Escribe tu código debajo de esta linea,
// // y observa los resultados por la consola.
// // Adicional, cambia los valores de los 4 numeros
// // para ver que algoritmo funciona con cualquier
// // conjunto de 4 numeros.
// function numMayor(num1, num2, num3,num4) {
//   let mayor;
//   if (num1 > num2 && num1 > num3 && num1 > num4) {
//     mayor = num1;
//   } else if (num2 > num1 && num2 > num3 && num2 > num4) {
//     mayor = num2;
//   } else if (num3 > num1 && num3 > num2 && num3 > num4) {
//     mayor = num3;
//   } else {
//     mayor = num4;
//   }
//   return 'El número mayor es: ' + mayor;
// }
// console.log(numMayor(num1, num2, num3, num4));

// /**
//  * Extra: que puedes hacer para identificar
//  * el numero mayor de una lista de numeros,
//  * como la siguiente? Utiliza Javascript.
//  *
//  * Tip: es valido buscar en google :)
//  *
//  * Adicional: al terminar tu algoritmo,
//  * cambia los valores de la lista, bien sea
//  * agregando o removiendo, y asegurate
//  * que tu algoritmo funcione con cualquier lista
//  * de numeros
//  */

// const numeros = [5, 12, 2, 40, 33, 2, 8];


// function mayor(arr){
  
//   let mayor = arr[0];
//   for(let i = 0; i <= arr.length; i++ ){
//     if (arr[i+1]>mayor){
//       mayor = arr[i+1];

//     }
//   };
//   return mayor;
// }
// console.log(mayor(numeros)); 
