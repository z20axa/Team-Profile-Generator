// variable declarations
const Intern = require("../lib/intern");
const test = new Intern("Jared", 1, "jared@fakeemail.com", "2University");

describe("Intern", () => {
  describe("Initialization", () => {
    // positive test
    it("should have an intern constructor", () => {
      // arrange
      const obj = new Intern();

      // assert
      expect(obj instanceof Intern).toEqual(true);
    });

    // positive test
    it("should have an intern school", () => {
      // arrange
      const school = "2University";

      // assert
      expect(test.school).toBe(school);
    });
  })

  describe("getSchool", () => {
    // positive test
    it("should return an intern school", () => {
      // arrange
      const school = "2University";

      // assert
      expect(test.getSchool()).toBe(school);
    });
  })

  describe("getRole", () => {
    // positive test
    it("should return an intern role", () => {
      // arrange 
      const internRole = "Intern";

      // assert
      expect(test.getRole()).toBe(internRole);
    });
  })
})