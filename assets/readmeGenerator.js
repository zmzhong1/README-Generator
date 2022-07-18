const index = require('./index.js')

const readmeData = () => {
    `## # ${index.title}

    ## ${index.license}

    ## Table of Content
    - [Project Description](#description)
    - [Installation Instructions](#installation)
    - [Usage Information](#usage)
    - [Contribution Guidelines](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description 

    ${index.description}

    ## Installation

    ${index.installation}

    ## Usage

    ${index.usage}

    ## Contribution

    ${index.contribution}

    ## Tests

    ${index.test}

    ## Questions

    <a href="https://www.github.com/${index.userName}" target="_blank">Github</a>
`   


}
