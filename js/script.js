const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('.color-picker');
const colorBtn = document.querySelector('.color-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const sizeText = document.querySelector('.size-text');
const slider = document.querySelector('.slider');
let color = '#3B3B3B';
let currentPen = 'color';

colorPicker.addEventListener('input', (e) => color = e.target.value);
colorBtn.addEventListener('click', getColorPen); 
rainbowBtn.addEventListener('click', getRainbowPen);
eraserBtn.addEventListener('click', getEraserPen);
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

function getColorPen(){
  currentPen = 'color';
  changePen('color');
}

function getRainbowPen(){
  currentPen = 'rainbow';
  changePen('rainbow');
}

function getEraserPen(){
  currentPen = 'eraser';
  changePen('eraser');
}

function changePen(currentPen){
  if (currentPen === 'color') {
    colorBtn.classList.add('active');
    rainbowBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
  }  
  if (currentPen === 'rainbow') {
    rainbowBtn.classList.add('active')
    colorBtn.classList.remove('active')
    eraserBtn.classList.remove('active')
  } 
  if (currentPen === 'eraser') {
    eraserBtn.classList.add('active');
    colorBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
  }
}

function changeSquareColor() {
  if (currentPen === 'color') {
    const previousColor = color;
    this.style.backgroundColor = previousColor;
  }
  if (currentPen === 'rainbow') {
    this.style.backgroundColor = getRandomColor();
  }
  if (currentPen === 'eraser') {
    this.style.backgroundColor = '#fefefe';
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