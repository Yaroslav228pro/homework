document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const openBtn = document.querySelector('.btn-open');
    const closeBtn = document.querySelector('.modal__close-btn');
    const body = document.body;

    openBtn.addEventListener('click', () => {
        modal.classList.add('modal--open');
        body.classList.add('modal-open');
    });

    const closeModal = () => {
        modal.classList.remove('modal--open');
        body.classList.remove('modal-open');
    };

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === closeBtn) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('modal--open')) {
            closeModal();
        }
    });
});