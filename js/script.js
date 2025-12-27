document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');

    // Бургер-меню (интерактивность 1) [cite: 23]
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Модальное окно (интерактивность 2) [cite: 24]
    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});
