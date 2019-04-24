const Admin = require("./Admin");
const User = require("./User");
const Order = require("./orders");
const db = require('./database');


var user1 = new User("Uche", "Uche@gmail.com", "password");
var user2 = new User("Matt", "Matt@gmail.com", "ggdhrwR");
var user3 = new User("Muse", "Muse@gmail.com", "jsdknsUqd");
var user4 = new User("Steph", "Steph@gmail.com", "nsnklslRE");

test("User can create new Order", function() {
    var newOrder1 = user4.createNewOrder(["Banners", "Flyers", "Stickers"]);
    expect(newOrder1).toBeTruthy();
  });
  

test("User cannot delete  Order", function() {
    expect(user1.deleteOrder(1)).toBeFalsy();
  });

  test('User to output single user object', function() {
      expect(user2.readSingleUser(3)).toEqual(db.Users['3']);
  });
