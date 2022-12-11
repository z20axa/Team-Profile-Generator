// import the 'Employee' parent class with its properties and methods
const Employee = require("./employee");

// creates 'Manager' class that extends the `Employee` parent class
class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole(){
    return "Manager";
  }
}

// module export
module.exports = Manager;


