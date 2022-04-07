const Employee = require("../lib/Employee.js");

test("Instantiate Intern through Intern class", () => {
  const employee = new Employee("john", "ab-123", "employee@gmail.com", "penn");
  expect(employee.getEmail()).toBe("employee@gmail.com");
});
