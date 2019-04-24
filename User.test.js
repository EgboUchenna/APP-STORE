const Admin = require("./Admin");
const User = require("./User");
const Order = require("./orders");


var user1 = new User("Uche", "Uche@gmail.com", "password");
var user2 = new User("Matt", "Matt@gmail.com", "ggdhrwR");
var user3 = new User("Muse", "Muse@gmail.com", "jsdknsUqd");
var user4 = new User("Steph", "Steph@gmail.com", "nsnklslRE");

test("User can create new Order", function() {
    var newOrder = user1.createNewOrder(["Rice", "Beans"]);
    expect(newOrder).toBeTruthy();
  });
  

test("User cannot delete  Order", function() {
    expect(user1.deleteOrder(1)).toBeFalsy();
  });