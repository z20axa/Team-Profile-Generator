// Import the 'Employee' parent class
const Employee = require("./employee");

// 'Engineer' class that extends the `Employee` class
class Engineer extends Employee{
  constructor(name, id, email, gitHub){

    super(name, id, email);

    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
    }

  getRole() {
    return "Engineer";

    }
}

module.exports = Engineer;