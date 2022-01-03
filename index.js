//  packages needed for this application
const inquirer = require("inquirer");
// function writeToFile
const { writeToFile } = require("./utils/file");
//  array of questions for user input
const { questions } = require("./utils/questions");
// function to write README file
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);
  writeToFile("test.md", markdown);
  console.log("Successfully created your professional README!");
};

// initialize app
init();
