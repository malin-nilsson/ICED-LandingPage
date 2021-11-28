window.onload = function () {
  menuModal() 
  locationsModal()
}

function menuModal() {
  let menuModal = document.getElementById("menu-modal");
  let btnMenu = document.getElementById("btn-menu");
  let span = document.querySelectorAll(".close")[0];

  btnMenu.addEventListener("click", () => {
    menuModal.style.display = "block";
  }) 

  span.addEventListener("click", () => {
    menuModal.style.display = "none";
  }) 

  window.onclick = function(event) {
    if (event.target == menuModal) {
      menuModal.style.display = "none";
    }
  } 
}

function locationsModal() {
  let locationsModal = document.getElementById("locations-modal");
  let btnLocations = document.getElementById("btn-locations");
  let span = document.getElementsByClassName("close")[1];

  btnLocations.addEventListener("click", () => {
    locationsModal.style.display = "block";
  }) 

  span.addEventListener("click", () => {
    locationsModal.style.display = "none";
  }) 

  window.onclick = function(event) {
    if (event.target == locationsModal) {
      locationsModal.style.display = "none";
    }
  } 
}

