// set up the flexbox grid
const gridContainer = document.createElement("div");
gridContainer.id = "container";
document.body.appendChild(gridContainer);

// set grid height and width: n
let n = 16;
for ( let i = 0; i < (n * n); i++ ) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    gridContainer.appendChild(square);
}