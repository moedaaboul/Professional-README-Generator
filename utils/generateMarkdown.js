// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { renderLicenseBadge } = require('./badges');
const { renderLicenseLink, renderLicenseSection } = require('./renderLicense');
const renderLink = require('./renderLink');
const {
  renderTitle,
  renderContributingSection,
  renderTestsSection,
  renderQuestionsSection,
  renderDescriptionSection,
  renderTableofContents,
  renderInstallationSection,
  renderUsageSection,
} = require('./renderSections');
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

  // returns ToC as per selection (i.e. non-blanks) or in the case of license link (no license)
  const tableofContents = [
    renderLink(description, 'description'),
    renderLink(installation, 'installation'),
    renderLink(usage, 'usage'),
    renderLink(contributing, 'contributing'),
    renderLink(tests, 'tests'),
    '[Questions](#questions)',
    renderLicenseLink(license, 'license'),
  ]
    .filter((e) => e !== '')
    .map((e) => '- ' + e)
    .join('\n');

  return `${renderTitle(title)}

${renderLicenseBadge(license)}

${renderDescriptionSection(description)}

${renderTableofContents(tableofContents)}

${renderInstallationSection(installation)}

${renderUsageSection(usage)}

${renderContributingSection(contributing)}

${renderTestsSection(tests)}

${renderQuestionsSection(username, email)}

${renderLicenseSection(license)}

`;
};

module.exports = generateMarkdown;
