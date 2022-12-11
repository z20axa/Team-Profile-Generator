const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should have an employee constructor", () => {
        // SEET
        const object = new Employee();
        expect(object instanceof Employee).toEqual(true);
      });

      it("should have an employee name", () => {
        const name = "Jared";
        const employeeName = new Employee(name);
        expect(employeeName.name).toBe(name);
      });

      it("should have an employee ID", () => {
        const id = "1";
        const employeeID = new Employee(id);
        expect(employeeID.id).toBe(id);
      });

      it("should have an employee Email", () => {
        const email = "jared@fakeemail.com";
        const employeeEmail = new Employee(email);
        expect(employeeEmail.email).toBe(email);
      });
    })

    describe("getName", () => {
      it("should return an employee name", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
    
    describe("getId", () => {
      it("should return an employee ID", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
        
    describe("getEamil", () => {
      it("should return an employee email", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
        
    describe("getRole", () => {
      it("should return an employee role", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
})