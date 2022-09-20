// const jsonHelper = require('../equipo');
// let bicicletas = jsonHelper.leer('/carreraBicicletas/listado.json');

// carrera= {
//     bicicletas:bicicletas,
// }
// console.log(carrera.bicicletas);
const jsonHelper = require('../equipo');
let bicicletas = jsonHelper.leer('/carreraBicicletas/listado.json');

// C. Agregar un método ciclistasHabilitados que devuelva una lista donde los
// ciclistas tengan un dopaje negativo.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con los autos que estén habilitados
// para correr.

// D. Agregar un método listarBicicletas que reciba como parámetro un array
// de ciclistas e imprima por consola la siguiente información:
// ○ El nombre ciclista
// ○ El peso de la bicicleta
// ○ El largo de la bicicleta
// ○ El estado del ciclista
// i. “inhabilitado” → si dopaje es true
// ii. “habilitado” → si dopaje es false

// E. Agregar un método buscarPorId que permita buscar un ciclista en
// función de su id.
// ○ Este método recibirá por parámetro un number que represente el
// id a buscar
// ○ En caso de encontrar un ciclista con el id buscado, devolverá el
// objeto literal que lo representa.
// ○ En caso contrario devolverá undefinded

// G. Agregar un método ordenarPorRodado que ordene las bicicletas de
// menor a mayor según su rodado.
// ○ Este método no recibirá ningún parámetro.
// ○ Este método devolverá un array con todos las bicicletas ordenadas
// por rodado.
// Recordemos que Javascript tiene un método para hacer justamente lo que
// necesitamos 😉.

// H. Agregar un método generarTanda que retorne un array de ciclistas, que
// cumplan con las siguientes condiciones:
// ○ El ciclista esté habilitado
// ○ El rodado sea igual al valor enviado como argumento
// ○ El peso sea menor o igual al valor enviado como argumento
// ○ La cantidad devuelta sea como máximo la expresada en la
// propiedad bicicletasPorTanda.
// Para este método vamos a dejar que vos determines los parámetros que
// debería recibir.
// Te recomendamos que pienses qué métodos de los que ya programaste podés
// reutilizar en este paso 😉.

// I. Agregar un método que permita calcularPodio, el mismo deberá calcular
// al ganador y los siguientes dos puestos en función de su puntaje.
// ○ El método recibirá como parámetro un array de ciclistas. Los
// mismos deberán ser generados con generarTanda.
// ○ El método ordenará por puntaje los ciclistas recibidos.
// ○ El método imprimirá por consola los tres primeros puestos.

carrera={
    bicicletas:bicicletas,
    bicicletasPorTanda:8,
    ciclistasHabilitados: function() {
        let habilitados = this.bicicletas.filter(bicicleta=>bicicleta.dopaje==false);
        return habilitados;
    },
    listarBicicletas: function() {
        
        this.bicicletas.forEach(bicicleta => {
            let estado;
            if (bicicleta.dopaje==false) {
                estado='habilitado';
            } else {
                estado='inhabilitado';
            };
            console.log('Ciclista: ' + bicicleta.ciclista + ', marca: ' + bicicleta.marca + ', rodado: ' + bicicleta.rodado + ', peso: ' + bicicleta.peso + 'kg, largo: ' + bicicleta.largo + ', estado: ' + estado);
        });
    },
    buscarPorId: function(id) {
        let resultadoBusqueda= this.bicicletas.find(bicicleta=>bicicleta.id==id)
        return resultadoBusqueda;
    },
    buscarPorRodado:function(rodado) {
        let tandaPorRodado = this.ciclistasHabilitados().filter(bicicleta=>bicicleta.rodado==rodado);
        return tandaPorRodado;
    },
    ordenarPorRodado:function() {
        let listaOrdenada= this.bicicletas.sort((a,b)=> a.rodado - b.rodado);
        return listaOrdenada;
    },
    generarTanda:function(rodado,pesoMax) {
        let tanda = this.buscarPorRodado(rodado).filter(bicicleta=>bicicleta.peso<=pesoMax);
        return tanda.slice(0,this.bicicletasPorTanda);
    },
    calcularPodio:function() {
        let podio = this.generarTanda(24,10).sort((a,b)=>b.puntaje-a.puntaje).slice(0,3);
        podio.forEach(bicicleta => {
            if (bicicleta == podio[0]) {
                console.log('El ganador es: '+ bicicleta.ciclista +', con un puntaje de ' + bicicleta.puntaje);
            } else if(bicicleta == podio[1] ) {
                console.log('El segundo puesto es para: '+ bicicleta.ciclista +', con un puntaje de ' + bicicleta.puntaje);
            }else{
                console.log('El tercer puesto es para: '+ bicicleta.ciclista +', con un puntaje de ' + bicicleta.puntaje);
            };
        });
        return ''
    }
    
}
console.log(carrera.calcularPodio());