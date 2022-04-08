const Engineer = require("../lib/Engineer.js");

test("Test engineer via github parameter", () => {
  const engineer = new Engineer(
    "john",
    "ab-123",
    "john@gmail.com",
    "GithubName"
  );
  expect(engineer.getGithub()).toBe("GithubName");
});
