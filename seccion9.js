//9. LocalStorage 
/*
Ejercicio 1:
Crea un formulario con un campo para el correo electrónico. Escribe un script que guarde el correo en localStorage cuando el usuario envíe el formulario. si este existe muestralo en el dom debajo del input y tambien haz un botón de eliminar este elemento, al recargar la pagina este debe mostrarse si existe
*/
const mostrarEmail = document.getElementById("mostrarEmail");

const emailInput = document.getElementById("emailInput");

const form = document.getElementById("form");

const guardarCorreoButton = document.getElementById("guardarCorreo");

function mostrarEmails(email) {
    mostrarEmail.innerHTML = `
        <p>Correo Electrónico: ${email}</p>
        <button id="borrarEmailButton">Eliminar correo guardado</button>
    `;
    document.getElementById('borrarEmailButton').addEventListener('click', () => {
        localStorage.removeItem('email');
        mostrarEmail.innerHTML = '';
        emailInput.value = '';
    });
}

const emailGuardado = localStorage.getItem('email');
if (emailGuardado) {
    mostrarEmails(emailGuardado);
}

guardarCorreoButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    localStorage.setItem('email', email);
    mostrarEmails(email);
});