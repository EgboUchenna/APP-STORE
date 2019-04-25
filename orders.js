const Admin = require("./Admin");
const db = require("./database");

//      ***************************     CREATE ORDER   ********************
function Order(userId, products) {
  this.products = products;
  this.userId = userId;
  var today = new Date();

  this.timeOfOrder =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  this.dateOfOrder =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  for (var i = 1; i >= 0; ) {
    if (!db.Orders[i + ""]) {
      id = i + "";
      db.Orders[id] = {
        user_id: this.userId,
        timeOfOrder: this.timeOfOrder,
        dateOfOrder: this.dateOfOrder,
        id: id,
        products: products
      };
      break;
    }
    i++;
  }
}

//  ************************** READ ALL ORDERS  ************************************

Order.prototype.readAllOrders = function() {
  return db.Orders;
};

//  *********************** READ ONE ORDER BY ITS ID  **************************

Order.prototype.readOneOrderById = function(id) {
  return db.Orders[id.toString()];
};

//  ********************** UPDATE ORDER DETAILS  ***************************

Order.prototype.updateOrderDetails = function(id, products) {
  db.Orders[id.toString()].products = products;
  return true;
};

//  ********************** DELETE AN ORDER   ***************************

Order.prototype.deleteOrder = function(id) {
  return delete db.Orders[id.toString()];
};

//  ********************** DELETE ALL ORDERS  ***************************

Order.prototype.deleteAllOrder = function() {
  return (db.Orders = {});
};

module.exports = Order;
