const gridContainer = document.querySelector('.grid-container');
const rainbowBtn = document.querySelector('.rainbow-btn');
const clearBtn = document.querySelector('.clear-btn');
const sizeText = document.querySelector('.size-text');
const slider = document.querySelector('.slider');
let color = '#3B3B3B';
let currentPen = 'default';

rainbowBtn.addEventListener('click', () => currentPen = 'rainbow')
clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('input', updateGridSize);

function createGrid(size = 16){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < (size * size); i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', ()=>{
      if (currentPen === 'default'){
        gridItem.style.backgroundColor = color;
      }
      else if (currentPen === 'rainbow'){
        gridItem.style.backgroundColor = getRandomColor();
      }
    });
    gridContainer.appendChild(gridItem);
  }
}

// Set up a hover effect so that the grid divs change color when the mouse passes over them
// function changeSquareColor() {
//     this.style.backgroundColor = color;
// }

function getRandomColor () {
  let letters = '0123456789ABCDEF'.split('');
  let randomColor = '#';

  for (let i = 0; i < 6; i++){
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

function clearGrid(){
  const square = document.querySelectorAll('.grid-item');
  square.forEach((square) => 
    square.style.backgroundColor = 'transparent'
  )
}

function updateGridSize(e){
  size = e.target.value;
  sizeText.textContent = `${size} x ${size}`;
  gridContainer.innerHTML = '';
  createGrid(size);
}

createGrid();

  // eraser = #fefefe;
  // color-picker: color value 
  // add 10% of black(or white) to color so that only after 10 passes is the square completely black (or white).
  
