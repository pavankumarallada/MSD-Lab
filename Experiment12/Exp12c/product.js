"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
exports.calculateTotalPrice = calculateTotalPrice;
// Define a class for a Product
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
// Function to calculate the total price of a product based on quantity
function calculateTotalPrice(product, quantity) {
    var totalPrice = product.price * quantity;
    return totalPrice;
}
