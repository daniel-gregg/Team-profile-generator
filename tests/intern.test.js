const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should return an object with class of 'Intern' that extends 'employee'", () => {
      const obj = new Intern(name="name", id=1, email="hello@email.com",school="school");

      expect(typeof obj === 'object' && obj !== null).toEqual(true);
    });

    it("should have a 'name' element", () => {
      const obj = new Intern(name="name", id=1, email="hello@email.com",school="school");
      
      expect(obj.school).toEqual('school');
    });
  })

  describe("Methods", () => {

    it("should have a 'getRole' method that returns the role of that employee", () => {
      const obj = new Intern(name="name", id=1, email="hello@email.com",school="school");
      
      expect(obj.getRole()).toEqual("Intern");
    });
  });
})
