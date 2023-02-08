// packages/modules imports
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team of employees initial array declaration
var builtTeam = [];

// initiate the app by first adding the manager and after manager has been added then add other team members; engineers and/or interns 
const init = () => {
  // team manager questions/info
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter team manager's name?",
      name: "managerName"
    },
    {
      type: "input",
      message: "Enter team manager's ID?",
      name: "managerId"
    },
    {
      type: "input",
      message: "Enter team manager's email?",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "Enter team manager's office number?",
      name: "managerOfficeNumber"
    }
  ])
    .then((managerInputs) => {
      console.log(managerInputs);

      // descontruct manager info entered and assign to new variables
      const { manager_name, manager_id, manager_email, manager_officeNumber } = managerInputs;

      // add the manager info entered to the team array
      builtTeam.push(new Manager(manager_name, manager_id, manager_email, manager_officeNumber));
      console.log(builtTeam);

      // after the manager info has been entered to the team, function call to add other team members engineers and/or interns, or quit the app
      otherTeamMembersMenu();
    });
};

// function declaration to add other team member engineers and/or interns to the team or quit the app
function otherTeamMembersMenu() {
  return inquirer.prompt([
    {
      type: "list",
      message: "Add Team Members or Quit App to finish Entering Team Members",
      choices: ["Add an Engineer to the Team", "Add an Intern to the Team", "Quit Building the Team"],
      name: "choice"
    }
  ])
    .then(({ choice }) => {
      switch (choice) {
        case "Add an Engineer to the Team":
          return addEngineer();
        case "Add an Intern to the Team":
          return addIntern();
        case "Quit Building the Team":
          return quitProgram();
      }
    });
};

// function declaration to add an engineer to the team
const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the engineers's name?",
      name: "engineerName"
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "engineerId"
    },
    {
      type: "input",
      message: "What is the engineers's email address?",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "What is the engineers's GitHub username?",
      name: "engineerGithub"
    }
  ])
    .then((engineerInputs) => {
      console.log(engineerInputs);

      // descontruct engineer info entered and assign to new variables
      const { engineer_name, engineer_id, engineer_email, engineer_Github } = engineerInputs;

      // add the engineer info entered to the team array
      builtTeam.push(new Engineer(engineer_name, engineer_id, engineer_email, engineer_Github));
      console.log(builtTeam);

      // function call to return to menu to add other team member engineers and/or interns to the team or quit the app
      otherTeamMembersMenu();
    })
};

// function declaration to add an intern to the team
const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName"
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "internId"
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "internEmail"
    },
    {
      type: "input",
      message: "What is the intern's school name?",
      name: "internSchool"
    }
  ])
    .then((internInputs) => {
      console.log(internInputs);

      // descontruct intern info entered and assign to new variables
      const { intern_name, intern_id, intern_email, intern_school } = internInputs;

      // add the engineer info entered to the team array
      builtTeam.push(new Intern(intern_name, intern_id, intern_email, intern_school));
      console.log(builtTeam);

      // function call to return to menu to add other team member engineers and/or interns to the team or quit the app
      otherTeamMembersMenu();
    })
};

const writeHTML = (builtTeam) => {
  // HTML elements to be created to display each team member basic info
  let teamData =
    builtTeam.map((teamMember) => {
      if (teamMember.getRole() === "Manager") {
        return `
        <div class="main-card">
          <div class="name-tittle-container">
              <h2 class="employee-name">${teamMember.getName()}</h2>
              <h2 class="employee-tittle">${teamMember.getRole()}</h2>
          </div>
          <div class="employee-info-conatiner">
              <h3 class="employee-id">ID: ${teamMember.getId()}</h3>
              <h3 class="employee-email">Email: 
                <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
              </h3>
              <h3 class="employee-office">Office Number: ${teamMember.getOfficeNumber()}</h3>
          </div>
        </div>
        `;
      }
      else if (teamMember.getRole() === "Engineer") {
        return `
        <div class="main-card">
            <div class="name-tittle-container">
                <h2 class="employee-name">${teamMember.getName()}</h2>
                <h2 class="employee-tittle">${teamMember.getRole()}</h2>
            </div>
            <div class="employee-info-conatiner">
                <h3 class="employee-id">ID: ${teamMember.getId()}</h3>
                <h3 class="employee-email">Email: 
                    <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
                </h3>
                <h3 class="employee-github">GitHub: 
                    <a href="https://www.github.com/${teamMember.getGithub()}">${teamMember.getGithub()}</a>
                </h3>
            </div>
        </div>
        `;
      }
      else if (teamMember.getRole() === "Intern") {
        return `
        <div class="main-card">
          <div class="name-tittle-container">
            <h2 class="employee-name">${teamMember.getName()}</h2>
            <h2 class="employee-tittle">${teamMember.getRole()}</h2>
          </div>
          <div class="employee-info-conatiner">
            <h3 class="employee-id">ID: ${teamMember.getId()}</h3>
            <h3 class="employee-email">Email: 
              <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
            </h3>
            <h3 class="employee-school">School: ${teamMember.getSchool()}</h3>
          </div>
        </div>
        `;
      }
    }).join("");

  // out HTML that will be created to display the team members info
  const outputHTML =
    `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <style>
          #header-wrapper {
              background: #2eb778;
              height: 200px;
          }
  
          #main-header {
              text-align: center;
              padding-top: 60px;
              text-decoration: underline;
              color: white;
          }
  
          #main-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              padding-left: 200px;
              padding-right: 200px;
          }
  
          .main-card {
              border: solid;
              padding: 10px;
              margin: 10px;
          }
  
          .name-tittle-container {
              background-color: #2bd2e2;
              margin: 0px;
              padding: 0px;
          }
  
          .employee-info-conatiner {
              background-color: #a39e9e;
              margin: 0px;
              padding: 0px;
          }
  
          .employee-name,
          .employee-tittle,
          .employee-id,
          .employee-email,
          .employee-office,
          .employee-github,
          .employee-school {
              margin: 0px;
              padding: 0px;
          }
      </style>
  </head>
  
  <header id="header-wrapper">
      <h1 id="main-header">My Team</h1>
  </header>
  
  <body>
      <main id="main-container">
        ${teamData}
      </main>
  </body>
  
  </html>
`
  // writing the HTML file to display the team members info
  fs.writeFile("output.html", outputHTML, (err) => {
    err ? console.error(err) : console.log("Wrote output.html");
  })
  return;
};

// function declaration to quit the app and generate a webpage that displays the team's basic info entered
const quitProgram = () => {
  console.log(builtTeam);
  console.log("Happy Team Building, BYE!!!");
  
  // function call to generate a webpage that displays the team's basic info entered
  writeHTML(builtTeam);

  // quits app return
  return;
};

// initiate app
init();