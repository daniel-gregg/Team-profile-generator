const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should return an object with class of 'manager' that extends 'employee'", () => {
      const obj = new Manager(name="name", id=1, email="hello@email.com",officeNumber=9999);

      expect(typeof obj === 'object' && obj !== null).toEqual(true);
    });

    it("should have a 'name' element", () => {
      const obj = new Manager(name="name", id=1, email="hello@email.com",officeNumber=9999);
      
      expect(obj.name).toEqual('name');
    });
  })

  describe("Methods", () => {

    it("should have a 'getRole' method that returns the role of that employee", () => {
      const obj = new Manager(name="name", id=1, email="hello@email.com",officeNumber=9999);
      
      expect(obj.getRole()).toEqual("Manager");
    });
  });
})
