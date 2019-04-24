const db = require("./database");
const Admin = require("./Admin");
const Order = require("./orders");

//      ***************************     CREATE USER   ********************
function User(name, email, password, role) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.role = role || "User";

  for (var i = 1; i >= 0; ) {
    if (!db.Users[i + ""]) {
      id = i + "";
      db.Users[id] = {
        name: this.name.toString(),
        email: this.email.toString(),
        password: this.password,
        id: id
      };
      break;
    }
    i++;
  }
  this.id = id;

  //  ********************** READ A SINGLE USER BY HIS ID  **********************
  this.readSingleUser = function(id) {
    return id ? db.Users[id.toString()] : "Not a User";
  };

  //  *********************** UPDATE DETAILS OF A USER  ************************

  this.updateSingleUser = function(id, name, email, password) {
    if (!id || !name || !email || !password) return "All fields are required";

    if (id.toString() !== this.id) return false;

    db.Users[id.toString()].name = name;
    db.Users[id.toString()].email = email;
    db.Users[id.toString()].password = password;
    console.log("User updated successfully");
    return "User updated successfully";
  };

  //       ******************************  SEARCH USER BY NAME  **************************

  this.searchUserByName = function(name) {
    for (var userName in db.Users) {
      if (db.Users[userName].name == name) {
        console.log(db.Users[userName]);
        return db.Users[userName];
      }
    }
  };
}
User.prototype = Order.prototype;
module.exports = User;
