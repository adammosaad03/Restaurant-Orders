import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
    default:
      return 0;
  }
}
//      filteredOrders.push( orders.forEach(order => {
// orders.filter(price => price < PriceBracket)
//       }))

// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [];
  orders.forEach((resturant) => {
    const filteredres = resturant.filter(
      (order) => order.price <= getMaxPrice(price)
    );
    filteredOrders.push(filteredres);
  });
  return filteredOrders;
}

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if (orders[index].length > 0) {
      console.log(restaurant);

      orders[index].forEach((order) => {
        console.log(`${order.name}: $${order.price}`);
      });
    }
  });
}
// // Main
// const eligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(eligibleOrders)

