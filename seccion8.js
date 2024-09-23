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

const btnDesHabilitar = document.getElementById("btnDesHabilitar");

const btnHabilitar = document.getElementById("btnHabilitar")

const inputHabilitar = document.getElementById("inputHabilitar");

btnDesHabilitar.addEventListener("click", ()=>{
    inputHabilitar.disabled = true;
})

btnHabilitar.addEventListener("click", ()=>{
    inputHabilitar.disabled = false;
})