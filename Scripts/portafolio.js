const db = firebase.firestore();
const projectContainer = document.getElementById("projects-container");

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    projectContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (!task.fileurl) {
        task.fileurl =
          "https://firebasestorage.googleapis.com/v0/b/andres-ruiz-76fee.appspot.com/o/unnamed.png?alt=media&token=ca363fca-5949-41ad-934e-6377b871d98c";
      }
      projectContainer.innerHTML += `
      <div class="card card-body mt-2 caty" id="tarjeta" category="${task.category}">
      <h3 class="h5" id="title_p">${task.title}</h3>
      <img class="img-fluid" src="${task.fileurl}" />
      <div>
      <p id="listo"></p>
      <div class="text-center">
      <button class="btn" style="background-color: #fffb00;" data-id="${task.id}">Ver detalle</button>
      </div>
      </div>
      </div>
      `;
    });
  });
});

//<p>${task.description}</p>
//<p class="badge badge-pill badge-light">${task.category}</p><br>
