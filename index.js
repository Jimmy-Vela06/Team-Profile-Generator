// console.log("hola world");

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

// node modules
const fs = require("fs");
const path = require("path");

const inquirer = require("inquirer");

const templates = require("./src/templates");

const DIST = path.resolve(__dirname, "dist");
const PATH = path.join(DIST, "team.html");

const team = [];

function main() {
  managerPrompt().then((answers) => {
    const { name, id, email, officeNumber } = answers;
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);
    teamPrompt();
  });
}

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
};

const engineerPrompt = () => {
  console.log("\x1b[32m%s\x1b[0m", "Enter engineer information.");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer's name.",
    },
    {
      type: "input",
      name: "id",
      message: "Enter engineer's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter engineer's email",
    },
    {
      type: "input",
      name: "github",
      message: "Enter engineer's github user name.",
    },
  ]);
};

const internPrompt = () => {
  console.log("\x1b[32m%s\x1b[0m", "Enter intern information.");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the inter's name.",
    },
    {
      type: "input",
      name: "id",
      message: "Enter intern's ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school.",
    },
  ]);
};

const teamPrompt = () => {
  console.log("\x1b[32m%s\x1b[0m", `Add team member to the team`);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "Which team member would like to add?",
        choices: ["Engineer", "Intern", "I've finished my team."],
      },
    ])
    .then((answer) => {
      switch (answer.teamMemberChoice) {
        case "Engineer":
          engineerPrompt().then((answers) => {
            const { name, id, email, github } = answers;
            const engineer = new Engineer(name, id, email, github);
            team.push(engineer);
            teamPrompt();
          });
          break;

        case "Intern":
          internPrompt().then((answers) => {
            const { name, id, email, school } = answers;
            const intern = new Intern(name, id, email, school);
            team.push(intern);
            teamPrompt();
          });
          break;
        default:
          buildTeam();
      }
    });
};

function creatHTML(teamArr) {
  let teamCards = "";

  teamArr.forEach((teamMember) => {
    if (teamMember.getRole() === "Manager") {
      teamCards = teamCards + templates.generateManager(teamMember);
    }
    if (teamMember.getRole() === "Engineer") {
      teamCards = teamCards + templates.generateEngineer(teamMember);
    }
    if (teamMember.getRole() === "Intern") {
      teamCards = teamCards + templates.generateIntern(teamMember);
    }
  });

  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./Assets/styles.css">
        
        
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="teamCards">
                    <!--Team Cards-->
                    ${teamCards}
                </div>
            </div>
        </main>

    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
    </html>
  `;
}

const buildTeam = () => {
  fs.writeFileSync(PATH, creatHTML(team), "utf-8");
};

main();
