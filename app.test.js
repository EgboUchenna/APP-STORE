const { User, Admin } = require("./app");
const db = require("./database");

var User1 = new User("Uchenna", "egbouchenna001@gmail.com", 12345);
var Admin1 = new Admin("Matthew", "Uchesco4jesus@gmail.com", 54321);
var User2 = new User("Uche", "uche4ma2w@gmail.com", 99887);
var Admin2 = new Admin("Muse", "handsumMuse@gmail.com", 77889);

test("User name to be name of the User", function() {
  expect(User1.name).toBe("Uchenna");
});

test("User to have a Unique Id", function() {
  expect(User1.id).toBeTruthy();
});

test("User email to be email of the User", function() {
  expect(User1.email).toBe("egbouchenna001@gmail.com");
});

test("User to have a password", function() {
  expect(User1.password).toBeTruthy();
});

test("User type to be admin", function() {
  expect(Admin1.type).toBe("Admin");
});

test("Read User by Id to return a Single User", function() {
  // console.log(db);
  expect(db.Users["1"].name).toBe("Uchenna");
});

test("Database has values and not empty", function() {
  expect(Object.keys(db.Users).length).toBeGreaterThan(1);
});

test("Admin type in database to be 2", function() {
  var adminCount = [];
  for (var value in db.Users) {
    if (db.Users[value].type === "Admin") {
      adminCount.push(db.Users[value]);
    }
  }
  expect(adminCount.length).toBe(2);
});

test('All single user details fields to be updated', function() {
  expect(User1.updateSingleUser("Uche", "egbouchenna001@gmail.com", 12345)).toBe("All fields are required");
});




