
const readline = require('readline');
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shape');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Questions for the user to input
let logoText, textColor, shape, shapeColor;

rl.question('Enter up to three characters for the logo text: ', (text) => {
  if (text.length > 3) {
    console.log('Text too long, only up to three characters are allowed.');
    rl.close();
  } else {
    logoText = text;
    rl.question('Enter the text color (keyword or hex): ', (color) => {
      textColor = color;
      rl.question('Choose a shape (circle, triangle, square): ', (chosenShape) => {
        if (!['circle', 'triangle', 'square'].includes(chosenShape.toLowerCase())) {
          console.log('Invalid shape choice.');
          rl.close();
        } else {
          shape = chosenShape;
          rl.question('Enter the shape color (keyword or hex): ', (color) => {
            shapeColor = color;
            generateSVG(logoText, textColor, shape, shapeColor);
            rl.close();
          });
        }
      });
    });
  }
});

// Combine text, textColor, shape, and shapeColor to create SVG content
function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;
  switch (shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      console.error('Invalid shape type');
      return;
  }

  // Save to 'logo.svg'
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" fill="${textColor}" font-size="30" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;

  // Use fs.writeFile to save the SVG content
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}
