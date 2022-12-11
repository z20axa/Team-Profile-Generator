// import the 'Employee' parent class with its properties and methods
const Employee = require("./employee");

// creates 'Engineer' class that extends the `Employee` parent class
class Engineer extends Employee{
  constructor(name, id, email, gitHub){

    super(name, id, email);

    this.gitHub = gitHub;
  }

  getGithub(){
    return this.gitHub;
  }

  getRole(){
    return "Engineer";
  }
}

// module export
module.exports = Engineer;