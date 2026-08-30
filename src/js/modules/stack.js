// import the JSON with Stack Information
import stack from '../../data/stack.json' with { type: 'json'};

// get all elements with the data-stack attribute
const sectionStack = document.querySelectorAll('[data-stack]');

// loop through each sectionStack element and populate it with the corresponding stack information
sectionStack.forEach((section) => {
    // get the value of the data-name attribute
    const stackValue = section.dataset.name;

    // get the stack items for the current section
    const stackItems = stack[stackValue];

    // avoid undefined items before the loop
    if (!stackItems){
        console.log('No stack items found for', stackValue);
        return;
    }

    // loop to create and append the stack items to their section
    stackItems.forEach((item) => {
        // depuring foreach
        //console.log('items in stackInfoName', item);

        // create a new p element and add it a className
        const stackPElement = document.createElement('p');
        stackPElement.className = 'text-[12px] text-center text-(--text) border border-(--text) p-1 rounded-sm hover:text-(--surface-hover) hover:border-(--surface-hover) transition-colors duration-300 ease-in-out';

        // set the value to the p element and append it to their section
        stackPElement.textContent = item;
        section.appendChild(stackPElement);
    });
    // depuring code
    // console.log('stack value:', stackValue);
    // console.log('stack items:', stackItems);
})

