const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should have a employee constructor", () => {
        // SEET
        const obj = new Employee();
  
        expect(obj instanceof Employee).toEqual(true);
      });

    describe("Employee Name", () => {
    it("should have a employee name", () => {
        const name = "Bob";
        const e = new Employee(name);
        expect (e.name).tobe(name);
    });

    // describe("Employee ID", () => {
    //     it("should have a employee ID", () => {
    //         const id = "1";
    //         const eId = new Employee(name);
    //         expect (e.name).tobe(name);
    // });


    })
  })