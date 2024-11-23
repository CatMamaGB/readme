// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import {select, Separator} from '@inquirer/prompts'

console.log(process.argv[1])

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application?', 
    'What is the description of your application?',
    'How do you install your application?',
    'How should people use your application?',
    'What are any licenses used to create your application?',
    'Who are those that contributed to the development of your application?',
    'What are the test instructions for your application?',
    'What is your GitHub Username?',
    'What is your email?'
];

inquirer.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'list',
        message: questions[4],
        name: 'licenses',
        choices: ['MIT License', 'Mozilla Public License', 'Microsoft Public LIcense', 'Eclipse Public License', 'None'
        ],
        
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contributors',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'testing',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
])
.then((response) => {
    console.log(response)
    writeToFile(response)
   
})



// TODO: Create a function to write README file
function writeToFile(data) {
    let license = data.licenses
    let description
         if (data.licenses == 'MIT License') {
            description = 'The MIT License is an older license used to provide copyright protection.';
        } else if (data.licenses == 'Mozilla Public License') {
            description = 'The Mozilla Public License is used by Mozilla and Firefox. It provides copywrite protection and can be used in commercial applications.';
        } else if (data.licenses == 'Microsoft Public LIcense') {
            description = 'The Microsoft derives code that can be destributed for both commercial and non-commercial use. Any code that is redistributed must included a complete copy of the Microsoft Public License.';
        } else if (data.licenses == 'Eclipse Public License') {
            description = 'The Eclipse Public License is a newer version of the Common Public License, which allows it to be more acceptable to business.';
        } else if (data.licenses == 'None') {
            license = '';
            description = 'Please refer to the LICENSE in the repo.';
        }
const fileContent = `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contributors](#contributors)
- [Testing](#testing)
- [Contact](#contact-info-for-questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
#### ${license}
${description}

## Contributors
${data.contributors}

## Testing
${data.testing}

## Contact info for Questions
#### Github: 
<a href="https://github.com/${data.username}">${data.username}</a>

#### Email: 
<a href="mailto: ${data.email}">${data.email}</a>`


    fs.writeFile('README.md', fileContent, (err) =>
    err ? console.error(err) : console.log('Success!') )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();