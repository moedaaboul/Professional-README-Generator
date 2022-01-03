// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { badges, renderLicenseBadge } = require("./badges");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    username,
    email,
  } = data;

  return `# ${title}

${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License
This work is licensed under
[${license}](https://github.com/${username}/${username}.github.io/blob/main/LICENSE).

## Contributing

${contributing}

## Tests

${tests}

## Questions

Created by  -[@${username}](https://github.com/${username})
            

- Feel free to contact me via [${email}](${email})!

`;
};

module.exports = generateMarkdown;
