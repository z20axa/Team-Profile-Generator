// Import the 'Employee' parent class
const Employee = require("./employee");

// 'Intern' class that extends the `Employee` class
class Intern extends Employee{
  constructor(school){

    super(name, id, email);

    this.school = school;
  }

  getGithub() {

    }

  getRole() {
    // Overridden to return 'Engineer'

    }
}