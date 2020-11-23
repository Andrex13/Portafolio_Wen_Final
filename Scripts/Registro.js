const taskForm = document.getElementById("task-form");
const boton1 = document.getElementById("registrar");
boton1.onclick = function () {
  registrar();
  return false;
};

function registrar() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      location.href = "../Pages/Login.html";
    })
    .catch((error) => {
      let err01 = document.getElementById("Bug01");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      // ...
      taskForm.reset();
      err01.innerHTML = "*Usuario Existente";
    });
}
