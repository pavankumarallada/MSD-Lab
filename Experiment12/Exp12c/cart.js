"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Product class and the calculateTotalPrice function from the product module
var product_1 = require("./product");
// Example usage within the cart module
var item = new product_1.Product("Smartphone", 500);
var quantityOrdered = 3;
var totalPriceOfItem = (0, product_1.calculateTotalPrice)(item, quantityOrdered);
console.log("Total price for ".concat(quantityOrdered, " ").concat(item.name, "(s): ").concat(totalPriceOfItem));
