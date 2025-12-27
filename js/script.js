document.addEventListener('DOMContentLoaded', () => {
    // 1. Бургер-меню (Интерактив №1)
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            burger.classList.toggle('toggle'); // Для анимации иконки
            console.log("Бургер-меню переключено");
        });
    }

    // 2. Модальное окно (Интерактив №2)
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');

    if (openModal && modal) {
        openModal.addEventListener('click', (e) => {
            e.preventDefault(); // Чтобы ссылка не перезагружала страницу
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false'); // Для доступности [cite: 33, 35]
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        });

        // Закрытие при клике на темный фон вне окна
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // 3. Переключатель темы (Интерактив №3)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            body.setAttribute('data-theme', isDark ? 'light' : 'dark');
            themeBtn.textContent = isDark ? 'Dark Mode' : 'Light Mode';
            console.log("Тема изменена");
        });
    }
});
