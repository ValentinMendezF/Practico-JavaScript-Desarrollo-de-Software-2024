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
  