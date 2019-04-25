const Admin = require("./Admin");
const User = require("./User");
const db = require("./database");

var user1 = new User("Uche", "Uche@gmail.com", "password");
var user2 = new User("Matt", "Matt@gmail.com", "ggdhrwR");
var user3 = new User("Muse", "Muse@gmail.com", "jsdknsUqd");
var user4 = new User("Steph", "Steph@gmail.com", "nsnklslRE");

test("User can create new Order", function() {
  var newOrder1 = user4.createNewOrder(["Banners", "Flyers", "Stickers"]);
  expect(newOrder1).toBeTruthy();
});

test("User to output single user object", function() {
  expect(user2.readSingleUser(3)).toEqual(db.Users["3"]);
});

test("User to update single user details", function() {
  expect(user4.updateSingleUser(4, "Steph", "Steph@gmail.com", "stephan")).toBe(
    "User updated successfully"
  );
});

test("User to update incomplete single user details", function() {
  expect(user2.updateSingleUser(4, "Steph@gmail.com", "stephan")).toBe(
    "All fields are required"
  );
});

test("User to update incorrect single user id details", function() {
  expect(user3.updateSingleUser(4, "Steph", "Steph@gmail.com", "stephan")).toBe(
    false
  );
});

test("User to search users by name", function() {
  expect(user1.searchUserByName("Uche")).toBe(db.Users["1"]);
  console.log(db.Users["1"]);
});

test("User cannot search incorrect users by name", function() {
  expect(user3.searchUserByName("Emma")).toBe("No results found!");
});
