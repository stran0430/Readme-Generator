const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project:",
  },
  {
    type: "input",
    name: "screenshot",
    message:
      "Please provide the relative path to the image you want to use as the screenshot.",
  },
  {
    type: "input",
    name: "link",
    message:
      "Please provide a URL where a user can access your deployed application.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Mozilla", "Open", "ISC", "BSD3", "none"],
  },
  {
    type: "input",
    name: "usage",
    message:
      "List program languages and other dependecies (please seperate with comma)",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instruction for your project?",
  },
  {
    type: "input",
    message: "What is the link to clone the repo?",
    name: "clone",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/created-README.md", generateMarkdown({ ...responses }));
  });
}
init();
