// Creando un objeto literal
// Vamos a ver cómo crear nuestro objeto "perro":

// Declarar una variable llamada perro de tipo objeto literal.
// Esa variable debe tener 3 propiedades:

// 1. nombre, con un valor de tipo String.

// 2. edad, con un valor de tipo Number.

// 3. vacunado, con un valor de tipo Boolean.

let perro = {
    nombre:'Picho',
    edad:3,
    vacunado:false
}
console.log(perro);

// Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
// Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

// let deportista={
//     nombre:'Mica mi mamor',
//     energia:100,
//     experiencia:10
// }

// Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

// La función entrenarHoras tiene las siguientes tres características:

// Recibe por parámetro la cantidad de horas.
// Resta a su energía (this.energia) la cantidad de horas x 5.
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
let nombreUsuario = prompt('Por favor introduzca las horas que ha entrenado');
let deportista={
    nombre:'Mica mi mamor',
    energia:100,
    experiencia:10,
    horas:0,
    entrenarHoras: function(horas){
        this.horas=horas;
        this.energia=this.energia-(horas*5);
        this.experiencia=this.experiencia+(horas*2);
    }
}

deportista.entrenarHoras(nombreUsuario)
console.log('Horas entrenadas: ' + deportista.horas);
console.log('Energia restante: ' + deportista.energia);
console.log('Experiencia ganada: ' + deportista.experiencia);


console.log(nombreUsuario);
