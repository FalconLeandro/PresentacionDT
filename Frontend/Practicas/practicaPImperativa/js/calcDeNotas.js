//   Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.

let alumno = {
    nombre:'Leandro Falcón',
    legajo:3215,
    listaNotas:[8,5,10,7,9],
    promediar:function(array,minParaAprobar){
      let sum = array.reduce((a,b)=> a + b); 
      let promedio = sum/array.length; 
  
      if (promedio >= minParaAprobar) {
        return 'Promedio: ' + promedio + '\nNota minima para promocionar: ' + minParaAprobar + '\nAlumno aprobado';
      } else {
        return 'Promedio: ' + promedio + '\nNota minima para promocionar: ' + minParaAprobar + '\nAlumno reprobado';
      }
    }
  }
  console.log(alumno.promediar(alumno.listaNotas,8));