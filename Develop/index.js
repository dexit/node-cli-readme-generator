// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your REPO ?",
         },
         {
            type: 'editor',
            name: 'bio',
            message: 'Please write a short bio of at least 3 lines.',
            validate(text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
            waitUserInput: true,
          },
];



inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
