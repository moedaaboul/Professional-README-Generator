// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { badges, renderLicenseBadge } = require('./badges');
const { renderLicenseLink, renderLicenseSection } = require('./renderLicense');
const renderLink = require('./renderLink');

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

  const tableofContents = [
    '[Description](#description)',
    '[Installation](#installation)',
    '[Usage](#usage)',
    renderLink(contributing, 'contributing'),
    renderLink(tests, 'tests'),
    '[Questions](#questions)',
    renderLicenseLink(license),
  ]
    .filter((e) => e !== '')
    .map((e) => '- ' + e)
    .join('\n');

  return `# ${title}

${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

${tableofContents}

## Installation

​Install dependencies using: 

    ${installation}

## Usage

Run app using: 

    ${usage}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Created by: [@${username}](https://github.com/${username})
            
Feel free to contact me via [${email}](${email}) !

${renderLicenseSection(license)}

`;
};

module.exports = generateMarkdown;
