// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the project title?',
        name: 'Title',

    },
    {
        type: 'input',
        message: 'Your Projects Description?',
        name: 'Description',

    },
    {
        type: 'input',
        message: 'Installation Process?',
        name: 'Installation',

    },
    {

        type: 'input',
        message: 'How do you use this project? Usage?',
        name: 'Usage',

    },
    {

        type: 'input',
        message: 'Any contributions to this project?',
        name: 'Contribution',

    },
    {

        type: 'input',
        message: 'If any, type of tests performed on this project?',
        name: 'Tests',

    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();