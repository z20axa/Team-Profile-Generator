// packages/modules imports
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team of employess inital array declaration
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


// add an engineer to my team function declaration
const addEngineer = () => {
  return inquirer.prompt([
      {
          type: "input",
          message: "What is  manager's name?",
          name: "name"
      },
      {
          type: "input",
          message: "What is the manager's ID?",
          name: "id"
      },
      {
          type: "input",
          message: "What is the manager's email address?",
          name: "email"
      },
      {
          type: "input",
          message: "What is the manager's office number?",
          name: "officeNumber"
      }
  ])
  .then(answers => {
      console.log(answers)
      const {name, id, email, officeNumber} = answers
      employeeList.push(new Manager(name, id, email, officeNumber))
      return menu()
})
}



const addIntern 

const addABox = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What is the next box type?",
      choices: ["Blue", "Red", "Green"],
      name: "box"
    }
  ])
  .then( answers => {
    // add to box to list
    switch(answers.box){
      case "Blue":
        boxList.push(new BlueBox());
        break;
      case "Red":
        boxList.push(new RedBox());
        break;
      case "Green":
        boxList.push(new GreenBox());
        break;
    }
    // console.log(boxList);
    menu();
  });
}

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

// function declaration to end the program 
const quitProgram = () => {
  console.log("Happy Team Building, BYE!!!");

  // 
  writeHTML();

  return;
}




// initiate app
init();