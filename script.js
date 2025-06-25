const container = document.getElementById("grid-container");
const buttonBox = document.getElementById("button-box");
const colorPalette = document.getElementById("color-palette");

const newGridButton = document.createElement('button');
newGridButton.classList.add('new-grid-button');
newGridButton.textContent = "Create New Grid";
buttonBox.appendChild(newGridButton);

const redButton = document.createElement('button');
redButton.classList.add('red-button');
colorPalette.appendChild(redButton);

const yellowButton = document.createElement('button');
yellowButton.classList.add('yellow-button');
colorPalette.appendChild(yellowButton);

const blueButton = document.createElement('button');
blueButton.classList.add('blue-button');
colorPalette.appendChild(blueButton);

const blackButton = document.createElement('button');
blackButton.classList.add('black-button');
colorPalette.appendChild(blackButton);

const eraseButton = document.createElement('button');
eraseButton.classList.add('erase-button');
eraseButton.textContent = "Erase";
colorPalette.appendChild(eraseButton);

let gridSize = 16;
let paintColor = 'black';

createGrid(gridSize);

redButton.addEventListener('click', () => {
    paintColor = 'red';
});

yellowButton.addEventListener('click', () => {
    paintColor = 'yellow';
});

blueButton.addEventListener('click', () => {
    paintColor = 'blue';
});

blackButton.addEventListener('click', () => {
    paintColor = 'black';
});

eraseButton.addEventListener('click', () => {
    paintColor = 'white';
});

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
            gridSquares.style.backgroundColor = paintColor;
        });
    }
}

