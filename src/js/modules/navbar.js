// get menu toggle button
const btnMenuToggle = document.getElementById('menu-toggle');
// get the menu mobile
const mobileMenu = document.getElementById('menu-mobile');
// get all a elements in the menu mobile
const mobileMenuElements = mobileMenu.querySelectorAll('a, button');

// toggle menu mobile
btnMenuToggle.addEventListener('click', () => {
    // toggle the states for the btn and menu
    btnMenuToggle.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
});

// close menu mobile when a link is clicked
mobileMenuElements.forEach((element) => {
    // add event listener to each link element
    element.addEventListener('click', closeMenuMobile);
});

// listener when the click is outside the menu
document.addEventListener('click', (event) => {
    // check if the menu is open
    if (mobileMenu.classList.contains('is-open')){
        // console.log('menu is open');
        if (!btnMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)){
            closeMenuMobile();
            // depuring
            // console.log('click outside menu');
        }
    }
});

// function to close menu mobile
function closeMenuMobile() {
    btnMenuToggle.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
}