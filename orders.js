const db = require("./database");
const { Admin, User } = require("./app");

//      ***************************     CREATE ORDER   ********************
User.prototype.createOrder = function(products) {
  this.products = products;
  var today = new Date();

  this.timeOfOrder =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  this.dateOfOrder =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  for (var i = 1; i >= 0; ) {
    if (!db.Orders[i + ""]) {
      id = i + "";
      db.Orders[id] = {
        user_id: this.id,
        timeOfOrder: this.timeOfOrder,
        dateOfOrder: this.dateOfOrder,
        id: id,
        products: products
      };
      break;
    }
    i++;
  }
};

//  ************************** READ ALL ORDERS  ************************************

Admin.prototype.readAllOrders = function() {
  console.log(db.orders);
  return db.Orders;
};


module.exports = { Orders };
