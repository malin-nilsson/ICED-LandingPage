window.onload = function () {
    menuModal()
    locationsModal()
  }
  
  function menuModal() {
    let menuModal = document.getElementById("menu-modal");
    let menuButton = document.getElementById("btn-menu");
    let closeMenuModal = document.querySelector(".close-menu-modal");
  
    menuButton.addEventListener("click", () => {
      menuModal.style.display = "block";
    })
  
    closeMenuModal.addEventListener("click", () => {
      menuModal.style.display = "none";
    })
  
    window.addEventListener('click', function (event) {
      if (event.target == menuModal) {
        menuModal.style.display = "none";
      }
    });
  }
  
  function locationsModal() {
    let locationsModal = document.getElementById("locations-modal");
    let locationsButton = document.getElementById("btn-locations");
    let closeLocationsModal = document.querySelector(".close-locations-modal");
  
    locationsButton.addEventListener("click", () => {
      locationsModal.style.display = "block";
    })
  
    closeLocationsModal.addEventListener("click", () => {
      locationsModal.style.display = "none";
    })
  
    window.addEventListener('click', function (event) {
      if (event.target == locationsModal) {
        locationsModal.style.display = "none";
      }
    });
  }