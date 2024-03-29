// creates Employee parent class with its properties and methods
class Employee {
    constructor(name, id, email){
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
      return this.name;
    }

    getId(){
      return this.id;
    }

    getEmail(){
      return this.email;
    }
      
    getRole(){
      return "Employee";
    }
}

// module export
module.exports = Employee;