// packages/modules imports
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team of employess inital array declaration
var myTeam = [];

const addManager

const addEngineer

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
const endProgram = () => {
  console.log("Thanks for building your Team, BYE!!!");
  return;
}

// function declaration to initiate the app
function init() {
  return inquirer.prompt([
    {
      type: "list",
      message: "Start Your Team",
      choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Print My Team", "Finish Team Building"],
      name: "choice"
    }
  ])
  .then( ({choice}) => {
    switch(choice){
      case "Add a Manage":
        return addManager();
      case "Add an Engineer":
        return addEngineer();
      case "Add an Intern":
        return addIntern();
      case "Print My Team":
        return writeHTML();
      case "Finish Team Building":
        return endProgram();
    }
  });
}

// initiate app
init();