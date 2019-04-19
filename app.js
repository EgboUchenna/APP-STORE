const db = require("./database");

//      ***************************     CREATE USER   ********************
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

//  ********************** READ A SINGLE USER BY HIS ID  **********************

User.prototype.readSingleUser = function(id) {
  console.log(db.Users[id.toString()]);
  return db.Users[id.toString()];
};

//  ***************************  READ ALL USERS    ***************************

Admin.prototype.readAllUsers = function() {
  console.log(db.Users);
  return db.Users;
};

//  *********************** UPDATE DETAILS OF A USER  ************************

User.prototype.updateSingleUser = function(id, name, email, password) {
  if (!id || !name || !email || !password) {
    console.log("All fields are required");
    return "All fields are required";
  }
  if (id.toString() !== this.id) {
    return false;
  }
  db.Users[id.toString()].name = name;
  db.Users[id.toString()].email = email;
  db.Users[id.toString()].password = password;
  console.log("User updated successfully");
  return "User updated successfully";
};

//              ********************************  SEARCH USER BY NAME  ******************************

User.prototype.searchUserByName = function(name) {
  for (var userName in db.Users) {
    if (db.Users[userName].name == name) {
      console.log(db.Users[userName].name);
      return db.Users[userName];
    }
  }
  console.log("User does not Exist");
  return false;
};

//        +++++++++++++++++++++++++++++++ ADMIN FUNCTIONALITIES  ++++++++++++++++++++++++++++++++++++++

function Admin(name, email, password) {
  User.apply(this, [name, email, password]);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

//              ********************************  DELETE A SINGLE USER   ************************************

Admin.prototype.deleteUser = function(id) {
  if (!db.Users[id.toString()]) {
    console.log( "User not found");
    return "User not found";
  }
  delete db.Users[id.toString()];
  console.log("User deleted sucessfully");
  return "User deleted sucessfully";
};

//              ********************************   DELETE ALL USERS  ****************************************

Admin.prototype.deleteAllUsers = function() {
  db.Users = {};
  console.log("All users deleted successfully");
  return "All Users deleted successfully";
};

module.exports = { User, Admin };
