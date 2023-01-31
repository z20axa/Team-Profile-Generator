// variable declarations
const Manager = require("../lib/manager");
const test = new Manager("Jared", 1, "jared@fakeemail.com", 1);

describe("Manager", () => {
  describe("Initialization", () => {
    // positive test
    it("should have a manager constructor", () => {
      // arrange
      const obj = new Manager();

      // assert
      expect(obj instanceof Manager).toEqual(true);
    });

    // positive test
    it("should have a manager office number", () => {
      // arrange
      const managerOfficeNo = 1;

      // assert
      expect(test.officeNumber).toBe(managerOfficeNo);
    });
  })

  describe("getOfficeNumber", () => {
    // positive test
    it("should return a manager office number", () => {
      // arrange
      const managerOfficeNo = 1;

      // assert
      expect(test.getOfficeNumber()).toBe(managerOfficeNo);
    });
  })

  describe("getRole", () => {
    // positive test
    it("should return a manager role", () => {
      // arrange 
      const managerRole = "Manager";

      // assert
      expect(test.getRole()).toBe(managerRole);
    });
  })
})