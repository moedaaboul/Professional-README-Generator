const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter project description',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Populate code block for installing dependencies',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter code block for running the application',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter test instructions',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose license',
    name: 'license',
    choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'No License'],
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address ? ',
    name: 'email',
  },
];

module.exports = questions;
