// Traductor Condicional
// Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.
let word = '';
function traductor(word) {
    switch (word) {
        case 'casa':
            return 'house';
            break;
        case 'perro':
            return 'dog'
            break;
        case 'pelota':
            return 'ballon'
            break;
        case 'arbol':
            return 'tree'
            break;
        case 'genio':
            return 'wizzard'
            break;    
        default:
            console.log('Ingresó una palabra incorrecta');
            break;
    }
}
console.log(traductor('auto'));
