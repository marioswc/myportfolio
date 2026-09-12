// import experience JSON data
import experience from '../../data/experience.json' with { type: 'json' };

// get the button experience 
const btnExperience = document.getElementById('expand-experience');
// get the arrow experience
const expArrow = btnExperience.querySelector('svg');
// get the current experience section
const currentExpSection = document.getElementById('current-experience');
// get the previous experience section
const prevExpSection = document.getElementById('prev-experience');

// first we need to render the experience section
renderExperience();

// add event listener to the button experience
btnExperience.addEventListener('click', showExperience);

function showExperience(){
    expArrow.classList.toggle('-rotate-180');
    prevExpSection.classList.toggle('show-exp');
    
}

function renderExperience(){
    // render the current experience section
    renderCurrentExp();
    // verify if the previous experience has data
    if (!experience.previous || experience.previous.length === 0) {
        // create the div element and h3 element
        const noDataDiv = document.createElement('div');
        const noDataH3 = document.createElement('h3');
        // add class name to the elements
        noDataDiv.className = 'p-4 my-2';
        noDataH3.className = 'text-xs text-center font-bold text-(--text) uppercase';
        // set the attributes for translate in the h3 element
        noDataH3.setAttribute('data-section', 'experience');
        noDataH3.setAttribute('data-value', 'noData');
        // se the textContent for the h3 element
        noDataH3.textContent = 'No previous experience available';
        // append the h3 element to the div element
        noDataDiv.appendChild(noDataH3);
        // append the div element to the previous experience section
        prevExpSection.appendChild(noDataDiv);
    }else{
        renderPrevExp();
    }
}

function renderCurrentExp(){
    // create the elements for the current experience
        // create a new div element for each experience
        const mainDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const titleH3 = document.createElement('h3');
        const companyDiv = document.createElement('div');
        const companyP = document.createElement('p');
        const descDiv = document.createElement('div');
        const descP = document.createElement('p');
        const stackDiv = document.createElement('div');

        // add class names to each element
        mainDiv.className = 'rounded-lg';
        titleDiv.className = 'flex items-center justify-between';
        titleH3.className = 'text-md font-bold text-(--text) uppercase';
        companyDiv.className = 'flex items-center flex-col gap-2';
        companyP.className = 'text-xs md:text-sm font-semibold text-(--text)';
        descP.className = 'text-xs md:text-sm text-(--text-surface)';
        stackDiv.className = 'flex flex-wrap gap-2 mt-4';

        // set attributes for translate in the description
        descP.setAttribute('data-section', 'experience');
        descP.setAttribute('data-subsection', 'currentExperience');
        descP.setAttribute('data-value', 'description');

        // set the values for each element
        titleH3.textContent = experience.current.title;
        companyP.textContent = experience.current.company;
        descP.textContent = experience.current.description;

        // loop for each stack item
        experience.current.stack.forEach((item) => {
            // create the element for each stack item
            const stackP = document.createElement('p');
            // add class names to the stack item
            stackP.className = 'text-[10px] text-(--text-surface) border border-(--text-surface) p-1 rounded-sm hover:text-(--surface-hover) hover:border-(--surface-hover) transition-colors duration-300 ease-in-out';
            // set the value for the stack item
            stackP.textContent = item;
            // append the stack item to the stack div
            stackDiv.appendChild(stackP);
        })

        // append the elements to their parent elements
        companyDiv.appendChild(companyP);
        titleDiv.appendChild(titleH3);
        titleDiv.appendChild(companyDiv);
        descDiv.appendChild(descP);
        
        // append the elements to the main div
        mainDiv.appendChild(titleDiv);
        mainDiv.appendChild(descDiv);
        mainDiv.appendChild(stackDiv);
        currentExpSection.appendChild(mainDiv);
}

function renderPrevExp(){
    // loop for each prev experience
    experience.previous.forEach((exp) => {
        // create a new div element for each experience
        const mainDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const titleH3 = document.createElement('h3');
        const companyDiv = document.createElement('div');
        const companyP = document.createElement('p');
        const descDiv = document.createElement('div');
        const descP = document.createElement('p');
        const stackDiv = document.createElement('div');

        // add class names to each element
        mainDiv.className = 'rounded-lg p-4';
        titleDiv.className = 'flex items-center justify-between';
        titleH3.className = 'text-md font-bold text-(--text) uppercase';
        companyDiv.className = 'flex items-center flex-col gap-2';
        companyP.className = 'text-xs md:text-sm font-semibold text-(--text)';
        descP.className = 'text-xs md:text-sm text-(--text-surface)';
        stackDiv.className = 'flex flex-wrap gap-2 mt-4';

        // in the future set attributes for translate in the description

        // set the values for each element
        titleH3.textContent = exp.title;
        companyP.textContent = exp.company;
        descP.textContent = exp.description;

        // loop for each stack item
        exp.stack.forEach((item) => {
            // create the element p for each stack item
            const stackP = document.createElement('p');
            // add class names to the stack item
            stackP.className = 'text-[10px] text-(--text-surface) border border-(--text-surface) p-1 rounded-sm hover:text-(--surface-hover) hover:border-(--surface-hover) transition-colors duration-300 ease-in-out';
            // set the value for the stack item
            stackP.textContent = item;
            // append the stack item to the stack div
            stackDiv.appendChild(stackP);
        });

        // append the elements to their parent elements
        companyDiv.appendChild(companyP);
        titleDiv.appendChild(titleH3);
        titleDiv.appendChild(companyDiv);
        descDiv.appendChild(descP);

        // append the elements to the main div
        mainDiv.appendChild(titleDiv);
        mainDiv.appendChild(descDiv);
        mainDiv.appendChild(stackDiv);
        prevExpSection.appendChild(mainDiv);
    });
}