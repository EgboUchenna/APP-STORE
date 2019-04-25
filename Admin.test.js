const Admin = require("./Admin");
const User = require("./User");
const Order = require("./orders");
const db = require("./database");

// ************************** CREATE  ADMINS   *******************************
var adminUser1 = new Admin("King", "king@gmail.com", "password");
var adminUser2 = new Admin("Matthew", "Uchesco4jesus@gmail.com", "12345");
var adminUser3 = new Admin("Muse", "handsum-Muse@gmail.com", "334562");
var adminUser4 = new Admin("Stephan", "rickraggardy@gmail.com", 28290);

test("Admin can create a user", function() {
  var newUser = adminUser1.createNewUser("Uchenna", "uche@gmail.com", "uche");
  expect(newUser.name).toBe("Uchenna");
});

test("Admin can create new Order", function() {
  var newOrder = adminUser1.createNewOrder(["milo", "milk"]);
  var newOrder = adminUser1.createNewOrder(["milo", "milk"]);
  var newOrder = adminUser1.createNewOrder(["milo", "milk"]);
  expect(newOrder).toBeTruthy();
});

test("Admin can delete  Order", function() {
  expect(adminUser1.deleteOrder(1)).toBeTruthy();
});

test("Admin to output single user object", function() {
  expect(adminUser2.readSingleUser(1)).toEqual(db.Users["1"]);
});

test("Admin to read all orders", function() {
  expect(adminUser3.readAllOrders()).toEqual(db.Orders);
});

test("Admin to read one order by id", function() {
  expect(adminUser4.readOneOrderById(3)).toEqual(db.Orders["3"]);
});

test("Admin to update order details", function() {
  expect(adminUser1.updateOrderDetails(3, ["Tea", "Milk", "Milo"])).toBeTruthy();
});

test("Admin to delete an order", function() {
  expect(adminUser3.deleteOrder(4)).toBeTruthy();
});

test("Admin to delete all orders", function() {
  expect(adminUser3.deleteAllOrder()).toEqual({});
});

test("Admin to read all Users", function() {
  expect(adminUser2.readAllUsers()).toEqual(db.Users);
});

test("Admin to delete a User", function() {
  expect(adminUser1.deleteUser(4)).toBeTruthy();
});

test("Admin to delete all Users", function() {
  expect(adminUser2.deleteAllUsers()).toEqual({});
});
