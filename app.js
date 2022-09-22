// Global selections and variables
const colorsDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexex = document.querySelectorAll('.color h2');
let initialColors;

//Functions

//Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorsDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // Add color to the background
    div.style.backgroundColor = randomColor;
    hexText.textContent = randomColor;
  });
}
randomColors();
