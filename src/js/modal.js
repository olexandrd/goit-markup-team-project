const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
refs.openModalBtn.addEventListener('click', function (event) {
  event.preventDefault();
  toggleModal();
});
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', function (event) {
  if (event.target === refs.modal) {
    toggleModal();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
export {};
