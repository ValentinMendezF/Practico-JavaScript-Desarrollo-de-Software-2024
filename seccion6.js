//6. Arrays
/*
Ejercicio 1:
Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.
*/

let numerosOriginales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Números originales:", numerosOriginales)

let numerosMultiplicados = []

for (let i = 0; i < 10; i++) {
  numerosMultiplicados[i] = numerosOriginales[i] * 2
}

console.log("Números multiplicados por 2:", numerosMultiplicados)

/*
Ejercicio 2:
Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números pares al array. Al final, imprime el array pares en la consola.
*/

let pares = []

let num = 0

for (let i = 0; i < 20; i++) {

  if (num % 2 == 0) {
    pares.push(num)
  }

  num++
}

console.log("Primeros 10 números pares:", pares)
