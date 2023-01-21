const gridContainer = document.querySelector('.grid-container');

function createGrid(size = 16){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < (size * size); i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }
}

createGrid();

// Set up a hover effect so that the grid divs change color when the mouse passes over them
  // default color = black
  // reset() = white
  // color-picker: color value 
  // random RGB value
  // add 10% of black(or white) to color so that only after 10 passes is the square completely black (or white).
  

// Add a function to change number of squares per side for the new grid. 
  //  The existing grid should be removed and a new grid should be generated in the same total space as before 
