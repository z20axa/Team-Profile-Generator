const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should have a employee constructor", () => {
        // SEET
        const obj = new Employee();
  
        expect(obj instanceof Employee).toEqual(true);
  
      });
    //   it("should have a taco constructor that will add the property tortilla", () => {
    //     // SEET
    //     const obj = new Taco("hard");
  
    //     expect("tortilla" in obj).toEqual(true);
  
    //   });
    //   it("should have a taco constructor that will add the property cheese", () => {
    //     // SEET
    //     const obj = new Taco("hard", "Mexican Cheese Blend");
  
    //     expect("cheese" in obj).toEqual(true);
  
    //   });
    })
  })