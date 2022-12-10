// Import the 'Employee' parent class
const Employee = require("./employee");

// 'Engineer' class that extends the `Employee` class
class Engineer extends Employee{
  constructor(gitHub){

    super(name, id, email);

    this.gitHub = gitHub;
  }

  getGithub() {

    }

  getRole() {
    // Overridden to return 'Engineer'

    }
}