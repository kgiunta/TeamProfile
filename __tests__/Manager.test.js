const Manager = require("../lib/Manager.js");

test("Check manager class against functions class", () => {
  const manager = new Manager(
    "Manager-Bill",
    "#1",
    "john@gmail.com",
    "1800-911-4545"
  );
  expect(manager.getName()).toBe("Manager-Bill");
});
