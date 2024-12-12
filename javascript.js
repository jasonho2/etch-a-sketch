// create input box to define grid size
const inputLabel = document.createElement("label");
inputLabel.textContent = "Enter a grid size: ";
const inputBox = document.createElement("input");
inputBox.id = "grid-size";
const generateGridButton = document.createElement("button");
generateGridButton.textContent = "Generate Grid";
generateGridButton.id = "generate-grid";

// append the label, input, and button to the document body, not container
document.body.appendChild(inputLabel);
document.body.appendChild(inputBox);
document.body.appendChild(generateGridButton);

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
        createGrid(size);
    }
});