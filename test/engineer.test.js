const Engineer = require("../lib/engineer");

const test = new Engineer("Jared", 1, "jared@fakeemail.com", "jaredGitHub");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should have an engineer constructor", () => {
        const obj = new Engineer();
        expect(obj instanceof Engineer).toEqual(true);
      });

      it("should have an engineer gitHub", () => {
        const gitHub = "jaredGitHub";
        // const employeeName = new Employee(name);
        expect(test.gitHub).toBe(gitHub);
      });
    })

    // describe("getGithub", () => {
    //   it("should return an engineer gitHub account", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
        
    // describe("getRole", () => {
    //   it("should return an engineer role", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
})