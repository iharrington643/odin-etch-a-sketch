const container = document.getElementById("grid-container");
const buttonBox = document.getElementById("button-box");

const newGridButton = document.createElement('button');
newGridButton.classList.add('new-grid-button');
newGridButton.textContent = "Create New Grid";
buttonBox.appendChild(newGridButton);

let gridSize = 16;

createGrid(gridSize);

newGridButton.addEventListener('click', () => {
    let newSize = parseInt(prompt("How many squares per side? (Maximum of 100)"))

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Enter a number between 1 and 100.");
        return;
    }

    gridSize = newSize;
    createGrid(gridSize);
});

function createGrid(size) {
    container.innerHTML = '';
    const totalSquares = size * size;
    const squareSize = 640 / size;

    for (let i = 0; i < totalSquares; i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add("grid-squares");
        container.appendChild(gridSquares);

        gridSquares.style.width = `${squareSize}px`;
        gridSquares.style.height = `${squareSize}px`;

        gridSquares.addEventListener('mouseover', () => {
            gridSquares.style.backgroundColor = 'black';
        });
    }
}
