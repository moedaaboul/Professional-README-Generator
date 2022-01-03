// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/file");
const { questions } = require("./utils/questions");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log("success");
};

// Function call to initialize app
init();
