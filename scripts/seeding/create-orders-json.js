"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../../public/data/products");
var weightedCustomers_1 = require("../../public/data/weightedCustomers");
var weightedMonths_1 = require("../../public/data/weightedMonths");
var weightedOrderStatus_1 = require("../../public/data/weightedOrderStatus");
var weightedProducts_1 = require("../../public/data/weightedProducts");
var fs = require("fs");
var TOTAL_ORDERS = 100000;
function generateOrders() {
    var orders = [];
    var _loop_1 = function (i) {
        var amt = 0;
        var randomForProduct = Math.ceil(Math.random() * weightedProducts_1.weightedProducts.length) %
            weightedProducts_1.weightedProducts.length;
        var productId = weightedProducts_1.weightedProducts[randomForProduct];
        var randomForCustomer = Math.ceil(Math.random() * weightedCustomers_1.weightedCustomers.length) %
            weightedCustomers_1.weightedCustomers.length;
        var customerId = weightedCustomers_1.weightedCustomers[randomForCustomer];
        var randomForOrderStatus = Math.ceil(Math.random() * weightedOrderStatus_1.weightedOrderStatus.length) %
            weightedOrderStatus_1.weightedOrderStatus.length;
        var orderStatus = weightedOrderStatus_1.weightedOrderStatus[randomForOrderStatus];
        var price = products_1.products.filter(function (p) { return p.id === productId; })[0].basePrice;
        var percentOfPrice10 = price * 0.1;
        if (i % 2 == 0) {
            price += percentOfPrice10;
            amt = price;
        }
        else {
            price += percentOfPrice10;
            amt = price;
        }
        amt /= 100;
        var randomForOrderMonth = Math.ceil(Math.random() * weightedMonths_1.weightedMonths.length) % weightedMonths_1.weightedMonths.length;
        var orderMonth = weightedMonths_1.weightedMonths[randomForOrderMonth];
        var orderDay = weightedMonths_1.daysInMonths[orderMonth];
        var order = {
            id: crypto.randomUUID(),
            productId: productId,
            customerId: customerId,
            quantity: 1,
            status: orderStatus,
            amount: amt,
            date: new Date(2026, weightedMonths_1.monthPosition[orderMonth], orderDay),
        };
        orders.push(order);
    };
    for (var i = 1; i <= TOTAL_ORDERS; ++i) {
        _loop_1(i);
    }
    fs.writeFileSync("".concat(process.cwd(), "/public/data/orders.json"), JSON.stringify(orders));
    console.log("Orders Generated!");
}
generateOrders();
exports.default = generateOrders;
