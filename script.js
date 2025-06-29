const container = document.getElementById("grid-container");
const buttonBox = document.getElementById("button-box");
const colorPalette = document.getElementById("color-palette");
const optionsToolbar = document.getElementById("options-toolbar");

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

const gridOnButton = document.createElement('button');
gridOnButton.classList.add('grid-on-button');
gridOnButton.textContent = "Grid On";
optionsToolbar.appendChild(gridOnButton);

const gridOffButton = document.createElement('button');
gridOffButton.classList.add('grid-off-button');
gridOffButton.textContent = "Grid Off";
optionsToolbar.appendChild(gridOffButton);

const hoverModeButton = document.createElement('button');
hoverModeButton.classList.add('hover-mode-button');
hoverModeButton.textContent = "Hover";
optionsToolbar.appendChild(hoverModeButton);

const clickModeButton = document.createElement('button');
clickModeButton.classList.add('click-mode-button');
clickModeButton.textContent = "Click";
optionsToolbar.appendChild(clickModeButton);

let gridSize = 16;
let paintColor = 'black';
let gridColor = 'grey';
let paintMode = 'mouseover';

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

gridOnButton.addEventListener('click', () => {
    gridColor = 'grey';
    document.querySelectorAll('.grid-squares').forEach(square => {
        square.style.borderColor = 'grey';
    });
});

gridOffButton.addEventListener('click', () => {
    gridColor = 'transparent';
    document.querySelectorAll('.grid-squares').forEach(square => {
        square.style.borderColor = 'transparent';
    });
});

hoverModeButton.addEventListener('click', () => {
    updatePaintMode('mouseover');
});

clickModeButton.addEventListener('click', () => {
    updatePaintMode('click');
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

function paintSquare(e) {
    e.target.style.backgroundColor = paintColor;
}

function updatePaintMode(newMode) {
    const squares = document.querySelectorAll('.grid-squares');
    squares.forEach(square => {
        square.removeEventListener('click', paintSquare);
        square.removeEventListener('mouseover', paintSquare);

        square.addEventListener(newMode, paintSquare);
    });

    paintMode = newMode;
}

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

        gridSquares.addEventListener(paintMode, paintSquare);
    }
}

