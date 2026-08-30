// import JSON lang files
import langEs from '../../data/lang/es.json' with { typhe: 'json' };
import langEn from '../../data/lang/en.json' with { typhe: 'json' };

// get the btn lang
const btnLangToggle = document.querySelectorAll('.lang-toggle');

// set the initial lang based on the lang saved in localStorage
let localStorageLang = JSON.parse(localStorage.getItem('config')).lang;

// load the default lang settings
updateLangElements(localStorageLang);

// listener for the button toggle lang 
btnLangToggle.forEach((btn) => {
    btn.addEventListener('click', () => {
        // get the current lang when the button is clicked
        if (btn.textContent.trim() === 'ES'){
            // update the current lang to Es and save it to localStorage
            localStorageLang = 'es';
            updateLangElements(localStorageLang);
            // update the lang in localStorage
            updateLocalStorageLang(localStorageLang);
        }
        else if (btn.textContent.trim() === 'EN'){
            // update the current lang to En and save it to localStorage
            localStorageLang = 'en';
            updateLangElements(localStorageLang);
            // update the lang in localStorage
            updateLocalStorageLang(localStorageLang);
        }
    });
})

function updateLangElements(lang){
    // get the current lang and update to the btn textContent
    if (lang === 'es'){
        btnLangToggle.forEach((btn) => {
            btn.textContent = 'EN';
        });
    }else if(lang === 'en'){
        btnLangToggle.forEach((btn) => {
            btn.textContent = 'ES';
        });
    }

    // get all elements to translate
    const elementsToTranslate = document.querySelectorAll('[data-section]');
    // loop for each element to translate
    elementsToTranslate.forEach((element) => {
        //verify what lang is selected to use right JSON file
        if (lang === 'es'){
            // get the section and key from the element
            element.innerHTML = langEs[element.dataset.section][element.dataset.value];

        }else if (lang === 'en'){
            // get the section and key from the element
            element.innerHTML = langEn[element.dataset.section][element.dataset.value];
        }
        // depuring
        // console.log('langElements: ', elementsToTranslate);
    })
    // depuring
    //console.log(lang,' is on')
}

function updateLocalStorageLang(lang){
    // get the current config from localStorage
    let getConfig = JSON.parse(localStorage.getItem('config'));
    // update the lang for the new one and update the 
    getConfig.lang = lang;
    // save the new config to the localStorage
    localStorage.setItem('config', JSON.stringify(getConfig));
}