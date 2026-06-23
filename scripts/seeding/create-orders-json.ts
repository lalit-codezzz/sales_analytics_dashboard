import { products } from "../../public/data/products";
import { weightedCustomers } from "../../public/data/weightedCustomers";
import {
  daysInMonths,
  monthPosition,
  weightedMonths,
} from "../../public/data/weightedMonths";
import { weightedOrderStatus } from "../../public/data/weightedOrderStatus";
import { weightedProducts } from "../../public/data/weightedProducts";
import { Order, OrderStatus } from "../../src/types/Order";

import * as fs from "fs";

const TOTAL_ORDERS = 100_000;

function generateOrders() {
  const orders: Order[] = [];

  for (let i = 1; i <= TOTAL_ORDERS; ++i) {
    let amt: number = 0;

    let randomForProduct =
      Math.ceil(Math.random() * weightedProducts.length) %
      weightedProducts.length;
    let productId = weightedProducts[randomForProduct];

    let randomForCustomer =
      Math.ceil(Math.random() * weightedCustomers.length) %
      weightedCustomers.length;
    let customerId = weightedCustomers[randomForCustomer];

    let randomForOrderStatus =
      Math.ceil(Math.random() * weightedOrderStatus.length) %
      weightedOrderStatus.length;

    let orderStatus = weightedOrderStatus[randomForOrderStatus];

    let price: number = products.filter((p) => p.id === productId)[0].basePrice;
    let percentOfPrice10 = price * 0.1;
    if (i % 2 == 0) {
      price += percentOfPrice10;
      amt = price;
    } else {
      price += percentOfPrice10;
      amt = price;
    }
    amt /= 100;

    let randomForOrderMonth =
      Math.ceil(Math.random() * weightedMonths.length) % weightedMonths.length;
    let orderMonth = weightedMonths[randomForOrderMonth];
    let orderDay = daysInMonths[orderMonth];

    const order: Order = {
      id: crypto.randomUUID(),
      productId,
      customerId,
      quantity: 1,
      status: orderStatus as OrderStatus,
      amount: amt,
      date: new Date(2026, monthPosition[orderMonth], orderDay),
    };
    orders.push(order);
  }

  fs.writeFileSync(
    `${process.cwd()}/public/data/orders.json`,
    JSON.stringify(orders),
  );

  console.log("Orders Generated!");
}

generateOrders();

export default generateOrders;
