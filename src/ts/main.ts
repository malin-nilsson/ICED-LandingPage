window.onload = function () {
    menuModal()
    locationsModal()
  }
  
  function menuModal() {
    let menuModal: HTMLDivElement = document.getElementById("menu-modal") as HTMLDivElement;
    let menuButton: HTMLButtonElement = document.getElementById("btn-menu") as HTMLButtonElement;
    let closeMenuModal: HTMLSpanElement = document.querySelector(".close-menu-modal");
  
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
    let locationsModal: HTMLDivElement = document.getElementById("locations-modal") as HTMLDivElement;
    let locationsButton: HTMLButtonElement = document.getElementById("btn-locations") as HTMLButtonElement;
    let closeLocationsModal: HTMLSpanElement = document.querySelector(".close-locations-modal");
  
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