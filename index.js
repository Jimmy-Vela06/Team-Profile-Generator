// console.log("hola world");

const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

// generates HTML file
// const generateHtml = require("./utils/generateHTML.js");

const teamArray = [];

const managerPrompt = () => {
  console.log("\x1b[32m%s\x1b[0m", "BUILD YOUR TEAM");
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
  // .then((answers) => {
  //   const { name, id, email, officeNumber } = answers;
  //   const manager = new Manager(name, id, email, officeNumber);
  //   teamArray.push(manager);
  // });
};

const emoloyeePrompt = () => {
  console.log("\x1b[32m%s\x1b[0m", `Adding employee to the team`);
  return inquirer
    .prompt([
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
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Enter intern's school.",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeAnswers) => {
      // data for employee types

      let {
        name,
        id,
        email,
        role,
        github,
        school,
        confirmAddEmployee,
      } = employeeAnswers;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
managerPrompt().then(emoloyeePrompt);
//   .then((team) => {
//     return generateHTML(team);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
