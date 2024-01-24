// Write tests for each shape class using Jest
const { Circle, Triangle, Square } = require('./shape');

describe('Shape tests', () => {
  test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 20 250, 180 50, 180" fill="blue" />');
  });

  test('Square render method', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
