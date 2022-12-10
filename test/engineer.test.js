const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should have an engineer constructor", () => {
        const obj = new Engineer();
  
        expect(obj instanceof Engineer).toEqual(true);
  
      });
    })
  })