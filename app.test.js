const { User, Admin } = require("./app");

var Uchenna = new User("Uchenna", "egbouchenna001@gmail.com", 12345);
var Matthew = new Admin("Matthew", "Uchesco4jesus@gmail.com", 54321);

test("User name to be name of the User", function() {
  expect(Uchenna.name).toBe("Uchenna");
});

test("User to have a Unique Id", function() {
  expect(Uchenna.id).toBeTruthy();
});

test("User email to be email of the User", function() {
  expect(Uchenna.email).toBe("egbouchenna001@gmail.com");
});

test("User to have a password", function() {
  expect(Uchenna.password).toBeTruthy();
});

test('User type to be admin', function() {
  expect(Matthew.type).toBe('Admin');
});
