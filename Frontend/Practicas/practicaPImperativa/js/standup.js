// Esta semana vimos cómo manipular tipos de datos string y array. A su vez, conocimos
// algunos métodos de arrays que nos ayudan y facilitan ciertas funcionalidades útiles a la
// hora de efectivizar nuestro código. También conocimos los objetos literales y JSON. Para
// afianzar estos conceptos, vamos a desarrollar una situación específica en la que todos
// ellos nos puedan ser de utilidad, para así poder obtener una solución efectiva a nuestros
// problemas. ¡Éxitos!
// Descripción del problema
// Te contactan desde un teatro donde hace falta determinar el ganador de un concurso de
// stand up que consta de tres presentaciones por participante. Te piden que armes el
// programa que determine al ganador y, a continuación, te explican el funcionamiento del
// concurso para que lo tengas en cuenta a la hora de realizar el programa.
// El público, máximo 100 personas, votó quién considera que estuvo mejor al terminar
// cada etapa. Por ejemplo, sube Alicia, se presenta y baja; sube Bob, se presenta y baja.
// Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa
// tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera.
// Como estos concursos se dan online, ocurren miles cada día. A tu servidor llega la
// información por cada concurso en formato de arrays, uno por cada participante. Por lo
// tanto, los recibís así:

// ● El array de Alicia es: alicia = [ 10, 80, 75 ]
// ● El array de Bob es: bob = [ 90, 20, 25]

// Andá planteando en código mientras pensás cómo realizar la comparación de cada
// etapa.

let alicia = [ 10, 80, 75 ];
let bob = [ 90, 20, 90];
let puntosAlicia = 0;
let puntosBob = 0;


let concurso = {
    etapas:[],
    ganador:'',
    encontrarGanador: function (a,b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i]>=b[i]) {
                puntosAlicia ++;
                this.etapas[i]= 'Ronda: ' + i + '. Ganó Alicia';
            } else if(a[i]<=b[i]){
                puntosBob ++;
                this.etapas[i]= 'Ronda: ' + i + '. Ganó Bob';
            }else{
                this.etapas[i]= 'Ronda: ' + i + '. Empate';
          }
        };
        if (puntosAlicia>puntosBob) {
            this.ganador = 'Alicia';
        } else if(puntosAlicia<puntosBob) {
            this.ganador = 'Bob';
        }else{
            this.ganador = '';
        };
        
       return 'Total puntos Bob: ' + puntosBob + '\nTotal puntos Alicia: ' + puntosAlicia + '\nGanador:' + this.ganador;
    }
}



console.log(concurso.encontrarGanador(alicia,bob));
console.log(concurso.etapas);

// La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0], a[1] con b[1] y
// a[2] con b[2].
// Si a[i] > b[i], entonces, Alicia recibe 1 punto.
// Si a[i] < b[i], entonces, Bob recibe 1 punto.
// Si a[i] === b[i], ninguna persona recibe un punto.
// Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
// votos, sino los puntos ganados en cada etapa.
// Ejemplo:
// const alicia = [10, 80, 75];
// const bob = [90, 20, 25];
// puntosAlicia = 2
// puntosBob = 1
// Para los elementos en el índice 0, Bob recibe un punto porque b[0] > a[0]. Para la etapa
// siguiente Alicia recibe un punto, ya que a[1] > b[1]. Finalmente, para los elementos del
// índice 2 (tercera etapa), a[2] < b[2], por lo que Alicia recibe otro punto. El ganador será
// quien haya ganado más etapas. Si hay un empate final, el ganador debe dejarse vacío
// esperando que se realice un nuevo concurso.
// Dadas las consignas y cómo funciona el sistema de puntos, deberás calcular y encontrar
// al ganador utilizando una estructura for que evite tener que calcular cada tanda por
// separado. Recordá usar las estructuras if/else en caso de ser necesario para comparar
// los votos de cada participante.
// Para organizar la información, te pedimos crear el objeto literal Concurso con una
// propiedad etapas que indicará el resultado parcial por cada etapa. Además, tendrá una
// propiedad ganador que guardará el ganador (en caso de que exista) como un string. Te
// pedimos además que la función encontrarGanador sea un método del objeto literal
// Concurso.
// Para finalizar, se necesita enviar los resultados a otra aplicación, por lo que deberás crear
// un JSON con la propiedad etapas para poder compartirlo. Creá un método
// exportarResultados que haga esta conversión.

// digitalHouse()
// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número.

function digitalHouse(num1,num2) {
    for (let i = 1; i <= 100; i++) {
        if (i%num1==0) {
            console.log('Digital');
        } else if(i%num2==0) {
            console.log('House');
        } else if(i%num2==0 && i%num1==0){
            console.log('Digital House'); 
        }else{
            console.log(i); 
        }
    }
}
digitalHouse(5,3);