//        ++++++++++++++++++++++ ADMIN FUNCTIONALITIES  ++++++++++++++++++++++++
const order = require("./orders");
const User = require("./User");
const db = require("./database");

function Admin(name, email, password) {
  User.call(this, name, email, password, "Admin");
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

//  ***************************  ADMIN CREATE USER    ***************************

Admin.prototype.createNewUser = function(name, email, password) {
  return new User(name, email, password);
};

//  *************************  READ ALL USERS    ************************

Admin.prototype.readAllUsers = function() {
  return db.Users;
};

//    **********************  DELETE A SINGLE USER   ********************

Admin.prototype.deleteUser = function(id) {
  delete db.Users[id.toString()];
  return true;
};

//    *********************   DELETE ALL USERS  **********************

Admin.prototype.deleteAllUsers = function() {
  return (db.Users = {});
};

Admin.prototype.deleteOrder = function(orderId) {
  return order.prototype.deleteOrder(orderId);
};

Admin.prototype.deleteAllOrder = function() {
  return order.prototype.deleteAllOrder();
};

Admin.prototype.readAllOrders = function() {
  return order.prototype.readAllOrders();
};

Admin.prototype.readOneOrderById = function (orderId) {
  return order.prototype.readOneOrderById(orderId);
};

Admin.prototype.updateOrderDetails = function (orderId, products) {
  return order.prototype.updateOrderDetails(orderId, products);
};

module.exports = Admin;
