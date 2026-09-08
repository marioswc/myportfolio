// import JSON lang files
import langEs from '../../data/lang/es.json' with { type: 'json' };
import langEn from '../../data/lang/en.json' with { type: 'json' };

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
            // verify if the element has subsection
            if (element.dataset.subsection){
                // get the section and update the element
                element.textContent = langEs[element.dataset.section][element.dataset.subsection][element.dataset.value];
            }else{
                // verify if the element has title and aria-label
                if (element.hasAttribute('title') && element.hasAttribute('aria-label')){
                    element.setAttribute('title', langEs[element.dataset.section][element.dataset.value]);
                    element.setAttribute('aria-label', langEs[element.dataset.section][element.dataset.value]);
                }else{
                    // update the element textContent
                    element.textContent = langEs[element.dataset.section][element.dataset.value];
                }
            }
            
        }else if (lang === 'en'){
            // verify if the element has subsection
            if (element.dataset.subsection){
                // get the section and update the element
                element.textContent = langEn[element.dataset.section][element.dataset.subsection][element.dataset.value];
            }else{
                // verify if the element has title and aria-label
                if (element.hasAttribute('title') && element.hasAttribute('aria-label')){
                    element.setAttribute('title', langEn[element.dataset.section][element.dataset.value]);
                    element.setAttribute('aria-label', langEn[element.dataset.section][element.dataset.value]);
                }else{
                    // update the element textContent
                    element.textContent = langEn[element.dataset.section][element.dataset.value];
                }
            }
        }
        // depuring
        // console.log('langElements: ', elementsToTranslate);
    });
}

function updateLocalStorageLang(lang){
    // get the current config from localStorage
    let getConfig = JSON.parse(localStorage.getItem('config'));
    // update the lang for the new one and update the 
    getConfig.lang = lang;
    // save the new config to the localStorage
    localStorage.setItem('config', JSON.stringify(getConfig));
}