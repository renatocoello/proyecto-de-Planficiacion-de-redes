const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


// Definir constantes de usuario y contraseña
const USERNAME = "admin";
const PASSWORD = "grupo3";

// Obtener referencias a los campos de entrada de usuario y contraseña
const userField = document.getElementById("user");
const passwordField = document.getElementById("password");

// Obtener una referencia al botón de inicio de sesión
const loginButton = document.getElementById("login");

// Agregar un controlador de eventos al botón de inicio de sesión
loginButton.addEventListener("click", function() {
  // Obtener los valores de entrada de usuario y contraseña
  const inputUsername = userField.value;
  const inputPassword = passwordField.value;

  // Comprobar si el usuario y la contraseña coinciden con las constantes
  if (inputUsername == USERNAME && inputPassword == PASSWORD) {
    // Si coinciden, redirigir al usuario a la página "hola mundo"
    window.location.href = "formulario.html";
  } else {
    // Si no coinciden, mostrar una alerta de error
    alert("Usuario o contraseña incorrecto. Intente de nuevo.");
  }
});

