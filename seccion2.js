//2. Operadores lógicos y condicionales
/*
Ejercicio 1:
Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.
*/

let aa = 10
let bb = 15
let cc = 5

let mayor = -9999999

if (mayor < aa) {
  mayor = aa
}

if (mayor < bb) {
  mayor = bb
}

if (mayor < cc) {
  mayor = cc
}

console.log("El mayor de los tres numeros es:", mayor)

/*
Ejercicio 2:
Crea un programa que pida al usuario un número y determine si es par o impar.
*/

let numeroParOImpar = prompt("Ingresa un número y te diré si es par o impar")

if (numeroParOImpar % 2 == 0) {
  console.log(`El número ${numeroParOImpar}, es par`)
} else {
  console.log(`El número ${numeroParOImpar}, es impar`)
}
