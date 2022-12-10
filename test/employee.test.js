const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should have a employee constructor", () => {
        // SEET
        const obj = new Employee();
  
        expect(obj instanceof Employee).toEqual(true);
  
      });
    })
  })