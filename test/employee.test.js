// variable declarations 
const Employee = require("../lib/employee");
const test = new Employee("Jared", 1, "jared@fakeemail.com");

describe("Employee", () => {
  describe("Initialization", () => {
    // positive test
    it("should have an employee constructor", () => {
      // arrange
      const object = new Employee();

      // assert
      expect(object instanceof Employee).toEqual(true);
    });

    // positive test
    it("should have an employee name", () => {
      // arrange
      const name = "Jared";

      // assert
      expect(test.name).toBe(name);
    });

    // positive test
    it("should have an employee ID", () => {
      // arrange
      const id = 1;

      // assert
      expect(test.id).toBe(id);
    });

    // positive test
    it("should have an employee Email", () => {
      // arrange
      const email = "jared@fakeemail.com";

      // assert
      expect(test.email).toBe(email);
    });
  })

  // positive test
  describe("getName", () => {
    it("should return an employee name", () => {
      // arrange
      const name = "Jared";

      // assert
      expect(test.getName()).toBe(name);
    });
  })

  describe("getId", () => {
    // positive test
    it("should return an employee ID", () => {
      // arrange
      const id = 1;

      // assert
      expect(test.getId()).toBe(id);
    });
  })

  // positive test
  describe("getEamil", () => {
    it("should return an employee email", () => {
      // arrange
      const email = "jared@fakeemail.com";

      // assert
      expect(test.getEmail()).toBe(email);
    });
  })

  // positive test
  describe("getRole", () => {
    it("should return an employee role", () => {
      // arrange
      const role = "Employee";

      // assert
      expect(test.getRole()).toBe(role);
    });
  })
})