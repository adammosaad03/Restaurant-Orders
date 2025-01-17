"use strict";
exports.__esModule = true;
var orders_1 = require("./orders");
// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
        default:
            return 0;
    }
}
//      filteredOrders.push( orders.forEach(order => {
// orders.filter(price => price < PriceBracket)
//       }))
// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders.forEach(function (resturant) {
        var filteredres = resturant.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(filteredres);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    restaurants.forEach(function (restaurant, index) {
        if (orders[index].length > 0) {
            console.log(restaurant);
            orders[index].forEach(function (order) {
                console.log("".concat(order.name, ": $").concat(order.price));
            });
        }
    });
}
// // Main
// const eligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(eligibleOrders)
