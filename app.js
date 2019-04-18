const db = require("./database");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  if (this.constructor === User) {
    this.type = "User";
  } else if (this.constructor === Admin) {
    this.type = "Admin";
  }

  for (var i = 1; i >= 0; ) {
    if (!(db.Users[i + ""])) {
      id = i + "";
      db.Users[id] = {
        name: this.name.toString(),
        email: this.email.toString(),
        password: this.password,
        type: this.type.toString(),
        id: id
      };
      break;
    }
    i++;
  }
  this.id = id;

  
  console.log(db);
}

User.prototype.createUserId = function(id) {};


function Admin(name, email, password) {
  User.apply(this, [name, email, password]);

  Admin.prototype.constructor = Admin;
}

module.exports = { User, Admin };
