// add Etch-a-Sketch title
const pageTitle = document.createElement("div");
pageTitle.textContent = "Etch-a-Sketch Sketchpad";
pageTitle.id = "page-title";
document.body.appendChild(pageTitle);

// create input box to define grid size
const inputLabel = document.createElement("label");
inputLabel.textContent = "Enter a grid size: ";
const inputBox = document.createElement("input");
inputBox.id = "input-box";
const generateGridButton = document.createElement("button");
generateGridButton.textContent = "Generate Grid";
generateGridButton.id = "generate-grid-button";

// set up the header container
const headerContainer = document.createElement("div");
headerContainer.id = "header";
document.body.appendChild(headerContainer);

// append the label, input, and button to the document body, not container
headerContainer.appendChild(inputLabel);
headerContainer.appendChild(inputBox);
headerContainer.appendChild(generateGridButton);

// set up the flexbox container grid
const gridContainer = document.createElement("div");
gridContainer.id = "container";
document.body.appendChild(gridContainer);

function createGrid(size) {

    // Clear existing grid
    gridContainer.innerHTML = '';

    // Calculate size of each square dynamically
    const squareSize = 100 / size; // Percentage for responsive sizing

    // Generate grid items
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.flexBasis = `${squareSize}%`; // Set width dynamically
        square.style.aspectRatio = '1 / 1'; // Maintain square shape

        /*
        // Add event listener for hover effect - random color
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor(); // call random color function upon mouseover
        });
        */

        // not using CSS opacity style
        // Initialize the square's darkness level
        let darkness = 0;

        // Add event listener for hover effect - darken by 10% until the square becomes black in 10 interactions
        square.addEventListener('mouseover', () => {
            darkness = Math.min(darkness + 0.1, 1); // Increase darkness by 10%, cap at 100%
            square.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`; // Darken the color
        });
        
        /* // using CSS opacity style
        // initialize square opacity of fully transparent
        square.style.backgroundColor = 'black';
        square.style.opacity = '0';
        square.style.backgroundClip = 'padding-box';
        square.style.borderColor = '1px solid rgba(255, 255, 255, .1)';

        // Add event listener for hover effect - darken by 10% until the square becomes black in 10 interactions
        square.addEventListener('mouseover', () => {
            const currentOpacity = parseFloat(square.style.opacity); // Increase darkness by 10%, cap at 100%
            square.style.opacity = Math.min(currentOpacity + 0.1, 1); // Darken the color
        });
        */

        gridContainer.appendChild(square);
    }

}

// Event listener for the generate button
generateGridButton.addEventListener('click', () => {
    const size = parseInt(inputBox.value);
    if (!isNaN(size) && size > 0 && size < 65) {
        createGrid(size);
    } else {
        alert('Please enter a valid positive number less than 65.');
    }
});

// event listener for enter button if the input field is focused
inputBox.addEventListener('keypress', (e) => {
    if (document.activeElement === inputBox && e.key === "Enter") {
        generateGridButton.click();
    }
});

// function for randomizing colors of mouse cursor hover / mouseover
function randomColor() {
    const codes = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += codes[Math.floor(Math.random() * 16)];
    }
    return color;
}