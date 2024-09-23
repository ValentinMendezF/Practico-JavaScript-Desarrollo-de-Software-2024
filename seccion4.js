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
  