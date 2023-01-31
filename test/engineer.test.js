// variable declarations
const Engineer = require("../lib/engineer");
const test = new Engineer("Jared", 1, "jared@fakeemail.com", "jaredGitHub");

describe("Engineer", () => {
  describe("Initialization", () => {
    // positive test
    it("should have an engineer constructor", () => {
      // arrange
      const obj = new Engineer();

      // assert
      expect(obj instanceof Engineer).toEqual(true);
    });

    // positive test
    it("should have an engineer gitHub", () => {
      // arrange 
      const gitHub = "jaredGitHub";

      // assert
      expect(test.gitHub).toBe(gitHub);
    });
  })

  describe("getGithub", () => {
        // positive test
    it("should return an engineer gitHub account", () => {
      // arrange 
      const gitHub = "jaredGitHub";

      // assert
      expect(test.getGithub()).toBe(gitHub);
    });
  })

  describe("getRole", () => {
    // positive test
    it("should return an engineer role", () => {
      // arrange 
      const engRole = "Engineer";

      // assert
      expect(test.getRole()).toBe(engRole);
    });
  })
})