const renderContributingSection = (contributing) => {
  if (contributing) {
    return `## Contributing
${contributing}`;
  } else {
    return '';
  }
};

const renderTestsSection = (tests) => {
  if (tests) {
    return `## Tests
${tests}`;
  } else {
    return '';
  }
};

const renderQuestionsSection = (username, email, license) => {
  return `## Questions
  
Created by: [@${username}](https://github.com/${username})
                
Feel free to contact me via [${email}](${email}) !`;
};

const renderDescriptionSection = (description) => {
  if (description) {
    return `## Description

${description}`;
  } else {
    return '';
  }
};

const renderTableofContents = (tableofContents) => {
  if (tableofContents) {
    return `## Table of Contents

${tableofContents}`;
  } else {
    return '';
  }
};

const renderTitle = (title) => {
  return `# ${title}`;
};

const renderInstallationSection = (installation) => {
  if (installation) {
    return `## Installation

​Install dependencies using: 
    
    ${installation}`;
  } else {
    return '';
  }
};

const renderUsageSection = (usage) => {
  if (usage) {
    return `## Usage

Run app using: 
    
    ${usage}`;
  } else {
    return '';
  }
};

module.exports = {
  renderTitle,
  renderContributingSection,
  renderTestsSection,
  renderQuestionsSection,
  renderDescriptionSection,
  renderTableofContents,
  renderInstallationSection,
  renderUsageSection,
};
