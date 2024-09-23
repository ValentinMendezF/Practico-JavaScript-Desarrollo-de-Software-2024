//1. Introducción a JavaScript
/*
Ejercicio 2:
Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. Imprime el resultado en la consola.
*/

let a = 5

let b = 10

let c = a + b

console.log("La suma de a y b es", 5)

//Ejercicio 3:
/*
Escribe un programa que pida al usuario su nombre y lo almacene en una variable. Luego, imprime un saludo en la consola que incluya el nombre del usuario.
*/

let nombre = prompt("¿Cuál es tu nombre?")

console.log("Hola,", nombre + "!")

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

//4. Funciones de JavaScript
/*
Ejercicio 1:
Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false si es impar. Prueba la función con diferentes números.
*/

function esPar(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

let numero = prompt("Ingrese un número para saber si es par")

console.log(`El número ${numero} es par: ${esPar(numero)}`)
numero = prompt("Ingrese otro número para saber si es par")
console.log(`El número ${numero} es par: ${esPar(numero)}`)

/*
Ejercicio 2:
Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.
*/

function convertirCelsiusAFahrenheit(temperaturaCelsius) {
  return temperaturaCelsius * 1.8 + 32
}

let temperatura = prompt("Ingrese una temperatura en grados celsius para convertir en fahrenheit")
console.log(`${temperatura}°C son equivalentes a ${convertirCelsiusAFahrenheit(temperatura)}°F`)

//5. Objetos en JavaScript
/*
Ejercicio 1:
Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
*/

let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Mendoza",
  cambiarCiudad: function (ciudad) {
    this.ciudad = ciudad
  }
}

console.log("Objeto antes del cambio:", persona)

let nuevaCiudad = prompt("Ingrese el nombre de la nueva ciudad")

persona.cambiarCiudad(nuevaCiudad)

console.log("Objeto después del cambio:", persona)

/*
Ejercicio 2:
Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.
*/

let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1615,
  antiguo: function (fechaActual) {
    let antiguedad = fechaActual - this.año

    if (antiguedad > 10) {
      return true
    } else {
      return false
    }
  }
}

const esteAnio = 2024

console.log(`El libro ${libro.titulo} es antigüo: ${libro.antiguo(esteAnio)}`)

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

//7. Introducción al DOM
/*
Ejercicio 1:
En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul
*/

const btnCambiarColor = document.getElementById("btnCambiarColor");

const parrafo = document.getElementsByClassName("parrafo");

const cambiarColor = () => {
  for (let i = 0; i < parrafo.length; i++) {
    if (parrafo[i].classList.contains("cambiarAzul")) {
      parrafo[i].classList.remove("cambiarAzul");
    } else {
      parrafo[i].classList.add("cambiarAzul");
    }
  }
}

btnCambiarColor.addEventListener("click", () => {
  cambiarColor();
})

/*
Ejercicio 2:
Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.
*/

const btnMostrarAlerta = document.getElementById("btnMostrarAlerta");

const getDataInput = ()=>{
  const texto = document.getElementById("inputTexto").value;
  alert("Has ingresado: " + texto);
}

btnMostrarAlerta.addEventListener("click", ()=>{
  getDataInput();
});

//8. Eventos en DOM
/*
Ejercicio 1:
Crea una lista (<ul>) con varios elementos (<li>). Escribe un script que agregue un evento click a cada elemento de la lista para que, cuando se haga clic en un li, se muestre su texto en la consola.
*/

const li1 = document.getElementById("li1");

li1.addEventListener("click", ()=>{
  console.log("Elemento 1");
})

const li2 = document.getElementById("li2");

li2.addEventListener("click", ()=>{
  console.log("Elemento 2");
})

const li3 = document.getElementById("li3");

li3.addEventListener("click", ()=>{
  console.log("Elemento 3");
})
const li4 = document.getElementById("li4");

li4.addEventListener("click", ()=>{
  console.log("Elemento 4");
})

/*
Ejercicio 2:
Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.
 */

