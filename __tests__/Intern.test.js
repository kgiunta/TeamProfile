const Intern = require("../lib/Intern.js");

test("Instantiate Intern through Intern class", () => {
  const intern = new Intern("john", "ab-123", "john@gmail.com", "penn");
  expect(intern.getSchool()).toBe("penn");
});
