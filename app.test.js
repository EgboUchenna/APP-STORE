const { User, Admin } = require("./app");
const db = require('./database');


var Uchenna = new User("Uchenna", "egbouchenna001@gmail.com", 12345);
var Matthew = new Admin("Matthew", "Uchesco4jesus@gmail.com", 54321);
var Uche = new User("Uche", "uche4ma2w@gmail.com", 99887);
var Muse = new Admin("Muse", "handsumMuse@gmail.com", 77889);

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

test('Read User by Id to return a Single User', function() {
  console.log(db);
  expect(db.Users['1'].name).toBe('Uchenna');
});




