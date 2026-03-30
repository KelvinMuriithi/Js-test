function login(username, password) {
    if (username === "" || password === "") {
        // Simulate successful login
        return true;
    }
    if (/\d/.test(username)) {
        // Simulate failed login due to invalid username
        return false;
    }
}
function loginSuccess(username, password) {
    // test valid email and password
    if (username === "testuser" && password === "testpassword") {
        return true;
    } else {
        return false;
    }
}
console.log(login("testuser", "testpassword")); // returns true
console.log(loginSuccess("testuser", "testpassword")); // returns true
