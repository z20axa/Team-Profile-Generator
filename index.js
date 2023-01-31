const inquirer = require('inquirer');
const fs = require('fs');

const BlueBox = require('./lib/blue-box');
const RedBox = require('./lib/red-box');
const GreenBox = require('./lib/green-box');

const boxList = [];

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

const print = () => {
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

const endProgram = () => {
  console.log("Buh bye");
  return;
}

function menu() {
  return inquirer.prompt([
    {
      type: "list",
      message: "Pick an option: ",
      choices: ["Add a box", "Print", "Exit"],
      name: "option"
    }
  ])
  .then( ({option}) => {
    switch(option){
      case "Add a box":
        return addABox();
      case "Print":
        return print();
      case "Exit":
        return endProgram();
    }
  });
}
menu();