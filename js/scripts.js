// Player mousemove
const mediaQuery = window.matchMedia('(min-width: 1280px)');

if (mediaQuery.matches) {
  const hero = document.querySelector('.hero'),
  player = document.querySelector('.hero__img');

  hero.addEventListener('mousemove', (e) => {
    let pageX = e.clientX;
    player.style.transform = 'translate('+ pageX/150 +'%, -50%)';
  });
}

// Modal

const modalOverlay = document.getElementById('modalOverlay'),
    modalWindow = document.getElementById('modalWindow'),
    openModalButton = document.getElementById('openModalButton'),
    closeModalButton = document.getElementById('closeModalButton');

function openModal() {
  document.body.classList.add('modal__open');

  modalOverlay.style.display = 'block';
  modalWindow.style.display = 'block';
}

function closeModal() {
  document.body.classList.remove('modal-open');

  modalOverlay.style.display = 'none';
  modalWindow.style.display = 'none';
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

