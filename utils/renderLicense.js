// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `- [License](#license)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License
This work is licensed under
[${license}](#).`;
  } else {
    return ``;
  }
}

module.exports = { renderLicenseLink, renderLicenseSection };
