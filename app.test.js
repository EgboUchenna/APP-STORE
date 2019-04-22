const { User, Admin } = require("./app");
const { createOrder } = require("./orders");
const db = require("./database");

// ************************** CREATE  USERS   *******************************
var User1 = new User("Uchenna", "egbouchenna001@gmail.com", 12345); // 1
var Admin1 = new Admin("Matthew", "Uchesco4jesus@gmail.com", 54321); //2
var User2 = new User("Uche", "uche4ma2w@gmail.com", 99887); // 3
var Admin2 = new Admin("Muse", "handsum-Muse@gmail.com", "334562"); // 4
var User3 = new User("deleteUser", "deletedUser@gmail.com", "12345"); // 5
var Admin3 = new Admin("Stephan", "rickraggardy@gmail.com", 28290); // 6

// ************************** CREATE ORDERS ******************************

Admin3.createOrder(["Phones", "Earpiece", "Laptops"]);
User1.createOrder(["Playstation 4", "Bicycle", "Ice Cream"]);
Admin2.createOrder(["Banners", "Flyers", "Stickers"]);
User3.createOrder([""]);
User2.createOrder(["Gucci", "Versace", "Montana"]);
Admin1.createOrder(["Peanuts", "Pencils", "Panties"]);

test("User name to be name of the User", function() {
  expect(User1.name).toBe("Uchenna");
});

test("User to have a Unique Id", function() {
  expect(User3.id).toBeTruthy();
});

test("User email to be email of the User", function() {
  expect(Admin3.email).toBe("rickraggardy@gmail.com");
});

test("User to have a password", function() {
  expect(User3.password).toBe("12345");
});

test(" User Type of to be Admin", function() {
  expect(Admin1.type).toBe("Admin");
});

test("User Type of to be User", function() {
  expect(User3.type).toBe("User");
});

test("Read User by Id to return a Single User", function() {
  expect(db.Users["1"].name).toBe("Uchenna");
});

test("Database has values and not empty", function() {
  expect(Object.keys(db.Users).length).toBeGreaterThan(3);
});

test("Search User by name to return User Object", function() {
  expect(User2.searchUserByName("Uche")).toEqual(db.Users["3"]);
});

test("Search Admin by name to return Admin Object", function() {
  expect(Admin1.searchUserByName("Matthew")).toEqual(db.Users["2"]);
});

test("Admin type of in database to be 2", function() {
  var adminCount = [];
  for (var value in db.Users) {
    if (db.Users[value].type === "Admin") {
      adminCount.push(db.Users[value]);
    }
  }
  expect(adminCount.length).toBeGreaterThanOrEqual(2);
});

test("All single user details fields to be updated", function() {
  expect(
    User1.updateSingleUser("Uche", "egbouchenna001@gmail.com", 12345)
  ).toBe("All fields are required");
});

test("A single Admin details to be updated", function() {
  expect(
    Admin2.updateSingleUser(4, "MUSE", "handsumMuse@gmail.com", 77889)
  ).toBe("User updated successfully");
});

test("Delete a single user by Admin not in database", function() {
  expect(Admin1.deleteUser(8)).toBe("User not found");
});

test("Delete a single user by Admin", function() {
  expect(Admin2.deleteUser(5)).toBe("User deleted sucessfully");
});

test("Delete All Users in database", function() {
  expect(Admin3.deleteAllUsers()).toBe("All Users deleted successfully");
});

test("Orders Database has values and not empty", function() {
  expect(Object.keys(db.Orders).length).toBeGreaterThan(3);
});

test("Order to have a Unique Id", function() {
  expect(db.Orders["1"].id).toBeTruthy();
});

test("All Orders to be read from database", function() {
  expect(Admin1.readAllOrders()).toEqual(db.Orders);
});

test("Read an order by its id", function() {
  expect(Admin1.readOneOrderById(2)).toEqual(db.Orders["2"]);
});

test("Create an Order", function() {
  expect(db.Orders["1"]).toBeDefined();
});

test("Read All Orders by Admin", function() {
  expect(Admin2.readAllOrders()).toEqual(db.Orders);
});

test("Read Single Orders by Admin", function() {
  expect(Admin3.readOneOrderById(4).id).toBe("4");
});

test("Read Single Orders  user_ id by Admin", function() {
  expect(Admin3.readOneOrderById(6).user_id).toBe("2");
});

test("Check elements in a Single user Orders ", function() {
  expect(Admin3.readOneOrderById(6).products).toContain("Peanuts");
});

test("Check elements in a Single user Orders ", function() {
  expect(Admin1.readOneOrderById(1).products).toContain("Phones");
});

test("Orders Database has objects more than 5", function() {
  expect(Object.values(db.Orders).length).toBeGreaterThan(5);
});

