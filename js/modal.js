const showModal = function(event) {
    event.preventDefault();
    const allModals = document.querySelectorAll(".modal");
    for (let i = 0; i < allModals.length; i++) {
      allModals[i].classList.remove("show");
    }
    const href = this.getAttribute("href");
    document.querySelector(href).classList.add("show");
    document.querySelector("#modal-overlay").classList.add("show");
  };
  
  const modalLinks = document.querySelectorAll(".show-modal");
  
  for (let i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener("click", showModal);
  }
  
  const hideModal = function(event) {
    event.preventDefault();
    document.querySelector("#modal-overlay").classList.remove("show");
  };
  
  const closeButtons = document.querySelectorAll(".modal .close");
  
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", hideModal);
  }
  
  document.querySelector("#modal-overlay").addEventListener("click", hideModal);
  
  const modals = document.querySelectorAll(".modal");
  
  for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", function(event) {
      event.stopPropagation();
    });
  }
  