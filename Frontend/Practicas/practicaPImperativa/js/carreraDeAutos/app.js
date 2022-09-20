// 1. Obtener el listado de posibles participantes
// Tomando como base el siguiente archivo JSON,
// ● Leer el archivo utilizando el módulo correspondiente de Node
// ● Parsearlo utilizando las herramientas que te provee Javascript
// ● Guardar el listado en una variable
// Resultado esperado: variable conteniendo un array con todos los autos.

const jsonHelper = require('../equipo');
let autos = jsonHelper.leer('/carreraDeAutos/listado.json');

// 2. Crear un objeto literal que represente la carrera
// Este objeto literal, que podemos llamar carrera, será nuestra representación de
// la carrera (valga la redundancia) con su datos (propiedades) y sus
// funcionalidades (métodos).

// A. Agregar una propiedad llamada autos que contenga los autos obtenidos
// en el punto anterior.

// B. Agregar una propiedad llamada autosPorTanda que contenga el valor 6.
// Este valor representará la cantidad máxima de autos por tanda.

// C. Agregar un método autosHabilitados, que retorne todos los autos
// habilitados, es decir, aquellos que no estén sancionados.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con los autos que estén habilitados
// para correr.

// D. Agregar un método listarAutos que reciba como parámetro un array de
// autos e imprima por consola la siguiente información:
// ○ El nombre piloto
// ○ La placa o patente del auto
// ○ El peso del auto
// ○ El estado del piloto
// i. “sancionado” → si sancionado es true
// ii. “habilitado” → si sancionado es false
// Resultado esperado al ejecutar el método: un mensaje por consola por
// cada auto con el siguiente formato:
// Piloto: ______, patente: ______, peso en kg: ______, estado: ______.
// Ejemplos:
// Piloto: Leandro Ezequiel, patente: ABC123, peso en kg: 267, estado: habilitado.
// Piloto: Esteban Piazza , patente: EFG567, peso en kg: 357, estado: sancionado.

// E. Agregar un método buscarPorPatente que permita buscar el auto en
// función de su patente.
// ○ Este método recibirá por parámetro un string que represente la
// patente a buscar
// ○ En caso de encontrar un auto con la patente buscada, devolverá el
// objeto literal que lo representa.
// ○ En caso contrario devolverá undefinded

// F. Agregar un método buscarPorCilindrada que permite filtrar los autos
// habilitados, siempre y cuando su propiedad cilindrada sea menor o igual
// a la cilindrada enviada como argumento.
// ○ Este método recibirá por parámetro un number que represente la
// cilindrada máxima a buscar.
// ○ Este método devolverá un array con todos los autos que cumplan
// con la condición mencionada.
// ○ En caso de no encontrar ningún auto, devolverá un array vacío.
// ○ Este método debe usar autosHabilitados para buscar incluir
// solamente aquellos autos que estén habilitados.

// G. Agregar un método ordenarPorVelocidad que ordene los autos de
// menor a mayor según su velocidad.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con todos los autos ordenados por
// velocidad.
// Recordemos que Javascript tiene un método para hacer justamente lo que
// necesitamos 😉.

// H. Agregar un método generarTanda que permita retornar un array de
// autos, que cumplan con las siguientes condiciones:
// ○ Su piloto esté habilitado.
// ○ Su cilindrada sea menor o igual al valor enviado como argumento.
// ○ Su peso sea menor o igual a un valor enviado como argumento.
// ○ La cantidad devuelta sea como máximo la expresada en la
// propiedad autosPorTanda.
// Para este método vamos a dejar que vos determines los parámetros que
// debería recibir.
// Te recomendamos que pienses qué métodos de los que ya programaste podés
// reutilizar en este paso 😉.

// I. Agregar un método listarPodio, que calcule el podio en función del
// puntaje de los pilotos y muestre el resultado por consola.
// ○ El método recibirá como parámetro un array de autos. Los mismos
// deberán ser generados con generarTanda.
// ○ El método ordenará por puntaje los autos recibidos.
// ○ El método imprimirá por consola los tres primeros puestos.
// Resultado esperado al ejecutar el método: un mensaje por consola por
// cada auto con el siguiente formato:

// El ganador es: ______, con un puntaje de ______.
// El segundo puesto es para ______, con un puntaje de ______.
// El tercer puesto es para ______, con un puntaje de ______.
// Ejemplo:
// El ganador es: Leandro Ezequiel, con un puntaje de: 70.
// El segundo puesto es para Martin Cejas, con un puntaje de 55.
// El tercer puesto es para Nicolas Lopez, con un puntaje de 52.

carrera = {
    autos:autos,
    autosPorTanda:6,
    autosHabilitados:function(){
        let habilitados = this.autos.filter((auto)=>auto.sancionado==false);
        return habilitados;
    },
    listarAutos:function(){
        this.autos.forEach(function(auto){
            let estado;
            if (auto.sancionado==true) {
                estado='Sancionado';
            } else {
                estado='Habilitado';
            }
            console.log('Piloto: ' + auto.piloto + ', patente: ' + auto.patente + ', peso en kg: ' + auto.peso + ', estado: '+ estado);
        })
    },
    buscarPorPatente:function(patente) {
        let resultadoBusqueda = this.autos.find((auto)=>auto.patente===patente);
        return resultadoBusqueda;
    },
    buscarPorCilindrada:function(num) {
        let autosDentroDelRango = this.autosHabilitados().filter((auto)=>auto.cilindrada<=num);
        return autosDentroDelRango
    },
    ordenarPorVelocidad:function() {
        let listaOrdenada = this.autos.sort((a, b) => {
            return a.velocidad - b.velocidad;
        });
        return listaOrdenada;

    },
    generarTanda:function(cilindradaMax,pesoMax) {
        let tanda = this.buscarPorCilindrada(cilindradaMax).filter(auto=>auto.peso<=pesoMax);
        return tanda.slice(0,this.autosPorTanda);
    },
    listarPodio:function() {
        let tanda = this.generarTanda(3000,3000);
        let tandaOrdenada = tanda.sort((a, b) => {
            return b.puntaje - a.puntaje;
        });
        let podio= tandaOrdenada.slice(0,3);
        podio.forEach(function(auto) {
            if (auto==podio[0]) {
                console.log('El ganador es: ' + auto.piloto + ' con un puntaje de: ' + auto.puntaje);
            } else if (auto==podio[1]) {
                console.log('El segundo puesto es para: ' + auto.piloto + ' con un puntaje de: ' + auto.puntaje);
            } else {
                console.log('El tercer puesto es para: ' + auto.piloto + ' con un puntaje de: ' + auto.puntaje);
            };
        })
        
    },
}

console.log(carrera.listarPodio());