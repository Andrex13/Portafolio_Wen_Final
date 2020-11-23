let crud = document.getElementById("CRUD");

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
  if (admin.email == "andres13052010@hotmail.com") {
    crud.innerHTML = `<a class="nav-link" href="../Pages/CRUD.html">CRUD</a>`;
  }
}
