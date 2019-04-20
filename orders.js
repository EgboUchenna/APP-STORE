const db = require("./database");
const app = require("./app");

//      ***************************     CREATE ORDER   ********************
function Orders(user_id, products) {
  this.user_id = user_id;
  this.products = products;

  var time = new Date();
  this.timeOfOrder = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  var today = new Date();
  this.dateOfOrder = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  for (var i = 1; i >= 0; ) {
    if (!db.Orders[i + ""]) {
      id = i + "";
      db.Orders[id] = {
        user_id: this.user_id,
        timeOfOrder: this.timeOfOrder,
        dateOfOrder: this.dateOfOrder,
        id: id,
        products: this.products
      };
      break;
    }
    i++;
  }
  this.id = id;


}

//  ************************** READ ALL ORDERS  ************************************

Orders.prototype.readAllOrders = function() {
  console.log(db.orders);
  return db.Orders;
}


module.exports = { Orders };
