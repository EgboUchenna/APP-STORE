const db = require("./database");
const Admin = require("./Admin");
const Order = require("./orders");
const User = require("./User");

var user1 = new User("Uche", "Uche@gmail.com", "password");
var user2 = new User("Matt", "Matt@gmail.com", "ggdhrwR");
var user3 = new User("Muse", "Muse@gmail.com", "jsdknsUqd");
var user4 = new User("Steph", "Steph@gmail.com", "nsnklslRE");

var adminUser1 = new Admin("King", "king@gmail.com", "password");
var adminUser2 = new Admin("Matthew", "Uchesco4jesus@gmail.com", "12345");
var adminUser3 = new Admin("Muse", "handsum-Muse@gmail.com", "334562");
var adminUser4 = new Admin("Stephan", "rickraggardy@gmail.com", 28290);

//  ********************** READ A SINGLE USER BY HIS ID  **********************
console.log("Reading of a single user:  ", user1.readSingleUser(1));

//  *********************** UPDATE DETAILS OF A USER  ************************

console.log(user4.updateSingleUser(4, "Steph", "Steph@gmail.com", "stephan"));

//       ******************************  SEARCH USER BY NAME  **************************

console.log(adminUser3.searchUserByName("King"));

console.log(adminUser1.createNewUser("Uchenna", "uche@gmail.com", "uche"));

//  *************************  READ ALL USERS    ************************

console.log(adminUser2.readAllUsers());

//    **********************  DELETE A SINGLE USER   ********************

console.log("Deleted  a User : ", adminUser3.deleteUser(9));

//    *********************   DELETE ALL USERS  **********************

console.log("Deleted all Users : ", adminUser4.deleteAllUsers());

//  ************************** CREATE ORDERS  ************************************

console.log(adminUser1.createNewOrder(["Akara", "Bread"]));

//  ************************** READ ALL ORDERS  ************************************

console.log(adminUser3.readAllOrders());

//  *********************** READ ONE ORDER BY ITS ID  **************************

console.log(adminUser1.readOneOrderById(1));

//  ********************** UPDATE ORDER DETAILS  ***************************

console.log(adminUser1.updateOrderDetails(1, ["Band", "Bons"]));

console.log(adminUser1.deleteOrder(4));

console.log(adminUser1.deleteAllOrder());

