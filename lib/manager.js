// Import the 'Employee' parent class
const Employee = require("./employee");

// 'Manager' class that extends the `Employee` class
class Manager extends Employee{
  constructor(officeNumber){

    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    // Overridden to return 'Manager'

    }
}

