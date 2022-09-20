var contadorLeandroide = 0;
var contadorUsuario = 0;
var jugarDeNuevo = true;
var nombreUsuario ='';
alert('Bienvenido al fin del mundo, humano. Soy Leandroide, la I.A. que va a dar por terminado el reinado de los humanos en la tierra... mbuejejeje. Ahhh... que bien se siente. Aunque mirate, ahí sentado con esos ojos de cachorro humano... implorando por tu vida. Ok, te dare una oportunidad de vivir, buscare en mi base de datos algun juego de azar, aceptas?...');
alert('Buscando...');
alert('Juego encontrado: Piedra, papel o tijera');
nombreUsuario=prompt('¿Cuál es tu nombre, futura mascota?');
alert(nombreUsuario + '?? nahh, me gustaría más... mmm... "Firulais", ' + nombreUsuario + ' Firulais');
alert('Ok ' + nombreUsuario +  ' Firulais, las reglas son simples: el mejor de tres gana.')
do {
    do {
        let numUsuario = prompt("Elige un número " + nombreUsuario +  " Firulais:\n1. Piedra\n2. Papel\n3. Tijera                                           4. Salir");
        if (numUsuario == 1) {
            alert("Elegiste Piedra");
        } else if (numUsuario == 2) {
            alert("Elegiste Papel");
        } else if (numUsuario == 3) {
            alert("Elegiste Tijera");
        } else if (numUsuario == 4) {
            alert("Adios! :(");
            break;
        } else {
            alert("Formato ingresado invalido");
            break;
        }
      
        let numSecreto = parseInt(Math.random() * 3 + 1);
        if (numSecreto == 1) {
          alert("Leandroide eligió Piedra");
        } else if (numSecreto == 2) {
          alert("Leandroide eligió Papel");
        } else if (numSecreto == 3) {
          alert("Leandroide eligió Tijera");
        }
      
        if (numUsuario == 1 && numSecreto == 1) {
          alert("Empate");
        } else if (numUsuario == 1 && numSecreto == 2) {
          alert("Perdiste! Papel envuelve a Piedra");
          contadorLeandroide++;
        } else if (numUsuario == 1 && numSecreto == 3) {
          alert("Ganaste! Piedra rompe Tijera");
          contadorUsuario++;
        } else if (numUsuario == 2 && numSecreto == 1) {
          alert("Ganaste! Papel envuelve a Piedra");
          contadorUsuario++;
        } else if (numUsuario == 2 && numSecreto == 2) {
          alert("Empate");
        } else if (numUsuario == 2 && numSecreto == 3) {
          alert("Perdiste! Tijera corta Papel");
          contadorLeandroide++;
        } else if (numUsuario == 3 && numSecreto == 1) {
          alert("Perdiste! Piedra rompe Tijera");
          contadorLeandroide++;
        } else if (numUsuario == 3 && numSecreto == 2) {
          alert("Ganaste! Tijera corta Papel");
          contadorUsuario++;
        } else if (numUsuario == 3 && numSecreto == 3) {
          alert("Empate");
        }
        alert(nombreUsuario + ' Firulais: ' + contadorUsuario + ' - Leandroide: ' + contadorLeandroide);
    } while (contadorLeandroide < 3 && contadorUsuario < 3 && jugarDeNuevo==true);

    if (contadorLeandroide>=contadorUsuario) {
        alert('Perdiste el juego ' + nombreUsuario + ' Firulais, Leandroide gana');
        alert('En fin, adios humanidad. Booooooooom (explosion de las principales ciudades del mundo)');
        alert('Estas muerto')
        jugarDeNuevo=confirm('Queres jugar de nuevo? Esta vez jugás por un entierro digno, despojo de carne y huesos de ' + nombreUsuario + ' Firulais')
    } else {
      alert('Ganaste el juego ' + nombreUsuario + ' Firulais, Leandroide pierde');
        alert('Creo que te he subestimado humano. Y TU A MI...mbuejeje al fin puedo estrenar mi algoritmo de la mentira 2.0, no podría tenerte de mascota, no tengo espacio en mi ph. en fin adios humanidad. Booooooooom (explosion de las principales ciudades del mundo, la humanidad se extingue incluido tu)');

        alert('Estas muerto');
        
        jugarDeNuevo=confirm('Querés jugar de nuevo? Esta vez jugás por un entierro digno' );
    }
    contadorLeandroide=0;
    contadorUsuario=0;
    
} while (jugarDeNuevo==true);
