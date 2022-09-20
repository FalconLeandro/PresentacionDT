// Propiedad única
  // Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
  // parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
  // parámetro la propiedad que fue pasada como string.
  // Ejemplo:
  
  let array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ];

  function propiedadUnica(array, str) {
    return array.map(item => ({[str]: item[str]}));
  }
  
  console.log(propiedadUnica(array,'edad'));
  console.log(propiedadUnica(array,'nombre'));
