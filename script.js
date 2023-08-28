const container = document.querySelector(".container");
const boxes = document.querySelector(".boxes");
let squarePerSide;

function begin() {
    squarePerSide = prompt("Please enter the amount of squares per side for your grid (100 or less please");
    if (squarePerSide > 64) {
        begin();
    } else if (squarePerSide <= 64) {
        establishSquares();
    }
}

function establishSquares() {
    const cellSize = container.offsetWidth / squarePerSide; // Calculate cell size based on container width

    for (let i = 1; i <= squarePerSide; i++) {
        for (let j = 1; j <= squarePerSide; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize + "px"; // Set cell width
            cell.style.height = cellSize + "px"; // Set cell height
            boxes.appendChild(cell);
        }
    }

    const width = document.querySelector(".boxes");
    width.style.gridTemplateColumns = `repeat(${squarePerSide}, ${cellSize}px)`;

    const cells = document.querySelectorAll(".boxes .cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.classList.add('hovered');
        });
    });
}


eraseButton.addEventListener('click', () => {
    console.log("Your choice");
  });

rainbowButton.addEventListener('click', () => {
    console.log("Your choice");
  });

begin()