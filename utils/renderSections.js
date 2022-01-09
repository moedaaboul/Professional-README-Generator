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

const renderQuestionsSection = (username, email) => {
  let createdByString = '';
  let emailString = '';
  if (username) {
    createdByString = `Created by: [@${username}](https://github.com/${username})`;
  }
  if (email) {
    emailString = `via [${email}](${email})`;
  }
  return `## Questions
  
${createdByString}
                
Feel free to contact me ${emailString}!`;
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
