//3. Operadores de asignación y bucles
/* 
Ejercicio 1:
Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0. Imprime el valor de la variable en cada iteración. 
*/

let contador = 10

while (contador !== 0) {
  console.log(contador)
  contador--
}

/*
Ejercicio 2:
Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
 */

let numMayor

do {
  numMayor = prompt("Ingrese un número mayor a 100")

  if (numMayor > 100) {
    console.log(`Ingresaste un número mayor a 100: ${numMayor}`)
  }

} while (numMayor <= 100)
