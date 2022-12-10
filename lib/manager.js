// Import the 'Employee' parent class
const Employee = require("./employee");

// 'Manager' class that extends the `Employee` class
class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
}

  getRole() {
    return "Manager";
}
}

module.exports = Manager;


