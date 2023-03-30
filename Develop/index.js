// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const chalkPipe = require('chalk-pipe')
const generateMarkdown = require('./utils/generateMarkdown.js');
inquirer.registerPrompt('chalk-pipe', require('.'));
// TODO: Create an array of questions for user input


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
     type: 'editor',
    name: 'description',
    message: 'Please write a short description of at least 3 lines. New Text editor window will open to finish close it',
            validate(text) {
              if (text.split('\n').length < 2) {
                return 'Must be at least 2 lines.';
              }
        
              return true;
            },
            waitUserInput: true,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   const fileNameToUse = fileName;
   const readmeRender =  generateMarkdown(data);
    fs.writeFile(fileNameToUse, readmeRender, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
  
 const readmeTitle = 'README.md';
    const readmeRender =  generateMarkdown(answers);
    console.log(JSON.stringify(answers, null, '  '));
  try
  { 
writeToFile(readmeTitle, answers);
  }catch(err){
  console.log(err);
}
    
  });
}
// Function call to initialize app
init();
