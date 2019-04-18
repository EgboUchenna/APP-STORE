const db = require("./database");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  if (this.constructor === User) {
    this.type = "User";
  } else if (this.constructor === "Admin") {
    this.type = "Admin";
  }
}

function Admin (name, email, password) {
  User.apply(this, [name, email, password]);

  Admin.prototype.constructor = Admin;
}

module.exports = { User, Admin };
