const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('.color-picker');
const colorBtn = document.querySelector('.color-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const sizeText = document.querySelector('.size-text');
const slider = document.querySelector('.slider');
let color = '#3B3B3B';
let currentPen = 'default';

colorPicker.addEventListener('input', (e) => color = e.target.value);
colorBtn.addEventListener('click', () => {
  currentPen = 'color'
  changePen('color')
});
rainbowBtn.addEventListener('click', () => {
  currentPen = 'rainbow'
  changePen('rainbow')
});
eraserBtn.addEventListener('click', () => {
  currentPen = 'eraser'
  changePen('eraser')
})
clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('input', updateGridSize);

function createGrid(size = 16) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < (size * size); i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', changeSquareColor);
    gridContainer.appendChild(gridItem);
  }
}

function changePen(currentPen){
  if (currentPen === 'rainbow') {
    rainbowBtn.classList.add('active')
    colorBtn.classList.remove('active')
    eraserBtn.classList.remove('active')
  } 
  else if (currentPen === 'color') {
    colorBtn.classList.add('active');
    rainbowBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
  } 
  else if (currentPen === 'eraser') {
    eraserBtn.classList.add('active');
    colorBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
  }
}

function changeSquareColor() {
  if (currentPen === 'default') {
    this.style.backgroundColor = color;
  }
  else if (currentPen === 'rainbow') {
    this.style.backgroundColor = getRandomColor();
  }
  else if (currentPen === 'eraser') {
    this.style.backgroundColor = '#fefefe';
  }
  else if (currentPen === 'color') {
    const previousColor = color;
    this.style.backgroundColor = previousColor;
  }
}

function getRandomColor() {
  let letters = '0123456789ABCDEF'.split('');
  let randomColor = '#';

  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

function clearGrid() {
  const square = document.querySelectorAll('.grid-item');
  square.forEach((square) =>
    square.style.backgroundColor = 'transparent'
  )
}

function updateGridSize(e) {
  size = e.target.value;
  sizeText.textContent = `${size} x ${size}`;
  gridContainer.innerHTML = '';
  createGrid(size);
}

createGrid();