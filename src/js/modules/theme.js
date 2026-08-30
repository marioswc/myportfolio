// get the current theme from localStorage
let localStorageTheme = JSON.parse(localStorage.getItem('config')).theme;
// get the elements to change when the theme changes
const body = document.body;
// get button icons theme
const iconSun = document.querySelectorAll('.icon-sun');
const iconMoon = document.querySelectorAll('.icon-moon');
// get the logos 
const logoLight = document.getElementById('logo-light');
const logoDark = document.getElementById('logo-dark');
// get the toggle btn
const btnThemeToggle = document.querySelectorAll('.theme-toggle');

// set the initial theme based on the currentTheme saved in localStorage
updateThemeElements(localStorageTheme);

// loop to get the btns mobile and desktop to toggle the themes
btnThemeToggle.forEach((btn) => {
    // for nav desktop
    btn.addEventListener('click', () => {
        // toggle the theme
        body.classList.toggle('light');

        // verify the state of the theme and update elements and localStorage
        if(body.classList.contains('light')){
            updateThemeElements('light');
            updateLocalStorageTheme('light');
        }else{
            updateThemeElements('dark');
            updateLocalStorageTheme('dark');
        }
    });
});

function updateThemeElements(theme){
    // console.log('updating theme elements');
    if (theme === 'light'){
        // update the body class
        body.classList.add('light');
        // update the icons
        iconSun.forEach((icon) => {
            icon.classList.add('hidden');
        });
        iconMoon.forEach((icon) => {
            icon.classList.remove('hidden');
        });
        // update the logos
        logoLight.classList.add('hidden');
        logoDark.classList.remove('hidden');

    }else if (theme === 'dark'){
        // update the body class
        body.classList.remove('light');
        // update the icons
        iconSun.forEach((icon) => {
            icon.classList.remove('hidden');
        });
        iconMoon.forEach((icon) => {
            icon.classList.add('hidden');
        });
        // update the logos
        logoLight.classList.remove('hidden');
        logoDark.classList.add('hidden');
    }
}

function updateLocalStorageTheme(theme){
    // get the current config from localStorage (the old one)
    const getConfig = JSON.parse(localStorage.getItem('config'));
    console.log('current theme:', getConfig.theme, 'will be updated to:', theme);
    // update the old theme for the new theme selelected 
    getConfig.theme = theme;
    // update the localStorage with the new config
    localStorage.setItem('config', JSON.stringify(getConfig));

    //console.log('localStorage updated with new theme:', JSON.parse(localStorage.getItem('config')));
}