function sumar(num1, num2) {
    return num1 + num2
}
function restar(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    return num1 / num2
}
console.log('--------------Testeo de Operaciones / Calculadora --------------');
console.log(multiplicar(8,8));

// 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número
// como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a potencia()

function cuadradoDeUnNumero(num) {
    return multiplicar(num,num)
}
console.log(cuadradoDeUnNumero(8));

// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.

function promedioDeTresNumeros(num1,num2,num3) {
    return dividir((sumar(sumar(num1,num2),num3)),3)
}
console.log(promedioDeTresNumeros(5,2,9));

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.

function calcularPorcentaje(num,porcentaje) {
    return dividir(multiplicar(num,porcentaje),100)
}
console.log(calcularPorcentaje(300,15));

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// 200.

function GeneradorDePorcentaje(num1,num2) {
    return multiplicar(dividir(num1,num2),100)
}
console.log(GeneradorDePorcentaje(2,200));



