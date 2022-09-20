package practicas;

/*Alimentemos a los perritos

        Ejercicio
        En la veterinaria tienen perros de diferentes tipos. Cada uno de ellos come una cantidad fija de
        alimento balanceado por día. El proveedor de alimentos le envía un pack con diferentes
        cantidades de alimento. En cada uno hay sobres con pequeñas raciones para que se consuman
        por cada día, sabiendo que deben darles por lo menos 3 kg por día para que cada perro no se
        sienta con hambre y ladre toda la noche.
        Precisamos hacer un programa que nos ayude a simular la situación: Pedirá primero el nombre
        y la cantidad de comida que come el perro. La idea es que mediante una función llamada
        cuantosPaquetes indique el nombre y cuantos paquetes usará. Dada la cantidad necesaria la
        función cuantosPaquetes pedirá uno a uno los pesos de cada paquete hasta llegar a esa
        cantidad y retorna el número de paquetes que precisó.
        Ejemplo:
        Rintintin come 4 kg diarios.
        paquetes : 1.2 0.7 1.1 1.3
        resultado: Rintintin precisa 4 paquetes.*/

import java.util.Scanner;

public class feedDoggy {
    public static void main(String[] args) {
        Scanner scanner;
        scanner = new Scanner(System.in);

        String nombrePerro;
        double cantidadComida;

        System.out.println("Ingresá el nombre del picho");
        nombrePerro = scanner.nextLine();

        System.out.println("Ingresá el consumo de comida por día");
        cantidadComida = scanner.nextDouble();

        int totalPaquetesparaPerro = cuantosPaquetes(cantidadComida,scanner);

        System.out.println("Nombre del perro: " + nombrePerro);
        System.out.println("Ingiere " + cantidadComida + "Kg de alimento por día");
        System.out.println("Precisa " + totalPaquetesparaPerro + " paquetes de alimento por día.");
    }

    static int cuantosPaquetes(double cantidadComida, Scanner scanner) {

        double pesoPaquetes = 0.0;
        int cantidadpaquetes = 0;

        while (pesoPaquetes < cantidadComida){
            System.out.println("Ingresá el peso del paquete de alimento");
            double pesoPaquete = scanner.nextDouble();
            pesoPaquetes = pesoPaquetes + pesoPaquete;
            cantidadpaquetes++;
        };
        return cantidadpaquetes;

    };
}
