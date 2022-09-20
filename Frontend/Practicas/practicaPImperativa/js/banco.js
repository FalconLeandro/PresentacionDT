//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!
//   3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.

  let banco = {
      clientes: arrayCuentas,
      consultarCliente: function(nombreCliente) {
        let indice = this.clientes.findIndex(cliente => cliente.titularCuenta === nombreCliente);
        return this.clientes[indice];
      },
      deposito: function(nombreCliente,montoADepositar) {
          let cliente = this.consultarCliente(nombreCliente);
          cliente.saldoEnPesos = cliente.saldoEnPesos + montoADepositar;
          return 'Depósito realizado, su nuevo saldo es: ' + cliente.saldoEnPesos;
      },
      extracción: function(nombreCliente,montoAExtraer) {
        let cliente = this.consultarCliente(nombreCliente);

          if (cliente.saldoEnPesos <= montoAExtraer + 1) {
            return 'Fondos insuficientes';
          } else {
            cliente.saldoEnPesos = cliente.saldoEnPesos - montoAExtraer;
            return 'Extracción realizada correctamente, su nuevo saldo es: ' + cliente.saldoEnPesos;
          }
          
      } 

  };

  console.log(banco.consultarCliente('Jacki Shurmer'));
  console.log(banco.deposito('Ansel Ardley', 500));
  console.log(banco.extracción('Ansel Ardley',32410));
  console.log(banco.extracción('Ansel Ardley',32410));

  

