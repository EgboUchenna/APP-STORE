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
    if (!db.Users[i + ""]) {
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
}

User.prototype.readSingleUser = function(id) {
  return db.Users[id.toString()];
};

User.prototype.updateSingleUser = function(id, name, email, password) {
  if (!id || !name || !email || !password) {
    return "All fields are required";
  }
  if (id.toString() !== this.id) {
    return false;
  }
  db.Users[id.toString()].name = name;
  db.Users[id.toString()].email = email;
  db.Users[id.toString()].password = password;
  console.log(db);
  return "User updated successfully";
};

function Admin(name, email, password) {
  User.apply(this, [name, email, password]);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.readAllUsers = function() {
  for (var person in db.Users) {
    return db.Users[person];
  }
};



module.exports = { User, Admin };
