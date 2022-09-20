// // Sumar todas las notas y dividirlas entre la cantidad de notas a promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3

// function promedio(nota1,nota2,nota3) {
//     return (nota1 + nota2 + nota3)/3
// }
// console.log(promedio(5,7,9)); 

// // Algoritmo para convertir una cantidad de pesos a dólares.

// function conversor(monto) {
//     return monto * 200;
// }
// console.log(conversor(50000));

// // Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.

// function salarioDes(salario) {
//     return salario * 0.8;
// }
// console.log(salarioDes(10000));

// // Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 10.5 mostrar aprobado, de lo contrario, mostrar desaprobado.

// function evaluacion(nota1,nota2,nota3) {
//     let promedio = (nota1 + nota2 + nota3)/3
//     if(promedio>=10.5){
//         return 'Aprobado'
//     }else{
//         return 'Desaprobado'
//     }
    

// }
// console.log(evaluacion(5,7,9));

// // Ingresar un número y mostrar si es número par o impar. 

// function numPar(num) {
//     if(num%2){
//         return 'Par';
//     }else{
//         return 'Par';
//     }
// }
// console.log(numPar(7)); 

// // Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje "ACCESO DENEGADO".

// function validador(usuario, clave) {
//     if (usuario == 'ADMIN' && clave == '123456'){
//         return 'ACCESO PERMITIDO'
//     }else{
//         return 'ACCESO DENEGADO'
//     }
// }
// console.log(validador('sdfgsdf', 'sdfgfg'));

// // Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.

// function multiplicar(num) {
//     for (let i = 0; i < 12; i++) {
//         console.log(num  + ' * ' + i + ' = ' + num * i);
        
//     }
// }

// console.log(5);

// // Elaborar un programa que muestre el mayor de 10 números ingresados.

// function mayor(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10) {
//    let mayor;
//    if(num1>num2){
//        mayor = num1
//    }else
// }

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  function reemplazoFastFast(frase,word1,word2){
    return frase.replace(word1,word2)
};

console.log(reemplazoFastFast('Rage, rage against the diyng of the dark', 'dark', 'light'));