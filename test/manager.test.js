const Manager = require("../lib/manager");

const test = new Manager("Jared", 1, "jared@fakeemail.com", 1);

describe("Manager", () => {
    describe("Initialization", () => {
      it("should have a manager constructor", () => {
        const obj = new Manager();
        expect(obj instanceof Manager).toEqual(true);
      });
      it("should have a manager office number", () => {
        const managerOfficeNo = 1;
        expect(test.officeNumber).toBe(managerOfficeNo);
      });
    })

    // describe("getOfficeNumber", () => {
    //   it("should return a manager office number", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
        
    // describe("getRole", () => {
    //   it("should return a manager role", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
})