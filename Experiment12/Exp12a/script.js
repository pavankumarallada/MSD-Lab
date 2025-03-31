var Product = /** @class */ (function () {
    function Product(id) {
        this.productId = id;
    }
    // Method to set the productId
    Product.prototype.setProductId = function (newId) {
        this.productId = newId;
    };
    // Method to get the productId
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    return Product;
}());
// Example usage:
var myProduct = new Product(100);
console.log("Initial Product ID:", myProduct.getProductId()); // Output: Initial Product ID: 100
myProduct.setProductId(2000);
console.log("Updated Product ID:", myProduct.getProductId()); // Output: Updated Product ID: 200
