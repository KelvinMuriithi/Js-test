const test = require("node:test");

// simple test for login credentials
test("Login credentials not empty", () => {
  const username = "testuser";
  const password = "testpassword";

  if (username === "" || password === "") {
    throw new Error("Username and password should not be empty");
  }
});

// simple test for valid username input(avoid numbers)
test("Username should not contain numbers", () => {
  const username = "testuser123";

  if (/\d/.test(username)) {
    throw new Error("Username should not contain numbers");
  }
});

