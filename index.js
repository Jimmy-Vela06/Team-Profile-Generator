// console.log("hola world");

const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

// generates HTML file
const generateHtml = require("./utils/generateHTML.js");

const managerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the team managers name.",
    },
    {
      type: "input",
      name: "id",
      message: "Enter mangers ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter managers email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter managers office number.",
    },
  ]);
  //   .then()
};

const emoloyeePrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the employee.",
    },
    {
      type: "list",
      name: "role",
      message: "Choose the employee's role.",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "id",
      message: "Enter employee's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter employee's email.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter engineer's github username.",
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school.",
    },
  ]);
  //.then
};
