window.onload = function () {
    menuModal()
    locationsModal()
  }
  
  // MENU MODAL
  function menuModal() {
    let menuModal: HTMLDivElement = document.getElementById("menu-modal") as HTMLDivElement;
    let menuButton: HTMLButtonElement = document.getElementById("btn-menu") as HTMLButtonElement;
    let closeMenuModal: HTMLSpanElement = document.querySelector(".close-menu-modal");
  
    // When user clicks on menu, show menu modal
    menuButton.addEventListener("click", () => {
      menuModal.style.display = "block";
    })
  
    // Close modal when user clicks on the X icon
    closeMenuModal.addEventListener("click", () => {
      menuModal.style.display = "none";
    })
  
    // If user clicks outside of modal, close the modal
    window.addEventListener('click', function (event) {
      if (event.target == menuModal) {
        menuModal.style.display = "none";
      }
    });
  }
  

  // LOCATIONS MODAL
  function locationsModal() {
    let locationsModal: HTMLDivElement = document.getElementById("locations-modal") as HTMLDivElement;
    let locationsButton: HTMLButtonElement = document.getElementById("btn-locations") as HTMLButtonElement;
    let closeLocationsModal: HTMLSpanElement = document.querySelector(".close-locations-modal");
  
     // When user clicks on menu, show menu modal
    locationsButton.addEventListener("click", () => {
      locationsModal.style.display = "block";
    })
  
    // Close modal when user clicks on the X icon
    closeLocationsModal.addEventListener("click", () => {
      locationsModal.style.display = "none";
    })
  
    // If user clicks outside of modal, close the modal
    window.addEventListener('click', function (event) {
      if (event.target == locationsModal) {
        locationsModal.style.display = "none";
      }
    });
  }