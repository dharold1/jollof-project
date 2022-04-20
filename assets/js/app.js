const closeModal = function() {
   const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
}

document.querySelector('.overlay').addEventListener('click', closeModal);