const gridContainer = document.querySelector('.grid-container');

function createGrid(size = 16){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < (size * size); i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', getRandomColor);
    gridContainer.appendChild(gridItem);
  }
}
// Set up a hover effect so that the grid divs change color when the mouse passes over them
function defaultColor() {
    this.style.backgroundColor = '#3B3B3B';
}

function getRandomColor () {
  let letters = '0123456789ABCDEF'.split('');
  let randomColor = '#';

  for (let i = 0; i < 6; i++){
    randomColor += letters[Math.floor(Math.random() * 16)];
  }

  this.style.backgroundColor = randomColor;
}

createGrid();

  // default color = #3B3B3B;
  // eraser = #fefefe;
  // color-picker: color value 
  // add 10% of black(or white) to color so that only after 10 passes is the square completely black (or white).
  
  // clear grid()

// Add a function to change number of squares per side for the new grid. 
  //  The existing grid should be removed and a new grid should be generated in the same total space as before 
