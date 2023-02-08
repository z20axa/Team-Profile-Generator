// packages/modules imports
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team of employees initial array declaration
var myTeam = [];

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
      const {manager_name, manager_id, manager_email, manager_officeNumber} = managerInputs;

      // add the manager info entered to the team array
      myTeam.push(new Manager(manager_name, manager_id, manager_email, manager_officeNumber));
      
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
.then( ({choice}) => {
  switch(choice){
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
      const {engineer_name, engineer_id, engineer_email, engineer_Github} = engineerInputs;

      // add the engineer info entered to the team array
      myTeam.push(new Engineer(engineer_name, engineer_id, engineer_email, engineer_Github));
      
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
          name: "engineerName"
      },
      {
          type: "input",
          message: "What is the intern's ID?",
          name: "engineerId"
      },
      {
          type: "input",
          message: "What is the intern's email address?",
          name: "engineerEmail"
      },
      {
          type: "input",
          message: "What is the intern's school name?",
          name: "engineerGithub"
      }
  ])
  .then((engineerInputs) => {
      console.log(engineerInputs);

      // descontruct engineer info entered and assign to new variables
      const {engineer_name, engineer_id, engineer_email, engineer_Github} = engineerInputs;

      // add the engineer info entered to the team array
      myTeam.push(new Engineer(engineer_name, engineer_id, engineer_email, engineer_Github));
      
      // function call to return to menu to add other team member engineers and/or interns to the team or quit the app
      otherTeamMembersMenu();
})
};

const writeHTML = () => {
  console.log(boxList);

  let boxData =
  boxList.map( box => {
    if(box.getBoxName() === "Blue Box"){
      return `<li class="box-blue"></li>`;
    }
    else if(box.getBoxName() === "Red Box"){
      return `<li class="box-red"></li>`;
    }
    else if(box.getBoxName() === "Green Box"){
      return `<li class="box-green"></li>`;
    }
  }).join("");

  const data = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box-list{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 95vh;
      list-style-type: none;
      margin: 0px;
      padding: 0px;
    }
    .box-blue{
      background: blue;
      width: 100px;
      height: 200px;
    }
    .box-red{
      background: red;
      width: 100px;
      height: 200px;
    }
    .box-green{
      background: green;
      width: 100px;
      height: 200px;
    }
  </style>
</head>
<body>
  <ul class="box-list">
    ${boxData}
  </ul>
</body>
</html>
`
  fs.writeFile("output.html", data, (err) => {
    err ? console.error(err) : console.log("Wrote output.html");
  })
  return menu();
}

// function declaration to quit the app and generate a webpage that displays the team's basic info entered
const quitProgram = () => {
  console.log("Happy Team Building, BYE!!!");

  // function call to generate a webpage that displays the team's basic info entered
  writeHTML();

  // quits app return
  return;
};

// initiate app
init();