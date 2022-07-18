// const readmeData = () => {
    const generateREADME = (index) => {
        return `
## # ${index.title}

## ${index.license}

## Description 

${index.description}

## Table of Content
- [Installation Instructions](#installation)
- [Usage Information](#usage)
- [Contribution Guidelines](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${index.installation}

## Usage

${index.usage}

## Contribution

${index.contribution}

## Tests

${index.test}

## Questions

[Github Account](https://www.github.com/${index.userName})\n
[For additional questions reach our via my email](mailto:${index.email})

`
    }

module.exports = generateREADME;
