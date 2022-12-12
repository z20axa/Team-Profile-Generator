const Intern = require("../lib/intern");

const test = new Intern("Jared", 1, "jared@fakeemail.com", "2University");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should have an intern constructor", () => {
        const obj = new Intern();
        expect(obj instanceof Intern).toEqual(true);
      });

      it("should have an intern school", () => {
        const school = "2University";
        expect(test.school).toBe(school);
      });
    })

    // describe("getSchool", () => {
    //   it("should return an intern school", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })
        
    // describe("getRole", () => {
    //   it("should return an intern role", () => {
    //     // // SEET
    //     // const obj = new Employee();
    //     // expect(obj instanceof Employee).toEqual(true);
    //   });
    // })

    

})