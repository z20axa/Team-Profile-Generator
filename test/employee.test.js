const Employee = require("../lib/employee");

const test = new Employee("Jared", 1, "jared@fakeemail.com");


describe("Employee", () => {
    describe("Initialization", () => {
      it("should have an employee constructor", () => {
        // SEET
        const object = new Employee();
        expect(object instanceof Employee).toEqual(true);
      });

      it("should have an employee name", () => {
        const name = "Jared";
        // const employeeName = new Employee(name);
        expect(test.name).toBe(name);
      });

      it("should have an employee ID", () => {
        const id = 1;
        // const employeeID = new Employee(id);
        expect(test.id).toBe(id);
      });

      it("should have an employee Email", () => {
        const email = "jared@fakeemail.com";
        // const employeeEmail = new Employee(email);
        expect(test.email).toBe(email);
      });
    })

    describe("getName", () => {
      it("should return an employee name", () => {
        const name = "Jared";
        // const employeeName = new Employee(name);
        expect(test.getName()).toBe(name);
      });
    })
    
    // describe("getId", () => {
    //   it("should return an employee ID", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
        
    // describe("getEamil", () => {
    //   it("should return an employee email", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
        
    // describe("getRole", () => {
    //   it("should return an employee role", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
})