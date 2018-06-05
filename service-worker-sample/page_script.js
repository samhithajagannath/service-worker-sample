var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", setAlert);
  console.log("Image added", images[i]);
}

function setAlert() {
  alert("Images are set!");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service_worker.js", {
      scope: ""
    })
    .then(function(registration) {
      console.log("Registration succeeded. Scope is " + registration.scope);

      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    })
    .catch(function(error) {
      console.log("Registration failed with " + error);
    });
}
