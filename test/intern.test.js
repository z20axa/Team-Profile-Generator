const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should have an intern constructor", () => {
        const obj = new Intern();
        expect(obj instanceof Intern).toEqual(true);
      });
    })

    

})