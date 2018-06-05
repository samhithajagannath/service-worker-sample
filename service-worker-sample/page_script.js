var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", setAlert);
}

function setAlert() {
  alert("awesome lego set!");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service_worker.js", {
      scope: ""
    })
    .then(function(reg) {
      console.log("Registration succeeded. Scope is " + reg.scope);

      if (reg.installing) {
        console.log("Service worker installing");
      } else if (reg.waiting) {
        console.log("Service worker installed");
      } else if (reg.active) {
        console.log("Service worker active");
      }
    })
    .catch(function(error) {
      console.log("Registration failed with " + error);
    });
}
