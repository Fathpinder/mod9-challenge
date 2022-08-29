// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter a project title",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter project description",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information",
    },
    {
      type: "input",
      name: "credits",
      message: "Enter credits",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Enter contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Enter test instructions",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "What license should be used for this project?",
      choices: ["BSD", "MIT", "GPL", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ]);
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your README.md file has been created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
