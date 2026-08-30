// get menu toggle button
const btnMenuToggle = document.getElementById('menu-toggle');
// get the menu mobile
const mobileMenu = document.getElementById('menu-mobile');

// toggle menu mobile
btnMenuToggle.addEventListener('click', () => {
    btnMenuToggle.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
});