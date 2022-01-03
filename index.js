// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/file");
const { questions } = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);
  writeToFile("test.md", markdown);
  console.log("Successfully created your professional README!");
};

// Function call to initialize app
init();
