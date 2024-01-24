# SVG-Logo-Maker
Video link on how the project works: 

Object-oriented Programming Challenge: SVG Logo Maker

## Overview

Build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Features

- **Command-line application:** When users run node index.js in the command-line, the prompt pops up for the users to input 3 letters, select the text color, select the shape, and select the shape color to generate the SVG Logo. 

## Technologies

- **Inquirer:** Inquirer for collecting input from the user.
- **Jest:** Jest for running the unit tests.
- **Readline:** Readline to interact with the user.

## Project Files

- **index.js:** Runs the application using imports from shape.js.
- **shape.js:** Exports `Triangle`, `Circle`, and `Square` classes.
- **shape.test.js:** Jest tests for shapes.
- **logo.svg:** svg file created with the app.

## License

This project is under the [MIT License](LICENSE).

![SVG Logo Maker]