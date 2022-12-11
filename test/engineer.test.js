const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should have an engineer constructor", () => {
        const obj = new Engineer();
        expect(obj instanceof Engineer).toEqual(true);
      });
      it("should have an engineer gitHub", () => {
        const obj = new Engineer();
        expect(obj instanceof Engineer).toEqual(true);
      });
    })

    describe("getGithub", () => {
      it("should return an engineer gitHub account", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
        
    describe("getRole", () => {
      it("should return an engineer role", () => {
        // // SEET
        // const obj = new Employee();
        // expect(obj instanceof Employee).toEqual(true);
      });
    })
})