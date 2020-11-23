const taskForm = document.getElementById("task-form");
const boton1 = document.getElementById("Ingresar");

boton1.onclick = function () {
  registrar();
  return false;
};

function registrar() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
  taskForm.reset();
}

function Observar() {
  firebase.auth().onAuthStateChanged((email) => {
    if (email) {
      console.log("existe usuario activo");
      let admin = firebase.auth().currentUser;
      Loggin(admin);
      var uid = email.uid;
    } else {
      console.log("no existe usuario activo");
    }
  });
}

Observar();

function Loggin(admin) {
  let inicio = document.getElementById("logged");
  let lol = document.getElementById("inner");
  let pie = document.getElementById("pie");
  let crud = document.getElementById("CRUD");
  inicio.innerHTML = `
  <h1 class="h4 text-center">¡Bienvenido!</h1>
  <button onclick="cerrar()" id="Salir">Cerrar sesión</button>`;
  lol.innerHTML = "";
  pie.innerHTML = ` <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />`;
  if (admin.email == "andres13052010@hotmail.com") {
    crud.innerHTML = `<a class="nav-link" href="../Pages/CRUD.html">CRUD</a>`;
  }
}

function cerrar() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("Saliendo...");
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}
