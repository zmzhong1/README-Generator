// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateREADME = require('./markdown.js')

// TODO: Create an array of questions for user input
const questions = [

    //Title 1
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name? ', 
    },

    //Description 2
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project ',
    },

    //Installation 3  
    {
        type: 'input',
        name: 'installation',
        message: 'Please write a short description of the installation instructions ',
    },

    //Usage 4
    {
        type: 'input',
        name: 'usage',
        message: 'Please write a short description of usage information ',
    },

    //Contributing 5
    {
        type: 'input',
        name: 'contribution',
        message: 'Please write a short description of contribution guidelines ', 
    },

    //Tests 6
    {
        type: 'input',
        name: 'test',
        message: 'Please write a short description of test instructions ',
    },

    //List of badge 7
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? ',
        choices: ['Apache', new inquirer.Separator(), 'Eclipse', new inquirer.Separator(), 'MIT', new inquirer.Separator(), 'Mozilla', new inquirer.Separator(),]
    },

    //gitHub username 8
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username? ',
    },

    //email 9
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions) 
    .then((response) => {
        // console.log(response)

        if (response.license === "Apache") {
            response.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (response.license === "Eclipse") {
            response.license =  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        } else if (response.license === "MIT") {
            response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else {
            response.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }

        const responseInfo = generateREADME(response)
        writeToFile("READ", responseInfo)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.error(err) : console.log('Generating READ.md...')})
}

// Function call to initialize app
init();
