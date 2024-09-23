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
