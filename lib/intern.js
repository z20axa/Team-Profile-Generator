// import the 'Employee' parent class with its properties and methods
const Employee = require("./employee");

// creates 'Intern' class that extends the `Employee` parent class
class Intern extends Employee{
  constructor(name, id, email, school){

    super(name, id, email);

    this.school = school;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return "Intern";
  }
}

// module export
module.exports = Intern;