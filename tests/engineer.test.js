const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should return an object with class of 'Engineer' that extends 'employee'", () => {
      const obj = new Engineer(name="name", id=1, email="hello@email.com",officeNumber=9999);

      expect(typeof obj === 'object' && obj !== null).toEqual(true);
    });

    it("should have a 'name' element", () => {
      const obj = new Engineer(name="name", id=1, email="hello@email.com",github="gitHubName");
      
      expect(obj.name).toEqual('name');
    });
  })

  describe("Methods", () => {

    it("should have a 'getRole' method that returns the role of that employee", () => {
      const obj = new Engineer(name="name", id=1, email="hello@email.com",github="gitHubName");
      
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
})
