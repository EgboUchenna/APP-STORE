//        ++++++++++++++++++++++ ADMIN FUNCTIONALITIES  ++++++++++++++++++++++++
const User = require("./User");
const Order = require("./orders");
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

module.exports = Admin;
