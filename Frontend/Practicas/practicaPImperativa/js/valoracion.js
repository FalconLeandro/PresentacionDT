// Valoración de Películas
// Usando la estructura switch, pedile al usuario que valore la película que acaba de ver
// en:
// ● Muy Mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras
// por su valoración.
// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
// Cuando el usuario haya valorado la película, agradecele su visita.

function valoracion(puntaje) {
    switch (puntaje) {
        case 'Muy mala':
            return 'Calificaste la película como Muy Mala. Lo lamentamos mucho.'
            break;
        case 'Mala':
            return 'Calificaste la película como Mala. Nos chupa un huevo.'
            break;
        case 'Mediocre':
            return 'Calificaste la película como Mediocre. Igual que vos, gil.'
            break;
        case 'Buena':
            return 'Calificaste la película como Buena. Nos chupa un huevo.'
            break;
        case 'Muy buena':
            return 'Calificaste la película como Muy Buena. Como tu vieja en tanga.'
            break;
        default:
            'Ingresaste un valor inválido'
            break;
    }
}
console.log(valoracion('Mala') + '¡Gracias por tu visita!');