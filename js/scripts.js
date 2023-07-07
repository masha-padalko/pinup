const mediaQuery = window.matchMedia('(min-width: 1280px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  const hero = document.querySelector('.hero'),
  player = document.querySelector('.hero__img');

  hero.addEventListener('mousemove', (e) => {
    let pageX = e.clientX;
    player.style.transform = 'translate('+ pageX/150 +'%, -50%)';
  });
}

// function isDesktopBrowser() {
//   let userAgent = navigator.userAgent.toLowerCase(),
//   isMobile = /mobile|android|iphone|ipod|windows phone/i.test(userAgent),
//   isTablet = /tablet|ipad/i.test(userAgent);
  
//   return !(isMobile || isTablet);
// }

// if (isDesktopBrowser()) {
//   const hero = document.querySelector('.hero'),
//   player = document.querySelector('.hero__img');

//   hero.addEventListener('mousemove', (e) => {
//     let pageX = e.clientX;
//     player.style.transform = 'translate('+ pageX/150 +'%, -50%)';
//   });
// } 

// Get references to the modal overlay, window, and open button
const modalOverlay = document.getElementById('modalOverlay');
const modalWindow = document.getElementById('modalWindow');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

function openModal() {
  // Add class to the body to prevent scrolling
  document.body.classList.add('modal__open');

  // Show the modal overlay and window
  modalOverlay.style.display = 'block';
  modalWindow.style.display = 'block';
}

function closeModal() {
  // Remove class from the body to re-enable scrolling
  document.body.classList.remove('modal-open');

  // Hide the modal overlay and window
  modalOverlay.style.display = 'none';
  modalWindow.style.display = 'none';
}

// Attach click event listener to the open button
openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

// Example usage: Close the modal when the overlay is clicked
modalOverlay.addEventListener('click', closeModal);

